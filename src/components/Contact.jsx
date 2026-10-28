import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Train,
  MessageCircle
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

export default function Contact({ currentLang = 'tr' }) {
  const t = uiTranslations[currentLang] || uiTranslations.tr;

  return (
    <section id="iletisim" className="py-16 sm:py-24 bg-slate-50 relative text-left rtl:text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-100/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-200">
            {t.contact.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3 sm:mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact & Direct Reach Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Phone & Direct WhatsApp Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.contact.phoneTitle}
                  </span>
                  <a 
                    href={`tel:${clinicInfo.phoneRaw}`} 
                    className="block text-xl font-extrabold text-navy-900 hover:text-brand-600 transition-colors mt-0.5"
                  >
                    {t.topBar.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">{t.contact.phoneSub}</p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href="https://wa.me/905551234567?text=Merhaba%20G%C3%BClery%C3%BCz%20Di%C5%9F%20Klini%C4%9Fi%2C%20muayene%20ve%20randevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                      <span>WhatsApp Doğrudan Randevu Hattı</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Transportation Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.contact.addressTitle}
                  </span>
                  <p className="text-sm font-bold text-navy-900 mt-0.5 leading-snug">
                    {t.topBar.address}
                  </p>
                  
                  {/* Metro Notice */}
                  <div className="mt-3 p-3 bg-brand-50/70 rounded-xl border border-brand-100 flex items-center gap-2 text-xs text-brand-900 font-semibold">
                    <Train className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{t.contact.metroGuide}</span>
                  </div>

                  <a 
                    href={clinicInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-brand-600 hover:text-brand-700"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{t.contact.routeBtn}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.contact.hoursTitle}
                  </span>
                  <div className="space-y-1 mt-1 text-xs">
                    <div className="flex justify-between font-bold text-navy-900">
                      <span>{t.contact.weekdays}</span>
                      <span className="text-emerald-600">09:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between text-slate-500 font-medium">
                      <span>{t.contact.sunday}</span>
                      <span className="text-amber-600">{t.contact.sundaySub}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t.contact.emailTitle}
                  </span>
                  <a 
                    href={`mailto:${clinicInfo.email}`} 
                    className="block text-sm font-bold text-navy-900 hover:text-brand-600 transition-colors mt-0.5"
                  >
                    {clinicInfo.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Full-Height Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md h-full min-h-[480px] sm:min-h-[540px] flex flex-col relative group">
              {/* Map Header Location Bar */}
              <div className="p-4 sm:p-5 bg-white border-b border-slate-100 flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-navy-900 leading-tight">
                      NovaDent Ağız ve Diş Sağlığı Polikliniği
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Maslak / İstanbul (İTÜ Ayazağa Metro İstasyonu 3 Dk)
                    </p>
                  </div>
                </div>

                <a
                  href={clinicInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.contact.routeBtn}</span>
                </a>
              </div>

              {/* Map Iframe */}
              <div className="flex-1 w-full relative min-h-[400px]">
                <iframe
                  title="Google Maps"
                  src={clinicInfo.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
