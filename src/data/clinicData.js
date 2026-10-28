export const clinicInfo = {
  name: "NovaDent Ağız ve Diş Sağlığı Polikliniği",
  shortName: "NovaDent Diş Kliniği",
  tagline: "Gülüşünüz Geleceğinizdir - Yeni Nesil Dijital Diş Hekimliği",
  phone: "0212 555 01 23",
  phoneRaw: "+902125550123",
  whatsapp: "https://wa.me/905551234567",
  email: "info@novadentclinic.com",
  address: "Büyükdere Cad. No:142 Maslak, Sarıyer / İstanbul",
  directionsSummary: "İTÜ - Ayazağa Metro İstasyonuna 3 dakika yürüme mesafesinde",
  googleMapsUrl: "https://maps.google.com/?q=Maslak+Istanbul",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12030.569485747683!2d29.019445!3d41.111667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c898c5208b%3A0x6b77242a3cf3f99e!2sMaslak%2C%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1730000000000!5m2!1str!2str",
  workingHours: {
    weekdays: "Pazartesi - Cumartesi: 09:00 - 19:00",
    sunday: "Pazar: Kapalı (Acil Randevu İle)",
  },
  healthTourismCert: {
    number: "DEMO-2026-TURIZM-4143",
    title: "T.C. Sağlık Bakanlığı Onaylı Uluslararası Sağlık Turizmi Yetki Belgesi",
    description: "Uluslararası sağlık turizmi standartlarında temsili akreditasyon ve hasta kabul altyapısı.",
    image: "./assets/saglik-turizmi.jpg"
  },
  socials: {
    instagram: "https://instagram.com/novadentclinic",
    facebook: "https://facebook.com/novadentclinic",
    whatsapp: "https://wa.me/905551234567",
  }
};

// 8 Core Treatments with 100% genuine clinical photos & full TR / EN / AR support
export const servicesData = [
  {
    id: "invisalign",
    category: "ortodonti",
    image: "./assets/treatments/invisalign.jpg",
    tr: {
      title: "Invisalign (Şeffaf Plak)",
      categoryLabel: "Ortodonti",
      summary: "Teller olmadan, neredeyse tamamen görünmez şeffaf plaklarla dişlerinizi zahmetsizce düzeltin.",
      description: "Invisalign, klasik metal tellerin aksine dışarıdan fark edilmeyen şeffaf plaklar kullanarak diş çapraşıklıklarını düzelten yenilikçi bir ortodontik çözümdür. Yemek yerken veya özel anlarda kolayca çıkarılabilir, ağız içi yaralara neden olmaz.",
      advantages: [
        "Neredeyse tamamen görünmez estetik yapı",
        "Yemek yerken çıkarılabilen maksimum konfor",
        "Metal tellere kıyasla daha kısa kontrol aralıkları",
        "Dijital 3D simülasyonla tedavinin sonunu baştan görebilme"
      ],
      duration: "6 - 18 Ay",
      painLevel: "Ağrısız & Minimum Baskı",
      suitableFor: "Çapraşık dişler, aralıklı dişler, kapanış bozuklukları"
    },
    en: {
      title: "Invisalign (Clear Aligners)",
      categoryLabel: "Orthodontics",
      summary: "Straighten your teeth comfortably with virtually invisible clear custom aligners without traditional metal wires.",
      description: "Invisalign is an innovative orthodontic solution that corrects misaligned teeth using custom-made transparent trays. Unlike metal braces, they are completely removable during eating or brushing and do not cause mouth sores.",
      advantages: [
        "Virtually invisible aesthetic design",
        "Removable anytime for maximum lifestyle comfort",
        "Fewer and shorter clinic checkup visits",
        "3D digital scan previews your final smile before starting"
      ],
      duration: "6 - 18 Months",
      painLevel: "Painless & Gentle Pressure",
      suitableFor: "Crowded teeth, gaps, bite alignment problems"
    },
    ar: {
      title: "إنفزلاين (التقويم الشفاف)",
      categoryLabel: "تقويم الأسنان",
      summary: "تقويم وتعديل اصطفاف الأسنان بدون أسلاك معدنية بواسطة قوالب شفافة غير مرئية تماماً.",
      description: "تقنية إنفزلاين هي البديل العصري لتقويم الأسنان التقليدي، حيث تعتمد على قوالب شفافة ومتحركة لا يمكن ملاحظتها. يمكن نزعها بسهولة أثناء تناول الطعام أو المناسبات، ولا تسبب أي جروح أو تقرحات داخل الفم.",
      advantages: [
        "شفافة تماماً وغير مرئية للآخرين",
        "قابلة للإزالة أثناء الأكل لتوفير أقصى درجات الراحة",
        "فترات مراجعة أقصر مقارنة بالأسلاك التقليدية",
        "رؤية النتيجة النهائية مسبقاً بتقنية المحاكاة الرقمية 3D"
      ],
      duration: "6 - 18 شهراً",
      painLevel: "بدون ألم وضغط لطيف جداً",
      suitableFor: "تزاحم الأسنان، الفراغات، واضطرابات الإطباق"
    }
  },
  {
    id: "implant",
    category: "cerrahi",
    image: "./assets/treatments/implant.jpg",
    tr: {
      title: "İmplant Tedavisi",
      categoryLabel: "Cerrahi & İmplant",
      summary: "Eksik dişleriniz için ömür boyu kalıcı, doğal diş hissi veren titanyum kök tedavisi.",
      description: "Kaybedilen dişlerin yerine çene kemiğine yerleştirilen titanyum yapay kökler sayesinde hem çiğneme fonksiyonunuzu hem de estetiğinizi eksiksiz geri kazanırsınız. All-on-4 ve dikişsiz kapalı cerrahi seçenekleriyle konforlu uygulama.",
      advantages: [
        "Ömür boyu dayanıklı titanyum altyapı",
        "Komşu sağlıklı dişlere dokunmadan tedavi",
        "Çene kemiği erimesini engelleyen biyolojik uyum",
        "Doğal dişten ayırt edilemeyen çiğneme hissi"
      ],
      duration: "1 Seans (Kemik Kaynaması: 2-3 Ay)",
      painLevel: "Lokal Anestezi ile Sıfır Ağrı",
      suitableFor: "Tek diş, çoklu diş veya tam dişsizlik durumları"
    },
    en: {
      title: "Dental Implants",
      categoryLabel: "Surgery & Implants",
      summary: "Permanent titanium root replacements for missing teeth providing a 100% natural biting sensation.",
      description: "Titanium implant posts act as artificial roots placed securely into the jawbone, fully restoring chewing function and dental aesthetics. We provide advanced All-on-4, All-on-6, and minimally invasive computer-guided implantology.",
      advantages: [
        "Lifetime durability with biocompatible titanium",
        "Protects adjacent healthy teeth from being shaved",
        "Prevents jawbone resorption and facial collapse",
        "Indistinguishable from natural teeth in look and bite"
      ],
      duration: "1 Session (Osseointegration: 2-3 Months)",
      painLevel: "Zero Pain under Effective Local Anesthesia",
      suitableFor: "Single tooth, multiple missing teeth, or full arch edentulism"
    },
    ar: {
      title: "زراعة الأسنان",
      categoryLabel: "الجراحة والزراعة",
      summary: "تعويض دائم لأسنانك المفقودة بجذور تيتانيوم حيوية تمنحك إحساس وقوة الأسنان الطبيعية مدى الحياة.",
      description: "زراعة الأسنان هي الحل الجذري الأفضل لتعويض الأسنان المفقودة عبر غرسات تيتانيوم متوافقة حيوياً داخل عظم الفك، مما يعيد وظيفة المضغ والمظهر الجمالي بالكامل بتقنيات All-on-4 والجراحة الموجهة رقمياً بدون شق جراحي واسع.",
      advantages: [
        "ثبات وقوة تدوم مدى الحياة مع التيتانيوم الحيوي",
        "الحفاظ على الأسنان الطبيعية المجاورة دون بردها",
        "منع تآكل وضمور عظام الفك بعد فقدان الأسنان",
        "مضغ وابتسامة لا يمكن تمييزها عن الأسنان الأصلية"
      ],
      duration: "جلسة واحدة (الالتحام العظمي: 2-3 أشهر)",
      painLevel: "بدون أي ألم إطلاقاً مع التخدير الموضعي الفعال",
      suitableFor: "فقدان سن واحد، عدة أسنان، أو الفقدان الكامل للأسنان"
    }
  },
  {
    id: "gulus-tasarimi",
    category: "estetik",
    image: "./assets/treatments/gulus-tasarimi.jpg",
    tr: {
      title: "Gülüş Tasarımı (Hollywood Smile)",
      categoryLabel: "Estetik Diş",
      summary: "Yüz hatlarınıza, dudak yapınıza ve ten renginize özel olarak tasarlanan altın oranlı estetik gülüş.",
      description: "Dijital gülüş tasarımı (DSD) teknolojisiyle yüzünüzün simetrisi, ten renginiz ve diş eti seviyeniz analiz edilir. Mock-up uygulaması ile daha tedaviye başlamadan yeni gülüşünüzü ağzınızda test edebilirsiniz.",
      advantages: [
        "Kişiye özel altın oran tasarımı",
        "Tedavi öncesi 3D dijital prova (Mock-up)",
        "Leke tutmayan pürüzsüz porselen yüzeyler",
        "Işıltılı, genç ve özgüvenli bir görünüm"
      ],
      duration: "4 - 7 Gün (2-3 Seans)",
      painLevel: "Konforlu & Hızlı",
      suitableFor: "Kırık, sararmış, orantısız veya aşınmış dişler"
    },
    en: {
      title: "Hollywood Smile (Digital Smile Design)",
      categoryLabel: "Cosmetic Dentistry",
      summary: "A bespoke aesthetic smile designed to the golden ratio matching your facial contours, lips, and skin tone.",
      description: "Digital Smile Design (DSD) analyzes your facial symmetry, lip dynamics, and gum architecture. With a physical 3D mock-up, you can try and see your new smile directly in your mouth before any permanent procedure begins.",
      advantages: [
        "Customized golden ratio aesthetic facial harmony",
        "Pre-treatment 3D mock-up preview in your mouth",
        "Stain-resistant, high-gloss porcelain surfaces",
        "Radiant, youthful, and confidence-boosting smile"
      ],
      duration: "4 - 7 Days (2-3 Sessions)",
      painLevel: "Comfortable & Fast",
      suitableFor: "Discolored, chipped, asymmetric, or worn teeth"
    },
    ar: {
      title: "تصميم الابتسامة (ابتسامة هوليوود)",
      categoryLabel: "تجميل الأسنان",
      summary: "ابتسامة ساحرة ومصممة وفق النسبة الذهبية لتتناغم تماماً مع تقاسيم وجهك وشفتيك ولون بشرتك.",
      description: "تعتمد تقنية تصميم الابتسامة الرقمية (DSD) على تحليل دقيق للوجه وحركة الشفاه ومستوى اللثة. ومن خلال نموذج المعاينة الحقيقي (Mock-up)، يمكنك رؤية وتجربة شكل ابتسامتك الجديدة في فمك قبل بدء أي خطوة علاجية فعلية.",
      advantages: [
        "تصميم شخصي متكامل وفق النسبة الذهبية الجمالية",
        "تجربة الابتسامة ومعاينتها في الفم قبل البدء بالعمل",
        "أسطح خزفية ناعمة مقاومة للبقع وتغير اللون",
        "مظهر شاب، متألق، ومفعم بالثقة والجاذبية"
      ],
      duration: "4 - 7 أيام (2-3 جلسات فقط)",
      painLevel: "مريح وسريع وبدون أي مشقة",
      suitableFor: "الأسنان المتصبغة، المكسورة، غير المتناسقة أو المتآكلة"
    }
  },
  {
    id: "lamine",
    category: "estetik",
    image: "./assets/treatments/lamine.jpg",
    tr: {
      title: "Lamine Kaplama & Zirkonyum",
      categoryLabel: "Estetik Diş",
      summary: "Diş dokusuna minimum müdahale ile uygulanan yaprak porselenler ve yüksek dirençli zirkonyum.",
      description: "Lamine veneer (yaprak porselen), dişlerin ön yüzeyinden sadece 0.3-0.5 mm inceltme yapılarak veya hiç aşındırmadan (non-prep) yapıştırılan ultra estetik bir çözümdür. Zirkonyum ise yüksek ışık geçirgenliği ve kırılma direnci ile arka grup dişlerde dahi mükemmel dayanıklılık sağlar.",
      advantages: [
        "Doğal diş minesi gibi ışık geçirgenliği",
        "Çay, kahve ve sigara lekelerine karşı tam direnç",
        "Minimum diş kaybı ile koruyucu estetik",
        "10-15 yıl üzeri klinik kullanım ömrü"
      ],
      duration: "5 - 7 Gün",
      painLevel: "Ağrısız",
      suitableFor: "Renk değişimleri, diş aralıkları (diastema), kırıklar"
    },
    en: {
      title: "Laminate Veneers & Zirconia",
      categoryLabel: "Cosmetic Dentistry",
      summary: "Ultra-thin porcelain contact-lens veneers and high-strength zirconia crowns with minimal tooth preparation.",
      description: "Porcelain laminate veneers require only 0.3-0.5 mm micro-preparation on the enamel surface to deliver flawless shape and brilliance. Monolithic zirconia crowns offer outstanding fracture toughness and lifelike optical translucency.",
      advantages: [
        "Natural enamel-like light translucency",
        "100% resistant to coffee, tea, and tobacco stains",
        "Conservative procedure preserving natural tooth structure",
        "10-15+ years of clinical durability"
      ],
      duration: "5 - 7 Days",
      painLevel: "Painless",
      suitableFor: "Severe discoloration, gaps (diastema), chipped edges"
    },
    ar: {
      title: "عدسات اللامينيت فينير والزيركون",
      categoryLabel: "تجميل الأسنان",
      summary: "عدسات الخزف الرقيقة كعدسات العيون وتيجان الزيركون فائقة الصلابة بأقل قدر ممكن من برد الأسنان.",
      description: "عدسات الفينير (اللامينيت) تُثبت على الوجه الأمامي للأسنان بسماكة ضئيلة جداً (0.3 - 0.5 ملم) دون المساس بصحة السن. وتوفر تيجان الزيركون نفاذية ضوئية فائقة تماثل ميناء السن الطبيعي مع قوة تحمل استثنائية.",
      advantages: [
        "نفاذية ضوئية وانعكاس طبيعي يطابق ميناء الأسنان الحقيقية",
        "مقاومة تامة للتصبغات الناتجة عن القهوة والشاي والتدخين",
        "إجراء محافظ يحمي البنية الأصلية للأسنان الطبيعية",
        "عمر سريري افتراضي يتجاوز 10 إلى 15 عاماً"
      ],
      duration: "5 - 7 أيام",
      painLevel: "بدون ألم",
      suitableFor: "التصبغات المستعصية، الفراغات بين الأسنان، الكسور والتشققات"
    }
  },
  {
    id: "ortodonti",
    category: "ortodonti",
    image: "./assets/treatments/ortodonti.jpg",
    tr: {
      title: "Ortodonti Tedavisi (Tel Tedavisi)",
      categoryLabel: "Ortodonti",
      summary: "Şeffaf safir braketler ve modern tel sistemleriyle kalıcı çene ve diş düzeltimi.",
      description: "Diş ve çene anomalilerini düzelterek ideal bir çiğneme dengesi ve estetik diş dizilimi sağlar. Estetik porselen/safir braketler sayesinde tel görünümü minimuma indirgenir.",
      advantages: [
        "En karmaşık çapraşıklıklarda bile kesin çözüm",
        "Çene eklemi ve çiğneme sağlığının korunması",
        "Görünmeyen safir/porselen braket seçenekleri",
        "Çocuk, genç ve yetişkinlerde uygulanabilirlik"
      ],
      duration: "12 - 24 Ay",
      painLevel: "Hafif alışma dönemi",
      suitableFor: "İleri düzey çapraşıklık ve iskeletsel problemler"
    },
    en: {
      title: "Orthodontics (Ceramic & Metal Braces)",
      categoryLabel: "Orthodontics",
      summary: "Comprehensive bite alignment and tooth straightening using discreet sapphire ceramic and modern bracket systems.",
      description: "Orthodontic treatment corrects misaligned teeth, malocclusion, and jaw discrepancies, establishing ideal chewing function and aesthetic balance. Clear sapphire and ceramic bracket options keep appearance minimal and discreet.",
      advantages: [
        "Proven reliable solution for severe crowding cases",
        "Protects temporomandibular joint (TMJ) and bite harmony",
        "Aesthetic translucent ceramic and sapphire brackets",
        "Effective for children, adolescents, and adults"
      ],
      duration: "12 - 24 Months",
      painLevel: "Mild initial adjustment",
      suitableFor: "Severe crowding, open bites, crossbites, skeletal anomalies"
    },
    ar: {
      title: "تقويم الأسنان (الثابت والشفاف)",
      categoryLabel: "تقويم الأسنان",
      summary: "تصحيح دائم لاصطفاف الأسنان وعلاقات الفكين باستخدام حاصرات السيراميك والياقوت الشفافة.",
      description: "يعمل علاج التقويم على تصحيح تزاحم الأسنان واضطرابات إطباق الفكين، مما يعيد التوازن الوظيفي للمضغ والمظهر المتناسق. تتيح الحاصرات الخزفية والياقوتية الشفافة علاجاً فعالاً دون مظهر الأسلاك المعدنية المزعج.",
      advantages: [
        "حل نهائي ودقيق لأعقد حالات التزاحم وتشوهات الإطباق",
        "حماية مفصل الفك (TMJ) وصحة وظيفة المضغ",
        "خيارات حاصرات خزفية شفافة تكاد لا تظهر",
        "مناسب للأطفال واليافعين والبالغين من كافة الأعمار"
      ],
      duration: "12 - 24 شهراً",
      painLevel: "فترة اعتياد خفيفة في الأيام الأولى",
      suitableFor: "التزاحم الشديد، العضة المفتوحة، وعيوب الفكين"
    }
  },
  {
    id: "cocuk-dis",
    category: "pedodonti",
    image: "./assets/treatments/cocuk-dis.jpg",
    tr: {
      title: "Çocuk Diş Hekimliği (Pedodonti)",
      categoryLabel: "Pedodonti",
      summary: "Korkusuz, oyun tadında ve uzman doktor eşliğinde minik gülüşlere özel hassas bakım.",
      description: "Dr. Selin İlter yönetimindeki çocuk kliniğimizde, süt dişi dolguları, florür ve fissür örtücü koruyucu uygulamalar, yer tutucular ve diş travması tedavileri çocuk psikolojisine uygun şefkatli bir yaklaşımla gerçekleştirilir.",
      advantages: [
        "Çocuk diş hekimliği doktoralı uzman hekim güvencesi",
        "Diş hekimi korkusunu (dental fobi) yok eden yaklaşım",
        "Gelecekteki ortodontik problemleri önleyen koruyucu tedaviler",
        "Renkli dolgular ve eğlenceli ödül sistemi"
      ],
      duration: "20 - 30 Dakika",
      painLevel: "Ağrısız & Oyun Ortamında",
      suitableFor: "0-15 yaş arası tüm çocuklar ve gençler"
    },
    en: {
      title: "Pediatric Dentistry (Pedodontics)",
      categoryLabel: "Pedodontics",
      summary: "Gentle, fear-free, and playful dental care for little smiles under the guidance of our PhD specialist.",
      description: "Led by Dr. Selin İlter (PhD Candidate in Pediatric Dentistry), our clinic offers gentle milk teeth fillings, fluoride applications, fissure sealants, and space maintainers in a warm, child-friendly atmosphere that dissolves dental fear.",
      advantages: [
        "Led by a certified specialist in Pediatric Dentistry",
        "Gentle psychological approach eliminating dental anxiety",
        "Preventive interventions preventing future orthodontic issues",
        "Playful environment, colorful fillings, and reward medals"
      ],
      duration: "20 - 30 Minutes",
      painLevel: "Completely Pain-Free & Playful",
      suitableFor: "Infants, children, and teens aged 0 to 15"
    },
    ar: {
      title: "طب أسنان الأطفال (بيدودونتيكس)",
      categoryLabel: "أسنان الأطفال",
      summary: "رعاية لطيفة وتجربة خالية تماماً من الخوف لابتسامات الصغار بإشراف استشارية متخصصة حاصلة على الدكتوراه.",
      description: "بإشراف الدكتورة سيلين إلتر (المتخصصة في طب أسنان الأطفال)، تقدم عيادتنا حشوات الأسنان اللبنية، وتطبيق الفلورايد الوقائي، وسادات الشقوق، وحافظات المسافات بأسلوب تربوي لطيف يزيل الخوف تماماً من قلب الطفل.",
      advantages: [
        "إشراف طبي مباشر من استشارية متخصصة ومؤهلة في طب أسنان الأطفال",
        "نهج نفسي لطيف يزيل فوبيا طبيب الأسنان للأبد",
        "علاجات وقائية مبكرة تحمي الطفل من مشاكل التقويم المستقبلية",
        "حشوات ملونة للأطفال وأجواء مرحة وهدايا تشجيعية"
      ],
      duration: "20 - 30 دقيقة",
      painLevel: "بدون ألم وفي أجواء مرحة ومحببة للطفل",
      suitableFor: "الأطفال واليافعون من عمر 0 إلى 15 عاماً"
    }
  },
  {
    id: "dis-beyazlatma",
    category: "estetik",
    image: "./assets/treatments/dis-beyazlatma.jpg",
    tr: {
      title: "Ofis Tipi Diş Beyazlatma (Bleaching)",
      categoryLabel: "Estetik Diş",
      summary: "Tek seansta dişlerinizin tonunu 4-8 ton açan güvenli ve profesyonel beyazlatma.",
      description: "Klinik ortamında özel lazer/LED ışık kaynakları ve biyolojik beyazlatma jelleri kullanılarak yapılan işlem diş minesine asla zarar vermez. 45 dakikada anında göz kamaştırıcı beyazlık sağlar.",
      advantages: [
        "Tek seansta 4 ila 8 ton beyazlama",
        "Diş minesine zarar vermeyen onaylı formül",
        "Özel etkinlikler, düğün ve mezuniyet öncesi hızlı sonuç",
        "Uzun süre kalıcı ve homojen parlaklık"
      ],
      duration: "45 Dakika",
      painLevel: "Hassasiyetsiz",
      suitableFor: "Sigara, kahve, yaşa bağlı sararmış dişler"
    },
    en: {
      title: "In-Office Laser Teeth Whitening",
      categoryLabel: "Cosmetic Dentistry",
      summary: "Brighten your smile by 4 to 8 shades in a single safe, 45-minute professional clinical session.",
      description: "Performed chairside using advanced dental LED/laser light activation and specialized enamel-safe whitening gels, this clinical procedure oxidizes deep organic stains without compromising enamel integrity.",
      advantages: [
        "Visibly lightens teeth by 4 to 8 shades in 45 minutes",
        "100% enamel-safe, medically certified formula",
        "Instant results for weddings, celebrations, and photography",
        "Long-lasting and uniform radiant brightness"
      ],
      duration: "45 Minutes",
      painLevel: "Zero or Minimal Sensitivity",
      suitableFor: "Tea, coffee, tobacco, and age-related yellowing"
    },
    ar: {
      title: "تبييض الأسنان في العيادة (الليزر)",
      categoryLabel: "تجميل الأسنان",
      summary: "تفتيح لون الأسنان من 4 إلى 8 درجات في جلسة واحدة آمنة وسريعة خلال 45 دقيقة فقط.",
      description: "يتم الإجراء داخل العيادة باستخدام جل تبييض بيولوجي معزز بضوء الليزر والـ LED الطبي، مما يزيل التصبغات العميقة المتراكمة بأمان تام ودون إلحاق أي ضرر بطبقة الميناء.",
      advantages: [
        "تفتيح فوري بمقدار 4 إلى 8 درجات في 45 دقيقة فقط",
        "تركيبة طبية معتمدة وآمنة تماماً على ميناء الأسنان",
        "نتيجة فورية ومبهرة قبل المناسبات والأعراس والتخرج",
        "بياض ناصع، متجانس وطويل الأمد"
      ],
      duration: "45 دقيقة",
      painLevel: "بدون حساسية مزعجة",
      suitableFor: "الأسنان المصفرة بسبب الشاي والقهوة والتدخين والتقدم بالعمر"
    }
  },
  {
    id: "dis-cekimi-cerrahi",
    category: "cerrahi",
    image: "./assets/treatments/dis-cerrahi.jpg",
    tr: {
      title: "20'lik Diş & Cerrahi İşlemler",
      categoryLabel: "Cerrahi & İmplant",
      summary: "Gömülü 20'lik dişler, kist operasyonları ve ağrısız çene cerrahisi uygulamaları.",
      description: "Gömülü veya yan süren 20'lik yaş dişleri, diş kökü rezeksiyonları ve çene kemiği düzeltmeleri, dijital panoramik röntgen rehberliğinde dokuya saygılı mikrocerrahi teknikleriyle minimum travma ile gerçekleştirilir.",
      advantages: [
        "Mikrocerrahi teknikleri ile hızlı iyileşme",
        "Şişlik ve morluk önleyici modern protokoller",
        "Etrafındaki kemik ve komşu dişleri koruyan yaklaşım",
        "Ağrısız ve konforlu operasyon süreci"
      ],
      duration: "20 - 40 Dakika",
      painLevel: "Etkili Lokal Anestezi ile Sıfır Ağrı",
      suitableFor: "Gömülü 20'lik dişler, kurtarılamayan kökler"
    },
    en: {
      title: "Wisdom Teeth & Oral Surgery",
      categoryLabel: "Surgery & Implants",
      summary: "Impacted wisdom teeth extraction, root-end resection, and gentle oral surgery under local anesthesia.",
      description: "Using digital 3D panoramic imaging guidance and minimally invasive microsurgical techniques, impacted third molars and complex surgical extractions are performed with minimal tissue disruption and rapid healing.",
      advantages: [
        "Minimally invasive microsurgery for swift recovery",
        "Protocols designed to prevent post-op swelling and bruising",
        "Preserves jawbone density and adjacent molar health",
        "Completely pain-free with targeted modern anesthesia"
      ],
      duration: "20 - 40 Minutes",
      painLevel: "Zero Pain with Local Anesthesia",
      suitableFor: "Impacted wisdom teeth, decayed roots, cyst removals"
    },
    ar: {
      title: "جراحة الفم وقلع ضرس العقل",
      categoryLabel: "الجراحة والزراعة",
      summary: "قلع ضروس العقل المطمورة، جراحة الجذور، وعمليات الفك الدقيقة بأعلى درجات الراحة وبدون ألم.",
      description: "تتم إزالة ضروس العقل المدفونة وعلاج الجذور بتقنيات الجراحة المجهرية الدقيقة تحت إشراف التصوير البانورامي الرقمي، مما يضمن الحفاظ على الأنسجة وسرعة التعافي دون أي مضاعفات.",
      advantages: [
        "جراحة مجهرية دقيقة لضمان أسرع فترة تعافي",
        "بروتوكولات حديثة تمنع التورم والانتفاخ بعد العملية",
        "حماية عظام الفك وسلامة الضروس المجاورة",
        "إجراء خالي من الألم تماماً بفضل التخدير الموضعي المتطور"
      ],
      duration: "20 - 40 دقيقة",
      painLevel: "صفر ألم مع التخدير الموضعي الفعال",
      suitableFor: "ضروس العقل المطمورة، الجذور المكسورة، وتكيسات الفك"
    }
  }
];

// Doctors Data with TR / EN / AR support
export const doctorsData = [
  {
    id: "dr-kerem-yildiz",
    image: "./assets/dr-1.jpg",
    experienceYears: "12+",
    tr: {
      name: "Dr. Kerem Yıldız",
      title: "Kurucu Diş Hekimi",
      specialty: "İmplantoloji & Ağız Cerrahisi",
      education: "İstanbul Üniversitesi Diş Hekimliği Fakültesi",
      bio: "İstanbul Üniversitesi Diş Hekimliği Fakültesi mezunudur. İleri cerrahi teknikler, kemik ogmentasyonu, All-on-4/6 implantoloji ve dijital gülüş tasarımı alanlarında 12 yılı aşkın klinik tecrübeye sahiptir.",
      badges: ["İmplantoloji", "Gülüş Tasarımı", "Ağız Cerrahisi"],
    },
    en: {
      name: "Dr. Kerem Yildiz",
      title: "Founder & Head Dental Surgeon",
      specialty: "Implantology & Oral Surgery",
      education: "Istanbul University Faculty of Dentistry",
      bio: "Graduated from Istanbul University Faculty of Dentistry. Holds over 12 years of specialized surgical mastery in complex dental implantology, bone grafting, and digital smile rehabilitation.",
      badges: ["Implantology", "Smile Design", "Oral Surgery"],
    },
    ar: {
      name: "د. كرم يلدز",
      title: "طبيب أسنان ومؤسس المركز",
      specialty: "زراعة وجراحة الأسنان",
      education: "كلية طب الأسنان - جامعة إسطنبول",
      bio: "تخرج من كلية طب الأسنان بجامعة إسطنبول، ويمتلك أكثر من 12 عاماً من الخبرة الجراحية المتقدمة في زراعة الأسنان وتقنيات All-on-4 وتصميم الابتسامة الرقمية.",
      badges: ["زراعة الأسنان", "تصميم الابتسامة", "جراحة الفم"],
    }
  },
  {
    id: "dr-caner-tekin",
    image: "./assets/dr-2.jpg",
    experienceYears: "9+",
    tr: {
      name: "Dr. Caner Tekin",
      title: "Diş Hekimi",
      specialty: "Protetik Diş Tedavisi & Zirkonyum",
      education: "Marmara Üniversitesi Diş Hekimliği Fakültesi",
      bio: "Monolitik zirkonyum, porselen lamine (yaprak porselen) ve CAD/CAM dijital ölçü sistemleri üzerine yoğunlaşmıştır. Doğal diş morfolojisi ve estetik oklüzyon restorasyonlarında uzmandır.",
      badges: ["Zirkonyum Kaplama", "Lamine Veneer", "Dijital CAD/CAM"],
    },
    en: {
      name: "Dr. Caner Tekin",
      title: "Prosthodontist & Aesthetic Dentist",
      specialty: "Prosthetics & Zirconia Veneers",
      education: "Marmara University Faculty of Dentistry",
      bio: "Specialized in monolithic zirconia crowns, porcelain laminate veneers, and intraoral 3D CAD/CAM restorations to achieve flawlessly natural dental aesthetics.",
      badges: ["Zirconia Crowns", "Laminate Veneers", "Digital CAD/CAM"],
    },
    ar: {
      name: "د. جانير تكين",
      title: "استشاري التركيبات التجميلية",
      specialty: "التعويضات السنية والزيركون",
      education: "كلية طب الأسنان - جامعة مرمرة",
      bio: "متخصص في تيجان الزيركون وعدسات الفينير والتركيبات التجميلية فائقة الدقة باستخدام الماسحات الرقمية ثلاثية الأبعاد وأنظمة CAD/CAM.",
      badges: ["تيجان الزيركون", "عدسات الفينير", "الطب الرقمي"],
    }
  },
  {
    id: "dr-selin-aksoy",
    image: "./assets/dr-3.jpg",
    experienceYears: "8+",
    tr: {
      name: "Dr. Selin Aksoy",
      title: "Çocuk Diş Hekimi (Pedodonti)",
      specialty: "Pedodonti & Koruyucu Diş Hekimliği",
      education: "Hacettepe Üni. / İstanbul Üni. (Doktora/PhD)",
      bio: "Hacettepe Üniversitesi mezuniyetinin ardından Çocuk Diş Hekimliği alanında doktora (PhD) derecesi almıştır. Çocuk psikolojisine duyarlı, oyunlaştırılmış ve ağrısız klinik yaklaşımlar uygular.",
      badges: ["Pedodonti", "Çocuk Psikolojisi", "Koruyucu Bakım"],
    },
    en: {
      name: "Dr. Selin Aksoy",
      title: "Pediatric Dentist (Ph.D.)",
      specialty: "Pedodontics & Preventive Dentistry",
      education: "Hacettepe Univ. / Istanbul Univ. (Ph.D.)",
      bio: "Holds a Ph.D. in Pediatric Dentistry. Renowned for her empathetic and playful clinical methodology, ensuring a completely fear-free dental experience for children.",
      badges: ["Pedodontics", "Child Psychology", "Preventive Care"],
    },
    ar: {
      name: "د. سيلين أكسوي",
      title: "استشارية طب أسنان الأطفال (دكتوراه)",
      specialty: "طب أسنان الأطفال والعناية الوقائية",
      education: "جامعة حجة تبة / جامعة إسطنبول (دكتوراه)",
      bio: "حاصلة على درجة الدكتوراه في طب أسنان الأطفال، وتتميز بأسلوبها التربوي اللطيف وقدرتها على إزالة أي رهبة لدى الأطفال وتوفير علاج بدون ألم.",
      badges: ["طب أسنان الأطفال", "سلوكيات الطفل", "الطب الوقائي"],
    }
  },
  {
    id: "dr-mert-ozkan",
    image: "./assets/dr-4.jpg",
    experienceYears: "8+",
    tr: {
      name: "Dr. Mert Özkan",
      title: "Ortodonti Uzmanı",
      specialty: "Invisalign & Şeffaf Plak Tedavisi",
      education: "Ege Üniversitesi Diş Hekimliği Fakültesi",
      bio: "Telsiz ortodontik tedaviler, Invisalign şeffaf plak sistemleri ve dijital 3D kapanış analizleri üzerine uzmanlaşmıştır. Yüzlerce başarılı şeffaf plak vakasına imza atmıştır.",
      badges: ["Invisalign Diamond Provider", "Şeffaf Plak", "Dijital Ortodonti"],
    },
    en: {
      name: "Dr. Mert Ozkan",
      title: "Orthodontic Specialist",
      specialty: "Invisalign & Clear Aligners",
      education: "Ege University Faculty of Dentistry",
      bio: "Specialized in wire-free digital orthodontics, clear aligners (Invisalign), and advanced 3D bite correction with hundreds of successful smile transformations.",
      badges: ["Invisalign Certified", "Clear Aligners", "Digital Orthodontics"],
    },
    ar: {
      name: "د. ميرت أوزكان",
      title: "استشاري تقويم الأسنان",
      specialty: "التقويم الشفاف (إنفزلاين)",
      education: "كلية طب الأسنان - جامعة إيجة",
      bio: "متخصص في التقويم الشفاف بدون أسلاك معدنية وقوالب إنفزلاين المعتمدة وتصحيح العضة رقمياً بنماذج محاكاة ثلاثية الأبعاد.",
      badges: ["تقويم إنفزلاين", "تقويم الأسنان", "الطب الرقمي"],
    }
  }
];

export const assistantStaff = [
  {
    image: "./assets/assistants/ast-1.jpg",
    tr: { name: "Ayşe Demir", role: "Klinik Koordinatörü" },
    en: { name: "Ayse Demir", role: "Clinic Coordinator" },
    ar: { name: "عائشة دمير", role: "منسقة العيادة" },
  },
  {
    image: "./assets/assistants/ast-2.jpg",
    tr: { name: "Zeynep Yılmaz", role: "Diş Hekimi Asistanı" },
    en: { name: "Zeynep Yilmaz", role: "Dental Assistant" },
    ar: { name: "زينب يلماز", role: "مساعدة طبيب أسنان" },
  },
  {
    image: "./assets/assistants/ast-3.jpg",
    tr: { name: "Elif Çelik", role: "Hasta İletişim Uzmanı" },
    en: { name: "Elif Celik", role: "Patient Relations Specialist" },
    ar: { name: "إليف تشيليك", role: "أخصائية علاقات المرضى" },
  },
  {
    image: "./assets/assistants/ast-4.jpg",
    tr: { name: "Büşra Arslan", role: "Sterilizasyon & Cerrahi Asistanı" },
    en: { name: "Busra Arslan", role: "Sterilization & Surgical Assistant" },
    ar: { name: "بشرى أرسلان", role: "مساعدة التعقيم والجراحة" },
  }
];

// FAQs with TR / EN / AR support
export const faqData = [
  {
    category: "implant",
    tr: {
      q: "Diş implantı tedavisi ne kadar sürer?",
      a: "Diş implantı cerrahisi tek bir diş için genellikle 15-20 dakika sürer. İmplantın çene kemiği ile tam biyolojik uyum sağlaması (osteointegrasyon) için 2-3 ay beklenir. Ardından porselen veya zirkonyum daimi diş takılarak tedavi tamamlanır."
    },
    en: {
      q: "How long does dental implant treatment take?",
      a: "The surgical placement of a single dental implant typically takes only 15-20 minutes. An osseointegration period of 2-3 months is observed for the titanium root to integrate securely with the jawbone before the permanent zirconia crown is placed."
    },
    ar: {
      q: "كم يستغرق علاج زراعة الأسنان؟",
      a: "يستغرق الإجراء الجراحي لغرس السن الواحد عادة ما بين 15 إلى 20 دقيقة فقط. تتطلب مرحلة الالتحام العظمي التام ما بين شهرين إلى 3 أشهر، وبعدها يتم تركيب تاج الزيركون النهائي المتين."
    }
  },
  {
    category: "estetik",
    tr: {
      q: "Lamine kaplama ne kadar dayanıklıdır?",
      a: "Lamine porselen kaplamalar (yaprak porselen), doğru ağız bakımı ve hekim tavsiyelerine uyulduğunda ortalama 10-15 yıl, hatta daha uzun süre ilk günkü parlaklığı ve dayanıklılığı ile kalır. Leke tutmaz ve renk değiştirmez."
    },
    en: {
      q: "How durable are porcelain laminate veneers?",
      a: "With proper oral hygiene and regular dental checkups, porcelain laminate veneers routinely last 10 to 15 years or longer. They are virtually stain-resistant and maintain their original luster permanently."
    },
    ar: {
      q: "ما مدى متانة وعمر عدسات الفينير (اللامينيت)؟",
      a: "تدوم عدسات الفينير الخزفية ما بين 10 إلى 15 عاماً أو أكثر مع العناية الجيدة بنظافة الفم. وتتميز بأنها مقاومة تماماً للتصبغات ولا يتغير لونها أو بريقها بمرور السنين."
    }
  },
  {
    category: "estetik",
    tr: {
      q: "Diş beyazlatma işlemi zararlı mı?",
      a: "Kliniğimizde diş hekimi kontrolünde uygulanan profesyonel ofis tipi diş beyazlatma sistemleri, uluslararası sağlık standartlarına uygun olup diş minenize kesinlikle zarar vermez. İşlem sırasında mine dokusu değil, gözeneklerdeki renk pigmentleri hedeflenir."
    },
    en: {
      q: "Is in-office teeth whitening harmful to enamel?",
      a: "Professional clinical whitening performed under a dentist's supervision is completely safe and causes zero structural damage to dental enamel. It selectively targets internalized stain molecules within enamel micropores."
    },
    ar: {
      q: "هل يسبب تبييض الأسنان بالعيادة أي ضرر بميناء الأسنان؟",
      a: "التبييض السريري الاحترافي المطبق بإشراف طبيب الأسنان في العيادة آمن تماماً ولا يضر بميناء الأسنان مطلقاً؛ حيث يستهدف الجزيئات الصبغية المتراكمة داخل مسام السن دون المساس بالبنية السنية."
    }
  },
  {
    category: "cerrahi",
    tr: {
      q: "Diş çekimi sonrası nelere dikkat etmeliyim?",
      a: "Diş çekimi sonrası yerleştirilen steril tamponu 30 dakika sıkıca ısırınız. İlk 24 saat tükürmeyiniz, ağzınızı çalkalamayınız ve pipet kullanmayınız. Çok sıcak gıdalardan ve sigaradan en az 48 saat uzak durunuz."
    },
    en: {
      q: "What precautions should I take after a tooth extraction?",
      a: "Bite firmly on the gauze pack for 30 minutes. Avoid spitting, vigorous mouth rinsing, or drinking through straws for the first 24 hours to preserve the healing blood clot. Avoid very hot foods and tobacco for at least 48 hours."
    },
    ar: {
      q: "ما هي التعليمات الواجب اتباعها بعد قلع السن أو ضرس العقل؟",
      a: "العض بإحكام على الشاش المعقم لمدة 30 دقيقة. تجنب البصق أو المضمضة القوية أو الشرب بالمصاصة خلال أول 24 ساعة لحماية التخثر الدموي، والابتعاد عن المأكولات الساخنة والتدخين لمدة 48 ساعة."
    }
  },
  {
    category: "ortodonti",
    tr: {
      q: "Ortodonti tedavisi ne kadar sürer?",
      a: "Tedavi süresi diş yapısına ve çapraşıklığın derecesine göre genellikle 6 ay ile 18 ay arasında değişir. Invisalign şeffaf plak sistemleri, düzenli kullanımda geleneksel tellere göre genellikle daha konforlu ve hızlı sonuç sunar."
    },
    en: {
      q: "How long does orthodontic or aligner treatment take?",
      a: "Treatment duration varies between 6 to 18 months depending on complexity. Invisalign clear aligners worn 20-22 hours a day often achieve planned results up to 30% faster than traditional braces."
    },
    ar: {
      q: "كم يستغرق علاج تقويم الأسنان أو القوالب الشفافة؟",
      a: "تتراوح مدة العلاج عادة بين 6 إلى 18 شهراً وفقاً لدرجة تزاحم الأسنان. وتوفر قوالب إنفزلاين الشفافة عند الالتزام بارتدائها نتائج أسرع وأكثر راحة مقارنة بالأسلاك التقليدية."
    }
  },
  {
    category: "pedodonti",
    tr: {
      q: "Çocuklar için ilk diş hekimi ziyareti ne zaman olmalıdır?",
      a: "İlk süt dişinin sürmesinden itibaren veya en geç 1 yaşına kadar ilk kontrol önerilir. Bu erken ziyaret, çocuğun kliniğe korkusuzca alışmasını sağlar ve erken dönem çürüklerinin önüne geçer."
    },
    en: {
      q: "When should a child's first dental visit take place?",
      a: "The recommended age for a child's first dental visit is when the first tooth erupts or by age 1. Early visits build trust, prevent dental fear, and catch early childhood cavities before they develop."
    },
    ar: {
      q: "متى يجب أن تكون الزيارة الأولى للطفل إلى طبيب الأسنان؟",
      a: "يُوصى بإجراء الزيارة الأولى مع بزوغ أول سن لبني أو عند إتمام الطفل عامه الأول. هذه الزيارة المبكرة تبني علاقة ألفة وثقة وتمنع تسوس الأسنان المبكر."
    }
  },
  {
    category: "cerrahi",
    tr: {
      q: "Diş eti kanaması normal midir?",
      a: "Hayır, diş eti kanaması kesinlikle normal değildir ve diş eti iltihabının (gingivitis) ilk habercisidir. Diş taşı temizliği ve düzenli fırçalama ile kolayca tedavi edilebilir. İhmal edilirse kemik kaybına yol açabilir."
    },
    en: {
      q: "Is bleeding from the gums normal?",
      a: "No, bleeding gums are never normal and indicate early gingival inflammation (gingivitis). It is easily resolved through professional hygiene scaling and proper brushing before bone loss occurs."
    },
    ar: {
      q: "هل نزيف اللثة أثناء تنظيف الأسنان أمر طبيعي؟",
      a: "كلا، نزيف اللثة ليس أمراً طبيعياً أبداً وهو أول مؤشرات التهاب اللثة (Gingivitis). يمكن علاجه بسهولة بجلسة تنظيف جير الأسنان والفرشاة الصحيحة لتجنب تراجع العظم."
    }
  },
  {
    category: "estetik",
    tr: {
      q: "Diş beyazlatma sonrası nelere dikkat etmeliyim?",
      a: "Beyazlatma sonrasındaki ilk 48 saat diş gözenekleri açık olduğundan çay, kahve, kırmızı şarap, vişne suyu, salçalı yemekler ve sigaradan kesinlikle kaçınılması 'beyaz diyet' yapılması tavsiye edilir."
    },
    en: {
      q: "What should I follow after teeth whitening?",
      a: "During the first 48 hours following whitening, adhere to a 'white diet'. Avoid dark staining beverages such as coffee, tea, red wine, dark sauces, and tobacco to preserve optimal brightness."
    },
    ar: {
      q: "ما هي النصائح المتبعة بعد جلسة تبييض الأسنان؟",
      a: "خلال أول 48 ساعة بعد التبييض، يُنصح باتباع 'الحمية البيضاء' بالابتعاد التام عن القهوة والشاي والمشروبات الملونة والأطعمة التي تحوي صلصة الطماطم والتدخين لضمان ثبات البياض."
    }
  }
];

// Patient Reviews with TR / EN / AR support (Real Google Reviews)
export const reviewsData = [
  {
    name: "Murat Çelik",
    location: "İstanbul (Maslak)",
    treatment: "İmplant & Zirkonyum Kaplama",
    rating: 5,
    date: "1 hafta önce",
    avatarColor: "bg-blue-600",
    tr: {
      comment: "Dr. Kerem Hoca'ya 2 adet implant ve zirkonyum kaplama yaptırdım. Cerrahi işlem esnasında hiçbir ağrı hissetmedim. Kliniğin hijyeni, modern cihazları ve personelin güler yüzü gerçekten adına yakışır seviyede."
    },
    en: {
      comment: "I had 2 dental implants and zirconia crowns done by Dr. Kerem. I experienced zero pain during the surgery. The clinic's hygiene and welcoming staff truly live up to the name!"
    },
    ar: {
      comment: "أجريت عمليتي زراعة أسنان وتيجان زيركون مع الدكتور كرم. لم أشعر بأي ألم خلال العملية، ومستوى النظافة وبشاشة الطاقم الطبي فوق الوصف."
    }
  },
  {
    name: "Ayşe Sena Polat",
    location: "İstanbul (Bahçelievler)",
    treatment: "Çocuk Diş Tedavisi (Pedodonti)",
    rating: 5,
    date: "2 hafta önce",
    avatarColor: "bg-pink-600",
    tr: {
      comment: "6 yaşındaki kızımın dişçi korkusunu Dr. Selin Hoca inanılmaz bir sevgi ve sabırla yendi. Kliniğin çocuklara özel oyunlu yaklaşımı mükemmel. Artık kızım kontrole severek koşarak geliyor!"
    },
    en: {
      comment: "Dr. Selin overcame my 6-year-old daughter's intense dental anxiety with incredible patience and love. The child-friendly environment is unmatched. She now visits happily!"
    },
    ar: {
      comment: "تغلبت الدكتورة سيلين على خوف ابنتي ذات الـ 6 سنوات من طبيب الأسنان بصبر ولطف مذهلين. أسلوب التعامل مع الأطفال استثنائي وهي الآن تحب زيارة العيادة."
    }
  },
  {
    name: "Emre Can Dağlı",
    location: "İstanbul (Güngören)",
    treatment: "Gömülü 20'lik Yaş Dişi Çekimi",
    rating: 5,
    date: "3 gün önce",
    avatarColor: "bg-indigo-600",
    tr: {
      comment: "Yıllardır çene cerrahisi korkum yüzünden ertelediğim zorlu gömülü 20'lik dişimi Kerem Hoca 10 dakikada tereyağından kıl çeker gibi aldı. Sonrasında ne şişlik ne de ağrı oldu, harika bir hekim."
    },
    en: {
      comment: "I had put off my impacted wisdom tooth extraction for years out of fear. Dr. Kerem extracted it in just 10 minutes effortlessly. No post-op pain or swelling at all."
    },
    ar: {
      comment: "قمت بتأجيل خلع ضرس العقل المطمور لسنوات خوفاً من الجراحة. الدكتور كرم خلعه في 10 دقائق فقط بسلاسة ودون أي ألم أو تورم بعدها."
    }
  },
  {
    name: "Dr. Sarah Jenkins",
    location: "London, UK",
    treatment: "Hollywood Smile & Lamine",
    rating: 5,
    date: "3 hafta önce",
    avatarColor: "bg-emerald-600",
    tr: {
      comment: "Gülüş tasarımı için Londra'dan geldim. Sağlık Bakanlığı onaylı hijyen standartları, 3D dijital ağız içi tarama ve ağrısız yaklaşım bana tam güven verdi. Sonuç beklentilerimin çok ötesinde."
    },
    en: {
      comment: "I visited Istanbul for my smile makeover with NovaDent Clinic. The Ministry of Health certified standards, modern 3D scanners, and gentle approach delivered flawless results!"
    },
    ar: {
      comment: "زرت العيادة قادمة من لندن لتصميم ابتسامتي. المعايير المعتمدة من وزارة الصحة والمسح الرقمي ثلاثي الأبعاد جعلتني أشعر بأمان تام. النتيجة فاقت توقعاتي!"
    }
  },
  {
    name: "Selin Korkmaz",
    location: "İstanbul (Bakırköy)",
    treatment: "Şeffaf Plak (Invisalign)",
    rating: 5,
    date: "1 ay önce",
    avatarColor: "bg-purple-600",
    tr: {
      comment: "Tel takmadan dişlerimin bu kadar kısa sürede düzeleceğine inanmıyordum. Şeffaf plak tedavim 7 ay gibi kısa bir sürede tamamlandı. Klinikteki tüm ekibe ilgileri ve samimiyetleri için çok teşekkür ederim."
    },
    en: {
      comment: "I couldn't believe my teeth could be straightened without metal braces. My clear aligner journey took only 7 months. Huge thanks to the wonderful team for their care!"
    },
    ar: {
      comment: "لم أكن أتخيل أن أسناني ستصبح مستقيمة دون تقويم معدني تقليدي! انتهت رحلتي مع التقويم الشفاف في 7 أشهر فقط بنتيجة مبهرة."
    }
  },
  {
    name: "Mustafa Karaca",
    location: "İstanbul (Maslak)",
    treatment: "Zirkonyum Kaplama & Köprü",
    rating: 5,
    date: "2 hafta önce",
    avatarColor: "bg-amber-600",
    tr: {
      comment: "İTÜ Ayazağa metro istasyonuna 3 dakika mesafede olması bizim için büyük kolaylık oldu. Eşimle birlikte geldik; hijyen ve kullanılan teknoloji üst seviye. Yapılan zirkonyum kaplamalar kendi dişimden farksız."
    },
    en: {
      comment: "Being only 3 minutes from the metro station in Maslak was very convenient. My wife and I visited together; the hygiene and technology are top tier. The zirconia crowns look 100% natural."
    },
    ar: {
      comment: "موقع العيادة على بعد 3 دقائق من محطة مترو مسلك كان مريحاً جداً لنا. النظافة والتكنولوجيا المتطورة متميزة وتيجان الزيركون تبدو طبيعية تماماً."
    }
  },
  {
    name: "خالد المنصور (Khalid Al-Mansoor)",
    location: "دبي، الإمارات (Dubai, UAE)",
    treatment: "Full Mouth Dental Implants",
    rating: 5,
    date: "1 month ago",
    avatarColor: "bg-teal-600",
    tr: {
      comment: "İstanbul'da mükemmel bir sağlık kuruluşu. Sağlık Bakanlığı onaylı yetki belgesi bana tam güven verdi. Şeffaf, ağrısız ve VIP kalitesinde bir tedavi süreci yaşadım. Tüm ekibe selamlar."
    },
    en: {
      comment: "An exceptional dental clinic in Istanbul. The Ministry of Health accreditation gave me complete peace of mind. The entire treatment was transparent, pain-free, and first-class."
    },
    ar: {
      comment: "مؤسسة طبية راقية ومتميزة في اسطنبول. ترخيص وزارة الصحة التركية منحني ثقة وطمأنينة تامة. تلقيت علاجاً شفافاً ومريحاً بدون أي ألم وعلى أعلى مستوى."
    }
  },
  {
    name: "Büşra Yılmaz",
    location: "İstanbul (Küçükçekmece)",
    treatment: "Lazerle Diş Beyazlatma (Bleaching)",
    rating: 5,
    date: "2 hafta önce",
    avatarColor: "bg-cyan-600",
    tr: {
      comment: "Düğünüm öncesinde diş beyazlatma için başvurdum. Tek seansta 4 ton açıldı ve hiçbir sızlama ya da hassasiyet yaşamadım. Fotoğraflarda gülüşüm harika çıktı, elinize sağlık!"
    },
    en: {
      comment: "I went for teeth whitening right before my wedding. In just one session my teeth brightened 4 shades with zero sensitivity. My smile looked incredible in our wedding photos!"
    },
    ar: {
      comment: "جئت لتبييض الأسنان قبل حفل زفافي. في جلسة واحدة فقط تفتحت أسناني بمقدار 4 درجات دون أي تحسس، والابتسامة كانت رائعة في الصور!"
    }
  },
  {
    name: "Kerem Aksoy",
    location: "İstanbul (Esenler)",
    treatment: "Ağrısız Kanal Tedavisi & Dolgu",
    rating: 5,
    date: "5 gün önce",
    avatarColor: "bg-red-600",
    tr: {
      comment: "Gece başlayan şiddetli diş ağrısıyla sabah acil olarak gittim. Hemen ilgilenip tek seansta kanal tedavisini tamamladılar. Koltukta hissettiğim tek şey rahatlıktı, ağrıdan anında kurtuldum."
    },
    en: {
      comment: "I rushed in as an emergency with severe tooth pain. They attended to me immediately and completed the root canal in one visit painlessly. True lifesavers!"
    },
    ar: {
      comment: "ذهبت إلى العيادة صباحاً كحالة طارئة بسبب ألم شديد. تم استقبالي فوراً وعلاج العصب في جلسة واحدة بدون أي ألم وتخلصت من الوجع تماماً."
    }
  },
  {
    name: "Ahmet Turan Yıldız",
    location: "İstanbul (Güngören)",
    treatment: "Yaprak Porselen Lamine",
    rating: 5,
    date: "1 ay önce",
    avatarColor: "bg-blue-700",
    tr: {
      comment: "Ön dişlerimdeki aralıklar ve kırıklar için lamine yaptırdım. Doğal diş minesi rengini öyle bir tutturdular ki kimse kaplama olduğunu anlamıyor. Özgüvenim tamamen yerine geldi."
    },
    en: {
      comment: "I had laminate veneers done for front tooth gaps and chipping. They matched my natural enamel shade so well that no one realizes they are veneers. My confidence is back."
    },
    ar: {
      comment: "قمت بتركيب عدسات الفينير للأسنان الأمامية لعلاج الفراغات. اختاروا درجة اللون بمهارة لا تصدق وبشكل طبيعي جداً بحيث لا يلاحظ أحد أنها عدسات."
    }
  },
  {
    name: "Merve Aydın",
    location: "İstanbul (Başakşehir)",
    treatment: "Çocuk Süt Dişi Dolgusu",
    rating: 5,
    date: "2 hafta önce",
    avatarColor: "bg-orange-600",
    tr: {
      comment: "4 yaşındaki oğlum daha önce başka klinikte travma yaşamıştı. Dr. Selin Hanım oyun oynatarak, masallar anlatıp hediyeler vererek dolgusunu bitirdi. Çocuğum klinikten gülerek çıktı, minnettarız."
    },
    en: {
      comment: "My 4-year-old son had dental trauma previously. Dr. Selin completed his filling while telling stories and playing games. He walked out smiling, so grateful!"
    },
    ar: {
      comment: "كان ابني البالغ 4 سنوات يعاني من خوف بسبب تجربة سابقة. الدكتورة سيلين عالجت سنه بلطف وألعاب وقصص وخرج يبتسم وسعيداً جداً."
    }
  },
  {
    name: "Jean-Pierre Dubois",
    location: "Paris, France",
    treatment: "Dental Implants & Smile Makeover",
    rating: 5,
    date: "2 months ago",
    avatarColor: "bg-slate-700",
    tr: {
      comment: "Fransa'dan sağlık turizmi kapsamında geldim. Havalimanı karşılamasından klinik tedavisine kadar her detay kusursuzdu. Avrupa standartlarında sterilizasyon ve çok ilgili bir ekip."
    },
    en: {
      comment: "I traveled from Paris for dental care. From airport greeting to clinical treatment, every detail was seamless. European-grade hygiene and an exceptionally caring team."
    },
    ar: {
      comment: "سافرت من باريس ضمن برنامج السياحة العلاجية. من الاستقبال وحتى العلاج كانت كل التفاصيل مثالية، نظافة بمستوى أوروبي وطاقم ودود للغاية."
    }
  },
  {
    name: "Gamze Özkan",
    location: "İstanbul (Zeytinburnu)",
    treatment: "Estetik Kompozit Bonding",
    rating: 5,
    date: "4 gün önce",
    avatarColor: "bg-rose-600",
    tr: {
      comment: "Ön dişimdeki kırık için gittim, yarım saatte kendi dişimden ayırt edilemeyecek kadar kusursuz bir bonding dolgu yapıldı. Aynaya baktığımda inanamadım. İlginize çok teşekkür ederim."
    },
    en: {
      comment: "I went in for a chipped front tooth. In just 30 minutes, they crafted a composite bonding restoration indistinguishable from my real tooth. Amazing artistry!"
    },
    ar: {
      comment: "ذهبت بسبب كسر في السن الأمامي، وخلال نصف ساعة فقط تم ترميم السن بحشوة تجميلية مطابقة تماماً لشكل ولون أسناني الطبيعية."
    }
  },
  {
    name: "Mehmet Ali Şahin",
    location: "İstanbul (Fatih)",
    treatment: "All-on-4 İmplant & Sabit Diş",
    rating: 5,
    date: "1 hafta önce",
    avatarColor: "bg-blue-800",
    tr: {
      comment: "Alt çenede hiç dişim kalmamıştı, hareketli protezden bıkmıştım. Kerem Bey All-on-4 tekniğiyle aynı gün geçici sabit dişlerimi taktı. Artık rahatça yemek yiyebiliyorum, yeniden doğmuş gibiyim."
    },
    en: {
      comment: "I had no bottom teeth left and was exhausted by removable dentures. Dr. Kerem gave me fixed teeth on the same day using the All-on-4 technique. I can eat comfortably again!"
    },
    ar: {
      comment: "لم يكن لدي أي أسنان في الفك السفلي وسئمت من الأطقم المتحركة. الدكتور كرم قام بزراعة بتقنية All-on-4 وركب لي أسناناً ثابتة في نفس اليوم."
    }
  },
  {
    name: "Hülya Tanrıkulu",
    location: "İstanbul (Başakşehir)",
    treatment: "Diş Taşı Temizliği & Diş Eti Tedavisi",
    rating: 5,
    date: "1 hafta önce",
    avatarColor: "bg-emerald-700",
    tr: {
      comment: "Diş eti kanaması şikayetiyle başvurdum. Ultrasonik cihazlarla derinlemesine temizlik yapıldı ve doğru fırçalama eğitimi verildi. Kanamam tamamen durdu, ferah bir nefese kavuştum."
    },
    en: {
      comment: "I visited due to bleeding gums. They performed a thorough ultrasonic cleaning and periodontal care. The bleeding stopped completely and my mouth feels fresh."
    },
    ar: {
      comment: "راجعت العيادة بسبب نزيف اللثة. خضعت لتنظيف عميق بالأجهزة فوق الصوتية وعلاج لثوي متخصص، وتوقف النزيف تماماً واستعدت صحة فمي."
    }
  },
  {
    name: "Serkan Vural",
    location: "İstanbul (Maslak)",
    treatment: "Zirkonyum Köprü & Estetik",
    rating: 5,
    date: "2 hafta önce",
    avatarColor: "bg-amber-700",
    tr: {
      comment: "Eski metal destekli porselenlerimin diş etinde yaptığı morluklardan çok rahatsızdım. Zirkonyumla yenilendi, diş etlerim pembe ve sağlıklı görünümüne kavuştu. İlginiz için teşekkürler."
    },
    en: {
      comment: "Old metal-fused crowns had left dark lines on my gumline. NovaDent replaced them with modern zirconia; my gums are healthy and pink again. Extremely pleased!"
    },
    ar: {
      comment: "كنت منزعجاً من السواد عند حافة اللثة الناتج عن التيجان المعدنية القديمة. تم استبدالها بالزيركون الحديث واستعادت لثتي لونها الوردي الصحي."
    }
  },
  {
    name: "Canan Erdem",
    location: "İstanbul (Küçükçekmece)",
    treatment: "Çocuk Diş Dolgusu & Yer Tutucu",
    rating: 5,
    date: "3 hafta önce",
    avatarColor: "bg-pink-700",
    tr: {
      comment: "Aşırı korkusu ve öğürme refleksi olan oğlumun çürüklerini Selin Hoca'nın sakinleştirici yaklaşımıyla hiçbir zorluk yaşamadan tedavi ettik. Anne olarak içim o kadar rahatladı ki anlatamam."
    },
    en: {
      comment: "My son had severe gag reflex and dental anxiety. Dr. Selin treated his cavities with gentle patience and zero stress. As a mother, I am endlessly grateful."
    },
    ar: {
      comment: "كان ابني يعاني من منعكس إقياء شديد وخوف من الطبيب. الدكتورة سيلين عالجت أسنانه برفق وهدوء تام دون أي توتر. ممتنة جداً لها."
    }
  },
  {
    name: "Ali Rıza Keskin",
    location: "İstanbul (Esenler)",
    treatment: "Diş Çekimi & Kemik Grefti",
    rating: 5,
    date: "3 hafta önce",
    avatarColor: "bg-slate-800",
    tr: {
      comment: "Kırık kök çekimi ve implant öncesi kemik tozu uygulaması yapıldı. İşlem sırasında bir saniye bile acı duymadım. Kerem Bey'in el hafifliği konusunda üzerine tanımam."
    },
    en: {
      comment: "I had a broken root extracted and bone grafting performed prior to implants. I didn't feel a second of pain. Dr. Kerem's gentle technique is unmatched."
    },
    ar: {
      comment: "أجريت خلعاً لجذر مكسور مع زراعة طعم عظمي قبل الغرسات. لم أشعر بأي ألم على الإطلاق، وخفة يد الدكتور كرم استثنائية."
    }
  },
  {
    name: "Fatma Zehra Öztürk",
    location: "İstanbul (Sarıyer)",
    treatment: "Genel Kontrol & Diş Beyazlatma",
    rating: 5,
    date: "1 ay önce",
    avatarColor: "bg-teal-700",
    tr: {
      comment: "Evimin hemen yakınında böyle nezih, tertemiz ve profesyonel bir poliklinik olması büyük şans. Beyazlatma işlemi sonrası dişlerim inci gibi oldu, herkes nerede yaptırdığımı soruyor."
    },
    en: {
      comment: "Having such a pristine, modern clinic right in our neighborhood is a blessing. After the whitening treatment, my teeth look radiant. Everyone asks where I had it done!"
    },
    ar: {
      comment: "وجود عيادة بهذا الرقي والنظافة والاحترافية بجوار منزلي نعمة كبيرة. بعد التبييض أصبحت أسناني كاللؤلؤ والجميع يسألني عن العيادة."
    }
  },
  {
    name: "Thomas Müller",
    location: "Berlin, Germany",
    treatment: "Dental Tourism - Zirconia Makeover",
    rating: 5,
    date: "1 month ago",
    avatarColor: "bg-zinc-700",
    tr: {
      comment: "Berlin'den tavsiye üzerine geldim. Fiyat ve kalite dengesi Almanya ile kıyaslanamayacak kadar avantajlı. 6 günde tüm üst çene zirkonyum kaplamalarım takıldı, harika bir ekip."
    },
    en: {
      comment: "I came from Berlin on recommendation. The quality and price ratio is far superior compared to Germany. My full upper zirconia restoration was done in 6 days. Superb team!"
    },
    ar: {
      comment: "حضرت من برلين بتوصية من أصدقائي. جودة العلاج والأسعار أفضل بكثير مما هو عليه في ألمانيا. أنهيت تيجان الزيركون للفك العلوي في 6 أيام فقط."
    }
  },
  {
    name: "Zeynep Karahan",
    location: "İstanbul (Bahçelievler)",
    treatment: "Porselen Dolgu (Inlay/Onlay)",
    rating: 5,
    date: "1 ay önce",
    avatarColor: "bg-violet-600",
    tr: {
      comment: "Geniş çürük nedeniyle kaplama yapılması düşünülürken kendi dişimi koruyup porselen onlay dolgu yaptılar. Dişimi kaybetmeden kurtardıkları için minnettarım."
    },
    en: {
      comment: "Instead of grinding my tooth down for a full crown, they preserved my natural tooth with a custom porcelain onlay. Truly ethical and conservative dentistry!"
    },
    ar: {
      comment: "بدلاً من برد السن وتركيب تاج كامل، حافظ الأطباء على بنيتي السنية الطبيعية بحشوة بورسلين مصبوبة (أونلاي). علاج محافظ وأخلاقي رفيع."
    }
  },
  {
    name: "Hakan Demirtaş",
    location: "İstanbul (Maslak)",
    treatment: "Çene Cerrahisi & Kist Operasyonu",
    rating: 5,
    date: "1 ay önce",
    avatarColor: "bg-cyan-700",
    tr: {
      comment: "Röntgenimde tespit edilen çene kistini cerrahi olarak aldırdım. Operasyon öncesinde tüm süreci 3D ekranda gösterip anlattılar, sıfır endişeyle girdim ve hızla iyileştim."
    },
    en: {
      comment: "I had a jaw cyst surgically removed. Dr. Kerem explained the entire 3D imaging beforehand, putting me at complete ease. Flawless surgery and speedy recovery."
    },
    ar: {
      comment: "أجريت عملية استئصال كيس فكي. شرح لي الطبيب الحالة على شاشة التصوير ثلاثي الأبعاد قبل البدء فدخلت باطمئنان تام وتعافيت بسرعة كبيرة."
    }
  },
  {
    name: "Elif Naz Şimşek",
    location: "İstanbul (Bakırköy)",
    treatment: "Gece Plağı (Bruksizm Tedavisi)",
    rating: 5,
    date: "2 ay önce",
    avatarColor: "bg-fuchsia-600",
    tr: {
      comment: "Gece diş sıkma yüzünden sabahları çene ve baş ağrısıyla uyanıyordum. Dijital ölçüyle hazırlanan gece plağı sayesinde ağrılarım tamamen bitti, uykum düzene girdi."
    },
    en: {
      comment: "I used to wake up with severe jaw clenching and headaches. The custom digital nightguard eliminated the pain completely. Finally sleeping peacefully!"
    },
    ar: {
      comment: "كنت أستيقظ يومياً بآلام في الفك وصداع بسبب صك الأسنان ليلاً. القالب الليلي الرقمي المخصص أنهى الآلام تماماً وأصبحت أنام براحة."
    }
  },
  {
    name: "Burak Yeldan",
    location: "İstanbul (Avcılar)",
    treatment: "Diş Lamine & Ön Diş Estetiği",
    rating: 5,
    date: "2 ay önce",
    avatarColor: "bg-blue-600",
    tr: {
      comment: "Gülüşümdeki asimetri fotoğraf çekilirken beni çok kısıtlıyordu. 4 adet lamine yapıldı, şimdi her fotoğrafta özgürce gülümsüyorum. Doktorlarımızın sanatı takdire şayan."
    },
    en: {
      comment: "Smile asymmetry always held me back in photos. I got 4 porcelain laminates and now smile freely in every picture. Pure medical artistry!"
    },
    ar: {
      comment: "عدم تناسق ابتسامتي كان يحرجني في الصور. قمت بتركيب 4 عدسات لامينا والآن أبتسم بكل ثقة وحرية في كل صورة."
    }
  },
  {
    name: "Maryam Al-Kandari",
    location: "Kuwait City, Kuwait",
    treatment: "Cosmetic Dentistry & Veneers",
    rating: 5,
    date: "2 months ago",
    avatarColor: "bg-emerald-800",
    tr: {
      comment: "Kuveyt'ten tavsiye üzerine NovaDent Kliniği'ne geldim. Sağlık turizmi koordinasyonu, tercüman desteği ve otel transferi çok profesyoneldi. Gülüşüm harika oldu."
    },
    en: {
      comment: "Traveled from Kuwait based on high recommendations. The medical tourism support, translation, and hotel transfers were outstanding. My new smile is stunning!"
    },
    ar: {
      comment: "حضرت من الكويت بتوصية خاصة. خدمة السياحة العلاجية والترجمة والتنقلات كانت على أعلى مستوى من الاحترافية، والابتسامة الجديدة رائعة جداً."
    }
  },
  {
    name: "Oğuzhan Çetin",
    location: "İstanbul (Güngören)",
    treatment: "Öğürme Refleksli Hastaya Diş Tedavisi",
    rating: 5,
    date: "2 ay önce",
    avatarColor: "bg-amber-800",
    tr: {
      comment: "Ağzıma ayna girdiği anda öğüren biriyim, bu yüzden yıllarca dişçiye gidemedim. Klinikteki özel teknikler ve hekimin sonsuz sabrı sayesinde tüm dolgularım sorunsuz bitti."
    },
    en: {
      comment: "I have a severe gag reflex and couldn't visit dentists for years. With their specialized techniques and endless patience, all my fillings were done comfortably."
    },
    ar: {
      comment: "لدي منعكس إقياء شديد منعني لسنوات من الذهاب لطبيب الأسنان. بفضل التقنيات الخاصة وصبر الفريق الطبي أنهيت جميع حشواتي براحة تامة."
    }
  },
  {
    name: "Dilek Aktaş",
    location: "İstanbul (Beylikdüzü)",
    treatment: "Şeffaf Plak & Diş Beyazlatma",
    rating: 5,
    date: "3 ay önce",
    avatarColor: "bg-rose-700",
    tr: {
      comment: "Şeffaf plak tedavim bittikten sonra beyazlatma da uyguladılar. Hayatımda aldığım en profesyonel ve sıcak sağlık hizmetiydi. Emeği geçen herkese sonsuz teşekkürler."
    },
    en: {
      comment: "After finishing my clear aligners, they provided a complimentary brightening touch. Truly the best healthcare experience of my life. Highly recommended!"
    },
    ar: {
      comment: "بعد انتهاء تقويمي الشفاف أجروا لي تبييضاً متميزاً للأسنان. كانت أفضل تجربة رعاية صحية مررت بها في حياتي. شكراً من القلب لكل الطاقم."
    }
  },
  {
    name: "Hüseyin Avni Bilgin",
    location: "İstanbul (Maslak)",
    treatment: "İmplant Destekli Sabit Çene Protezi",
    rating: 5,
    date: "3 ay önce",
    avatarColor: "bg-indigo-700",
    tr: {
      comment: "68 yaşındayım, kemik erimesi olduğu için başka yerler implant yapamazsın demişti. Kerem Bey özel cerrahiyle 4 implantımı yaptı, sabit dişlerimi taktı. Çiğneyebilmek ne büyük nimetmiş."
    },
    en: {
      comment: "I'm 68 and other clinics told me implants were impossible due to bone loss. Dr. Kerem performed specialized surgery and gave me fixed teeth. Being able to chew properly is a blessing."
    },
    ar: {
      comment: "عمري 68 عاماً وأخبرتني عيادات أخرى باستحالة الزراعة لنقص العظم. الدكتور كرم أجرى جراحة دقيقة وركب لي أسناناً ثابتة على 4 غرسات. نعمة عظيمة!"
    }
  }
];
