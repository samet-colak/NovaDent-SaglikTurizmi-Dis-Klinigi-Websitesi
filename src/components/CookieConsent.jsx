import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';

export default function CookieConsent({ onOpenPolicy, currentLang = 'tr' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Clear legacy v1 consent so the user can review the new banner
    try {
      localStorage.removeItem('novadent_cookie_consent');
    } catch {
      // ignore
    }

    const saved = localStorage.getItem('novadent_cookie_consent_v2');
    if (!saved) {
      // Delay slightly for smooth non-intrusive appearance
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }

    const handleForceShow = () => setVisible(true);
    window.addEventListener('show-cookie-consent', handleForceShow);
    return () => {
      window.removeEventListener('show-cookie-consent', handleForceShow);
    };
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('novadent_cookie_consent_v2', 'accepted_all');
    // Enable analytics if present
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('novadent_cookie_consent_v2', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  const content = {
    tr: {
      title: 'Çerez ve Hasta Gizliliği',
      desc: 'Hasta mahremiyetinizi korumak ve güvenli bir dijital sağlık deneyimi sunmak için 6698 sayılı KVKK mevzuatına uygun çerezler kullanıyoruz.',
      acceptAll: 'Kabul Et',
      essentialOnly: 'Yalnızca Gerekli',
      details: 'Detaylar'
    },
    en: {
      title: 'Cookie & Patient Privacy',
      desc: 'We use cookies in accordance with medical GDPR & privacy regulations to protect your patient confidentiality and ensure secure browsing.',
      acceptAll: 'Accept All',
      essentialOnly: 'Essential Only',
      details: 'Details'
    },
    ar: {
      title: 'الخصوصية وملفات تعريف الارتباط',
      desc: 'نستخدم ملفات تعريف الارتباط بما يتوافق مع معايير حماية خصوصية المرضى والأنظمة المعتمدة لتقديم تجربة آمنة وموثوقة.',
      acceptAll: 'قبول الكل',
      essentialOnly: 'الضرورية فقط',
      details: 'التفاصيل'
    }
  };

  const t = content[currentLang] || content.tr;

  return (
    <aside
      aria-label="Çerez ve Gizlilik Onayı"
      className="fixed bottom-20 sm:bottom-6 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-[400px] z-50 animate-slideUp text-left rtl:text-right"
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 text-slate-800">
        
        {/* Top Header: Shield Icon, Title, Close Button */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100/80">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
            </div>
            <h4 className="font-extrabold text-xs sm:text-sm text-navy-900 tracking-tight">
              {t.title}
            </h4>
          </div>

          <button
            onClick={handleAcceptEssential}
            aria-label="Kapat"
            className="text-slate-400 hover:text-slate-600 p-1 -mr-1 -mt-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Minimal Description & Policy Link */}
        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mb-3.5">
          {t.desc}{' '}
          <button
            type="button"
            onClick={() => onOpenPolicy('cookies')}
            className="font-bold text-brand-600 hover:text-brand-700 underline underline-offset-2 cursor-pointer inline"
          >
            {t.details}
          </button>
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2 px-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-xs shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{t.acceptAll}</span>
          </button>

          <button
            onClick={handleAcceptEssential}
            className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            <span>{t.essentialOnly}</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
