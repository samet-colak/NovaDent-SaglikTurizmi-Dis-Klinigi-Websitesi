import React, { useRef, useState, useEffect } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { reviewsData, clinicInfo } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

export default function Reviews({ currentLang = 'tr' }) {
  const t = uiTranslations[currentLang] || uiTranslations.tr;
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    hasMoved: false,
  });

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  // Desktop Mouse Drag to Scroll Left / Right
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.pointerType !== 'mouse') return; // Mobile touch handles natively

    const el = carouselRef.current;
    if (!el) return;

    dragRef.current = {
      isDown: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      hasMoved: false,
    };
    setIsDragging(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.isDown) return;
    const el = carouselRef.current;
    if (!el) return;

    const deltaX = e.clientX - dragRef.current.startX;
    if (Math.abs(deltaX) > 3) {
      dragRef.current.hasMoved = true;
    }

    el.scrollLeft = dragRef.current.scrollLeft - deltaX * 1.25;
  };

  const onPointerUp = (e) => {
    if (dragRef.current.isDown) {
      dragRef.current.isDown = false;
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollOffset = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollOffset : scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="yorumlar" className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold mb-3 shadow-2xs">
            <GoogleIcon />
            <span>{t.reviews.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Rating Overview Banner & Arrows */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 text-center sm:text-left rtl:sm:text-right">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs">
              <GoogleIcon />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-black text-navy-900">4.9</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{t.reviews.ratingCount}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl hidden md:inline-block">
              {t.reviews.recomRate}
            </span>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2" role="group" aria-label="Yorum Gezinme Butonları">
              <button
                onClick={() => handleScroll('left')}
                aria-label="Önceki Yorumlar"
                className="w-11 h-11 rounded-2xl border border-slate-200 hover:border-brand-500 bg-white hover:bg-brand-50 text-slate-700 hover:text-brand-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                aria-label="Sonraki Yorumlar"
                className="w-11 h-11 rounded-2xl border border-slate-200 hover:border-brand-500 bg-white hover:bg-brand-50 text-slate-700 hover:text-brand-700 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Carousel Wrapper (Mouse Drag & Touch Pan Enabled) */}
        <div
          ref={carouselRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className={`flex gap-5 overflow-x-auto py-4 -mx-4 sm:-mx-6 px-4 sm:px-6 no-scrollbar touch-pan-x cursor-grab ${
            isDragging 
              ? 'cursor-grabbing select-none scroll-auto snap-none' 
              : 'scroll-smooth snap-x snap-mandatory'
          }`}
        >
          {reviewsData.map((rev, idx) => {
            const commentText = rev[currentLang]?.comment || rev.tr.comment;

            return (
              <div
                key={idx}
                className="w-[85vw] sm:w-[360px] md:w-[390px] shrink-0 snap-start bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group text-left rtl:text-right select-none"
              >
                <div>
                  {/* Card Header: Google Badge & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-700">
                      <GoogleIcon />
                      <span>Google Yorumu</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                  </div>

                  {/* Rating Stars & Treatment Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-brand-50 text-brand-700 text-[11px] font-bold">
                      {rev.treatment}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    "{commentText}"
                  </p>
                </div>

                {/* Author footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${rev.avatarColor || 'bg-brand-600'} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs`}>
                      {rev.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-navy-900 leading-tight">{rev.name}</h4>
                      <p className="text-[11px] text-slate-400">{rev.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{t.reviews.verified}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Google Maps Profile */}
        <div className="mt-8 text-center flex flex-col items-center justify-center gap-2.5">
          <a
            href={clinicInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all group cursor-pointer"
          >
            <GoogleIcon />
            <span>
              {currentLang === 'tr' ? "Google Haritalar'da Tüm Yorumları İnceleyin (4.9 ★)" : currentLang === 'ar' ? 'عرض جميع التقييمات على خرائط جوجل (4.9 ★)' : 'View All Reviews on Google Maps (4.9 ★)'}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 transition-colors" />
          </a>
          <span className="text-xs text-slate-500 font-medium">
            {currentLang === 'tr' ? '← Sağa ve sola kaydırarak hasta deneyimlerini inceleyebilirsiniz →' : currentLang === 'ar' ? '← اسحب يميناً ويساراً لقراءة تجارب المرضى →' : '← Scroll horizontally to read patient reviews →'}
          </span>
        </div>

      </div>
    </section>
  );
}
