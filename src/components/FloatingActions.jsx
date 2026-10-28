import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

export default function FloatingActions({ onOpenAppointment, currentLang = 'tr' }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = uiTranslations[currentLang] || uiTranslations.tr;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp and Scroll to top */}
      <div className="fixed bottom-20 sm:bottom-8 right-5 rtl:right-auto rtl:left-5 z-40 flex flex-col items-end rtl:items-start gap-3 pointer-events-auto">
        
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Yukarı Çık"
            className="p-3 rounded-full bg-white text-slate-700 shadow-xl border border-slate-200/80 hover:bg-slate-50 transition-all hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Button (Desktop & Tablet only - Mobile uses bottom action bar) */}
        <div className="hidden sm:flex relative group items-center">
          {/* Tooltip */}
          <div className="hidden sm:block absolute right-full rtl:right-auto rtl:left-full mr-3.5 rtl:mr-0 rtl:ml-3.5 bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {t.floating.tooltip}
          </div>

          <a
            href={clinicInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300"
          >
            <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
            <MessageCircle className="w-7 h-7 fill-white" />
          </a>
        </div>
      </div>

      {/* Mobile Bottom Fixed Action Bar */}
      <div className="mobile-bottom-bar sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 flex items-center gap-2 shadow-2xl transition-all duration-200">
        <a
          href={`tel:${clinicInfo.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Phone className="w-4 h-4 text-brand-600" />
          <span>{t.floating.call}</span>
        </a>

        <button
          onClick={() => onOpenAppointment()}
          className="flex-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>{t.floating.book}</span>
        </button>

        <a
          href={clinicInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-emerald-500 text-white shadow-xs flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
        </a>
      </div>
    </>
  );
}
