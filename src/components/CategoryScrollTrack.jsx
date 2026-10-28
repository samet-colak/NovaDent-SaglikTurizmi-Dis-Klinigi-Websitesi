import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Interactive Touch & Drag Scroll Track for Category Pills
 * Directly draggable on mobile / tablet / desktop while also syncing with direct button swipe.
 * No redundant text; clean, single track.
 */
export default function CategoryScrollTrack({ containerRef, currentLang = 'tr', className = '' }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [thumbRatio, setThumbRatio] = useState(0.4);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);

  const checkScroll = useCallback(() => {
    const el = containerRef?.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const hasScroll = maxScroll > 4;
    setCanScroll(hasScroll);

    if (hasScroll) {
      const visibleRatio = Math.max(0.25, Math.min(0.65, el.clientWidth / el.scrollWidth));
      setThumbRatio(visibleRatio);
      const current = Math.abs(el.scrollLeft);
      setScrollProgress(Math.max(0, Math.min(1, current / maxScroll)));
    }
  }, [containerRef]);

  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    checkScroll();
    const timer = setTimeout(checkScroll, 100);

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [containerRef, checkScroll]);

  // Handle pointer drag (touch or mouse) on the scrollbar line
  const handlePointer = (clientX) => {
    const track = trackRef.current;
    const container = containerRef?.current;
    if (!track || !container) return;

    const rect = track.getBoundingClientRect();
    if (rect.width <= 0) return;

    const isRtl = currentLang === 'ar';
    let clickRatio = (clientX - rect.left) / rect.width;
    clickRatio = Math.max(0, Math.min(1, clickRatio));

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;

    const targetRatio = isRtl ? (1 - clickRatio) : clickRatio;
    container.scrollLeft = (isRtl ? -1 : 1) * (targetRatio * maxScroll);
    setScrollProgress(clickRatio);
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    handlePointer(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    handlePointer(e.clientX);
  };

  const onPointerUp = (e) => {
    if (isDragging) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      setIsDragging(false);
    }
  };

  if (!canScroll) return null;

  const thumbWidthPercent = Math.round(thumbRatio * 100);
  const thumbLeftPercent = scrollProgress * (100 - thumbWidthPercent);

  return (
    <div className={`w-full flex items-center justify-center pt-2 pb-1 ${className}`}>
      {/* Interactive touch area: enlarged height for easy finger dragging */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="w-full max-w-[280px] sm:max-w-xs py-2.5 -my-1 flex items-center cursor-pointer select-none touch-none group"
        role="scrollbar"
        aria-label="Kategori Kaydırma Çubuğu"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Track Line */}
        <div className="w-full h-1.5 sm:h-2 bg-slate-200/90 rounded-full relative overflow-hidden shadow-inner group-hover:bg-slate-300 transition-colors">
          {/* Active Thumb (Kaydırılabilir Çizgi) */}
          <div
            className={`absolute top-0 bottom-0 rounded-full bg-brand-600 shadow-xs ${
              isDragging ? 'bg-brand-700 scale-y-125' : 'group-hover:bg-brand-500'
            } transition-all duration-75`}
            style={{
              width: `${thumbWidthPercent}%`,
              left: `${thumbLeftPercent}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
