"use client";

import { useApp } from "./Providers";

export default function BrandTitle() {
  const { language, isHydrated } = useApp();
  
  // Prevent hydration mismatch by using default during SSR
  if (!isHydrated) {
    return (
      <span className="font-semibold text-base sm:text-lg tracking-tight uppercase">
        Cypra
      </span>
    );
  }
  
  return (
    <span className="font-semibold text-base sm:text-lg tracking-tight uppercase">
      {language === "ar" ? "سيبرا" : "Cypra"}
    </span>
  );
}


