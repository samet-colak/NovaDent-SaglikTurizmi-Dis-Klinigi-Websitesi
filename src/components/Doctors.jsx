import React from 'react';
import { 
  GraduationCap, 
  Calendar 
} from 'lucide-react';
import { doctorsData, assistantStaff } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

export default function Doctors({ onOpenAppointment, currentLang = 'tr' }) {
  const t = uiTranslations[currentLang] || uiTranslations.tr;

  return (
    <section id="hekimlerimiz" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-100">
            {t.doctors.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3 sm:mb-4">
            {t.doctors.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.doctors.subtitle}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-md sm:max-w-none mx-auto sm:mx-0">
          {doctorsData.map((doctor) => {
            const docLoc = doctor[currentLang] || doctor.tr;

            return (
              <div
                key={doctor.id}
                className="bg-slate-50 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/70 hover:border-brand-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-left rtl:text-right"
              >
                {/* Doctor Photo - Mobile & Tablet Full Portrait Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={doctor.image}
                    alt={`${docLoc.name} - ${docLoc.specialty} | NovaDent Diş Kliniği Maslak`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />
                  
                  {/* Floating Doctor Name & Specialty */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-brand-300 block mb-0.5">
                      {docLoc.specialty}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                      {docLoc.name}
                    </h3>
                  </div>

                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-sm">
                    {doctor.experienceYears} {t.doctors.experienceYear}
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {docLoc.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-brand-100/70 text-brand-800 text-[11px] font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Education */}
                    <div className="flex items-start gap-2 text-xs text-slate-600">
                      <GraduationCap className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{docLoc.education}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {docLoc.bio}
                    </p>
                  </div>

                  {/* Appointment Button */}
                  <div className="pt-5 mt-5 border-t border-slate-200/60">
                    <button
                      onClick={() => onOpenAppointment({ doctorId: doctor.id })}
                      className="w-full h-11 py-2.5 px-4 rounded-xl bg-white group-hover:bg-brand-600 text-slate-800 group-hover:text-white border border-slate-200 group-hover:border-brand-600 font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-brand-600 group-hover:text-white transition-colors shrink-0" />
                      <span>{t.doctors.bookWithDoc}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Assistant & Clinical Support Team */}
        <div className="mt-20 pt-12 border-t border-slate-100 text-center">
          <div className="max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-navy-900 mb-1">
              {t.doctors.assistantTitle}
            </h3>
            <p className="text-xs text-slate-500">
              {t.doctors.assistantSub}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {assistantStaff.map((staff, i) => {
              const staffLoc = staff[currentLang] || staff.tr;
              return (
                <div 
                  key={i} 
                  className="bg-slate-50 rounded-2xl p-4 sm:p-5 text-center border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3">
                    <img
                      src={staff.image}
                      alt={staffLoc.name}
                      className="w-full h-full rounded-full object-cover object-top border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-brand-500/20 pointer-events-none" />
                  </div>
                  <div className="font-bold text-sm text-navy-900 group-hover:text-brand-600 transition-colors">{staffLoc.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">{staffLoc.role}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
