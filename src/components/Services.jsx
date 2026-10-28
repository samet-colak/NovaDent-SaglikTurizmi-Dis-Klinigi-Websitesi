import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  X, 
  Info
} from 'lucide-react';
import { servicesData } from '../data/clinicData';
import { uiTranslations } from '../data/translations';
import CategoryScrollTrack from './CategoryScrollTrack';

export default function Services({ onOpenAppointment, currentLang = 'tr' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const categoriesRef = useRef(null);

  const t = uiTranslations[currentLang] || uiTranslations.tr;

  useEffect(() => {
    if (!selectedService) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  const categories = [
    { id: 'all', label: t.services.categories.all },
    { id: 'estetik', label: t.services.categories.estetik },
    { id: 'cerrahi', label: t.services.categories.cerrahi },
    { id: 'ortodonti', label: t.services.categories.ortodonti },
    { id: 'pedodonti', label: t.services.categories.pedodonti },
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="hizmetlerimiz" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-100/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-200">
            {t.services.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3 sm:mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Category Pills (Touch-friendly scrollable on mobile) */}
        <div className="mb-10 sm:mb-12">
          <div 
            ref={categoriesRef}
            className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={(e) => {
                  setActiveCategory(cat.id);
                  e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }}
                className={`h-11 px-4 sm:px-5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all flex items-center justify-center cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 ring-2 ring-brand-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80 shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Scroll & Drag Track (Çizgi üzerinden sağa sola kaydırma ve butonları kaydırma) */}
          <CategoryScrollTrack containerRef={categoriesRef} currentLang={currentLang} />
        </div>

        {/* Services Grid (3 - 3 - 2 Düzeni: Son 2 kart üstteki 3 kartı tam ortalar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {filteredServices.map((service, idx) => {
            const localized = service[currentLang] || service.tr;

            // 3'lü düzende son satırda 2 kart kalırsa (örn: 8 hizmette son 2 kart), tam ortalanması için:
            const isLastTwoStart = (filteredServices.length % 3 === 2) && (idx === filteredServices.length - 2);
            const isSingleLast = (filteredServices.length % 3 === 1) && (idx === filteredServices.length - 1);

            return (
              <div
                key={service.id}
                className={`col-span-1 md:col-span-1 lg:col-span-2 ${
                  isLastTwoStart ? 'lg:col-start-2' : ''
                } ${
                  isSingleLast ? 'lg:col-start-3' : ''
                } bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 text-left rtl:text-right`}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={`${localized.title} Tedavisi - NovaDent Ağız ve Diş Sağlığı Polikliniği Maslak İstanbul`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badges on image */}
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-brand-800 shadow-sm uppercase tracking-wide">
                      {localized.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-brand-300" />
                      {localized.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {localized.painLevel}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2.5 group-hover:text-brand-600 transition-colors">
                      {localized.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {localized.summary}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {localized.advantages.slice(0, 3).map((adv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex-1 h-11 px-2.5 sm:px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      <Info className="w-4 h-4 text-slate-500 shrink-0" />
                      <span>{t.services.viewDetails}</span>
                    </button>

                    <button
                      onClick={() => onOpenAppointment({ serviceId: service.id })}
                      className="flex-1 h-11 px-2.5 sm:px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{t.services.bookAppointment}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Treatment Deep Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
            {(() => {
              const modalLoc = selectedService[currentLang] || selectedService.tr;

              return (
                <div 
                  className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col text-left rtl:text-right"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header with Image */}
                  <div className="relative h-48 sm:h-56 bg-slate-800">
                    <img 
                      src={selectedService.image} 
                      alt={modalLoc.title} 
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                    
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-4 left-6 right-6 text-white">
                      <span className="px-3 py-1 rounded-full bg-brand-500 text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                        {modalLoc.categoryLabel}
                      </span>
                      <h3 className="text-2xl font-extrabold">{modalLoc.title}</h3>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                        {t.services.modal.about}
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {modalLoc.description}
                      </p>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium">{t.services.modal.duration}</span>
                        <span className="font-bold text-navy-900">{modalLoc.duration}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">{t.services.modal.painLevel}</span>
                        <span className="font-bold text-emerald-600">{modalLoc.painLevel}</span>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-slate-400 block font-medium">{t.services.modal.suitableFor}</span>
                        <span className="font-bold text-navy-900">{modalLoc.suitableFor}</span>
                      </div>
                    </div>

                    {/* Advantages */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
                        {t.services.modal.advantages}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {modalLoc.advantages.map((adv, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-50/50 border border-brand-100/60 text-xs text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                            <span>{adv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {t.services.modal.close}
                    </button>

                    <button
                      onClick={() => {
                        const svcId = selectedService.id;
                        setSelectedService(null);
                        onOpenAppointment({ serviceId: svcId });
                      }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{t.services.modal.bookForThis}</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </section>
  );
}
