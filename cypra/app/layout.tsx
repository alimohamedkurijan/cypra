import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import LangThemeMenu from "./components/LangThemeMenu";
import HeaderNav from "./components/HeaderNav";
import BrandTitle from "./components/BrandTitle";
import BrandLogo from "./components/BrandLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cypra — Learn Cybersecurity Fundamentals",
    template: "%s · Cypra",
  },
  description:
    "Cypra is a modern teaching platform for learning the fundamentals of cybersecurity.",
  metadataBase: new URL("https://cypra.example"),
  icons: { icon: "/favicon.ico" },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f0c" },
  ],
  openGraph: {
    title: "Cypra — Learn Cybersecurity Fundamentals",
    description:
      "Interactive lessons, labs, and challenges to master cybersecurity basics.",
    type: "website",
    url: "https://cypra.example",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cypra — Learn Cybersecurity Fundamentals",
    description:
      "Interactive lessons, labs, and challenges to master cybersecurity basics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
        <header className="sticky top-0 z-50 w-full border-b border-border/60 supports-[backdrop-filter]:bg-background/70 backdrop-blur">
          {/* Animated gradient top bar */}
          <div className="h-[2px] w-full bg-[linear-gradient(90deg,_#22c55e,_#10b981,_#84cc16,_#22c55e)] bg-[length:200%_100%] animate-[header-gradient_6s_linear_infinite]" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
            {/* Brand logo */}
            <a href="/" className="group inline-flex items-center gap-2">
              <span className="relative inline-flex items-center justify-center">
                <BrandLogo />
              </span>
              <BrandTitle />
            </a>
            <HeaderNav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-border/60 mt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Cypra. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-foreground" href="#privacy">Privacy</a>
              <a className="hover:text-foreground" href="#terms">Terms</a>
            </div>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}
