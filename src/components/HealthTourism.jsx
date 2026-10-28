import React from 'react';
import { 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  ExternalLink,
  Award,
  Stethoscope,
  Clock
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

export default function HealthTourism({ onOpenCertificate, currentLang = 'tr' }) {
  const t = uiTranslations[currentLang] || uiTranslations.tr;

  const featureIcons = [ShieldCheck, Stethoscope, Clock, Award];

  return (
    <section id="saglik-turizmi" className="py-24 bg-gradient-to-b from-brand-50/40 via-white to-slate-50 text-navy-900 relative overflow-hidden border-t border-slate-100">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.healthTourism.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            {t.healthTourism.title} <br />
            <span className="bg-gradient-to-r from-brand-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              {t.healthTourism.titleHighlight}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.healthTourism.subtitle}
          </p>
        </div>

        {/* Certificate Card Showcase */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 mb-16 shadow-xl text-left rtl:text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Certificate Preview Image */}
            <div className="lg:col-span-5 relative group cursor-pointer" onClick={onOpenCertificate}>
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-50">
                <img
                  src="./assets/saglik-turizmi.jpg"
                  alt="T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi"
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-lg flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    {t.healthTourism.btnInspect}
                  </span>
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-lg bg-emerald-100/90 text-emerald-800 text-xs font-bold border border-emerald-200">
                {t.healthTourism.officialBadge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                {t.healthTourism.certTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.healthTourism.certDesc}
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{t.healthTourism.certNumLabel}</span>
                  <span className="font-mono font-bold text-emerald-700">{clinicInfo.healthTourismCert.number}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{t.healthTourism.certOrgLabel}</span>
                  <span className="font-bold text-navy-900">{t.healthTourism.certOrgVal}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenCertificate}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all shadow-xs border border-slate-200"
                >
                  {t.healthTourism.btnInspect}
                </button>
                <a
                  href={`https://wa.me/905551234567?text=${encodeURIComponent('Hello NovaDent Clinic, I would like to get information regarding international dental treatments.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t.healthTourism.btnWhatsapp}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.healthTourism.features.map((feat, idx) => {
            const Icon = featureIcons[idx % featureIcons.length];
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 hover:shadow-lg hover:border-brand-300 transition-all duration-300 flex flex-col justify-between text-left rtl:text-right shadow-2xs"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 w-fit mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="text-base font-bold text-navy-900 mb-2">
                    {feat.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.healthTourism.officialBadge}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
