"use client";

import { useApp } from "../components/Providers";

export default function AboutPage() {
  const { language } = useApp();
  const t = language === "ar" ? ar : en;

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,_rgba(34,197,94,0.15),_transparent_60%),radial-gradient(700px_400px_at_80%_20%,_rgba(34,197,94,0.08),_transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">{t.title}</h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
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
  title: "About CYPRA",
  subtitle: "We simplify cybersecurity through practical learning and expert guidance.",
  aboutTitle: "About CYPRA",
  aboutDesc:
    "At CYPRA, we believe cybersecurity is more than theory — it’s practice, awareness, and the right strategy.\nOur mission is to simplify cybersecurity through practical learning and personalized expert support, helping individuals and organizations strengthen their digital defenses.",
  benefit1: "Step-by-step modules with checkpoints",
  benefit2: "Visual summaries and diagrams",
  benefit3: "labs with automated hints",
  benefit4: "Dark and light themes for comfort",
};

const ar = {
  title: "حول سيبرا",
  subtitle: "نبسط الأمن السيبراني عبر التعلم العملي والإرشاد الخبير.",
  aboutTitle: "نبذة عن سيبرا",
  aboutDesc:
    "في سيبرا، نؤمن بأن الأمن السيبراني أكثر من مجرد نظرية — إنه ممارسة ووعي واستراتيجية صحيحة.\nمهمتنا تبسيط الأمن السيبراني من خلال التعلم العملي والدعم الخبير المخصص لمساعدة الأفراد والمؤسسات على تعزيز دفاعاتهم الرقمية.",
  benefit1: "وحدات بخطوات متدرجة ونقاط تحقّق",
  benefit2: "ملخّصات ومرئيات توضيحية",
  benefit3: "معامل عملية مع تلميحات تلقائية",
  benefit4: "سمة فاتحة ومظلمة لراحة المشاهدة",
};


