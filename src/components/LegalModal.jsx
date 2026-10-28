import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, FileText, Cookie } from 'lucide-react';
import { legalData } from '../data/legalData';

export default function LegalModal({ isOpen, onClose, initialTab = 'kvkk', currentLang = 'tr' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentLegal = legalData[currentLang] || legalData.tr;
  const policy = currentLegal[activeTab] || currentLegal.kvkk;

  const tabs = [
    { id: 'kvkk', label: currentLang === 'tr' ? 'KVKK Metni' : currentLang === 'ar' ? 'حماية البيانات' : 'KVKK / GDPR', icon: ShieldCheck },
    { id: 'privacy', label: currentLang === 'tr' ? 'Gizlilik Politikası' : currentLang === 'ar' ? 'الخصوصية' : 'Privacy Policy', icon: Lock },
    { id: 'terms', label: currentLang === 'tr' ? 'Kullanım Şartları' : currentLang === 'ar' ? 'شروط الاستخدام' : 'Terms of Use', icon: FileText },
    { id: 'cookies', label: currentLang === 'tr' ? 'Çerez Politikası' : currentLang === 'ar' ? 'ملفات الكوكيز' : 'Cookie Policy', icon: Cookie },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-md animate-fadeIn text-left rtl:text-right">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-100">
              {policy.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 mt-1.5">
              {policy.title}
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {policy.lastUpdated}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Kapat"
            className="p-2.5 rounded-full bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200/80 px-6 bg-white overflow-x-auto gap-2 py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive 
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          {policy.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-extrabold text-navy-900 text-sm sm:text-base">
                {sec.heading}
              </h4>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          {activeTab === 'cookies' ? (
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem('novadent_cookie_consent_v2');
                window.dispatchEvent(new Event('show-cookie-consent'));
                onClose();
              }}
              className="text-brand-600 hover:text-brand-700 font-bold hover:underline cursor-pointer"
            >
              {currentLang === 'tr' ? '↻ Çerez Tercihlerini Sıfırla' : currentLang === 'ar' ? '↻ إعادة تعيين التفضيلات' : '↻ Reset Cookie Preferences'}
            </button>
          ) : (
            <span>NovaDent Ağız ve Diş Sağlığı Polikliniği</span>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-xs cursor-pointer"
          >
            {currentLang === 'tr' ? 'Kapat' : currentLang === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
