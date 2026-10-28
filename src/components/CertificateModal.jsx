import React, { useEffect } from 'react';
import { X, ShieldCheck, Download } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

export default function CertificateModal({ isOpen, onClose, currentLang = 'tr' }) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const t = uiTranslations[currentLang] || uiTranslations.tr;
  const m = t.modalCert;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn text-left rtl:text-right"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-brand-700 to-brand-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 text-brand-100" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">{m.title}</h3>
              <p className="text-xs text-brand-100">{m.sub}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div>
              <span className="font-bold text-brand-900 block">{m.certLabel}</span>
              <span className="text-slate-600 text-xs">{m.certSub}</span>
            </div>
            <a 
              href="./assets/saglik-turizmi.jpg" 
              download="NovaDent-Saglik-Turizmi-Yetki-Belgesi.jpg"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              {m.downloadBtn}
            </a>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
            <img 
              src="./assets/saglik-turizmi.jpg" 
              alt="T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi" 
              className="w-full h-auto object-contain max-h-[60vh] mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          <p className="text-xs text-slate-500 text-center leading-relaxed">
            {m.legalNotice}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 rounded-xl transition-colors"
          >
            {m.close}
          </button>
        </div>
      </div>
    </div>
  );
}
