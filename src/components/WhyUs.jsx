import React from 'react';
import { 
  Users, 
  Smile, 
  Cpu, 
  ShieldCheck, 
  Award, 
  CheckCircle 
} from 'lucide-react';
import { uiTranslations } from '../data/translations';

export default function WhyUs({ onOpenCertificate, currentLang = 'tr' }) {
  const t = uiTranslations[currentLang] || uiTranslations.tr;

  const pillarIcons = [Users, Award, Cpu, Smile];

  return (
    <section id="neden-biz" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-20 -mt-6 sm:-mt-16 relative z-20">
          {t.whyUs.stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-4 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:border-brand-200 hover:-translate-y-1 transition-all"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent mb-1 sm:mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-navy-900 mb-0.5">{stat.label}</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100 inline-block mb-3">
            {t.whyUs.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3 sm:mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={idx}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-100 hover:border-brand-200/80 shadow-xs hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 flex flex-col justify-between text-left rtl:text-right"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-brand-500/10 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-white group-hover:bg-brand-50 group-hover:text-brand-700 px-2.5 py-1 rounded-lg border border-slate-200/60 transition-colors">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2.5 group-hover:text-brand-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>{t.whyUs.pillars[0].tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Health Ministry Certificate Highlight Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-brand-50 via-white to-emerald-50/70 p-6 sm:p-8 text-navy-900 border-2 border-brand-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden text-left rtl:text-right">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-brand-200/30 to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-brand-100/80 text-brand-700 shrink-0 border border-brand-200 shadow-2xs">
              <ShieldCheck className="w-8 h-8 text-brand-600" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100/90 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1 border border-emerald-200">
                {t.whyUs.certBanner.badge}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-navy-900">{t.whyUs.certBanner.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                {t.whyUs.certBanner.desc}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCertificate}
            className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md"
          >
            {t.whyUs.certBanner.btn}
          </button>
        </div>

      </div>
    </section>
  );
}
