import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Calendar, Clock, Award } from 'lucide-react';
import { uiTranslations } from '../data/translations';

export default function BeforeAfterSlider({ onOpenAppointment, currentLang = 'tr' }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const t = uiTranslations[currentLang] || uiTranslations.tr;

  const currentCase = {
    id: 'hollywood',
    beforeImg: './assets/before-after/hollywood-before.jpg',
    afterImg: './assets/before-after/hollywood-after.jpg',
    serviceId: 'gulus-tasarimi',
    tr: {
      title: 'Estetik Gülüş Tasarımı (Hollywood Smile)',
      badge: 'Gerçek Hasta Değişimi',
      treatmentType: 'Yaprak Porselen Kaplama (Lamine Diş)',
      duration: 'Sadece 5 Gün (Toplam 3 Randevu)',
      result: 'Sararmış dişlerden bembeyaz ve doğal bir gülüşe geçiş',
      desc: 'Dişlerdeki sararma, aşınma ve şekil bozuklukları; diş yapısına neredeyse hiç dokunulmadan uygulanan incecik estetik porselenlerle sadece 5 günde giderildi.',
      ctaBtn: 'Gülüş Tasarımı İçin Randevu Al'
    },
    en: {
      title: 'Aesthetic Smile Design (Hollywood Smile)',
      badge: 'Real Patient Transformation',
      treatmentType: 'Custom Porcelain Veneers (Laminates)',
      duration: 'Just 5 Days (3 Comfortable Sessions)',
      result: 'Shift from dull, yellowed teeth to a bright natural white smile',
      desc: 'Enamel discoloration, uneven spacing, and chipping were corrected with ultra-thin custom porcelain veneers in just 5 days.',
      ctaBtn: 'Book Smile Design Appointment'
    },
    ar: {
      title: 'تصميم الابتسامة التجميلية (ابتسامة هوليوود)',
      badge: 'نتيجة حالة حقيقية',
      treatmentType: 'عدسات الأسنان التجميلية (قشور البورسلين)',
      duration: 'خلال 5 أيام فقط (3 جلسات مريحة)',
      result: 'من أسنان مائلة للاصفرار إلى ابتسامة لؤلؤية طبيعية ناصعة',
      desc: 'تم تصحيح اصفرار الأسنان والمسافات وعدم الانتظام باستخدام قشور البورسلين الرقيقة جداً خلال 5 أيام فقط.',
      ctaBtn: 'حجز موعد لتصميم الابتسامة'
    }
  };

  const caseLoc = currentCase[currentLang] || currentCase.tr;

  // Kademeli görünüm hesaplamaları (kaydırıcı hareket ettikçe yazının yavaşça belirmesi)
  const afterRevealProgress = Math.min(1, Math.max(0, (92 - sliderPosition) / 45));
  const beforeRevealProgress = Math.min(1, Math.max(0, (sliderPosition - 8) / 45));

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="oncesi-sonrasi" className="py-24 bg-white relative overflow-hidden text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-100">
            {t.beforeAfter.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
            {t.beforeAfter.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-200/90 text-navy-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* The Interactive Slider (7 cols) */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={(e) => {
                  setIsDragging(true);
                  handleTouchMove(e);
                }}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
                className="relative h-72 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-200/90 shadow-xl bg-slate-100 touch-none"
              >
                {/* AFTER IMAGE (Bottom Layer: Full width) */}
                <img
                  src={currentCase.afterImg}
                  alt={`${caseLoc.title} - ${t.beforeAfter.afterLabel}`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />
                
                {/* AFTER BADGE (Sade & Zarif Sonrası Etiketi) */}
                <div
                  className="absolute top-3.5 right-3.5 rtl:right-auto rtl:left-3.5 z-10 pointer-events-none select-none"
                  style={{
                    opacity: afterRevealProgress,
                    transform: `translateY(${(1 - afterRevealProgress) * -6}px)`,
                    transition: isDragging ? 'none' : 'opacity 0.2s ease-out, transform 0.2s ease-out',
                  }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-600/85 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20 shadow-md">
                    {t.beforeAfter.afterLabel}
                  </span>
                </div>

                {/* BEFORE IMAGE (Top Layer: Full width, clipped with clipPath to sliderPosition %) */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                  }}
                >
                  <img
                    src={currentCase.beforeImg}
                    alt={`${caseLoc.title} - ${t.beforeAfter.beforeLabel}`}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />
                </div>

                {/* BEFORE BADGE (Sade & Zarif Öncesi Etiketi) */}
                <div
                  className="absolute top-3.5 left-3.5 rtl:left-auto rtl:right-3.5 z-10 pointer-events-none select-none whitespace-nowrap"
                  style={{
                    opacity: beforeRevealProgress,
                    transform: `translateY(${(1 - beforeRevealProgress) * -6}px)`,
                    transition: isDragging ? 'none' : 'opacity 0.2s ease-out, transform 0.2s ease-out',
                  }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20 shadow-md">
                    {t.beforeAfter.beforeLabel}
                  </span>
                </div>

                {/* DRAGGABLE DIVIDER LINE */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] cursor-ew-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Circular Handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-brand-500">
                    <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-brand-600" />
                  </div>
                </div>

                {/* Instruction overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/65 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] text-white font-medium pointer-events-none whitespace-nowrap shadow-md border border-white/20 flex items-center gap-1.5 z-10">
                  <MoveHorizontal className="w-3.5 h-3.5 text-brand-300" />
                  <span>{t.beforeAfter.dragNotice}</span>
                </div>
              </div>
            </div>

            {/* Right Information Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-5 text-left rtl:text-right">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-50 text-brand-700 border border-brand-200 text-[11px] font-bold uppercase tracking-widest mb-1.5">
                  {caseLoc.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-tight">
                  {caseLoc.title}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-xs font-bold">{t.beforeAfter.typeLabel}</strong>
                    <span className="text-slate-600 text-xs font-medium">{caseLoc.treatmentType}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-xs font-bold">{t.beforeAfter.durationLabel}</strong>
                    <span className="text-slate-600 text-xs font-medium">{caseLoc.duration}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-xs font-bold">{t.beforeAfter.resultLabel}</strong>
                    <span className="text-emerald-700 text-xs font-bold">{caseLoc.result}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {caseLoc.desc}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenAppointment({ serviceId: currentCase.serviceId })}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-600 hover:to-cyan-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{caseLoc.ctaBtn}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
