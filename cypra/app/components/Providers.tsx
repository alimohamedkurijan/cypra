"use client";

import React from "react";

type Language = "en" | "ar";
type Theme = "system" | "light" | "dark";

type AppContextValue = {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  isHydrated: boolean;
};

const AppContext = React.createContext<AppContextValue | undefined>(undefined);

export function useApp() {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within Providers");
  return ctx;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en");
  const [theme, setThemeState] = React.useState<Theme>("system");
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
    try {
      const storedLang = localStorage.getItem("cypra:lang") as Language | null;
      const storedTheme = localStorage.getItem("cypra:theme") as Theme | null;
      if (storedLang === "en" || storedLang === "ar") setLanguageState(storedLang);
      if (storedTheme === "system" || storedTheme === "light" || storedTheme === "dark") {
        setThemeState(storedTheme);
        // Apply theme immediately
        const root = document.documentElement;
        if (storedTheme === "system") {
          root.removeAttribute("data-theme");
        } else {
          root.setAttribute("data-theme", storedTheme);
        }
      }
    } catch {}
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("cypra:lang", language);
    } catch {}
  }, [language]);

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    try {
      localStorage.setItem("cypra:theme", theme);
    } catch {}
  }, [theme]);

  const setLanguage = React.useCallback((lang: Language) => setLanguageState(lang), []);
  const setTheme = React.useCallback((t: Theme) => setThemeState(t), []);

  const value = React.useMemo(
    () => ({ language, theme, setLanguage, setTheme, isHydrated }),
    [language, theme, setLanguage, setTheme, isHydrated]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}


