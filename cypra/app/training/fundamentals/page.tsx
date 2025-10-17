"use client";

import { useApp } from "../../components/Providers";

export default function FundamentalsPage() {
  const { language, isHydrated } = useApp();
  const t = language === "ar" ? ar : en;

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,_rgba(34,197,94,0.15),_transparent_60%),radial-gradient(700px_400px_at_80%_20%,_rgba(34,197,94,0.08),_transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              {t.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{t.curriculumTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            { title: t.m1Title, desc: t.m1Desc },
            { title: t.m2Title, desc: t.m2Desc },
            { title: t.m3Title, desc: t.m3Desc },
            { title: t.m4Title, desc: t.m4Desc },
            { title: t.m5Title, desc: t.m5Desc },
            { title: t.m6Title, desc: t.m6Desc },
          ].map((m) => (
            <div key={m.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const en = {
  badge: "Foundational Track",
  title: "Cybersecurity Fundamentals",
  subtitle: "Start your journey with core principles, networking, web security, crypto basics, and more.",
  curriculumTitle: "Curriculum",
  m1Title: "Security Principles",
  m1Desc: "CIA triad, risk, defense-in-depth, least privilege, threat modeling.",
  m2Title: "Networking Basics",
  m2Desc: "OSI/TCP-IP, subnets, routing, DNS, HTTP, TLS, and traffic analysis.",
  m3Title: "Linux Essentials",
  m3Desc: "Filesystem, permissions, processes, package managers, and CLI tools.",
  m4Title: "Web Security Basics",
  m4Desc: "Auth, sessions, CSRF, XSS, and secure design essentials.",
  m5Title: "Cryptography Basics",
  m5Desc: "Hashes, symmetric vs asymmetric crypto, PKI and TLS.",
  m6Title: "Monitoring & Logs",
  m6Desc: "Log sources, parsing, indicators, and basic detection concepts.",
};

const ar = {
  badge: "المسار الأساسي",
  title: "أساسيات الأمن السيبراني",
  subtitle: "ابدأ رحلتك بالمبادئ الأساسية والشبكات وأمن الويب وأساسيات التشفير والمزيد.",
  curriculumTitle: "المنهج",
  m1Title: "مبادئ الأمان",
  m1Desc: "مثلث CIA وإدارة المخاطر والدفاع متعدد الطبقات وأقل صلاحية ونمذجة التهديدات.",
  m2Title: "أساسيات الشبكات",
  m2Desc: "OSI/TCP-IP، الشبكات الفرعية، التوجيه، DNS، HTTP، TLS، وتحليل المرور.",
  m3Title: "أساسيات لينكس",
  m3Desc: "بنية نظام الملفات والصلاحيات والعمليات ومدراء الحزم وأدوات CLI.",
  m4Title: "أساسيات أمن الويب",
  m4Desc: "المصادقة والجلسات وCSRF وXSS وأسس التصميم الآمن.",
  m5Title: "أساسيات التشفير",
  m5Desc: "الهاش والتشفير المتماثل وغير المتماثل وPKI وTLS.",
  m6Title: "المراقبة والسجلات",
  m6Desc: "مصادر السجلات وتحليلها والمؤشرات ومفاهيم الاكتشاف الأساسية.",
};


