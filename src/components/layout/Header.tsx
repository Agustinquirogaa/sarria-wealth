"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/tokens";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isEn = locale === "en";

  // Build nav links based on locale
  const prefix = isEn ? "/en" : "";
  const navItems = [
    { label: t("home"), href: `${prefix}/` },
    { label: t("servicios"), href: `${prefix}/servicios` },
    { label: t("herramientas"), href: `${prefix}/herramientas` },
    { label: t("sobreMi"), href: `${prefix}/sobre-mi` },
    { label: t("contacto"), href: `${prefix}/contacto` },
  ];

  const toggleLang = () => {
    // Strip current locale prefix and switch
    let newPath = pathname;
    if (isEn) {
      newPath = pathname.replace(/^\/en/, "") || "/";
    } else {
      newPath = `/en${pathname}`;
    }
    router.push(newPath);
  };

  const isActive = (href: string) => {
    if (href.endsWith("/") && href.length > 1) return pathname === href.slice(0, -1) || pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-border">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href={isEn ? "/en/" : "/"}
            className="font-display text-lg font-medium tracking-tight text-brand-text hover:opacity-80 transition-opacity shrink-0"
          >
            Sarria Wealth
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand-accent"
                    : "text-brand-muted hover:text-brand-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: lang toggle + CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="hidden sm:flex font-body text-xs font-medium tracking-widest uppercase text-brand-muted hover:text-brand-accent transition-colors px-2 py-1 border border-brand-border rounded"
              aria-label={isEn ? "Cambiar a español" : "Switch to English"}
            >
              {t("langToggle")}
            </button>
            <Link
              href={isEn ? "/en/contacto" : "/contacto"}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-brand-accent text-white text-sm font-medium rounded-btn hover:bg-brand-accent-light transition-colors"
            >
              {t("cta")}
            </Link>
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-1.5 text-brand-text"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-border bg-brand-bg animate-fade-in">
          <nav className="mx-auto max-w-[1080px] px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-sm font-medium py-2.5 border-b border-brand-border/60 ${
                  isActive(item.href) ? "text-brand-accent" : "text-brand-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-3 pt-2">
              <button
                onClick={() => { toggleLang(); setMobileOpen(false); }}
                className="font-body text-xs font-medium tracking-widest uppercase text-brand-muted hover:text-brand-accent transition-colors px-2 py-1 border border-brand-border rounded"
              >
                {t("langToggle")}
              </button>
              <Link
                href={isEn ? "/en/contacto" : "/contacto"}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center px-4 py-2 bg-brand-accent text-white text-sm font-medium rounded-btn"
              >
                {t("cta")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
