"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "./Providers";
import { getImagePath } from "../lib/images";

export default function BrandLogo() {
  const { theme } = useApp();
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (theme === "dark") {
      setIsDark(true);
      return;
    }
    if (theme === "light") {
      setIsDark(false);
      return;
    }
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setIsDark(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [theme]);

  const src = isDark ? getImagePath("logo") : getImagePath("logoLight");

  return (
    <Image
      src={src}
      alt="Cypra logo"
      width={150}
      height={150}
      className="object-contain h-12 w-auto sm:h-14"
      priority
    />
  );
}


