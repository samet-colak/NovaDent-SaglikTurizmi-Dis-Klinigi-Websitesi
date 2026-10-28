import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  MessageCircle,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { clinicInfo, doctorsData, servicesData } from '../data/clinicData';
import { uiTranslations } from '../data/translations';

export default function AppointmentModal({ isOpen, onClose, initialData = {}, currentLang = 'tr' }) {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [appointmentCode, setAppointmentCode] = useState('');

  const t = uiTranslations[currentLang] || uiTranslations.tr;
  const m = t.modalAppointment;

  // Form State
  const [formData, setFormData] = useState({
    serviceId: 'implant',
    doctorId: 'any',
    date: '',
    timeSlot: '11:00',
    fullName: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    if (initialData.serviceId) {
      setFormData(prev => ({ ...prev, serviceId: initialData.serviceId }));
    }
    if (initialData.doctorId) {
      setFormData(prev => ({ ...prev, doctorId: initialData.doctorId }));
    }
    if (initialData.date) {
      setFormData(prev => ({ ...prev, date: initialData.date }));
    }
  }, [initialData]);

  // Set default date to tomorrow if not set
  useEffect(() => {
    if (!formData.date) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setFormData(prev => ({ ...prev, date: tomorrow.toISOString().split('T')[0] }));
    }
  }, []);

  if (!isOpen) return null;

  const timeSlots = [
    '09:30', '10:30', '11:30', '13:30', '14:30', '15:30', '16:30', '17:30'
  ];

  const selectedServiceObj = servicesData.find(s => s.id === formData.serviceId) || servicesData[0];
  const selectedDoctorObj = doctorsData.find(d => d.id === formData.doctorId);

  const selectedServiceTitle = selectedServiceObj ? (selectedServiceObj[currentLang]?.title || selectedServiceObj.tr.title) : '';
  const selectedDoctorName = selectedDoctorObj ? (selectedDoctorObj[currentLang]?.name || selectedDoctorObj.tr.name) : m.anyDoctor;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = 'GLR-' + Math.floor(100000 + Math.random() * 900000);
    setAppointmentCode(code);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const handleWhatsAppConfirm = () => {
    let msg = '';
    if (currentLang === 'en') {
      msg = `Hello NovaDent Dental Clinic, I created an online appointment request:\n\n` +
            `🏷️ Code: ${appointmentCode}\n` +
            `👤 Patient: ${formData.fullName}\n` +
            `📞 Phone: ${formData.phone}\n` +
            `🦷 Treatment: ${selectedServiceTitle}\n` +
            `👨‍⚕️ Specialist: ${selectedDoctorName}\n` +
            `📅 Date & Time: ${formData.date} - ${formData.timeSlot}\n` +
            (formData.notes ? `📝 Note: ${formData.notes}\n` : '') +
            `\nCould you please confirm my appointment?`;
    } else if (currentLang === 'ar') {
      msg = `مرحباً عيادة نوفادنت لطب الأسنان، قمت بإنشاء طلب حجز موعد إلكتروني:\n\n` +
            `🏷️ رقم المرجع: ${appointmentCode}\n` +
            `👤 المريض: ${formData.fullName}\n` +
            `📞 الهاتف: ${formData.phone}\n` +
            `🦷 العلاج: ${selectedServiceTitle}\n` +
            `👨‍⚕️ الطبيب: ${selectedDoctorName}\n` +
            `📅 التاريخ والوقت: ${formData.date} - ${formData.timeSlot}\n` +
            (formData.notes ? `📝 ملاحظة: ${formData.notes}\n` : '') +
            `\nهل يمكنكم تأكيد الموعد لطفاً؟`;
    } else {
      msg = `Merhaba NovaDent Diş Kliniği, web sitenizden online randevu talebi oluşturdum:\n\n` +
            `🏷️ Randevu No: ${appointmentCode}\n` +
            `👤 Hasta: ${formData.fullName}\n` +
            `📞 Telefon: ${formData.phone}\n` +
            `🦷 Tedavi: ${selectedServiceTitle}\n` +
            `👨‍⚕️ Hekim: ${selectedDoctorName}\n` +
            `📅 Tarih & Saat: ${formData.date} - ${formData.timeSlot}\n` +
            (formData.notes ? `📝 Not: ${formData.notes}\n` : '') +
            `\nRandevumu onaylayabilir misiniz?`;
    }
    window.open(`https://wa.me/905551234567?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleReset = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn text-left rtl:text-right">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl">
              <Calendar className="w-5 h-5 text-brand-100" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg leading-tight">{m.title}</h3>
              <p className="text-xs text-brand-100">{m.sub}</p>
            </div>
          </div>
          <button 
            onClick={handleReset}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          
          {/* SUCCESS VIEW */}
          {isSuccess ? (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {m.successBadge}
                </span>
                <h4 className="text-2xl font-extrabold text-navy-900 mt-1">
                  {m.successTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-2">
                  {m.successSub}
                </p>
              </div>

              {/* Summary Voucher Card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left rtl:text-right text-xs sm:text-sm space-y-2.5 max-w-lg mx-auto shadow-inner">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">{m.refLabel}</span>
                  <span className="font-mono font-bold text-brand-700">{appointmentCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{m.patientLabel}</span>
                  <span className="font-bold text-slate-800">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{m.treatmentLabel}</span>
                  <span className="font-bold text-slate-800">{selectedServiceTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{m.docLabel}</span>
                  <span className="font-bold text-slate-800">{selectedDoctorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{m.dateTimeLabel}</span>
                  <span className="font-bold text-emerald-700">{formData.date} / {formData.timeSlot}</span>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-200 text-slate-600 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>{t.topBar.address}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppConfirm}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{m.whatsappBtn}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  {m.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            /* STEPPED WIZARD VIEW */
            <div>
              {/* Stepper Tabs */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                {[
                  { num: 1, label: m.step1 },
                  { num: 2, label: m.step2 },
                  { num: 3, label: m.step3 },
                  { num: 4, label: m.step4 },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      step === s.num
                        ? 'bg-brand-600 text-white shadow-md'
                        : step > s.num
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                    </div>
                    <span className={`text-xs font-semibold hidden sm:inline ${
                      step === s.num ? 'text-brand-800' : 'text-slate-400'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* STEP 1: SERVICE */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-base font-bold text-navy-900 mb-3">
                    {m.step1Title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                    {servicesData.map((svc) => {
                      const svcLoc = svc[currentLang] || svc.tr;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, serviceId: svc.id }));
                            setStep(2);
                          }}
                          className={`p-3.5 rounded-2xl border text-left rtl:text-right transition-all flex items-center justify-between ${
                            formData.serviceId === svc.id
                              ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                              : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img 
                              src={svc.image} 
                              alt={svcLoc.title} 
                              className="w-10 h-10 rounded-xl object-cover" 
                            />
                            <div>
                              <span className="block font-bold text-xs text-navy-900">{svcLoc.title}</span>
                              <span className="text-[11px] text-slate-500">{svcLoc.duration}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 rtl:rotate-180 shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: DOCTOR */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="text-base font-bold text-navy-900 mb-3">
                    {m.step2Title}
                  </h4>
                  <div className="space-y-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, doctorId: 'any' }));
                        setStep(3);
                      }}
                      className={`w-full p-3.5 rounded-2xl border text-left rtl:text-right transition-all flex items-center justify-between ${
                        formData.doctorId === 'any'
                          ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
                          ⚡
                        </div>
                        <div>
                          <span className="block font-bold text-sm text-navy-900">{m.anyDoctor}</span>
                          <span className="text-xs text-slate-500">{m.anyDoctorSub}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                    </button>

                    {doctorsData.map((doc) => {
                      const docLoc = doc[currentLang] || doc.tr;
                      return (
                        <button
                          key={doc.id}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, doctorId: doc.id }));
                            setStep(3);
                          }}
                          className={`w-full p-3.5 rounded-2xl border text-left rtl:text-right transition-all flex items-center justify-between ${
                            formData.doctorId === doc.id
                              ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                              : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img 
                              src={doc.image} 
                              alt={docLoc.name} 
                              className="w-12 h-12 rounded-xl object-cover object-top" 
                            />
                            <div>
                              <span className="block font-bold text-sm text-navy-900">{docLoc.name}</span>
                              <span className="text-xs text-brand-600 font-medium">{docLoc.specialty}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: DATE & TIME */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <h4 className="text-base font-bold text-navy-900 mb-2">
                    {m.step3Title}
                  </h4>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {m.dayLabel}
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      {m.timeLabel}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, timeSlot: time }))}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                            formData.timeSlot === time
                              ? 'bg-brand-600 text-white shadow-md scale-105'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4 rtl:rotate-180" /> {m.back}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                    >
                      {m.next} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: PATIENT DETAILS */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
                  <h4 className="text-base font-bold text-navy-900 mb-2">
                    {m.step4Title}
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {m.fullName}
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder={m.fullNamePlaceholder}
                        className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {m.phone}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder={clinicInfo.phone}
                        className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {m.notes}
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-3.5" />
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder={m.notesPlaceholder}
                        className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-brand-50 rounded-xl border border-brand-100 text-xs text-brand-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{m.kvkkNotice}</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4 rtl:rotate-180" /> {m.back}
                    </button>
                    
                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-500/25 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{m.confirmBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
