import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.servicios" });
  return { title: t("title"), description: t("description") };
}

export default async function ServiciosPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "servicios" });
  const nav = await getTranslations({ locale, namespace: "nav" });
  const isEn = locale === "en";
  const prefix = isEn ? "/en" : "";

  const serviceAItems = t.raw("a.items") as string[];
  const serviceADeliverables = t.raw("a.deliverablesList") as string[];
  const serviceBItems = t.raw("b.items") as string[];
  const serviceBDeliverables = t.raw("b.deliverablesList") as string[];
  const faqItems = t.raw("faq.items") as Array<{ q: string; a: string }>;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-brand-border py-16 md:py-24">
        <Container>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-display-lg font-medium text-brand-text mb-4 max-w-xl">
            {t("hero.h1")}
          </h1>
          <p className="font-body text-base text-brand-muted max-w-lg">
            {t("hero.body")}
          </p>
        </Container>
      </section>

      {/* Service A */}
      <section className="py-16 md:py-24 border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
            <div>
              <h2 className="font-display text-display-md font-medium text-brand-text mb-3">
                {t("a.title")}
              </h2>
              <p className="font-body text-base text-brand-muted mb-8 max-w-lg leading-relaxed">
                {t("a.description")}
              </p>

              <h3 className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-4">
                {t("a.includes")}
              </h3>
              <ul className="space-y-3 mb-8">
                {serviceAItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={13} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-4">
                {t("a.deliverables")}
              </h3>
              <ul className="space-y-2 mb-6">
                {serviceADeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-xs text-brand-muted/50 mt-0.5">—</span>
                    <span className="font-body text-sm text-brand-muted">{d}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-xs text-brand-muted/70">
                <span className="font-medium text-brand-text">{t("a.duration")}:</span>{" "}
                {t("a.durationValue")}
              </p>
            </div>

            {/* Pricing card */}
            <div className="bg-[#F0F0EE] rounded-card p-6 border border-brand-border sticky top-24">
              <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-2">
                {t("a.title")}
              </p>
              <p className="font-display text-3xl font-medium text-brand-text mb-1">
                {t("a.price")}
              </p>
              <p className="font-body text-xs text-brand-muted mb-6">
                {t("a.durationValue")}
              </p>
              <Link
                href={`${prefix}/contacto`}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-accent text-white font-body font-medium text-sm rounded-btn hover:bg-brand-accent-light transition-colors"
              >
                {t("a.cta")} <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Service B */}
      <section className="py-16 md:py-24 bg-[#F0F0EE] border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
            <div>
              <h2 className="font-display text-display-md font-medium text-brand-text mb-3">
                {t("b.title")}
              </h2>
              <p className="font-body text-base text-brand-muted mb-8 max-w-lg leading-relaxed">
                {t("b.description")}
              </p>

              <h3 className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-4">
                {t("b.includes")}
              </h3>
              <ul className="space-y-3 mb-8">
                {serviceBItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={13} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-4">
                {t("b.deliverables")}
              </h3>
              <ul className="space-y-2 mb-6">
                {serviceBDeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-mono text-xs text-brand-muted/50 mt-0.5">—</span>
                    <span className="font-body text-sm text-brand-muted">{d}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-xs text-brand-muted/70">
                <span className="font-medium text-brand-text">{t("b.duration")}:</span>{" "}
                {t("b.durationValue")}
              </p>
            </div>

            {/* Pricing card */}
            <div className="bg-brand-accent rounded-card p-6 sticky top-24">
              <p className="font-body text-xs font-medium uppercase tracking-widest text-white/60 mb-2">
                {t("b.title")}
              </p>
              <p className="font-display text-3xl font-medium text-white mb-1">
                {t("b.price")}
              </p>
              <p className="font-body text-xs text-white/60 mb-6">
                {t("b.durationValue")}
              </p>
              <Link
                href={`${prefix}/contacto`}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-white text-brand-accent font-body font-medium text-sm rounded-btn hover:bg-brand-bg transition-colors"
              >
                {t("b.cta")} <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-b border-brand-border">
        <Container narrow>
          <h2 className="font-display text-display-md font-medium text-brand-text mb-10">
            {t("faq.title")}
          </h2>
          <div className="space-y-0 divide-y divide-brand-border">
            {faqItems.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-body text-base font-medium text-brand-text">
                  {item.q}
                  <ChevronDown size={16} className="text-brand-muted group-open:rotate-180 transition-transform shrink-0 ml-4" />
                </summary>
                <p className="mt-3 font-body text-sm text-brand-muted leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-accent">
        <Container>
          <div className="max-w-lg">
            <h2 className="font-display text-display-md font-medium text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="font-body text-base text-white/70 mb-7">{t("cta.body")}</p>
            <Link
              href={`${prefix}/contacto`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-accent font-body font-medium text-sm rounded-btn hover:bg-brand-bg transition-colors"
            >
              {t("cta.btn")} <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
