import React, { useState, useRef } from 'react';
import { 
  ChevronDown, 
  Search, 
  MessageCircle 
} from 'lucide-react';
import { faqData, clinicInfo } from '../data/clinicData';
import { uiTranslations } from '../data/translations';
import CategoryScrollTrack from './CategoryScrollTrack';

export default function Faq({ currentLang = 'tr' }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categoriesRef = useRef(null);

  const t = uiTranslations[currentLang] || uiTranslations.tr;

  const categories = [
    { id: 'all', label: t.faq.categories.all },
    { id: 'implant', label: t.faq.categories.implant },
    { id: 'estetik', label: t.faq.categories.estetik },
    { id: 'ortodonti', label: t.faq.categories.ortodonti },
    { id: 'pedodonti', label: t.faq.categories.pedodonti },
  ];

  const filteredFaqs = faqData.filter(item => {
    const localized = item[currentLang] || item.tr;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const q = localized.q.toLowerCase();
    const a = localized.a.toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = q.includes(query) || a.includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="sss" className="py-16 sm:py-24 bg-white relative text-left rtl:text-right">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-100">
            {t.faq.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3 sm:mb-4">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-4 mb-8 sm:mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.faq.searchPlaceholder}
              className="w-full pl-12 pr-4 rtl:pl-4 rtl:pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all shadow-xs"
            />
          </div>

          <div>
            <div 
              ref={categoriesRef}
              className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={(e) => {
                    setSelectedCategory(cat.id);
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                  }}
                  className={`h-10 px-4 sm:px-5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all flex items-center justify-center cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-brand-600 text-white shadow-sm ring-2 ring-brand-600/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Interactive Scroll & Drag Track (Çizgi üzerinden sağa sola kaydırma ve butonları kaydırma) */}
            <CategoryScrollTrack containerRef={categoriesRef} currentLang={currentLang} />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const localized = faq[currentLang] || faq.tr;
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-brand-500 bg-brand-50/25 shadow-sm' 
                      : 'border-slate-200/80 bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-4 px-6 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-navy-900 leading-snug">
                      {localized.q}
                    </span>
                    <div className={`p-1.5 rounded-xl transition-all duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-brand-600 text-white shadow-xs' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Animated Accordion Body */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-100/60">
                        {localized.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-slate-400 text-sm">
              {t.faq.notFound}
            </div>
          )}
        </div>

        {/* Direct Ask Callout */}
        <div className="mt-14 p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/70 text-center flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="text-left rtl:text-right">
            <h4 className="font-bold text-base text-navy-900">{t.faq.cantFind}</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.faq.cantFindSub}
            </p>
          </div>

          <a
            href={clinicInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>{t.faq.askDoc}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
