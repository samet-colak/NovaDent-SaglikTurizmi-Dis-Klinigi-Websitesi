import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  HeartPulse,
  MessageCircle,
  ChevronDown,
  Check
} from 'lucide-react';
import { clinicInfo, doctorsData, servicesData } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

// Google Review Real Patient Avatar Badges (Social Proof from Reviews)
const patientReviewers = [
  { initials: 'MÇ', bg: 'bg-blue-600', name: 'Murat Çelik' },
  { initials: 'AP', bg: 'bg-pink-600', name: 'Ayşe Sena Polat' },
  { initials: 'ED', bg: 'bg-indigo-600', name: 'Emre Can Dağlı' },
  { initials: 'BY', bg: 'bg-emerald-600', name: 'Büşra Yılmaz' },
];

export default function Hero({ onOpenAppointment, onOpenCertificate, currentLang = 'tr' }) {
  const t = uiTranslations[currentLang] || uiTranslations.tr;
  
  // Fast appointment bar states
  const [selectedService, setSelectedService] = useState('general');
  const [selectedDoctor, setSelectedDoctor] = useState('any');

  // Custom Dropdown open states & refs for cross-platform beauty (Windows, macOS, Mobile)
  const [serviceOpen, setServiceOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);
  const serviceDropdownRef = useRef(null);
  const doctorDropdownRef = useRef(null);

  // Close dropdowns on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
      if (doctorDropdownRef.current && !doctorDropdownRef.current.contains(e.target)) {
        setDoctorOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServiceOpen(false);
        setDoctorOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const activeServiceObj = selectedService === 'general' ? null : (servicesData.find((s) => s.id === selectedService) || null);
  const activeDoctorObj = doctorsData.find((d) => d.id === selectedDoctor);

  const handleQuickBook = (e) => {
    e.preventDefault();
    onOpenAppointment({
      serviceId: selectedService,
      doctorId: selectedDoctor
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Background Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-brand-200/30 to-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-300/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Trust Props */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
            
            {/* Top Badge */}
            <button
              onClick={onOpenCertificate}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-brand-200/90 text-brand-800 hover:text-brand-900 hover:border-brand-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.hero.badge}</span>
            </button>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.18] sm:leading-[1.15]">
              {t.hero.title1} <br />
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-600 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
              <span className="sr-only"> - NovaDent Ağız ve Diş Sağlığı Polikliniği İstanbul Maslak Diş Hekimi İmplant Zirkonyum Invisalign</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 text-left rtl:text-right max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/80 border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/80 border border-slate-200/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white/80 border border-slate-200/60 shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">{t.hero.trust3}</span>
              </div>
            </div>

            {/* Desktop CTAs (Hidden on mobile to eliminate repetitive button stack with bottom bar & quick card) */}
            <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenAppointment()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold text-base shadow-xl shadow-brand-600/25 hover:shadow-brand-600/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.bookBtn}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5 text-brand-600" />
                <span>{t.hero.callBtn}</span>
              </a>
            </div>

            {/* Social Proof & Rating Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-200/70">
              <div className="flex -space-x-2.5 overflow-hidden rtl:space-x-reverse shrink-0">
                {patientReviewers.map((patient, i) => (
                  <div
                    key={i}
                    title={patient.name}
                    className={`inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white ${patient.bg} text-white font-extrabold text-xs shadow-xs select-none`}
                  >
                    {patient.initials}
                  </div>
                ))}
              </div>
              <div className="text-left rtl:text-right">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-navy-900">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {t.hero.ratingText}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Fast Booking Card */}
          <div className="lg:col-span-5 relative">
            
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-6 sm:p-8 relative z-10 text-left rtl:text-right">
              
              {/* Header */}
              <div className="flex items-start justify-between pb-5 border-b border-slate-100 mb-6 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight">
                    {t.hero.quickCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {t.hero.quickCard.subtitle}
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0 shadow-xs border border-emerald-100">
                  <MessageCircle className="w-6 h-6 fill-emerald-600 text-emerald-600" />
                </div>
              </div>

              {/* Fast Booking Form */}
              <form onSubmit={handleQuickBook} className="space-y-4">
                {/* 1. Treatment Custom Dropdown */}
                <div className={`relative ${serviceOpen ? 'z-30' : 'z-20'}`} ref={serviceDropdownRef}>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.hero.quickCard.serviceLabel}
                  </label>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setServiceOpen(!serviceOpen);
                      setDoctorOpen(false);
                    }}
                    className={`w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-100/70 border rounded-2xl text-sm font-semibold text-slate-800 focus:outline-none transition-all flex items-center justify-between text-left rtl:text-right shadow-2xs ${
                      serviceOpen ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-white' : 'border-slate-200'
                    }`}
                    aria-haspopup="listbox"
                    aria-expanded={serviceOpen}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">
                        {activeServiceObj 
                          ? (activeServiceObj[currentLang]?.title || activeServiceObj.tr.title) 
                          : (t.hero.quickCard.generalExam || 'Genel Muayene & Kontrol')}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 rtl:ml-0 rtl:mr-2 ${serviceOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {serviceOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-1.5 max-h-64 overflow-y-auto z-30 animate-scaleUp text-left rtl:text-right">
                      {/* Option: General Dental Consultation */}
                      <div
                        onClick={() => {
                          setSelectedService('general');
                          setServiceOpen(false);
                        }}
                        className={`px-3.5 py-2.5 mx-1.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between text-xs sm:text-sm font-semibold ${
                          selectedService === 'general'
                            ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-200/60'
                            : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                        }`}
                        role="option"
                        aria-selected={selectedService === 'general'}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="truncate">{t.hero.quickCard.generalExam || 'Genel Muayene & Kontrol'}</span>
                          <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 font-medium shrink-0">
                            Ön Muayene
                          </span>
                        </div>
                        {selectedService === 'general' && (
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
                        )}
                      </div>

                      {servicesData.map((svc) => {
                        const isSelected = svc.id === selectedService;
                        const svcTitle = svc[currentLang]?.title || svc.tr.title;
                        const svcCat = svc[currentLang]?.categoryLabel || svc.tr.categoryLabel;

                        return (
                          <div
                            key={svc.id}
                            onClick={() => {
                              setSelectedService(svc.id);
                              setServiceOpen(false);
                            }}
                            className={`px-3.5 py-2.5 mx-1.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between text-xs sm:text-sm font-semibold ${
                              isSelected 
                                ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-200/60' 
                                : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                            }`}
                            role="option"
                            aria-selected={isSelected}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="truncate">{svcTitle}</span>
                              {svcCat && (
                                <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 font-medium shrink-0">
                                  {svcCat}
                                </span>
                              )}
                            </div>
                            {isSelected && (
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 2. Doctor Custom Dropdown */}
                <div className={`relative ${doctorOpen ? 'z-30' : 'z-10'}`} ref={doctorDropdownRef}>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.hero.quickCard.doctorLabel}
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      setDoctorOpen(!doctorOpen);
                      setServiceOpen(false);
                    }}
                    className={`w-full px-4 py-3 bg-slate-50 hover:bg-slate-100/70 border rounded-2xl text-sm font-semibold text-slate-800 focus:outline-none transition-all flex items-center justify-between text-left rtl:text-right shadow-2xs ${
                      doctorOpen ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-white' : 'border-slate-200'
                    }`}
                    aria-haspopup="listbox"
                    aria-expanded={doctorOpen}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {activeDoctorObj ? (
                        <>
                          <img
                            src={activeDoctorObj.image}
                            alt={activeDoctorObj[currentLang]?.name || activeDoctorObj.tr.name}
                            className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200 shrink-0"
                          />
                          <div className="truncate flex items-center gap-1.5">
                            <span className="font-bold text-slate-800 truncate">
                              {activeDoctorObj[currentLang]?.name || activeDoctorObj.tr.name}
                            </span>
                            <span className="text-xs text-slate-400 font-medium truncate hidden xs:inline">
                              - {activeDoctorObj[currentLang]?.specialty || activeDoctorObj.tr.specialty}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-7 h-7 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-600 shrink-0 font-bold text-xs">
                            ✓
                          </div>
                          <span className="truncate text-slate-800">
                            {t.hero.quickCard.anyDoctor}
                          </span>
                        </>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 rtl:ml-0 rtl:mr-2 ${doctorOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {doctorOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-1.5 max-h-64 overflow-y-auto z-30 animate-scaleUp text-left rtl:text-right">
                      {/* Option: Any Doctor */}
                      <div
                        onClick={() => {
                          setSelectedDoctor('any');
                          setDoctorOpen(false);
                        }}
                        className={`px-3.5 py-2.5 mx-1.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between text-xs sm:text-sm ${
                          selectedDoctor === 'any'
                            ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-200/60'
                            : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                        }`}
                        role="option"
                        aria-selected={selectedDoctor === 'any'}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 text-xs font-bold">
                            ✓
                          </div>
                          <span>{t.hero.quickCard.anyDoctor}</span>
                        </div>
                        {selectedDoctor === 'any' && (
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
                        )}
                      </div>

                      {/* Doctor items with photos */}
                      {doctorsData.map((doc) => {
                        const isSelected = doc.id === selectedDoctor;
                        const docName = doc[currentLang]?.name || doc.tr.name;
                        const docSpec = doc[currentLang]?.specialty || doc.tr.specialty;

                        return (
                          <div
                            key={doc.id}
                            onClick={() => {
                              setSelectedDoctor(doc.id);
                              setDoctorOpen(false);
                            }}
                            className={`px-3.5 py-2 mx-1.5 rounded-xl cursor-pointer transition-colors flex items-center justify-between text-xs sm:text-sm ${
                              isSelected
                                ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-200/60'
                                : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                            }`}
                            role="option"
                            aria-selected={isSelected}
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <img
                                src={doc.image}
                                alt={docName}
                                className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200 shrink-0"
                              />
                              <div className="truncate">
                                <div className="font-bold text-slate-800 leading-tight truncate">{docName}</div>
                                <div className="text-[11px] text-slate-500 truncate">{docSpec}</div>
                              </div>
                            </div>
                            {isSelected && (
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Submit button -> Direct WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 group mt-4"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{t.hero.quickCard.submitBtn}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Clinic Perks Info */}
              <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">{t.hero.quickCard.avgTime}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">{t.hero.quickCard.freeExam}</span>
                </div>
              </div>
            </div>

            {/* Sub-card Trust Badge (Desktop only) */}
            <div className="hidden sm:flex mt-3.5 items-center justify-center gap-2 text-xs font-semibold text-slate-500 bg-white/80 backdrop-blur-xs py-2 px-4 rounded-xl border border-slate-200/60 shadow-xs max-w-md mx-auto">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.hero.quickCard.sterileBadge}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
