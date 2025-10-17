"use client";

import { useApp } from "./components/Providers";

export default function Home() {
  const { language, isHydrated } = useApp();
  const t = language === "ar" ? ar : en;
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,_rgba(34,197,94,0.15),_transparent_60%),radial-gradient(700px_400px_at_80%_20%,_rgba(34,197,94,0.08),_transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
          <div className="max-w-2xl">
          
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              {t.heroTitle}
            </h1>
            <h1 className="mt-6 text-2xl sm:text-2xl md:text-4xl font-semibold tracking-tight">
              {t.heroSlug}
              </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
              {t.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/training/fundamentals"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t.ctaFundamentals}
              </a>
              <a
                href="/training"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-muted/60"
              >
                {t.ctaTraining}
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Training */}
      <section id="training" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">{t.trainingTitle}</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl">{t.trainingText}</p>
            <a className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-sm hover:brightness-95 mt-4" href="/training">{t.trainingNew}</a>
        </div>
      </section>

     

          {/* Consulting */}
          <section id="consulting" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold">{t.consultingTitle}</h2>
              <p className="mt-2 text-muted-foreground max-w-3xl">{t.consultingText}</p>
              <a className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-sm hover:brightness-95 mt-4" href="/consultation">{t.consultationNew}</a>
            </div>
          </section>

       {/* About */}
       <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">{t.aboutTitle}</h2>
            <p className="mt-2 text-muted-foreground whitespace-pre-line">{t.aboutDesc}</p>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• {t.benefit1}</li>
            <li>• {t.benefit2}</li>
            <li>• {t.benefit3}</li>
            <li>• {t.benefit4}</li>
          </ul>
        </div>
      </section>
    </div>


  );
}

const en = {
  badge: "Cybersecurity learning platform",
  heroTitle: "CYPRA",
  heroSlug: "Learn, Consult, Secure.",
  heroSubtitle:
    "Cypra guides you through core concepts like networking, web security, cryptography, and threat modeling using practical, bite-sized modules.",
  ctaTracks: "Explore learning tracks",
  ctaTraining: "View Training Programs",
  ctaFundamentals: "Start with Fundamentals",
  
  labsTitle: "Interactive labs",
  labsDesc:
    "Practice in a safe environment. Simulate attacks, analyze logs, and apply defenses with guided tasks.",
  launchLab: "Launch sample lab",
  
  benefit1: "Step-by-step modules with checkpoints",
  benefit2: "Visual summaries and diagrams",
  benefit3: "labs with automated hints",
  benefit4: "Dark and light themes for comfort",
  trainingTitle: "Cybersecurity Training",
  trainingText:
    "Interactive workshops and flexible programs designed to help you understand, practice, and apply real-world cybersecurity skills.",
      trainingNew:"Get Started",
      consultationNew:"Request Consultation",
  consultingTitle: "Expert Cybersecurity Consulting",
  consultingText:
    "Get tailored guidance from certified cybersecurity professionals to assess, plan, and strengthen your organization’s defenses.",
  aboutTitle: "About CYPRA",
  aboutDesc:
    "At CYPRA, we believe cybersecurity is more than theory — it’s practice, awareness, and the right strategy.\nOur mission is to simplify cybersecurity through practical learning and personalized expert support, helping individuals and organizations strengthen their digital defenses.",
};

const ar = {
  badge: "منصة تعليم الأمن السيبراني",
  heroTitle: "سيبرا",
  heroSlug: " تعلّم، استشار، احماية.",
  heroSubtitle:
    "تقودك سيبرا عبر مفاهيم أساسية مثل الشبكات وأمن الويب والتشفير ونمذجة التهديد بطريقة عملية ومبسطة.",
  ctaFundamentals: "ابدأ بالأساسيات",
  ctaTraining: "عرض برامج التدريب",
  
  labsTitle: "معامل تفاعلية",
  labsDesc:
    "تدرّب في بيئة آمنة. حاكِ الهجمات، وحلّل السجلات، وطبّق الدفاعات بمهام مُوجّهة.",
  launchLab: "ابدأ معملًا تجريبيًا",
  
  benefit1: "وحدات بخطوات متدرجة ونقاط تحقّق",
  benefit2: "ملخّصات ومرئيات توضيحية",
  benefit3: "معامل عملية مع تلميحات تلقائية",
  benefit4: "سمة فاتحة ومظلمة لراحة المشاهدة",
  trainingTitle: "قسم التدريب",
  trainingText:
    "ورش عمل تفاعلية وبرامج مرنة تساعدك على الفهم والممارسة وتطبيق مهارات الأمن السيبراني الواقعية.",
      trainingNew: "ابدأ الآن",
      consultationNew: "طلب استشارة",
  consultingTitle: "قسم الاستشارات",
  consultingText:
    "احصل على إرشاد مخصص من خبراء معتمدين لتقييم وتخطيط وتعزيز دفاعات مؤسستك.",
  aboutTitle: "نبذة عن سيبرا",
  aboutDesc:
    "في سيبرا، نؤمن بأن الأمن السيبراني أكثر من مجرد نظرية — إنه ممارسة ووعي واستراتيجية صحيحة.\nمهمتنا تبسيط الأمن السيبراني من خلال التعلم العملي والدعم الخبير المخصص لمساعدة الأفراد والمؤسسات على تعزيز دفاعاتهم الرقمية.",
};
