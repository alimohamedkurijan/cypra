"use client";

import { useApp } from "./Providers";

export default function LangThemeMenu() {
  const { language, setLanguage, theme, setTheme } = useApp();
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        <button
          className={`rounded px-3 py-2 text-sm border ${language === "en" ? "bg-primary text-primary-foreground border-transparent" : "border-border hover:bg-muted/60"}`}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <button
          className={`rounded px-3 py-2 text-sm border ${language === "ar" ? "bg-primary text-primary-foreground border-transparent" : "border-border hover:bg-muted/60"}`}
          onClick={() => setLanguage("ar")}
        >
          العربية
        </button>
      </div>
      <div className="px-2 pt-2 text-xs uppercase text-muted-foreground">Theme</div>
      <div className="grid grid-cols-3 gap-2">
        <button
          className={`rounded px-3 py-2 text-sm border ${theme === "system" ? "bg-primary text-primary-foreground border-transparent" : "border-border hover:bg-muted/60"}`}
          onClick={() => setTheme("system")}
        >
          System
        </button>
        <button
          className={`rounded px-3 py-2 text-sm border ${theme === "light" ? "bg-primary text-primary-foreground border-transparent" : "border-border hover:bg-muted/60"}`}
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          className={`rounded px-3 py-2 text-sm border ${theme === "dark" ? "bg-primary text-primary-foreground border-transparent" : "border-border hover:bg-muted/60"}`}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      </div>
    </div>
  );
}


