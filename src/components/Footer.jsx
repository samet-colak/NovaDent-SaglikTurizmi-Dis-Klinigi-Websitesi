import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  ArrowUp,
  MessageCircle
} from 'lucide-react';
import { clinicInfo, servicesData, doctorsData } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

export default function Footer({ onOpenCertificate, onOpenAppointment, onOpenLegal, currentLang = 'tr' }) {
  const t = uiTranslations[currentLang] || uiTranslations.tr;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-14 sm:pt-16 pb-24 sm:pb-12 border-t border-slate-800 text-left rtl:text-right relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 sm:pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio & Certificate (Tablet: Col 1, Desktop: 4 cols) */}
          <div className="md:col-span-1 lg:col-span-4 space-y-5">
            <div className="flex items-center justify-between">
              <div className="bg-white px-3.5 py-2 rounded-2xl inline-flex items-center shadow-md">
                <img 
                  src="./assets/logo.svg" 
                  alt={clinicInfo.name} 
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>

              {/* Mobile quick back to top */}
              <button
                onClick={scrollToTop}
                className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-xs text-slate-300 transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5 text-brand-300" />
                <span className="text-[11px] font-semibold">
                  {currentLang === 'tr' ? 'Yukarı' : currentLang === 'ar' ? 'للأعلى' : 'Top'}
                </span>
              </button>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            {/* Health Tourism License Pill */}
            <button
              onClick={onOpenCertificate}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-emerald-500/30 text-xs text-brand-300 transition-all text-left rtl:text-right w-full group shadow-sm cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider">
                  {currentLang === 'tr' ? 'T.C. Sağlık Bakanlığı Onaylı' : currentLang === 'ar' ? 'معتمد من وزارة الصحة التركية' : 'Ministry of Health Authorized'}
                </div>
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {t.footer.certPill}
                </div>
              </div>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={clinicInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 active:bg-white/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={clinicInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 active:bg-white/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={clinicInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 active:bg-emerald-500/30 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Contact & Direct Actions (Tablet: Col 2, Desktop: 3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              {/* Direct Tap Phone Card */}
              <a 
                href={`tel:${clinicInfo.phoneRaw}`} 
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    {currentLang === 'tr' ? '7/24 Randevu & Çağrı' : currentLang === 'ar' ? 'الاتصال المباشر' : 'Direct Call'}
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-brand-300 transition-colors">
                    {t.topBar.phone}
                  </div>
                </div>
              </a>

              {/* Direct Tap Map Card */}
              <a 
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-colors group text-left rtl:text-right"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-300 leading-snug group-hover:text-white transition-colors">
                    {t.topBar.address}
                  </div>
                  <div className="text-[10px] text-brand-300/80 mt-0.5 font-medium">
                    {clinicInfo.directionsSummary}
                  </div>
                </div>
              </a>

              {/* Hours Info */}
              <div className="flex items-center gap-3 p-2.5 px-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{t.topBar.hours}</span>
              </div>
            </div>

            {/* Primary Booking Button */}
            <button
              onClick={() => onOpenAppointment()}
              className="w-full h-11 sm:h-12 rounded-xl bg-brand-600 hover:bg-brand-500 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.footer.bookBtn}</span>
            </button>
          </div>

          {/* Quick Nav: Services & Doctors (Mobile: 2-column side-by-side, Tablet: 2 cols spanning full width, Desktop: 5 cols) */}
          <div className="md:col-span-2 lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8 pt-4 md:pt-0">
            
            {/* Col 3: Services Links */}
            <div className="space-y-3.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                {t.footer.servicesTitle}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {servicesData.slice(0, 6).map((svc) => (
                  <li key={svc.id}>
                    <a 
                      href="#hizmetlerimiz" 
                      className="hover:text-brand-300 transition-colors flex items-center justify-between group py-1"
                    >
                      <span className="truncate pr-1 group-hover:translate-x-0.5 transition-transform">
                        {svc[currentLang]?.title || svc.tr.title}
                      </span>
                      <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-brand-300 transition-colors rtl:rotate-90 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Doctors & Quick Links */}
            <div className="space-y-3.5">
              <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                {t.footer.doctorsTitle}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {doctorsData.map((doc) => (
                  <li key={doc.id}>
                    <a 
                      href="#hekimlerimiz" 
                      className="hover:text-brand-300 transition-colors block py-1 truncate group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">
                        {doc[currentLang]?.name || doc.tr.name}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-white/5">
                  <a 
                    href="#saglik-turizmi" 
                    className="text-brand-400 hover:text-brand-300 font-semibold block py-1 text-xs"
                  >
                    {t.nav.healthTourism}
                  </a>
                </li>
                <li>
                  <a 
                    href="#sss" 
                    className="hover:text-brand-300 transition-colors block py-1 text-xs"
                  >
                    {t.nav.faq}
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Legal Links Bar */}
        <div className="pt-8 pb-4 flex flex-wrap items-center justify-center sm:justify-between gap-y-3 gap-x-6 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2">
            <button
              onClick={() => onOpenLegal('kvkk')}
              className="hover:text-brand-300 transition-colors cursor-pointer"
            >
              {currentLang === 'tr' ? 'KVKK Metni' : currentLang === 'ar' ? 'حماية البيانات' : 'KVKK & GDPR'}
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-brand-300 transition-colors cursor-pointer"
            >
              {currentLang === 'tr' ? 'Gizlilik Politikası' : currentLang === 'ar' ? 'الخصوصية' : 'Privacy Policy'}
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-brand-300 transition-colors cursor-pointer"
            >
              {currentLang === 'tr' ? 'Kullanım Şartları' : currentLang === 'ar' ? 'الشروط' : 'Terms of Use'}
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-brand-300 transition-colors cursor-pointer"
            >
              {currentLang === 'tr' ? 'Çerez Politikası' : currentLang === 'ar' ? 'الكوكيز' : 'Cookie Policy'}
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              onClick={onOpenCertificate}
              className="hover:text-brand-300 transition-colors cursor-pointer text-brand-400 font-semibold"
            >
              {currentLang === 'tr' ? 'Sağlık Bakanlığı Yetki Belgesi' : currentLang === 'ar' ? 'ترخيص وزارة الصحة' : 'Health Ministry License'}
            </button>
          </div>

          {/* Desktop Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-brand-300" />
            <span>{currentLang === 'tr' ? 'Yukarı Çık' : currentLang === 'ar' ? 'للأعلى' : 'Back to Top'}</span>
          </button>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-4 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {clinicInfo.name}. {t.footer.copyright}
          </div>
          <div className="text-[11px] text-slate-400 text-center sm:text-right rtl:sm:text-left max-w-xl leading-relaxed">
            {t.footer.disclaimer}
          </div>
        </div>

      </div>
    </footer>
  );
}
