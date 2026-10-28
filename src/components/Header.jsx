import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight,
  MessageCircle,
  Sparkles,
  Users,
  Award,
  Smile,
  Images,
  Globe,
  HelpCircle
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

export default function Header({ 
  onOpenAppointment, 
  onOpenCertificate, 
  currentLang = 'tr', 
  onChangeLang 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = uiTranslations[currentLang] || uiTranslations.tr;

  // Track scroll position for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and apply class when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#hizmetlerimiz', icon: Sparkles },
    { name: t.nav.doctors, href: '#hekimlerimiz', icon: Users },
    { name: t.nav.whyUs, href: '#neden-biz', icon: Award },
    { 
      name: t.nav.quiz, 
      href: '#gulus-analizi', 
      icon: Smile, 
      badge: currentLang === 'tr' ? 'Test' : currentLang === 'ar' ? 'اختبار' : 'Quiz' 
    },
    { name: t.nav.beforeAfter, href: '#oncesi-sonrasi', icon: Images },
    { name: t.nav.healthTourism, href: '#saglik-turizmi', icon: Globe },
    { name: t.nav.faq, href: '#sss', icon: HelpCircle },
    { name: t.nav.contact, href: '#iletisim', icon: MapPin },
  ];

  const languages = [
    { code: 'tr', label: 'Türkçe', short: 'TR', flag: '🇹🇷' },
    { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', short: 'العربية', flag: '🇸🇦' }
  ];

  return (
    <header className={`sticky top-0 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'z-50' : 'z-40'}`}>
      {/* Top Banner Bar (Desktop & Tablet only: hidden md:block to save mobile space) */}
      <div className="hidden md:block bg-slate-50 text-slate-600 text-xs py-2 px-4 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Contact & Working Hours */}
          <div className="flex items-center gap-5 text-slate-600">
            <a 
              href={`tel:${clinicInfo.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-brand-600 transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-slate-900 tracking-wide">{t.topBar.phone}</span>
            </a>
            
            <div className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-brand-600" />
              <span>{t.topBar.hours}</span>
            </div>

            <a 
              href={clinicInfo.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-slate-500 hover:text-brand-600 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span className="truncate max-w-xs">{t.topBar.address}</span>
            </a>
          </div>

          {/* Right: Health Tourism Badge & Language selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCertificate}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white hover:bg-brand-50 text-brand-900 transition-all text-[11px] font-semibold border border-slate-200/90 shadow-2xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="truncate max-w-[280px]">{t.topBar.certBadge}</span>
            </button>

            {/* Desktop Language Switcher */}
            <div className="flex items-center bg-slate-200/80 rounded-lg p-0.5 border border-slate-300/60" role="group" aria-label="Dil Seçimi">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onChangeLang(lang.code)}
                  aria-label={lang.label}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                    currentLang === lang.code 
                      ? 'bg-white text-brand-700 shadow-2xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'py-2.5 sm:py-3 shadow-md bg-white/95 backdrop-blur-md border-b border-slate-100' 
          : 'py-3 sm:py-4 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-9 sm:h-12 flex items-center">
              <img 
                src="./assets/logo.svg" 
                alt={clinicInfo.name} 
                className="h-8 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenAppointment()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-semibold text-xs tracking-wide shadow-md shadow-brand-500/20 hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookAppointment}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Modern Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
              aria-label="Menüyü Aç"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-slate-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Full-Screen Mobile Drawer Modal */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[60] flex justify-end">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Drawer Container */}
          <aside 
            className="relative w-full max-w-[340px] xs:max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden z-10 text-left rtl:text-right animate-slideInRight"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil Gezinme Menüsü"
          >
            {/* Top Bar: Logo & Close */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-2"
              >
                <img 
                  src="./assets/logo.svg" 
                  alt={clinicInfo.name} 
                  className="h-8 w-auto object-contain"
                />
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Menüyü Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Center: Language Switcher & Nav Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              
              {/* Language Switcher in Drawer */}
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                  {currentLang === 'tr' ? 'Dil Seçimi' : currentLang === 'ar' ? 'اختر اللغة' : 'Select Language'}
                </div>
                <div className="p-1 bg-slate-100 rounded-2xl flex items-center justify-between gap-1 border border-slate-200/50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => onChangeLang(lang.code)}
                      className={`flex-1 py-2 px-1 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        currentLang === lang.code
                          ? 'bg-white text-brand-700 shadow-sm border border-slate-200/60 font-extrabold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 px-1">
                  {currentLang === 'tr' ? 'Sayfa Menüsü' : currentLang === 'ar' ? 'أقسام الموقع' : 'Navigation'}
                </div>
                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-3 rounded-2xl text-slate-700 hover:text-brand-700 hover:bg-brand-50/70 active:bg-brand-100/60 font-semibold text-sm transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-brand-100/80 text-slate-600 group-hover:text-brand-700 flex items-center justify-center transition-colors shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-slate-800 group-hover:text-brand-900">{link.name}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          {link.badge && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-brand-500 text-white uppercase tracking-wider shadow-2xs">
                              {link.badge}
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180 transition-all shrink-0" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="p-4 pb-6 sm:pb-4 border-t border-slate-100 bg-slate-50/90 space-y-2.5 shrink-0">
              
              {/* WhatsApp Quick CTA */}
              <a
                href={clinicInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 text-white font-extrabold text-sm shadow-md shadow-emerald-600/25 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>WhatsApp Danışma & Randevu</span>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-xs shadow-xs active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                <span>{t.nav.callNow}: {clinicInfo.phone}</span>
              </a>

              {/* Health Tourism License Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCertificate();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 text-[11px] font-medium text-left rtl:text-right transition-colors hover:bg-brand-100/70"
              >
                <div className="flex items-center gap-2 truncate">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">{t.topBar.certBadge}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-brand-600 shrink-0 rtl:rotate-180" />
              </button>

              {/* Working Hours text */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.topBar.hours}</span>
              </div>
            </div>

          </aside>
        </div>
      )}
    </header>
  );
}
