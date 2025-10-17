"use client";

import { useApp } from "../components/Providers";

export default function TrainingPage() {
  const { language, isHydrated } = useApp();
  const t = language === "ar" ? ar : en;

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,_rgba(34,197,94,0.15),_transparent_60%),radial-gradient(700px_400px_at_80%_20%,_rgba(34,197,94,0.08),_transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-border/70 bg-card/70 px-2.5 py-1 text-xs text-muted-foreground backdrop-blur">
              {t.badge}
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.programsTitle}</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">{t.programsDesc}</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: t.program1Title,
              desc: t.program1Desc,
              duration: t.program1Duration,
              level: t.program1Level,
              features: [t.program1Feature1, t.program1Feature2, t.program1Feature3]
            },
            {
              title: t.program2Title,
              desc: t.program2Desc,
              duration: t.program2Duration,
              level: t.program2Level,
              features: [t.program2Feature1, t.program2Feature2, t.program2Feature3]
            },
            {
              title: t.program3Title,
              desc: t.program3Desc,
              duration: t.program3Duration,
              level: t.program3Level,
              features: [t.program3Feature1, t.program3Feature2, t.program3Feature3]
            }
          ].map((program, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{program.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {program.level}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{program.desc}</p>
              <div className="text-xs text-muted-foreground mb-4">
                <strong>{t.duration}:</strong> {program.duration}
              </div>
              <ul className="space-y-2 text-sm">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a className="text-primary hover:underline font-medium" href="#">
                  {t.learnMore} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">{t.workshopsTitle}</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">{t.workshopsDesc}</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: t.workshop1Title,
              desc: t.workshop1Desc,
              date: t.workshop1Date,
              instructor: t.workshop1Instructor
            },
            {
              title: t.workshop2Title,
              desc: t.workshop2Desc,
              date: t.workshop2Date,
              instructor: t.workshop2Instructor
            }
          ].map((workshop, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{workshop.desc}</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <div><strong>{t.date}:</strong> {workshop.date}</div>
                <div><strong>{t.instructor}:</strong> {workshop.instructor}</div>
              </div>
              <div className="mt-4">
                <a className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:brightness-95" href="#">
                  {t.registerNow}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t.ctaTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-sm hover:brightness-95"
            >
              {t.contactUs}
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-muted/60"
            >
              {t.backToHome}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const en = {
  badge: "Professional Training",
  heroTitle: "Hands-on Cybersecurity Training",
  heroSubtitle: "Interactive workshops and flexible programs designed to help you understand, practice, and apply real-world cybersecurity skills.",
  
  programsTitle: "Training Programs",
  programsDesc: "Comprehensive programs covering essential cybersecurity domains with practical, hands-on experience.",
  
  program1Title: "Cybersecurity Fundamentals",
  program1Desc: "Master the basics of cybersecurity including threat landscape, security principles, and risk management.",
  program1Duration: "8 weeks",
  program1Level: "Beginner",
  program1Feature1: "Interactive labs and simulations",
  program1Feature2: "Real-world case studies",
  program1Feature3: "Industry certification prep",
  
  program2Title: "Advanced Penetration Testing",
  program2Desc: "Learn advanced techniques for ethical hacking, vulnerability assessment, and security testing.",
  program2Duration: "12 weeks",
  program2Level: "Advanced",
  program2Feature1: "Hands-on penetration testing",
  program2Feature2: "Tool mastery and automation",
  program2Feature3: "Red team exercises",
  
  program3Title: "Security Operations Center (SOC)",
  program3Desc: "Develop skills for monitoring, detecting, and responding to security incidents in real-time.",
  program3Duration: "10 weeks",
  program3Level: "Intermediate",
  program3Feature1: "SIEM platform training",
  program3Feature2: "Incident response procedures",
  program3Feature3: "Threat hunting techniques",
  
  workshopsTitle: "Live Workshops",
  workshopsDesc: "Join our expert-led workshops for intensive, hands-on learning experiences.",
  
  workshop1Title: "Web Application Security Workshop",
  workshop1Desc: "Learn to identify and exploit common web vulnerabilities including OWASP Top 10.",
  workshop1Date: "March 15-16, 2024",
  workshop1Instructor: "Sarah Johnson, CISSP",
  
  workshop2Title: "Network Security Analysis",
  workshop2Desc: "Master network traffic analysis, intrusion detection, and forensic investigation techniques.",
  workshop2Date: "March 22-23, 2024",
  workshop2Instructor: "Michael Chen, CEH",
  
  ctaTitle: "Ready to Start Your Cybersecurity Journey?",
  ctaDesc: "Join thousands of professionals who have enhanced their skills through our comprehensive training programs.",
  
  duration: "Duration",
  date: "Date",
  instructor: "Instructor",
  learnMore: "Learn More",
  registerNow: "Register Now",
  contactUs: "Contact Us",
  backToHome: "Back to Home"
};

const ar = {
  badge: "التدريب المهني",
  heroTitle: "التدريب العملي للأمن السيبراني",
  heroSubtitle: "ورش عمل تفاعلية وبرامج مرنة تساعدك على الفهم والممارسة وتطبيق مهارات الأمن السيبراني الواقعية.",
  
  programsTitle: "برامج التدريب",
  programsDesc: "برامج شاملة تغطي المجالات الأساسية للأمن السيبراني مع خبرة عملية وتطبيقية.",
  
  program1Title: "أساسيات الأمن السيبراني",
  program1Desc: "أتقن أساسيات الأمن السيبراني بما في ذلك مشهد التهديدات والمبادئ الأمنية وإدارة المخاطر.",
  program1Duration: "8 أسابيع",
  program1Level: "مبتدئ",
  program1Feature1: "معامل تفاعلية ومحاكاة",
  program1Feature2: "دراسات حالة واقعية",
  program1Feature3: "تحضير للشهادات المهنية",
  
  program2Title: "اختبار الاختراق المتقدم",
  program2Desc: "تعلم التقنيات المتقدمة للاختراق الأخلاقي وتقييم الثغرات واختبار الأمان.",
  program2Duration: "12 أسبوع",
  program2Level: "متقدم",
  program2Feature1: "اختبار الاختراق العملي",
  program2Feature2: "إتقان الأدوات والأتمتة",
  program2Feature3: "تمارين الفريق الأحمر",
  
  program3Title: "مركز عمليات الأمان (SOC)",
  program3Desc: "طور مهارات المراقبة والكشف والاستجابة للحوادث الأمنية في الوقت الفعلي.",
  program3Duration: "10 أسابيع",
  program3Level: "متوسط",
  program3Feature1: "تدريب منصة SIEM",
  program3Feature2: "إجراءات الاستجابة للحوادث",
  program3Feature3: "تقنيات البحث عن التهديدات",
  
  workshopsTitle: "ورش العمل المباشرة",
  workshopsDesc: "انضم إلى ورش العمل التي يقودها خبراؤنا لتجارب تعلم مكثفة وعملية.",
  
  workshop1Title: "ورشة أمان تطبيقات الويب",
  workshop1Desc: "تعلم تحديد واستغلال الثغرات الشائعة في الويب بما في ذلك OWASP Top 10.",
  workshop1Date: "15-16 مارس 2024",
  workshop1Instructor: "سارة جونسون، CISSP",
  
  workshop2Title: "تحليل أمان الشبكات",
  workshop2Desc: "أتقن تحليل حركة المرور الشبكية وكشف التسلل وتقنيات التحقيق الجنائي.",
  workshop2Date: "22-23 مارس 2024",
  workshop2Instructor: "مايكل تشين، CEH",
  
  ctaTitle: "مستعد لبدء رحلتك في الأمن السيبراني؟",
  ctaDesc: "انضم إلى آلاف المهنيين الذين طوروا مهاراتهم من خلال برامجنا التدريبية الشاملة.",
  
  duration: "المدة",
  date: "التاريخ",
  instructor: "المدرب",
  learnMore: "اعرف المزيد",
  registerNow: "سجل الآن",
  contactUs: "تواصل معنا",
  backToHome: "العودة للرئيسية"
};
