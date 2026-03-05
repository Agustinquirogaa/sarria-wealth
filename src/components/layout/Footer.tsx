import Link from "next/link";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/tokens";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();
  const nav = useTranslations("nav");
  const footer = useTranslations("footer");
  const isEn = locale === "en";
  const prefix = isEn ? "/en" : "";

  const navItems = [
    { label: nav("home"), href: `${prefix}/` },
    { label: nav("servicios"), href: `${prefix}/servicios` },
    { label: nav("herramientas"), href: `${prefix}/herramientas` },
    { label: nav("sobreMi"), href: `${prefix}/sobre-mi` },
    { label: nav("contacto"), href: `${prefix}/contacto` },
  ];

  return (
    <footer className="bg-brand-text text-brand-bg mt-auto">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-8 lg:px-10">
        {/* Top */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-medium mb-3">Sarria Wealth</p>
            <p className="font-body text-sm text-white/60 max-w-xs leading-relaxed">
              {footer("tagline")}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              {isEn ? "Navigation" : "Navegación"}
            </p>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              {isEn ? "Contact" : "Contacto"}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-body text-sm text-white/70 hover:text-white transition-colors block mb-3"
            >
              {siteConfig.email}
            </a>
            <Link
              href={isEn ? "/en/contacto" : "/contacto"}
              className="inline-flex items-center px-4 py-2 border border-white/30 text-white text-sm font-medium rounded-btn hover:bg-white/10 transition-colors"
            >
              {nav("cta")}
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40 leading-relaxed max-w-xl">
            {footer("disclaimer")}
          </p>
          <p className="font-body text-xs text-white/30 shrink-0">
            {footer("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
