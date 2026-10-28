import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  MessageCircle, 
  Calendar,
  CheckCircle2,
  Clock,
  HeartPulse,
  Award,
  Stethoscope,
  Smile,
  ShieldCheck,
  Zap,
  EyeOff,
  Activity,
  FileText
} from 'lucide-react';
import { quizContent } from '../data/quizData';
import { doctorsData, servicesData } from '../data/clinicData';

export default function SmileAssessmentQuiz({ onOpenAppointment, currentLang = 'tr' }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedConcern, setSelectedConcern] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const t = quizContent[currentLang] || quizContent.tr;

  const handleSelectConcern = (concern) => {
    setSelectedConcern(concern);
    setCurrentStep(2);
  };

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    setCurrentStep(3);
  };

  const handleSelectStatus = (status) => {
    setSelectedStatus(status);
    setCurrentStep(4);
  };

  const resetQuiz = () => {
    setSelectedConcern(null);
    setSelectedGoal(null);
    setSelectedStatus(null);
    setCurrentStep(1);
  };

  // Determine which plan to show based on concern
  const planKey = selectedConcern?.recKey || 'implant';
  const plan = t.plans[planKey] || t.plans.implant;

  // Find corresponding doctor photo
  const assignedDoctor = doctorsData.find(d => d.id === plan.doctorId) || doctorsData[0];
  const assignedDoctorLocalized = assignedDoctor[currentLang] || assignedDoctor.tr;

  // Find corresponding service
  const assignedService = servicesData.find(s => s.id === plan.serviceId) || servicesData[0];
  const assignedServiceLocalized = assignedService[currentLang] || assignedService.tr;

  // Generate WhatsApp Message
  const generateWhatsAppMessage = () => {
    let msg = '';
    if (currentLang === 'en') {
      msg = `Hello NovaDent Dental Clinic, I completed the Smile Assessment on your website:\n\n` +
            `*Recommended Protocol:* ${plan.title}\n` +
            `*Chief Concern:* ${selectedConcern?.title}\n` +
            `*Priority:* ${selectedGoal?.title}\n` +
            `*Assigned Specialist:* ${assignedDoctorLocalized.name}\n\n` +
            `Could you please provide detailed information and schedule an appointment?`;
    } else if (currentLang === 'ar') {
      msg = `مرحباً عيادة نوفادنت لطب الأسنان، أكملت استبيان تشخيص الابتسامة على موقعكم:\n\n` +
            `*البروتوكول المقترح:* ${plan.title}\n` +
            `*الشكوى:* ${selectedConcern?.title}\n` +
            `*الأولوية:* ${selectedGoal?.title}\n` +
            `*الطبيب الاستشاري:* ${assignedDoctorLocalized.name}\n\n` +
            `أود الحصول على معلومات تفصيلية وموعد للمعاينة.`;
    } else {
      msg = `Merhaba NovaDent Diş Kliniği, web sitenizdeki Klinik Teşhis ve Gülüş Analizini tamamladım:\n\n` +
            `*Önerilen Tedavi:* ${plan.title}\n` +
            `*Şikayetim:* ${selectedConcern?.title}\n` +
            `*Beklentim:* ${selectedGoal?.title}\n` +
            `*İlgili Hekim:* ${assignedDoctorLocalized.name}\n\n` +
            `Bu tedavi planı için detaylı bilgi ve muayene randevusu alabilir miyim?`;
    }
    return `https://wa.me/905551234567?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="gulus-analizi" className="py-24 bg-gradient-to-b from-white via-brand-50/50 to-white relative overflow-hidden text-left rtl:text-right">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100/80 text-brand-900 text-xs font-bold mb-3.5 border border-brand-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-brand-600 animate-pulse" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Quiz Master Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 relative">
          
          {/* Stepper Progress Bar */}
          <div className="mb-8 pb-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 block">
                {currentStep === 1 && t.step1Tag}
                {currentStep === 2 && t.step2Tag}
                {currentStep === 3 && t.step3Tag}
                {currentStep === 4 && t.resultHeader.badge}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentStep <= 3 ? `Adım ${currentStep} / 3` : 'Sonuç'}
              </span>
            </div>

            {/* Stepper Bullets */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center gap-2">
                  <div
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentStep === stepNum
                        ? 'w-10 bg-brand-600 shadow-sm'
                        : currentStep > stepNum
                        ? 'w-4 bg-emerald-500'
                        : 'w-4 bg-slate-200'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* STEP 1: CONCERN */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-1">
                  {t.step1Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {t.step1Sub}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {t.concerns.map((concern) => (
                  <button
                    key={concern.id}
                    onClick={() => handleSelectConcern(concern)}
                    className="p-4 sm:p-4.5 rounded-2xl border border-slate-200/90 hover:border-brand-500 hover:bg-brand-50/40 text-left rtl:text-right transition-all duration-200 group flex items-start justify-between shadow-xs hover:shadow-md"
                  >
                    <div className="space-y-1 pr-2 rtl:pr-0 rtl:pl-2">
                      <span className="px-2 py-0.5 rounded-md bg-brand-100/70 text-brand-800 text-[10px] font-bold uppercase tracking-wider inline-block">
                        {concern.tag}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-brand-700 transition-colors leading-snug">
                        {concern.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {concern.desc}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-slate-400 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: GOALS / LIFESTYLE */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-1">
                  {t.step2Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {t.step2Sub}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {t.goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => handleSelectGoal(goal)}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 hover:border-brand-500 hover:bg-brand-50/40 text-left rtl:text-right transition-all duration-200 group flex items-start justify-between shadow-xs hover:shadow-md"
                  >
                    <div className="space-y-1.5 pr-2 rtl:pr-0 rtl:pl-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-100/80 text-emerald-800 text-[10px] font-bold uppercase tracking-wider inline-block">
                        {goal.badge}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-brand-700 transition-colors leading-snug">
                        {goal.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {goal.desc}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-slate-400 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  <span>{t.backBtn}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ORAL STATUS & X-RAY */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-1">
                  {t.step3Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {t.step3Sub}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {t.statusList.map((status) => (
                  <button
                    key={status.id}
                    onClick={() => handleSelectStatus(status)}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 hover:border-brand-500 hover:bg-brand-50/40 text-left rtl:text-right transition-all duration-200 group flex items-start justify-between shadow-xs hover:shadow-md"
                  >
                    <div className="space-y-1.5 pr-2 rtl:pr-0 rtl:pl-2">
                      <h4 className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-brand-700 transition-colors leading-snug">
                        {status.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {status.desc}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-slate-400 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  <span>{t.backBtn}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: DETAILED CLINICAL REPORT & ROADMAP */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Report Header Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-brand-50/50 border-2 border-emerald-500/20 text-navy-900 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-brand-200/20 to-transparent pointer-events-none" />
                
                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.resultHeader.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    {plan.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {t.resultHeader.summaryPre} <strong className="text-navy-900">"{selectedConcern?.title}"</strong> {t.resultHeader.summaryMid} <strong className="text-navy-900">"{selectedGoal?.title}"</strong> {t.resultHeader.summaryPost}
                  </p>
                </div>
              </div>

              {/* 4 Pillars of Treatment Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                    {t.resultLabels.primaryTreatment}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-navy-900">
                    {plan.primary}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                    {t.resultLabels.secondaryTreatment}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-navy-900">
                    {plan.secondary}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                    {t.resultLabels.estimatedDuration}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-brand-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 shrink-0 text-brand-600" />
                    <span>{plan.duration}</span>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                    {t.resultLabels.comfortIndex}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{plan.comfort}</span>
                  </p>
                </div>
              </div>

              {/* 3-Step Procedure Roadmap */}
              <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80">
                <h4 className="text-base font-extrabold text-navy-900 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand-600" />
                  <span>{t.resultLabels.roadmapTitle}</span>
                </h4>

                <div className="space-y-3">
                  {plan.steps.map((stepDesc, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {stepDesc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctor Clinical Advice & Assigned Specialist */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Clinical Advice Note (7 cols) */}
                <div className="lg:col-span-7 p-6 rounded-3xl bg-amber-50/60 border border-amber-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
                      <Stethoscope className="w-4 h-4 text-amber-700" />
                      <span>{t.resultLabels.clinicalAdviceTitle}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      "{plan.advice}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center gap-2 text-xs text-amber-900 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>T.C. Sağlık Bakanlığı Onaylı Steril Klinik Standartları</span>
                  </div>
                </div>

                {/* Assigned Doctor Card (5 cols) */}
                <div className="lg:col-span-5 p-5 rounded-3xl bg-white border border-slate-200 shadow-2xs flex items-center gap-4">
                  <img
                    src={assignedDoctor.image}
                    alt={assignedDoctorLocalized.name}
                    className="w-20 h-24 rounded-2xl object-cover object-top shrink-0 shadow-md"
                  />
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider block">
                      {t.resultLabels.recommendedDoctor}
                    </span>
                    <h5 className="text-base font-extrabold text-navy-900">
                      {assignedDoctorLocalized.name}
                    </h5>
                    <p className="text-xs text-slate-500 font-medium">
                      {assignedDoctorLocalized.specialty}
                    </p>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-brand-100 text-brand-800 text-[10px] font-bold mt-1">
                      {assignedDoctor.experienceYears} Yıl Klinik Deneyim
                    </span>
                  </div>
                </div>

              </div>

              {/* Final Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{t.resultLabels.whatsappBtn}</span>
                </a>

                <button
                  onClick={() => onOpenAppointment({ 
                    serviceId: plan.serviceId, 
                    doctorId: plan.doctorId 
                  })}
                  className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t.resultLabels.bookBtn}</span>
                </button>
              </div>

              {/* Reset Quiz Button */}
              <div className="text-center pt-2">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-bold transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.restartBtn}</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
