import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import SmileAssessmentQuiz from './components/SmileAssessmentQuiz';
import Doctors from './components/Doctors';
import HealthTourism from './components/HealthTourism';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';
import LegalModal from './components/LegalModal';
import CookieConsent from './components/CookieConsent';
import NotFound from './components/NotFound';
import FloatingActions from './components/FloatingActions';
import { servicesData, doctorsData } from './data/clinicData';

export default function App() {
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState('kvkk');
  const [currentLang, setCurrentLang] = useState('tr');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleOpenLegal = (tab = 'kvkk') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle RTL, HTML Lang and Dynamic SEO Metadata changes
  useEffect(() => {
    document.documentElement.lang = currentLang;
    const metaDesc = document.querySelector('meta[name="description"]');

    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.title = 'عيادة نوفادنت لصحة الفم والأسنان | إسطنبول مسلك - زراعة وتجميل الأسنان';
      if (metaDesc) {
        metaDesc.setAttribute('content', 'عيادة نوفادنت لصحة الفم والأسنان في إسطنبول مسلك. نخبة من الأطباء الاستشاريين في زراعة الأسنان، عدسات الفينير، تيجان الزيركون، وتقويم الأسنان الشفاف.');
      }
    } else if (currentLang === 'en') {
      document.documentElement.dir = 'ltr';
      document.title = 'NovaDent Dental Clinic Istanbul | Maslak Oral Health - Implants & Aesthetics';
      if (metaDesc) {
        metaDesc.setAttribute('content', 'NovaDent Dental Clinic in Maslak, Istanbul. Specialized dental surgeons providing Dental Implants, Zirconia Crowns, Invisalign Clear Aligners, and Hollywood Smile.');
      }
    } else {
      document.documentElement.dir = 'ltr';
      document.title = 'NovaDent Ağız ve Diş Sağlığı Polikliniği | İstanbul Maslak Diş Kliniği - İmplant & Estetik Diş';
      if (metaDesc) {
        metaDesc.setAttribute('content', "NovaDent Ağız ve Diş Sağlığı Polikliniği - İstanbul Maslak'ta uzman hekim kadrosu ile İmplant, Zirkonyum Kaplama, Invisalign Şeffaf Plak, Hollywood Smile ve Çocuk Diş Hekimliği.");
      }
    }
  }, [currentLang]);

  // Bütün randevu butonlarını doğrudan WhatsApp'a yönlendiren merkezi fonksiyon
  const handleOpenAppointment = (data = {}) => {
    const isGeneral = !data.serviceId || data.serviceId === 'general';
    const service = !isGeneral ? servicesData.find(s => s.id === data.serviceId) : null;
    const doctor = data.doctorId && data.doctorId !== 'any' ? doctorsData.find(d => d.id === data.doctorId) : null;

    const serviceTitle = service ? (service[currentLang]?.title || service.tr.title) : null;
    const doctorName = doctor ? (doctor[currentLang]?.name || doctor.tr.name) : null;
    const date = data.date || null;
    const note = data.note || data.customText || null;

    let text = '';

    if (currentLang === 'en') {
      if (serviceTitle && doctorName) {
        text = `Hello NovaDent Dental Clinic, I am contacting you through your website for an appointment.\n\n` +
               `*Treatment:* ${serviceTitle}\n` +
               `*Preferred Doctor:* ${doctorName}\n\n` +
               `I would like to get detailed information and schedule a consultation. Could you please share your availability?`;
      } else if (serviceTitle) {
        text = `Hello NovaDent Dental Clinic, I am contacting you through your website.\n\n` +
               `I would like to get detailed information about *${serviceTitle}* and schedule a consultation.\n\n` +
               `Could you please share your availability?`;
      } else if (doctorName) {
        text = `Hello NovaDent Dental Clinic, I am contacting you through your website.\n\n` +
               `I would like to schedule an appointment with *${doctorName}*.\n\n` +
               `Could you please share the available days and times?`;
      } else {
        text = `Hello NovaDent Dental Clinic, I am contacting you through your website to schedule a dental consultation and check-up.\n\n` +
               `Could you please share your availability?`;
      }

      if (date) text += `\n\n*Preferred Date:* ${date}`;
      if (note) text += `\n*Note:* ${note}`;
    } else if (currentLang === 'ar') {
      if (serviceTitle && doctorName) {
        text = `مرحباً عيادة نوفادنت لطب الأسنان، أتواصل معكم عبر الموقع الإلكتروني لحجز موعد.\n\n` +
               `*العلاج:* ${serviceTitle}\n` +
               `*الطبيب المفضل:* ${doctorName}\n\n` +
               `أود الحصول على معلومات تفصيلية وتحديد موعد للمعاينة. هل يمكنكم إفادتي بالمواعيد المتاحة لديكم؟`;
      } else if (serviceTitle) {
        text = `مرحباً عيادة نوفادنت لطب الأسنان، أتواصل معكم عبر الموقع الإلكتروني.\n\n` +
               `أود الاستفسار عن *${serviceTitle}* وتحديد موعد للمعاينة.\n\n` +
               `ما هي المواعيد المتاحة لديكم؟`;
      } else if (doctorName) {
        text = `مرحباً عيادة نوفادنت لطب الأسنان، أتواصل معكم عبر الموقع الإلكتروني.\n\n` +
               `أود حجز موعد استشارة ومعاينة لدى *${doctorName}*.\n\n` +
               `ما هي الأيام والأوقات المتاحة لديكم؟`;
      } else {
        text = `مرحباً عيادة نوفادنت لطب الأسنان، أتواصل معكم عبر الموقع الإلكتروني لحجز موعد استشارة وفحص للأسنان.\n\n` +
               `هل يمكنني معرفة المواعيد المتاحة لديكم؟`;
      }

      if (date) text += `\n\n*التاريخ المفضل:* ${date}`;
      if (note) text += `\n*ملاحظة:* ${note}`;
    } else {
      // Türkçe (Varsayılan) - Akıcı, doğal ve kurumsal hasta randevu mesajı
      if (serviceTitle && doctorName) {
        text = `Merhaba NovaDent Diş Kliniği, web siteniz üzerinden randevu için ulaşıyorum.\n\n` +
               `*İşlem:* ${serviceTitle}\n` +
               `*Hekim Tercihi:* ${doctorName}\n\n` +
               `Detaylı bilgi almak ve muayene randevusu oluşturmak istiyorum. Müsait olduğunuz gün ve saatleri öğrenebilir miyim?`;
      } else if (serviceTitle) {
        text = `Merhaba NovaDent Diş Kliniği, web siteniz üzerinden ulaşıyorum.\n\n` +
               `*${serviceTitle}* hakkında detaylı bilgi almak ve muayene randevusu oluşturmak istiyorum.\n\n` +
               `Müsait olduğunuz gün ve saatleri öğrenebilir miyim?`;
      } else if (doctorName) {
        text = `Merhaba NovaDent Diş Kliniği, web siteniz üzerinden ulaşıyorum.\n\n` +
               `*${doctorName}* için muayene randevusu oluşturmak istiyorum.\n\n` +
               `Müsait olduğu gün ve saatleri öğrenebilir miyim?`;
      } else {
        text = `Merhaba NovaDent Diş Kliniği, web siteniz üzerinden muayene ve randevu talebi için ulaşıyorum.\n\n` +
               `Müsait olduğunuz gün ve saatleri öğrenebilir miyim?`;
      }

      if (date) text += `\n\n*Tercih Ettiğim Tarih:* ${date}`;
      if (note) text += `\n*Notum:* ${note}`;
    }

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/905551234567?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const is404 = currentPath !== '/' && currentPath !== '' && currentPath !== '/index.html';

  if (is404) {
    return (
      <NotFound
        currentLang={currentLang}
        onChangeLang={(lang) => setCurrentLang(lang)}
        onGoHome={(targetHref = '/') => {
          if (targetHref.includes('#')) {
            window.location.href = targetHref;
          } else {
            window.history.pushState({}, '', '/');
            setCurrentPath('/');
          }
        }}
      />
    );
  }

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-brand-500 selection:text-white ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Header with Navigation & Language switcher */}
      <Header
        onOpenAppointment={handleOpenAppointment}
        onOpenCertificate={() => setCertificateModalOpen(true)}
        currentLang={currentLang}
        onChangeLang={(lang) => setCurrentLang(lang)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Quick Booking Widget */}
        <Hero 
          onOpenAppointment={handleOpenAppointment}
          onOpenCertificate={() => setCertificateModalOpen(true)}
          currentLang={currentLang}
        />

        {/* 2. Key Pillars & Why Choose NovaDent */}
        <WhyUs 
          onOpenCertificate={() => setCertificateModalOpen(true)}
          currentLang={currentLang}
        />

        {/* 3. Comprehensive Treatments & Services with Realistic Images */}
        <Services 
          onOpenAppointment={handleOpenAppointment}
          currentLang={currentLang}
        />

        {/* 4. Interactive Smile Assessment Quiz */}
        <SmileAssessmentQuiz 
          onOpenAppointment={handleOpenAppointment}
          currentLang={currentLang}
        />

        {/* 5. Before & After Transformation Slider */}
        <BeforeAfterSlider 
          onOpenAppointment={handleOpenAppointment}
          currentLang={currentLang}
        />

        {/* 6. Doctors & Medical Team */}
        <Doctors 
          onOpenAppointment={handleOpenAppointment}
          currentLang={currentLang}
        />

        {/* 7. International Health Tourism & Ministry Certificate */}
        <HealthTourism 
          onOpenCertificate={() => setCertificateModalOpen(true)}
          onOpenAppointment={handleOpenAppointment}
          currentLang={currentLang}
        />

        {/* 8. Patient Reviews & Social Proof */}
        <Reviews 
          currentLang={currentLang}
        />

        {/* 9. FAQs with Search */}
        <Faq 
          currentLang={currentLang}
        />

        {/* 10. Contact, Location & Google Maps */}
        <Contact 
          currentLang={currentLang}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCertificate={() => setCertificateModalOpen(true)}
        onOpenAppointment={handleOpenAppointment}
        onOpenLegal={handleOpenLegal}
        currentLang={currentLang}
      />

      {/* Interactive Modals */}
      <CertificateModal 
        isOpen={certificateModalOpen}
        onClose={() => setCertificateModalOpen(false)}
        currentLang={currentLang}
      />

      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalModalTab}
        currentLang={currentLang}
      />

      {/* Cookie Consent Banner */}
      <CookieConsent
        onOpenPolicy={handleOpenLegal}
        currentLang={currentLang}
      />

      {/* Floating CTA controls */}
      <FloatingActions 
        onOpenAppointment={handleOpenAppointment}
        currentLang={currentLang}
      />
    </div>
  );
}
