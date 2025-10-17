"use client";

import { useApp } from "./Providers";

export default function BrandTitle() {
  const { language } = useApp();
  return (
    <span className="font-semibold text-base sm:text-lg tracking-tight">
      {language === "ar" ? "سيبرا" : "Cypra"}
    </span>
  );
}


