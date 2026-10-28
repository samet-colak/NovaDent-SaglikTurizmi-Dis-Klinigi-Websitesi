import React from 'react';
import { 
  Home, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Stethoscope, 
  Users, 
  CheckCircle2, 
  MapPin,
  Search
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function NotFound({ currentLang = 'tr', onGoHome, onChangeLang }) {
  const content = {
    tr: {
      badge: '🦷 Gülüşünüz Kaybolmasın',
      code: '404',
      title: 'Aradığınız Sayfa Eksik veya Taşınmış Olabilir',
      desc: 'Tıpkı eksik bir diş gibi, aradığınız bu sayfaya şu anda ulaşılamıyor. Ancak endişelenmeyin! Doğru tedaviyi ve hekiminizi bulmak için aşağıdaki hızlı bağlantılardan devam edebilir veya doğrudan bize yazabilirsiniz.',
      homeBtn: 'Ana Sayfaya Dön',
      whatsappBtn: 'WhatsApp Canlı Danışma',
      quickTitle: 'Sık Ziyaret Edilen Klinik Bölümleri',
      quickLinks: [
        {
          title: 'Tedavi Hizmetlerimiz',
          desc: 'İmplant, Invisalign, Lamine ve Zirkonyum',
          href: '/#hizmetlerimiz',
          icon: Stethoscope,
          color: 'text-brand-600 bg-brand-50 border-brand-200'
        },
        {
          title: 'Uzman Hekim Kadromuz',
          desc: 'Dr. Kerem Yıldız, Dr. Caner Tekin ve hekimlerimiz',
          href: '/#hekimlerimiz',
          icon: Users,
          color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
        },
        {
          title: 'Gülüş Analizi Testi',
          desc: '4 adımda size en uygun tedaviyi keşfedin',
          href: '/#gulus-analizi',
          icon: Sparkles,
          color: 'text-amber-600 bg-amber-50 border-amber-200'
        },
        {
          title: 'Klinik İletişim & Ulaşım',
          desc: 'İTÜ Ayazağa Metro yanı, Maslak / İstanbul',
          href: '/#iletisim',
          icon: MapPin,
          color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
        }
      ],
      emergencyHelp: 'Acil diş ağrısı, muayene veya randevu talepleriniz için WhatsApp hattımız 7/24 aktiftir.',
      clinicTag: 'T.C. Sağlık Bakanlığı Onaylı Uluslararası Sağlık Turizmi Yetkili Kliniği'
    },
    en: {
      badge: '🦷 Keep Your Smile Intact',
      code: '404',
      title: 'The Page You Are Looking For Might Be Missing',
      desc: 'Just like a missing tooth, this page is temporarily out of place. But no worries! You can navigate directly to our popular clinical sections below or chat with our team on WhatsApp.',
      homeBtn: 'Back to Homepage',
      whatsappBtn: 'WhatsApp Live Chat',
      quickTitle: 'Popular Clinical Sections',
      quickLinks: [
        {
          title: 'Dental Treatments',
          desc: 'Implants, Invisalign, Veneers & Zirconia',
          href: '/#hizmetlerimiz',
          icon: Stethoscope,
          color: 'text-brand-600 bg-brand-50 border-brand-200'
        },
        {
          title: 'Our Specialist Dentists',
          desc: 'Dr. Kerem Yildiz, Dr. Caner Tekin and team',
          href: '/#hekimlerimiz',
          icon: Users,
          color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
        },
        {
          title: 'Smile Diagnostic Quiz',
          desc: 'Find the optimal treatment in 4 steps',
          href: '/#gulus-analizi',
          icon: Sparkles,
          color: 'text-amber-600 bg-amber-50 border-amber-200'
        },
        {
          title: 'Contact & Location',
          desc: '3 min from Kirazli Metro, Bagcilar / Istanbul',
          href: '/#iletisim',
          icon: MapPin,
          color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
        }
      ],
      emergencyHelp: 'For immediate dental assistance or appointment inquiries, our WhatsApp team is ready to help.',
      clinicTag: 'Ministry of Health Certified International Health Tourism Polyclinic'
    },
    ar: {
      badge: '🦷 ابتسامتك في أمان معنا',
      code: '404',
      title: 'عذراً، يبدو أن الصفحة التي تبحث عنها غير موجودة',
      desc: 'تماما مثل سن مفقود يحتاج لترميم، هذه الصفحة غير متاحة حالياً. لا تقلق، يمكنك الانتقال إلى الأقسام الأكثر زيارة أدناه أو التحدث معنا مباشرة عبر واتساب.',
      homeBtn: 'العودة للرئيسية',
      whatsappBtn: 'محادثة فورية عبر واتساب',
      quickTitle: 'الأقسام الأكثر طلباً في العيادة',
      quickLinks: [
        {
          title: 'خدماتنا العلاجية',
          desc: 'زراعة الأسنان، تقويم إنفزلاين، وفينير هوليوود',
          href: '/#hizmetlerimiz',
          icon: Stethoscope,
          color: 'text-brand-600 bg-brand-50 border-brand-200'
        },
        {
          title: 'أطباؤنا الاستشاريون',
          desc: 'د. رسول إيلتر، د. أوتكو شينغول وفريقنا الطبي',
          href: '/#hekimlerimiz',
          icon: Users,
          color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
        },
        {
          title: 'اختبار تشخيص الابتسامة',
          desc: 'اكتشف خطة علاجك المناسبة في 4 خطوات فقط',
          href: '/#gulus-analizi',
          icon: Sparkles,
          color: 'text-amber-600 bg-amber-50 border-amber-200'
        },
        {
          title: 'موقع العيادة والاتصال',
          desc: 'بجانب محطة مترو كيرازلي، باغجلار / اسطنبول',
          href: '/#iletisim',
          icon: MapPin,
          color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
        }
      ],
      emergencyHelp: 'للحالات العاجلة والاستفسارات الطبية السريعة، فريقنا متاح على واتساب على مدار الساعة.',
      clinicTag: 'عيادة معتمدة دولياً للسياحة العلاجية من وزارة الصحة التركية'
    }
  };

  const t = content[currentLang] || content.tr;

  const handleHomeClick = (e, targetHref = '/') => {
    e.preventDefault();
    if (onGoHome) {
      onGoHome(targetHref);
    } else {
      window.location.href = targetHref;
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col justify-between relative overflow-hidden text-left rtl:text-right ${currentLang === 'ar' ? 'font-arabic' : ''}`}>
      
      {/* Dynamic Animated Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] bg-cyan-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between border-b border-slate-200/60">
        <a 
          href="./" 
          onClick={(e) => handleHomeClick(e, '/')} 
          className="flex items-center gap-3 group"
        >
          <img 
            src="./assets/logo.svg" 
            alt={clinicInfo.name} 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-700 hover:text-brand-600 border border-slate-200 text-xs font-bold shadow-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-600" />
            <span>{clinicInfo.phone}</span>
          </a>

          {/* Language Switcher */}
          {onChangeLang && (
            <div className="flex items-center bg-white rounded-xl p-1 border border-slate-200 shadow-xs" role="group" aria-label="Language Selector">
              {[
                { code: 'tr', label: 'TR' },
                { code: 'en', label: 'EN' },
                { code: 'ar', label: 'العربية' }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onChangeLang(lang.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    currentLang === lang.code 
                      ? 'bg-brand-600 text-white shadow-xs' 
                      : 'text-slate-600 hover:text-brand-600'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Hero Card Container */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl w-full text-center">

          {/* Floating Animated 3D Dental Mascot & Code */}
          <div className="relative inline-block mb-6">
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500 via-cyan-400 to-emerald-400 opacity-20 blur-2xl animate-pulse" />
            
            {/* Mascot Tooth Illustration with Floating Bounce */}
            <div className="relative flex items-center justify-center gap-2 sm:gap-4 select-none">
              <span className="text-8xl sm:text-9xl font-black tracking-tight text-slate-800 drop-shadow-sm">
                4
              </span>

              {/* Animated Central Floating Tooth Capsule */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-brand-600 via-cyan-600 to-emerald-500 shadow-2xl shadow-brand-500/30 flex items-center justify-center border-4 border-white transform hover:rotate-6 transition-transform duration-500 animate-bounce" style={{ animationDuration: '3s' }}>
                {/* Tooth SVG Icon */}
                <svg className="w-14 h-14 sm:w-18 sm:h-18 fill-white drop-shadow-md" viewBox="0 0 24 24">
                  <path d="M18.6 6.5C17.3 4.8 15.3 4 12 4S6.7 4.8 5.4 6.5C4.2 8.1 4 10.3 4.5 12.8C5.2 16.2 6.5 20 8.5 20C9.8 20 10.6 18.2 11.2 16.2C11.5 15.2 11.7 14.3 12 14.3C12.3 14.3 12.5 15.2 12.8 16.2C13.4 18.2 14.2 20 15.5 20C17.5 20 18.8 16.2 19.5 12.8C20 10.3 19.8 8.1 18.6 6.5Z" />
                </svg>
              </div>

              <span className="text-8xl sm:text-9xl font-black tracking-tight text-slate-800 drop-shadow-sm">
                4
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 font-extrabold text-xs shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>{t.badge}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            {t.title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            {t.desc}
          </p>

          {/* Main Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <button
              onClick={(e) => handleHomeClick(e, '/')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-brand-500/25 hover:shadow-brand-500/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Home className="w-5 h-5" />
              <span>{t.homeBtn}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <a
              href={clinicInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.whatsappBtn}</span>
            </a>
          </div>

          {/* Effective Quick-Jump Cards (4 Essential Clinical Sections) */}
          <div className="text-left rtl:text-right pt-6 border-t border-slate-200/80">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider text-center mb-6">
              {t.quickTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {t.quickLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={(e) => handleHomeClick(e, link.href)}
                    className="p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/80 hover:border-brand-300 shadow-xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl border ${link.color} shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-navy-900 group-hover:text-brand-600 transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          {link.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-all shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      {/* Footer Info & Verification Tag */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left rtl:sm:text-right">
        <div>
          <span>© {new Date().getFullYear()} {clinicInfo.name}.</span>
          <span className="hidden sm:inline-block ml-2 rtl:ml-0 rtl:mr-2 text-slate-400">• {t.clinicTag}</span>
        </div>

        <p className="text-[11px] text-slate-400">
          {t.emergencyHelp}
        </p>
      </footer>

    </div>
  );
}
