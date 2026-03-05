import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.sobreMi" });
  return { title: t("title"), description: t("description") };
}

export default async function SobreMiPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "sobreMi" });
  const isEn = locale === "en";
  const prefix = isEn ? "/en" : "";

  const principles = t.raw("principles.items") as Array<{ title: string; body: string }>;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-brand-border py-16 md:py-24">
        <Container>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-display-lg font-medium text-brand-text mb-2">
            {t("hero.h1")}
          </h1>
          <p className="font-body text-base text-brand-muted">{t("hero.role")}</p>
        </Container>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
            <div>
              <h2 className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-6">
                {t("bio.title")}
              </h2>
              <div className="space-y-5">
                <p className="font-body text-base text-brand-text leading-relaxed">
                  {t("bio.p1")}
                </p>
                <p className="font-body text-base text-brand-muted leading-relaxed">
                  {t("bio.p2")}
                </p>
                <p className="font-body text-base text-brand-muted leading-relaxed">
                  {t("bio.p3")}
                </p>
              </div>
            </div>

            {/* Abstract portrait placeholder */}
            <div className="rounded-card bg-[#F0F0EE] border border-brand-border aspect-square flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-24 h-24 text-brand-accent/20" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                {/* Abstract portrait */}
                <circle cx="60" cy="40" r="22" />
                <path d="M20 110 C20 80 100 80 100 110" />
                <line x1="40" y1="30" x2="80" y2="30" opacity="0.3" />
                <line x1="45" y1="42" x2="75" y2="42" opacity="0.3" />
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 bg-[#F0F0EE] border-b border-brand-border">
        <Container>
          <h2 className="font-display text-display-md font-medium text-brand-text mb-10">
            {t("principles.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <div key={i} className="bg-white rounded-card p-6 border border-brand-border/50 shadow-card">
                <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center mb-4">
                  <span className="font-mono text-xs text-white font-medium">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-brand-text mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container narrow>
          <div className="text-center">
            <h2 className="font-display text-display-md font-medium text-brand-text mb-4">
              {t("cta.title")}
            </h2>
            <p className="font-body text-base text-brand-muted mb-7">{t("cta.body")}</p>
            <Link
              href={`${prefix}/contacto`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-accent text-white font-body font-medium text-sm rounded-btn hover:bg-brand-accent-light transition-colors"
            >
              {t("cta.btn")} <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
