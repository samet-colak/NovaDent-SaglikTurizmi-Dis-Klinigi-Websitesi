export const quizContent = {
  tr: {
    badge: "Kişiselleştirilmiş Klinik Teşhis Danışmanı",
    title: "Hangi Diş Tedavisi Size Uygun?",
    subtitle: "Ağız ve diş sağlığı ihtiyaçlarınıza en uygun tedavi protokolünü hekimlerimizin algoritmalarıyla 1 dakikada keşfedin.",
    step1Tag: "1. Adım: Şikayet & İhtiyaç",
    step1Title: "Dişlerinizde veya gülüşünüzde çözmek istediğiniz durum nedir?",
    step1Sub: "Size en uygun tedaviyi belirlemek için öncelikli durumunuzu seçin.",
    
    step2Tag: "2. Adım: Tedavi Beklentisi",
    step2Title: "Tedavinizde sizin için en belirleyici kriter hangisi?",
    step2Sub: "Zamanlama, estetik ve konfor tercihinizi belirleyin.",
    
    step3Tag: "3. Adım: Mevcut Ağız Durumu",
    step3Title: "Ağız içi geçmişiniz ve elinizdeki tıbbi veriler:",
    step3Sub: "Hekimlerimizin size en doğru planı sunabilmesi için durumunuzu seçin.",
    
    backBtn: "← Önceki Adım",
    nextBtn: "İlerle →",
    restartBtn: "Testi Baştan Başlat",
    
    resultHeader: {
      badge: "Kişiselleştirilmiş Klinik Tedavi Raporu",
      title: "Size Özel Önerilen Tedavi Protokolü",
      summaryPre: "Değerlendirilen durumunuz:",
      summaryMid: "ve öncelikli hedefiniz:",
      summaryPost: "doğrultusunda hazırlanan tedavi yol haritanız aşağıdadır.",
    },
    
    resultLabels: {
      primaryTreatment: "Önerilen Ana Tedavi",
      secondaryTreatment: "Destekleyici / Koruyucu Tedavi",
      estimatedDuration: "Tahmini Tedavi Süresi",
      comfortIndex: "Ağrı & Konfor Seviyesi",
      recommendedDoctor: "İlgili Uzman Hekimimiz",
      roadmapTitle: "Tedavi Süreç Yol Haritası (3 Adım)",
      clinicalAdviceTitle: "Hekim Tavsiyesi & Klinik Notu",
      whatsappBtn: "Bu Raporla WhatsApp'tan Bilgi & Randevu Al",
      bookBtn: "Bu Tedavi Planı İçin Randevu Oluştur",
    },

    // 10 Kapsamlı ve Sadeleştirilmiş Tedavi Yolu
    concerns: [
      {
        id: "missing",
        title: "Eksik Diş & Çiğneme Zorluğu",
        desc: "Bir veya birden fazla diş kaybı, çiğneme güçlüğü.",
        tag: "İmplant",
        recKey: "implant"
      },
      {
        id: "crooked",
        title: "Çapraşık veya Ayrık Dişler",
        desc: "Eğri, üst üste binen dişler veya diş aralıkları.",
        tag: "Şeffaf Plak",
        recKey: "invisalign"
      },
      {
        id: "aesthetic",
        title: "Gülüş Estetiği & Hollywood Smile",
        desc: "Daha beyaz, simetrik ve kusursuz bir gülüş tasarımı.",
        tag: "Estetik Gülüş",
        recKey: "hollywood"
      },
      {
        id: "broken",
        title: "Kırık, Aşınmış Diş / Eski Kaplama",
        desc: "Diş kırığı, aşınma veya eskiyen kaplamaların yenilenmesi.",
        tag: "Lamine & Zirkonyum",
        recKey: "lamine"
      },
      {
        id: "toothache",
        title: "Şiddetli Diş Ağrısı & Derin Çürük",
        desc: "Sıcak/soğuk sızısı, zonklama veya gece başlayan ağrı.",
        tag: "Kanal & Dolgu",
        recKey: "endodontics"
      },
      {
        id: "stains",
        title: "Diş Sararması & İnatçı Lekeler",
        desc: "Çay, kahve veya sigaraya bağlı renk değişimi.",
        tag: "Beyazlatma",
        recKey: "bleaching"
      },
      {
        id: "gum",
        title: "Diş Eti Kanaması & Çekilme",
        desc: "Fırçalarken kanama, diş eti hassasiyeti ve çekilme.",
        tag: "Diş Eti Bakımı",
        recKey: "periodontology"
      },
      {
        id: "bruxism",
        title: "Diş Sıkma (Bruksizm) & Çene Ağrısı",
        desc: "Uykuda diş sıkma, sabah çene yorgunluğu ve baş ağrısı.",
        tag: "Çene & Gece Plağı",
        recKey: "bruxism"
      },
      {
        id: "pain",
        title: "20'lik Diş Sancısı & Gömülü Diş",
        desc: "Çenede baskı, şişlik veya gömülü 20'lik yaş dişi.",
        tag: "Ağrısız Cerrahi",
        recKey: "surgery"
      },
      {
        id: "pediatric",
        title: "Çocuk Diş Tedavisi (0-15 Yaş)",
        desc: "Süt dişi çürükleri, koruyucu flor ve çocuk diş hekimi.",
        tag: "Uzman Pedodonti",
        recKey: "pedodonti"
      }
    ],

    // Sadeleştirilmiş Hedefler
    goals: [
      {
        id: "fast",
        title: "Mümkün Olan En Hızlı Süreç",
        desc: "Kısa sürede, az seansta tamamlanan tedavi.",
        badge: "Hızlı Tedavi"
      },
      {
        id: "invisible",
        title: "Maksimum Doğallık & Estetik",
        desc: "Dışarıdan fark edilmeyen, doğal diş görünümü.",
        badge: "Doğal Görünüm"
      },
      {
        id: "permanent",
        title: "Ömür Boyu Dayanıklılık",
        desc: "Biyouyumlu, sağlam ve uzun yıllar güvenle kullanım.",
        badge: "Kalıcı Çözüm"
      },
      {
        id: "painless",
        title: "Ağrısız & Yüksek Konfor",
        desc: "Sıfır sızı, stressiz ve konforlu klinik deneyimi.",
        badge: "%100 Konfor"
      }
    ],

    // Sadeleştirilmiş Mevcut Durum Seçenekleri
    statusList: [
      {
        id: "has_xray",
        title: "Elimde Röntgen veya Fotoğraf Var",
        desc: "WhatsApp'tan hekime doğrudan iletebilirim."
      },
      {
        id: "need_xray",
        title: "Röntgenim Yok, Klinikte Çekilsin",
        desc: "İlk muayenede ücretsiz dijital 3D görüntüleme."
      },
      {
        id: "gum_issues",
        title: "Diş Etlerimde Kanama / Hassasiyet Var",
        desc: "Öncelikle diş eti sağlığının değerlendirilmesi."
      },
      {
        id: "first_visit",
        title: "İlk Kez Kapsamlı Muayeneye Geleceğim",
        desc: "Tüm ağız yapısı için detaylı muayene ve plan."
      }
    ],

    // 10 Tedavi Protokol Planı
    plans: {
      implant: {
        title: "Kalıcı İmplant Destekli Fonksiyonel Restorasyon",
        primary: "Biyouyumlu Titanyum Dental İmplant & Zirkonyum Kuron",
        secondary: "Kemik Grefti & Dijital Cerrahi Kılavuz Planlama",
        duration: "Cerrahi: 1 Seans (15-20 dk) / Kaynama: 2-3 Ay",
        comfort: "Lokal Anestezi ile %100 Ağrısız",
        doctor: "Dr. Kerem Yıldız (İmplantoloji & Cerrahi)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "implant",
        steps: [
          "1. 3D Tomografi & Kemik Ölçümü: Kemik yoğunluğu bilgisayarlı tomografiyle ölçülür.",
          "2. Konforlu İmplant Yerleşimi: Titanyum implant yuvasına hassasiyetle yerleştirilir.",
          "3. Daimi Zirkonyum Diş: Tam kaynama sonrası estetik ve güçlü daimi diş takılır."
        ],
        advice: "Eksik dişlerin boş bırakılması komşu dişlerin kaymasına ve kemik erimesine yol açar. İmplant tedavisi kemiği koruyarak yüz profilinin çökmesini engeller."
      },
      invisalign: {
        title: "Invisalign Dijital Telsiz Ortodonti Protokolü",
        primary: "Kişiye Özel Akıllı Invisalign Şeffaf Plaklar",
        secondary: "3D Dijital Simülasyon (iTero) & Tedavi Sonu Önizlemesi",
        duration: "6 - 14 Ay (Plaklar 1-2 haftada bir değiştirilir)",
        comfort: "Yara Yapmaz, Ağrısız & Yemeklerde Çıkarılabilir",
        doctor: "Dr. Mert Özkan (Ortodonti & Şeffaf Plak)",
        doctorId: "dr-mert-ozkan",
        serviceId: "invisalign",
        steps: [
          "1. 3D Dijital Tarama: Geleneksel ölçü kaşığı olmadan dijital tarayıcıyla ölçü alınır.",
          "2. Tedavi Simülasyonu: Dişlerin adım adım nasıl düzeleceği ekranda önceden izlenir.",
          "3. Plak Teslimi: Kişiye özel plak setiniz teslim edilir; günde 20-22 saat takılır."
        ],
        advice: "Invisalign şeffaf plaklar yemek yerken çıkarılabilir. Klasik tellerin oluşturduğu yanak/dudak yaralarını yaşamazsınız."
      },
      hollywood: {
        title: "Hollywood Smile Dijital Gülüş Tasarımı",
        primary: "Ultra İnce E-Max Lamine Veneer & Monolitik Zirkonyum",
        secondary: "Dijital Gülüş Mock-up Provası & Lazer Diş Eti Şekillendirme",
        duration: "5 - 7 Gün (Yalnızca 2-3 Seans)",
        comfort: "Minimum Aşındırma & Tamamen Ağrısız",
        doctor: "Dr. Caner Tekin & Dr. Kerem Yıldız",
        doctorId: "dr-caner-tekin",
        serviceId: "gulus-tasarimi",
        steps: [
          "1. Dijital Yüz Analizi: Yüz hatlarınıza ve ten renginize uygun altın oran formu tasarlanır.",
          "2. Ağız İçi Prova: Dişlere dokunmadan yeni gülüş ağzınızda geçici olarak test edilir.",
          "3. Kalıcı Sabitleme: Özel biyolojik yapıştırıcılarla laminalar dişe sabitlenir."
        ],
        advice: "Lamine porselenler çay, kahve ve sigara lekelerine karşı dirençlidir. Doğal diş minesi gibi ışığı yansıtır, yapay durmaz."
      },
      lamine: {
        title: "E-Max Porselen Lamine & Kırık Diş Restorasyonu",
        primary: "0.3 mm Ultra İnce E-Max Lamine Porselen / Kuron",
        secondary: "3D Dijital Tarama & Diş Koruyucu Minimal Hazırlık",
        duration: "5 - 7 Gün (Yalnızca 2 Seans)",
        comfort: "Minimum Aşındırma & Tamamen Ağrısız",
        doctor: "Dr. Caner Tekin (Protez & Estetik Diş)",
        doctorId: "dr-caner-tekin",
        serviceId: "lamine",
        steps: [
          "1. 3D Dijital Ölçü: Kırık veya aşınmış diş formu dijital ağız içi tarayıcıyla kaydedilir.",
          "2. CAD/CAM Üretim: Diş renginize birebir uyumlu porselenler laboratuvarda hazırlanır.",
          "3. Güçlü Bonding: Porselen dişiniz orijinal diş sağlamlığında sabitlenir."
        ],
        advice: "Aşınmış ve kırık dişler çiğneme dengesini bozar. Lamine ve zirkonyum kaplamalar estetik ve çiğneme gücünü aynı anda geri kazandırır."
      },
      endodontics: {
        title: "Ağrısız Kanal Tedavisi & Biyolojik Estetik Dolgu",
        primary: "Mikroskopik Döner Aletli Kanal Tedavisi & Kompozit Dolgu",
        secondary: "Dijital Hassas Apeks Bulucu & Koruyucu Restorasyon",
        duration: "1 Seans (35 - 45 Dakika)",
        comfort: "İleri Lokal Anestezi ile %100 Ağrısız",
        doctor: "Dr. Kerem Yıldız & Restoratif Ekip",
        doctorId: "dr-kerem-yildiz",
        serviceId: "implant",
        steps: [
          "1. Dijital Teşhis & Anestezi: İltihaplı sinir tespit edilir ve bölge tamamen uyuşturulur.",
          "2. Kök Kanallarının Temizlenmesi: İleri döner eğelerle kanallar mikroplardan arındırılır.",
          "3. Biyouyumlu Dolgu: Kanal sızdırmaz şekilde kapatılır ve estetik dolguyla onarılır."
        ],
        advice: "Zamanında yapılan kanal tedavisiyle diş çekilmekten kurtarılır. Kendi doğal dişinizi ağızda tutmak her zaman ilk önceliğimizdir."
      },
      bleaching: {
        title: "Ofis Tipi Lazerli Diş Beyazlatma",
        primary: "Medikal LED/Lazer Işık Aktivasyonlu Klinik Beyazlatma",
        secondary: "Diş Taşı Temizliği & Mine Koruyucu Cila",
        duration: "Tek Seans (45 Dakika)",
        comfort: "Hassasiyetsiz Formül & Hızlı Sonuç",
        doctor: "NovaDent Estetik Diş Hekimliği Ekibi",
        doctorId: "dr-caner-tekin",
        serviceId: "dis-beyazlatma",
        steps: [
          "1. Yüzey Temizliği: Diş yüzeyi pürüzsüzleştirilir, diş etleri bariyerle korunur.",
          "2. Beyazlatıcı Jel & Işık: 15'er dakikalık 3 periyot halinde medikal ışık uygulanır.",
          "3. Koruyucu Cila: 4 ila 8 ton açılma tescillenir ve koruyucu cila sürülür."
        ],
        advice: "İşlem diş minesini aşındırmaz; yalnızca gözeneklerdeki inatçı renk pigmentlerini temizler. İlk 48 saat beyaz diyetle sonuç uzun süre korunur."
      },
      periodontology: {
        title: "Lazer Destekli Diş Eti Tedavisi & Derin Temizlik",
        primary: "Ultrasonik Tartar Temizliği & Subgingival Küretaj",
        secondary: "Lazerle Diş Eti Dekontaminasyonu & Parlatma",
        duration: "1 - 2 Seans (30 - 40 Dakika)",
        comfort: "Hassasiyetsiz & Konforlu Uygulama",
        doctor: "Dr. Kerem Yıldız (Periodontoloji & Cerrahi)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "dis-beyazlatma",
        steps: [
          "1. Diş Eti Ceplerinin Ölçümü: Tartar derinliği ve diş eti durumu muayene edilir.",
          "2. Derin Temizlik: Diş kök yüzeyindeki bakteri plakları ve taşlar temizlenir.",
          "3. Doku Sıkılaştırma: Diş etlerinin pembe, sıkı ve sağlıklı formuna kavuşması sağlanır."
        ],
        advice: "Fırçalarken kanayan diş etleri iltihap habercisidir. Zamanında tedavi edilmezse sağlam dişlerin bile sallanmasına yol açabilir."
      },
      bruxism: {
        title: "Masseter Çene Botoksu & Kişiye Özel Gece Plağı",
        primary: "Çene Kası Rahatlatıcı Botoks & Şeffaf Gece Koruyucu Plak",
        secondary: "Çene Eklemi (TME) Fonksiyon ve Kapanış Analizi",
        duration: "Tek Seans (15 Dakika)",
        comfort: "İnce İğneli Ağrısız Uygulama, Sıfır İyileşme Süresi",
        doctor: "Dr. Caner Tekin & Çene Cerrahisi Ekibi",
        doctorId: "dr-caner-tekin",
        serviceId: "gulus-tasarimi",
        steps: [
          "1. Çene Kası Muayenesi: Aşırı çalışan masseter kası ve diş aşınmaları değerlendirilir.",
          "2. Ağrısız Botoks: Çiğneme kasına mikro enjeksiyon yapılarak istemsiz sıkma gücü dengelenir.",
          "3. Gece Plağı Teslimi: Uykuda dişlerin birbirine sürtünmesini engelleyen plak hazırlanır."
        ],
        advice: "Diş sıkmak diş boylarını kısaltır ve sabah baş ağrısına yol açar. Çene botoksu ve gece plağı kasları gevşeterek kalıcı rahatlık sağlar."
      },
      surgery: {
        title: "Ağrısız 20'lik Diş Çıkarılması & Mikrocerrahi",
        primary: "3D Panoramik Kılavuzlu Gömülü 20'lik Diş Operasyonu",
        secondary: "Doku Koruyucu Kök Rezeksiyonu & Kist Temizliği",
        duration: "20 - 30 Dakika",
        comfort: "Güçlü Lokal Anestezi ile Sıfır Ağrı",
        doctor: "Dr. Kerem Yıldız (Ağız ve Çene Cerrahisi)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "dis-cekimi-cerrahi",
        steps: [
          "1. 3D Dijital Görüntüleme: Sinir kanalları ve komşu diş mesafesi milimetrik ölçülür.",
          "2. Ağrısız Mikrocerrahi: Çevre dokuya zarar vermeden diş konforla çıkarılır.",
          "3. Hızlı İyileşme Protokolü: Şişlik ve sızı oluşmaması için özel dikiş ve bakım uygulanır."
        ],
        advice: "Yan yatan 20'lik dişler öndeki sağlıklı azı dişini çürütebilir veya diş dizilimini sıkıştırabilir. Erken teşhis büyük cerrahileri önler."
      },
      pedodonti: {
        title: "Uzman Pedodonti Çocuk Diş Koruma Protokolü",
        primary: "Ağrısız Süt Dişi Tedavisi, Biyolojik Dolgu & Florür",
        secondary: "Fissür Örtücü & Çapraşıklık Önleyici Yer Tutucu",
        duration: "20 - 30 Dakika (Oyun Tadında)",
        comfort: "Çocuk Psikolojisiyle %100 Korkusuz & Güler Yüzlü",
        doctor: "Dr. Selin Aksoy (Çocuk Diş Hekimi - Doktora)",
        doctorId: "dr-selin-aksoy",
        serviceId: "cocuk-dis",
        steps: [
          "1. Tanışma & Oyun Odası: Çocuğun hekimle güven ve dostluk kurması sağlanır.",
          "2. İğnesiz Koruyucu Bakım: Acısız, meyve aromalı flor vernikleriyle diş minesi güçlendirilir.",
          "3. Renkli Dolgular & Cesaret Diploması: Seans sonunda çocuğa cesaret ödülü verilir."
        ],
        advice: "Süt dişleri erken kaybedildiğinde altından gelecek daimi dişler çapraşık çıkar. Süt dişlerini korumak gelecekteki tel tedavisini önler."
      }
    }
  },

  en: {
    badge: "Personalized Clinical Diagnostic Advisor",
    title: "Which Dental Treatment is Right for You?",
    subtitle: "Discover the ideal clinical protocol tailored to your oral health needs in just 1 minute using our specialized algorithms.",
    step1Tag: "Step 1: Your Chief Concern",
    step1Title: "What condition would you like to resolve in your teeth or smile?",
    step1Sub: "Select your primary concern to help our specialists determine the optimal plan.",
    
    step2Tag: "Step 2: Treatment Priority",
    step2Title: "Which criteria is most decisive for your treatment journey?",
    step2Sub: "Select your preference for timeline, aesthetics, and comfort.",
    
    step3Tag: "Step 3: Current Oral Background",
    step3Title: "Your dental history and diagnostic records:",
    step3Sub: "Help our surgeons prepare the most accurate plan for your situation.",
    
    backBtn: "← Previous Step",
    nextBtn: "Continue →",
    restartBtn: "Restart Assessment",
    
    resultHeader: {
      badge: "Personalized Clinical Evaluation Report",
      title: "Your Tailored Dental Protocol",
      summaryPre: "Based on your evaluated concern of:",
      summaryMid: "and your key priority of:",
      summaryPost: "here is your customized 3-step clinical roadmap.",
    },
    
    resultLabels: {
      primaryTreatment: "Recommended Primary Treatment",
      secondaryTreatment: "Supportive / Preventive Care",
      estimatedDuration: "Estimated Treatment Timeline",
      comfortIndex: "Pain & Comfort Rating",
      recommendedDoctor: "Assigned Specialist",
      roadmapTitle: "3-Step Clinical Roadmap",
      clinicalAdviceTitle: "Surgeon's Clinical Advice & Notes",
      whatsappBtn: "Send Report on WhatsApp for Free Consultation",
      bookBtn: "Book Appointment for This Protocol",
    },

    concerns: [
      {
        id: "missing",
        title: "Missing Tooth / Chewing Difficulty",
        desc: "Single or multiple lost teeth, reduced bite function.",
        tag: "Implants",
        recKey: "implant"
      },
      {
        id: "crooked",
        title: "Crowded or Gapped Teeth",
        desc: "Misaligned teeth, crowding, or aesthetic gaps.",
        tag: "Clear Aligners",
        recKey: "invisalign"
      },
      {
        id: "aesthetic",
        title: "Smile Aesthetics & Hollywood Smile",
        desc: "Full aesthetic smile makeover for balanced symmetry.",
        tag: "Smile Makeover",
        recKey: "hollywood"
      },
      {
        id: "broken",
        title: "Chipped Tooth / Worn Enamel / Old Crowns",
        desc: "Fractured tooth, severe wear, or renewing old crowns.",
        tag: "Veneers & Zirconia",
        recKey: "lamine"
      },
      {
        id: "toothache",
        title: "Severe Toothache & Deep Decay",
        desc: "Throbbing pain, hot/cold sensitivity, or nerve pain.",
        tag: "Root Canal & Filling",
        recKey: "endodontics"
      },
      {
        id: "stains",
        title: "Yellowing & Enamel Stains",
        desc: "Discoloration from coffee, tea, smoking, or aging.",
        tag: "Whitening",
        recKey: "bleaching"
      },
      {
        id: "gum",
        title: "Bleeding Gums & Recession",
        desc: "Bleeding during brushing, sensitive or receded gums.",
        tag: "Periodontal Care",
        recKey: "periodontology"
      },
      {
        id: "bruxism",
        title: "Teeth Grinding (Bruxism) & Jaw Pain",
        desc: "Clenching teeth in sleep, morning jaw tiredness, headaches.",
        tag: "Jaw Botox & Guard",
        recKey: "bruxism"
      },
      {
        id: "pain",
        title: "Impacted Wisdom Tooth Pain",
        desc: "Pressure, swelling, or problematic third molars.",
        tag: "Painless Surgery",
        recKey: "surgery"
      },
      {
        id: "pediatric",
        title: "Pediatric Dentistry (Ages 0 to 15)",
        desc: "Milk teeth cavities, preventive fluoride, and gentle care.",
        tag: "Pedodontics",
        recKey: "pedodonti"
      }
    ],

    goals: [
      {
        id: "fast",
        title: "Fastest Possible Timeline",
        desc: "Completed in minimal visits with fast recovery.",
        badge: "Fast Treatment"
      },
      {
        id: "invisible",
        title: "Natural & Invisible Aesthetics",
        desc: "Discreet and unnoticeable, blending with natural teeth.",
        badge: "Natural Look"
      },
      {
        id: "permanent",
        title: "Lifetime Durability",
        desc: "Biocompatible, strong, and dependable long-term.",
        badge: "Permanent Solution"
      },
      {
        id: "painless",
        title: "100% Painless & High Comfort",
        desc: "Zero pain, gentle localized anesthesia, stress-free.",
        badge: "Maximum Comfort"
      }
    ],

    statusList: [
      {
        id: "has_xray",
        title: "I Have a Recent X-Ray or Photos",
        desc: "Can be forwarded directly to our surgeons on WhatsApp."
      },
      {
        id: "need_xray",
        title: "No X-Ray; Perform 3D Scan at Clinic",
        desc: "Complimentary digital 3D imaging during your initial visit."
      },
      {
        id: "gum_issues",
        title: "I Experience Gum Bleeding / Sensitivity",
        desc: "Gingival health check prior to prosthetic restorations."
      },
      {
        id: "first_visit",
        title: "This is My First Comprehensive Visit",
        desc: "Detailed oral mapping and itemized treatment plan."
      }
    ],

    plans: {
      implant: {
        title: "Permanent Implant-Supported Restoration",
        primary: "Biocompatible Titanium Dental Implant & Zirconia Crown",
        secondary: "Digital Surgical Guide & Bone Graft Assessment",
        duration: "Surgery: 1 Session (15-20 min) / Integration: 2-3 Months",
        comfort: "100% Pain-Free with Targeted Local Anesthesia",
        doctor: "Dr. Kerem Yıldız (Implantology & Oral Surgery)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "implant",
        steps: [
          "1. 3D Tomography & Bone Mapping: Precise density and nerve mapping with CT scanning.",
          "2. Minimally Invasive Placement: Titanium fixture is placed with micro-precision.",
          "3. Permanent Zirconia Crown: Once integrated, a strong, lifelike zirconia crown is affixed."
        ],
        advice: "Leaving missing teeth untreated causes neighboring teeth to drift and leads to jawbone loss. Implants stimulate bone density, preventing facial aging."
      },
      invisalign: {
        title: "Invisalign Digital Clear Aligner Protocol",
        primary: "Custom SmartTrack Invisalign Aligners",
        secondary: "3D Digital Simulation (iTero) & Outcome Visualization",
        duration: "6 - 14 Months (Trays changed every 1-2 weeks)",
        comfort: "Zero Mouth Sores, Pain-Free & Removable for Meals",
        doctor: "Dr. Mert Özkan (Orthodontics & Aligners)",
        doctorId: "dr-mert-ozkan",
        serviceId: "invisalign",
        steps: [
          "1. 3D Intraoral Scanning: Scanned digitally in seconds without uncomfortable putty.",
          "2. Simulation Preview: Watch a computerized 3D video of your teeth moving into place.",
          "3. Aligner Delivery & Monitoring: Wear your custom trays 20-22 hours daily with ease."
        ],
        advice: "Invisalign provides the flexibility to remove your aligners during meals, offering unbeatable comfort compared to traditional metal brackets."
      },
      hollywood: {
        title: "Hollywood Smile Digital Design & E-Max Veneers",
        primary: "Ultra-Thin E-Max Porcelain Veneers & Zirconia",
        secondary: "Aesthetic Mock-up Trial & Laser Gum Contouring",
        duration: "5 - 7 Days (Only 2-3 Sessions)",
        comfort: "Minimal Enamel Micro-Preparation & Completely Painless",
        doctor: "Dr. Caner Tekin & Dr. Kerem Yıldız",
        doctorId: "dr-caner-tekin",
        serviceId: "gulus-tasarimi",
        steps: [
          "1. Facial Symmetry Analysis: Designed with golden ratio software matching your smile arc.",
          "2. In-Mouth Mock-Up Trial: Preview your temporary new smile before any preparation.",
          "3. Permanent Bonding: Custom ceramic veneers are bonded with high-grade resin."
        ],
        advice: "E-Max porcelain veneers are completely impervious to staining from coffee, tea, and red wine. They reflect light just like natural tooth enamel."
      },
      lamine: {
        title: "E-Max Porcelain Veneers & Chipped Tooth Restoration",
        primary: "0.3 mm Ultra-Thin E-Max Laminate Porcelain / Crown",
        secondary: "3D Digital Scanning & Enamel-Preserving Micro-Preparation",
        duration: "5 - 7 Days (2 Sessions)",
        comfort: "Minimal Enamel Preparation & Completely Painless",
        doctor: "Dr. Caner Tekin (Prosthodontics & Aesthetic Dentistry)",
        doctorId: "dr-caner-tekin",
        serviceId: "lamine",
        steps: [
          "1. 3D Digital Scan: The damaged tooth geometry is captured using high-precision digital scanners.",
          "2. CAD/CAM Milling: Custom monolithic ceramics are milled to match your exact shade.",
          "3. High-Strength Bonding: Your tooth is permanently restored to natural strength and brilliance."
        ],
        advice: "Worn or fractured teeth compromise chewing balance. Veneers and zirconia crowns restore aesthetics and functional bite strength simultaneously."
      },
      endodontics: {
        title: "Painless Root Canal & Aesthetic Composite Filling",
        primary: "Microscopic Rotary Endodontics & Biomimetic Filling",
        secondary: "Electronic Apex Locator & Enamel-Preserving Isolation",
        duration: "1 Session (35 - 45 Minutes)",
        comfort: "100% Pain-Free with Advanced Local Anesthesia",
        doctor: "Dr. Kerem Yıldız & Restorative Dental Team",
        doctorId: "dr-kerem-yildiz",
        serviceId: "implant",
        steps: [
          "1. Digital Diagnosis & Numbing: The inflamed pulp is identified and thoroughly anesthetized.",
          "2. Rotary Canal Cleansing: High-tech rotary files sterilize and decontaminate the root canals.",
          "3. Hermetic Sealing: The canals are hermetically sealed and completed with a tooth-colored filling."
        ],
        advice: "Prompt endodontic treatment saves compromised teeth from extraction. Preserving your natural tooth is always our clinical priority."
      },
      bleaching: {
        title: "In-Office Clinical Laser Teeth Whitening",
        primary: "LED/Laser Light Activated Enamel Whitening",
        secondary: "Ultrasonic Scaling & Enamel Remineralization",
        duration: "Single Session (45 Minutes)",
        comfort: "Zero-Sensitivity Formula & Instant Results",
        doctor: "NovaDent Cosmetic Dental Team",
        doctorId: "dr-caner-tekin",
        serviceId: "dis-beyazlatma",
        steps: [
          "1. Surface Preparation: Teeth are polished and gums are shielded with a protective barrier.",
          "2. Laser Whitening Gel: Medical light is applied in 3 cycles of 15 minutes each.",
          "3. Remineralizing Polish: Teeth brighten 4 to 8 shades and are sealed with protective varnish."
        ],
        advice: "This procedure does not abrade enamel; it selectively oxidizes deep organic stain molecules. Results remain long-lasting with proper aftercare."
      },
      periodontology: {
        title: "Laser-Assisted Periodontal Care & Deep Scaling",
        primary: "Ultrasonic Scaling & Subgingival Root Planing",
        secondary: "Laser Gingival Decontamination & Polishing",
        duration: "1 - 2 Sessions (30 - 40 Minutes)",
        comfort: "Gentle, Sensitivity-Free Protocol",
        doctor: "Dr. Kerem Yıldız (Periodontology & Surgery)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "dis-beyazlatma",
        steps: [
          "1. Pocket Depth Mapping: Gingival pocket depths and calculus deposits are mapped.",
          "2. Deep Ultrasonic Debridement: Subgingival bacterial biofilm and hardened tartar are cleared.",
          "3. Gingival Regeneration: Laser therapy promotes tissue firming and pink, healthy gum contours."
        ],
        advice: "Bleeding gums during brushing indicate active inflammation. Untreated periodontal disease is the leading cause of tooth mobility and loss."
      },
      bruxism: {
        title: "Masseter Jaw Botox & Custom Night Guard",
        primary: "Masseter Muscle Relaxing Injection & Clear Night Splint",
        secondary: "Temporomandibular Joint (TMJ) Occlusal Evaluation",
        duration: "Single Session (15 Minutes)",
        comfort: "Micro-Needle Pain-Free Injection, Zero Downtime",
        doctor: "Dr. Caner Tekin & Maxillofacial Team",
        doctorId: "dr-caner-tekin",
        serviceId: "gulus-tasarimi",
        steps: [
          "1. Muscle Hypertrophy Evaluation: Clenching forces and enamel wear facets are assessed.",
          "2. Targeted Micro-Injections: Masseter hyperactivity is balanced without affecting normal chewing.",
          "3. Custom Night Splint: A personalized clear guard prevents tooth-to-tooth grinding during sleep."
        ],
        advice: "Nocturnal clenching wears down enamel and triggers morning headaches. Combining jaw botox with a night guard yields lasting relief."
      },
      surgery: {
        title: "Painless Wisdom Tooth Extraction & Microsurgery",
        primary: "3D Guided Surgical Extraction of Impacted Third Molars",
        secondary: "Tissue-Preserving Bone Debridement & Healing Suture",
        duration: "20 - 30 Minutes",
        comfort: "100% Pain-Free with Effective Local Anesthesia",
        doctor: "Dr. Kerem Yıldız (Oral & Maxillofacial Surgery)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "dis-cekimi-cerrahi",
        steps: [
          "1. 3D Digital Imaging: Nerve canals and root morphology are measured with sub-millimeter precision.",
          "2. Atraumatic Extraction: The tooth is gently extracted preserving neighboring bone structures.",
          "3. Anti-Swelling Protocol: Cold therapy guidelines and dissolvable sutures promote rapid healing."
        ],
        advice: "Impacted wisdom teeth can cause cavities in adjacent healthy molars and disrupt dental alignment. Timely removal prevents complex complications."
      },
      pedodonti: {
        title: "Specialist Pediatric Smile Protection Protocol",
        primary: "Gentle Baby Tooth Care, Biocompatible Fillings & Fluoride",
        secondary: "Fissure Sealants & Preventive Space Maintainers",
        duration: "20 - 30 Minutes (Playful Atmosphere)",
        comfort: "100% Fear-Free, Caring Child Psychology Approach",
        doctor: "Dr. Selin Aksoy (Pediatric Dentist - Ph.D.)",
        doctorId: "dr-selin-aksoy",
        serviceId: "cocuk-dis",
        steps: [
          "1. Playroom Introduction: Children establish trust and friendship with the dental team.",
          "2. Needle-Free Prevention: Fruit-flavored fluoride varnishes reinforce developing enamel.",
          "3. Fun Restorations & Bravery Diploma: A celebratory certificate and reward gift complete the visit."
        ],
        advice: "Baby teeth hold space for permanent dentition. Neglecting baby tooth decay can cause permanent teeth to erupt misaligned."
      }
    }
  },

  ar: {
    badge: "المستشار التشخيصي السريري المخصص",
    title: "ما هو العلاج المناسب لأسنانك؟",
    subtitle: "اكتشف الخطة العلاجية المثالية لاحتياجاتك خلال دقيقة واحدة عبر خوارزميات أطبائنا المتخصصة.",
    step1Tag: "الخطوة 1: شكواك واحتياجك",
    step1Title: "ما هي المشكلة الأساسية التي ترغب في حلها بأسنانك أو ابتسامتك؟",
    step1Sub: "حدد المشكلة ذات الأولوية القصوى لديك لنقترح لك العلاج الأمثل.",
    
    step2Tag: "الخطوة 2: أولوية العلاج",
    step2Title: "ما هو المعيار الأهم بالنسبة لك في رحلة العلاج؟",
    step2Sub: "حدد تفضيلاتك من حيث السرعة، المظهر الطبيعي والراحة.",
    
    step3Tag: "الخطوة 3: الحالة الفموية الحالية",
    step3Title: "تاريخك السني والبيانات الطبية المتوفرة لديك:",
    step3Sub: "ساعد أطباءنا في إعداد الخطة الأدق لحالتك الصحية.",
    
    backBtn: "← الخطوة السابقة",
    nextBtn: "متابعة ←",
    restartBtn: "إعادة الاختبار من البداية",
    
    resultHeader: {
      badge: "تقرير التقييم العلاجي السريري",
      title: "البروتوكول العلاجي المقترح خصيصاً لك",
      summaryPre: "بناءً على المشكلة المحددة:",
      summaryMid: "وأولويتك المفضلة:",
      summaryPost: "نقدم لك خارطة الطريق السريرية المخصصة لحالتك.",
    },
    
    resultLabels: {
      primaryTreatment: "العلاج الأساسي المقترح",
      secondaryTreatment: "العلاج الداعم والوقائي",
      estimatedDuration: "المدة التقديرية للعلاج",
      comfortIndex: "مستوى الراحة والألم",
      recommendedDoctor: "الطبيب الاستشاري المسؤول",
      roadmapTitle: "خارطة طريق العلاج (3 خطوات)",
      clinicalAdviceTitle: "نصيحة الطبيب وملاحظات العيادة",
      whatsappBtn: "إرسال التقرير عبر واتساب واستشارة الطبيب مجاناً",
      bookBtn: "حجز موعد لهذه الخطة العلاجية",
    },

    concerns: [
      {
        id: "missing",
        title: "فقدان الأسنان وصعوبة المضغ",
        desc: "فقد سن أو عدة أسنان وضعف وظيفة المضغ.",
        tag: "زراعة الأسنان",
        recKey: "implant"
      },
      {
        id: "crooked",
        title: "تزاحم أو اعوجاج أو فراغات الأسنان",
        desc: "أسنان متراكبة، فراغات جمالية، أو عدم انتظام العضة.",
        tag: "تقويم شفاف",
        recKey: "invisalign"
      },
      {
        id: "aesthetic",
        title: "تجميل الابتسامة (ابتسامة هوليوود)",
        desc: "ابتسامة ناصعة البياض ومتناسقة بالكامل.",
        tag: "ابتسامة هوليوود",
        recKey: "hollywood"
      },
      {
        id: "broken",
        title: "أسنان مكسورة / متآكلة / تلبيسات قديمة",
        desc: "كسر في السن، تآكل الميناء، أو تجديد التيجان القديمة.",
        tag: "فينير وزيركون",
        recKey: "lamine"
      },
      {
        id: "toothache",
        title: "ألم شديد في الأسنان وتسوس عميق",
        desc: "ألم نابض، حساسية مع البارد والحار، أو وجع ليلي.",
        tag: "علاج عصب وحشوات",
        recKey: "endodontics"
      },
      {
        id: "stains",
        title: "اصفرار مستعصٍ وتصبغات الأسنان",
        desc: "تغير اللون بسبب القهوة والشاي أو التدخين.",
        tag: "تبييض الأسنان",
        recKey: "bleaching"
      },
      {
        id: "gum",
        title: "نزيف اللثة وتراجعها",
        desc: "نزيف أثناء التنظيف، حساسية اللثة والتهابها.",
        tag: "عناية باللثة",
        recKey: "periodontology"
      },
      {
        id: "bruxism",
        title: "صرير الأسنان وألم الفك",
        desc: "الضغط على الأسنان أثناء النوم وإجهاد الفك الصباحي.",
        tag: "بوتوكس الفك والواقي",
        recKey: "bruxism"
      },
      {
        id: "pain",
        title: "ألم ضرس العقل والمشاكل الجراحية",
        desc: "ضغط وانتفاخ أو ضرس عقل مطمور في الفك.",
        tag: "جراحة بدون ألم",
        recKey: "surgery"
      },
      {
        id: "pediatric",
        title: "طب أسنان الأطفال (0-15 عاماً)",
        desc: "تسوس الأسنان اللبنية والفلورايد الوقائي.",
        tag: "استشاري أطفال",
        recKey: "pedodonti"
      }
    ],

    goals: [
      {
        id: "fast",
        title: "إنهاء العلاج بأسرع وقت ممكن",
        desc: "علاج مكتمل في أقل عدد من الجلسات والوقت.",
        badge: "علاج سريع"
      },
      {
        id: "invisible",
        title: "أقصى درجات الطبيعية والجمال",
        desc: "مظهر يماثل الأسنان الطبيعية تماماً دون أي مظهر اصطناعي.",
        badge: "مظهر طبيعي"
      },
      {
        id: "permanent",
        title: "متانة تدوم مدى الحياة",
        desc: "مواد متوافقة حيوياً قوية وتدوم لسنوات طويلة.",
        badge: "حل دائم"
      },
      {
        id: "painless",
        title: "علاج بدون ألم وأعلى درجات الراحة",
        desc: "تخدير موضعي فعال وتجربة خالية تماماً من التوتر.",
        badge: "%100 راحة"
      }
    ],

    statusList: [
      {
        id: "has_xray",
        title: "لدي أشعة بانورامية أو صور حديثة",
        desc: "يمكنني إرسالها للأطباء مباشرة عبر واتساب."
      },
      {
        id: "need_xray",
        title: "ليس لدي أشعة، أرغب بتصوير 3D في العيادة",
        desc: "تصوير بانورامي رقمي مجاني خلال أول زيارة."
      },
      {
        id: "gum_issues",
        title: "أعاني من نزيف أو حساسية في اللثة",
        desc: "يُفضل تقييم اللثة علاجياً قبل أي تركيبات."
      },
      {
        id: "first_visit",
        title: "هذه أول زيارة فحص شاملة لي",
        desc: "معاينة رقمية دقيقة لكامل الفم وخطة مفصلة."
      }
    ],

    plans: {
      implant: {
        title: "الترميم الوظيفي الدائم المدعوم بزراعة الأسنان",
        primary: "غرسات تيتانيوم حيوية متطورة وتيجان الزيركون",
        secondary: "تقييم الطعوم العظمية والتخطيط الرقمي الموجه",
        duration: "الجراحة: جلسة واحدة (15-20 دقيقة) / الالتحام: 2-3 أشهر",
        comfort: "%100 بدون ألم تحت التخدير الموضعي الفعال",
        doctor: "د. رسول إلتر (استشاري زراعة وجراحة الأسنان)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "implant",
        steps: [
          "1. التصوير المقطعي 3D: قياس كثافة العظام ومسارات الأعصاب بدقة.",
          "2. وضع الغرسة: تثبيت غرسة التيتانيوم بتدخل طفيف وبدون ألم.",
          "3. تاج الزيركون النهائي: تركيب السن الدائم بصلابة وقوة متطابقة مع الطبيعي."
        ],
        advice: "ترك الأسنان المفقودة يؤدي لتراجع عظم الفك وميلان الأسنان المجاورة. الزراعة تحافظ على عظام الفك وملامح الوجه."
      },
      invisalign: {
        title: "بروتوكول التقويم الشفاف الرقمي (Invisalign)",
        primary: "قوالب إنفزلاين الشفافة الذكية والمخصصة",
        secondary: "المحاكاة الرقمية 3D (iTero) ومعاينة النتيجة مسبقاً",
        duration: "6 إلى 14 شهراً (تبديل القوالب كل أسبوع إلى أسبوعين)",
        comfort: "غير مرئي، بدون جروح، وقابل للإزالة أثناء الطعام",
        doctor: "د. سرجان قادر دومان (استشاري التقويم والقوالب الشفافة)",
        doctorId: "dr-mert-ozkan",
        serviceId: "invisalign",
        steps: [
          "1. المسح الرقمي 3D: أخذ القياس بكاميرا رقمية دون معجون تقليدي مزعج.",
          "2. محاكاة النتيجة: مشاهدة فيديو يوضح حركة الأسنان نحو موضعها الصحيح.",
          "3. تسليم القوالب: ارتداء القوالب الشفافة بسهولة لمدة 20-22 ساعة يومياً."
        ],
        advice: "يمنحك التقويم الشفاف حرية إزالته عند الأكل وفي المناسبات، وتتجنب جروح الأسلاك المعدنية التقليدية تماماً."
      },
      hollywood: {
        title: "ابتسامة هوليوود الرقمية وعدسات إيماكس",
        primary: "عدسات إيماكس فينير فائقة الرقة وزيركونيوم تجميلي",
        secondary: "تجربة الابتسامة المسبقة (Mock-up) وتجميل اللثة بالليزر",
        duration: "5 إلى 7 أيام (2-3 جلسات فقط)",
        comfort: "برد مجهري طفيف جداً للميناء وبدون أي ألم",
        doctor: "د. أوتكو شنغول و د. رسول إلتر",
        doctorId: "dr-caner-tekin",
        serviceId: "gulus-tasarimi",
        steps: [
          "1. التحليل الرقمي: تصميم الابتسامة بالكمبيوتر بناءً على ملامح وجهك ولون بشرتك.",
          "2. التجربة المسبقة: تجربة الابتسامة الجديدة داخل الفم قبل البدء بأي خطوة.",
          "3. التثبيت النهائي: تثبيت العدسات الدائمة بمواد لاصقة حيوية قوية."
        ],
        advice: "عدسات الإيماكس لا تتصبغ أبداً بالقهوة والشاي وتعكس الضوء تماماً مثل ميناء الأسنان الطبيعي دون أي مظهر مصطنع."
      },
      lamine: {
        title: "ترميم الأسنان المتآكلة والمكسورة بعدسات إيماكس",
        primary: "عدسات وتيجان إيماكس فائقة الرقة (0.3 ملم)",
        secondary: "مسح رقمي 3D وتجهيز محافظ على بنية السن",
        duration: "5 إلى 7 أيام (جلستان فقط)",
        comfort: "برد طفيف جداً وبدون ألم إطلاقاً",
        doctor: "د. أوتكو شنغول (استشاري التركيبات والتجميل)",
        doctorId: "dr-caner-tekin",
        serviceId: "lamine",
        steps: [
          "1. المسح الرقمي 3D: تصوير السن المتضرر بالماسح الرقمي ثلاثي الأبعاد بدقة.",
          "2. التصنيع بالكمبيوتر: نحت الخزف بلون وملمس متطابق مع أسنانك الطبيعية.",
          "3. التثبيت المقاوم: استعادة قوة ومتانة السن الأصلية ومظهره الجمالي."
        ],
        advice: "الأسنان المتآكلة والمكسورة تؤثر على توازن المضغ. التيجان وعدسات الفينير تعيد المظهر الجمالي وقوة المضغ معاً."
      },
      endodontics: {
        title: "علاج جذور الأسنان بدون ألم والحشوات التجميلية",
        primary: "علاج العصب بالمجهر والأجهزة الدوارة والحشوات الحيوية",
        secondary: "محدد ذروة إلكتروني دقيق وعزل وقائي",
        duration: "جلسة واحدة (35 - 45 دقيقة)",
        comfort: "%100 بدون ألم بالتخدير الموضعي المتقدم",
        doctor: "د. رسول إلتر وفريق العلاج التحفظي",
        doctorId: "dr-kerem-yildiz",
        serviceId: "implant",
        steps: [
          "1. التشخيص والتخدير: تحديد السن المصاب وتخدير المنطقة بالكامل بدون ألم.",
          "2. تنظيف القنوات: تعقيم قنوات الجذور بأحدث الأدوات الدوارة للقضاء على البكتيريا.",
          "3. الحشو المحكم: إغلاق القناة بإحكام وترميم تاج السن بحشوة تجميلية."
        ],
        advice: "علاج العصب ينقذ سنك الطبيعي من القلع للأبد. الحفاظ على سنك الطبيعي هو دائماً خيارنا الأول والأنسب."
      },
      bleaching: {
        title: "تبييض الأسنان بالليزر في العيادة",
        primary: "تبييض سريري بضوء الليزر / LED الطبي",
        secondary: "إزالة الجير وتلميع وقائي للميناء",
        duration: "جلسة واحدة (45 دقيقة)",
        comfort: "تركيبة آمنة بدون حساسية ونتائج فورية",
        doctor: "فريق التجميل في عيادة نوفادنت",
        doctorId: "dr-caner-tekin",
        serviceId: "dis-beyazlatma",
        steps: [
          "1. تنظيف السطح: إزالة الرواسب وعزل اللثة بحاجز وقائي آمن.",
          "2. الجل المنشط بالليزر: تطبيق الضوء الطبي على 3 فترات كل منها 15 دقيقة.",
          "3. التلميع الواقي: تفتيح لون الأسنان من 4 إلى 8 درجات وتطبيق طبقة واقية."
        ],
        advice: "الإجراء لا يضر ميناء الأسنان نهائياً، بل ينظف التصبغات العميقة فقط. يدوم البياض طويلاً مع العناية اليومية."
      },
      periodontology: {
        title: "علاج اللثة بالليزر والتنظيف العميق",
        primary: "تنظيف الجير بالموجات فوق الصوتية وتنعيم الجذور",
        secondary: "تعقيم اللثة بالليزر وتلميع وقائي",
        duration: "1 إلى 2 جلسة (30 - 40 دقيقة)",
        comfort: "إجراء لطيف وبدون أي حساسية",
        doctor: "د. رسول إلتر (جراحة وأمراض اللثة)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "dis-beyazlatma",
        steps: [
          "1. فحص الجيوب اللثوية: قياس عمق الجيوب وترسبات الجير بدقة.",
          "2. التنظيف العميق: إزالة البلاك الجرثومي والجير الصلب تحت اللثة بالكامل.",
          "3. شد وتجديد الأنسجة: استعادة لون اللثة الوردي الصحي وتماسكها حول السن."
        ],
        advice: "نزيف اللثة مؤشر مباشر على وجود التهاب. إهمال العلاج قد يؤدي لتخلخل حتى الأسنان السليمة وسقوطها."
      },
      bruxism: {
        title: "بوتوكس عضلات الفك والواقي الليلي للصرير",
        primary: "حقن مهدئ لعضلات الفك (الماستر) وواقي ليلي شفاف مخصص",
        secondary: "تقييم مفصل الفك (TMJ) وتوازن إطباق الأسنان",
        duration: "جلسة واحدة (15 دقيقة)",
        comfort: "حقن مجهري لطيف جداً وبدون أي فترة نقاهة",
        doctor: "د. أوتكو شنغول وفريق جراحة الفك",
        doctorId: "dr-caner-tekin",
        serviceId: "gulus-tasarimi",
        steps: [
          "1. فحص العضلة: فحص فرط نشاط عضلات الفك ومناطق تآكل الأسنان.",
          "2. حقن البوتوكس: موازنة قوة العضلة وإزالة الشد دون التأثير على المضغ الطبيعي.",
          "3. تسليم الواقي الليلي: تسليم قالب شفاف يمنع احتكاك الأسنان ببعضها أثناء النوم."
        ],
        advice: "الصرير أثناء النوم يقصر من طول الأسنان ويسبب صداعاً صباحياً. الجمع بين بوتوكس الفك والواقي الليلي يوفر راحة تامة."
      },
      surgery: {
        title: "خلع ضرس العقل بدون ألم والجراحة الدقيقة",
        primary: "قلع ضرس العقل المطمور بالتوجيه الرقمي 3D",
        secondary: "تنظيف الأكياس العظمية مع الحفاظ على الأنسجة",
        duration: "20 إلى 30 دقيقة",
        comfort: "%100 بدون ألم بتخدير موضعي فعال جداً",
        doctor: "د. رسول إلتر (جراحة الفم والوجه والفكين)",
        doctorId: "dr-kerem-yildiz",
        serviceId: "dis-cekimi-cerrahi",
        steps: [
          "1. التصوير 3D: قياس مكان القناة العصبية وجذور الضرس بدقة ملليمترية.",
          "2. الجراحة اللطيفة: استخراج الضرس دون إيذاء العظام المجاورة.",
          "3. خطة الشفاء السريع: إرشادات وخياطة طبية مريحة لتجنب أي انتفاخ أو ألم."
        ],
        advice: "ضروس العقل المائلة قد تسبب تسوساً في الأضراس السليمة المجاورة وتزاحم الأسنان. الفحص المبكر يجنبك الجراحات المعقدة."
      },
      pedodonti: {
        title: "بروتوكول حماية أسنان الأطفال مع استشاري متخصص",
        primary: "علاج الأسنان اللبنية بدون ألم، حشوات حيوية وفلورايد",
        secondary: "سادات الشقوق الوقائية وحافظات المسافة للأسنان الدائمة",
        duration: "20 إلى 30 دقيقة (أجواء مرحة تشبه اللعب)",
        comfort: "%100 بدون خوف بأسلوب نفسي محبب ومريح للطفل",
        doctor: "د. سيفنور إلتر (دكتوراه في طب أسنان الأطفال)",
        doctorId: "dr-selin-aksoy",
        serviceId: "cocuk-dis",
        steps: [
          "1. التعارف واللعب: بناء علاقة صداقة وثقة بين الطفل وطبيبة الأسنان.",
          "2. الوقاية بدون إبر: تطبيق ورنيش الفلورايد بنكهات فواكه محببة لتقوية الميناء.",
          "3. حشوات ملونة ومكافأة: منح الطفل شهادة شجاعة وهدية جميلة تشجيعية."
        ],
        advice: "الأسنان اللبنية تحجز المكان للأسنان الدائمة. الحفاظ عليها يمنع مشاكل اعوجاج الأسنان والحاجة للتقويم مستقبلاً."
      }
    }
  }
};
