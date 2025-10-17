"use client";

import { useApp } from "./Providers";
import LangThemeMenu from "./LangThemeMenu";

export default function HeaderNav() {
  const { language } = useApp();
  const t = language === "ar" ? ar : en;

  return (
    <div className="flex items-center gap-2">
      {/* Desktop nav */}
      <nav className="hidden sm:flex mr-2 items-center gap-6 text-sm">
        {[{ href: "/training", label: t.training }, { href: "/consultation", label: t.consultation }, { href: "/about", label: t.about }].map((item) => (
          <a key={item.href} className="relative transition-colors hover:text-primary" href={item.href}>
            {item.label}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full peer-hover:w-full" />
          </a>
        ))}
      </nav>

      {/* Language/Theme menu */}
      <details className="relative">
        <summary className="list-none inline-flex h-9 items-center rounded-md border border-border px-3 text-sm hover:bg-muted/60 cursor-pointer">
          {t.menu}
        </summary>
        <div className="absolute right-0 mt-2 w-56 z-[60] rounded-md border border-border bg-card p-2 shadow-lg">
          <LangThemeMenu />
        </div>
      </details>

      {/* Mobile nav */}
      <details className="sm:hidden relative">
        <summary className="list-none inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-muted/60 cursor-pointer" aria-label={t.menu}>
          <span className="i-[menu]">≡</span>
        </summary>
        <div className="absolute right-0 mt-2 w-44 rounded-md border border-border bg-card p-2 shadow-lg">
          <a className="block rounded px-3 py-2 text-sm hover:bg-muted/60" href="/training">{t.training}</a>
          <a className="block rounded px-3 py-2 text-sm hover:bg-muted/60" href="/consultation">{t.consultation}</a>
          <a className="block rounded px-3 py-2 text-sm hover:bg-muted/60" href="/about">{t.about}</a>
        </div>
      </details>
    </div>
  );
}

const en = {
  training: "Training",
  consultation: "Consultation",
  about: "About",
  getStarted: "Get started",
  menu: "Menu",
  language: "Language",
};

const ar = {
  training: "التدريب",
  consultation: "الاستشارات",
  about: "حول",
  getStarted: "ابدأ الآن",
  menu: "القائمة",
  language: "اللغة",
};


