import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Play, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import DashboardMockup from "@/components/mockups/DashboardMockup";
import EERRMockup from "@/components/mockups/EERRMockup";
import CashFlowMockup from "@/components/mockups/CashFlowMockup";
import VisualProofTabs from "@/components/home/VisualProofTabs";

export default function HomePage({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isEn = locale === "en";
  const prefix = isEn ? "/en" : "";

  const problems = t.raw("problems.items") as Array<{ title: string; body: string }>;
  const steps = t.raw("howItWorks.steps") as Array<{ num: string; title: string; body: string }>;
  const serviceA = t.raw("services.a.items") as string[];
  const serviceB = t.raw("services.b.items") as string[];
  const demoTabs = t.raw("demo.tabs") as Array<{ id: string; label: string; caption: string }>;
  const toolItems = t.raw("tools.items") as string[];

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-bg">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-accent/[0.03] to-transparent pointer-events-none" />

        <Container>
          <div className="py-24 md:py-32 lg:py-36 max-w-3xl">
            <p className="mb-6 font-body text-xs font-medium uppercase tracking-[0.14em] text-brand-muted">
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-display text-display-xl font-medium text-brand-text mb-6 leading-[1.05]">
              {t("hero.h1")}
            </h1>
            <p className="font-body text-body-lg text-brand-muted mb-8 max-w-xl leading-relaxed">
              {t("hero.subhead")}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Link
                href={`${prefix}/contacto`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-accent text-white font-body font-medium text-base rounded-btn hover:bg-brand-accent-light transition-colors"
              >
                {t("hero.cta")}
                <ArrowRight size={15} />
              </Link>
              <Link
                href={`${prefix}/servicios`}
                className="font-body text-sm text-brand-muted hover:text-brand-accent transition-colors underline underline-offset-4"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
            <p className="font-body text-xs text-brand-muted/70">
              {t("hero.ctaNote")}
            </p>
          </div>
        </Container>

        {/* Institutional paragraph strip */}
        <div className="border-t border-brand-border bg-[#F0F0EE]/60">
          <Container>
            <p className="py-5 font-body text-sm text-brand-muted max-w-2xl">
              {t("hero.body")}
            </p>
          </Container>
        </div>
      </section>

      {/* ─── VIDEO PLACEHOLDER ───────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-brand-border">
        <Container>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
            {isEn ? "Introduction" : "Presentación"}
          </p>
          <h2 className="font-display text-display-md font-medium text-brand-text mb-8">
            {t("video.title")}
          </h2>
          <div className="aspect-video max-w-2xl rounded-card overflow-hidden bg-brand-accent/[0.06] border border-brand-border relative group cursor-pointer">
            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center mb-4 group-hover:bg-brand-accent transition-colors shadow-card">
                <Play size={20} className="text-white ml-1" fill="white" />
              </div>
              <p className="font-body text-sm text-brand-muted">{t("video.caption")}</p>
            </div>
            {/* Faux waveform */}
            <svg className="absolute bottom-0 left-0 right-0 opacity-10" viewBox="0 0 560 40" preserveAspectRatio="none" aria-hidden="true">
              {Array.from({ length: 56 }).map((_, i) => {
                const h = 8 + Math.sin(i * 0.6) * 12 + Math.cos(i * 1.1) * 8;
                return <rect key={i} x={i * 10} y={40 - h} width="6" height={h} rx="2" fill="#0B2A4A" />;
              })}
            </svg>
          </div>
          <blockquote className="mt-6 max-w-lg border-l-2 border-brand-accent/30 pl-4">
            <p className="font-body text-sm text-brand-muted italic leading-relaxed">
              {t("video.transcript")}
            </p>
          </blockquote>
        </Container>
      </section>

      {/* ─── PROBLEMS ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F0F0EE] border-b border-brand-border">
        <Container>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
            {isEn ? "Context" : "Contexto"}
          </p>
          <h2 className="font-display text-display-md font-medium text-brand-text mb-10 md:mb-12">
            {t("problems.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <div key={i} className="bg-white rounded-card p-6 shadow-card border border-brand-border/50">
                <span className="font-mono text-xs text-brand-muted/60 mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg font-medium text-brand-text mb-3">
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

      {/* ─── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-brand-border">
        <Container>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
            {isEn ? "Process" : "Proceso"}
          </p>
          <h2 className="font-display text-display-md font-medium text-brand-text mb-10 md:mb-14">
            {t("howItWorks.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%+0px)] w-full h-px bg-brand-border -translate-x-3 z-0" />
                )}
                <div className="relative z-10">
                  <span className="font-mono text-xs font-medium text-brand-accent/60 mb-3 block">
                    {step.num}
                  </span>
                  <h4 className="font-body text-base font-semibold text-brand-text mb-2">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-brand-muted leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── SERVICES PREVIEW ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F0F0EE] border-b border-brand-border">
        <Container>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
            {isEn ? "Services" : "Servicios"}
          </p>
          <h2 className="font-display text-display-md font-medium text-brand-text mb-10 md:mb-12">
            {t("services.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Service A */}
            <div className="bg-white rounded-card p-7 shadow-card border border-brand-border/50 flex flex-col">
              <h3 className="font-display text-xl font-medium text-brand-text mb-5">
                {t("services.a.title")}
              </h3>
              <ul className="space-y-2.5 flex-1 mb-6">
                {serviceA.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={13} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-brand-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`${prefix}/servicios`}
                className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-accent hover:gap-2.5 transition-all"
              >
                {t("services.a.cta")} <ArrowRight size={13} />
              </Link>
            </div>
            {/* Service B */}
            <div className="bg-brand-accent rounded-card p-7 shadow-card flex flex-col">
              <h3 className="font-display text-xl font-medium text-white mb-5">
                {t("services.b.title")}
              </h3>
              <ul className="space-y-2.5 flex-1 mb-6">
                {serviceB.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={13} className="text-white/70 mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`${prefix}/servicios`}
                className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-white hover:gap-2.5 transition-all"
              >
                {t("services.b.cta")} <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── VISUAL PROOF (DEMO) ─────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-brand-border overflow-hidden">
        <Container>
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
            {isEn ? "Work samples" : "Muestras de trabajo"}
          </p>
          <h2 className="font-display text-display-md font-medium text-brand-text mb-8">
            {t("demo.title")}
          </h2>
          <VisualProofTabs tabs={demoTabs} />
        </Container>
      </section>

      {/* ─── TOOLS PREVIEW ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F0F0EE] border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
                {isEn ? "Tools" : "Herramientas"}
              </p>
              <h2 className="font-display text-display-md font-medium text-brand-text mb-4">
                {t("tools.title")}
              </h2>
              <p className="font-body text-base text-brand-muted mb-6 leading-relaxed">
                {t("tools.body")}
              </p>
              <Link
                href={`${prefix}/herramientas`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-brand-accent text-brand-accent font-body font-medium text-sm rounded-btn hover:bg-brand-accent hover:text-white transition-colors"
              >
                {t("tools.cta")} <ArrowRight size={13} />
              </Link>
            </div>
            <div className="space-y-3">
              {toolItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-card px-5 py-3.5 border border-brand-border/50 shadow-subtle">
                  <span className="font-mono text-xs text-brand-muted/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm text-brand-text">{item}</span>
                  <ArrowRight size={12} className="text-brand-muted/40 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── ABOUT PREVIEW ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
                {isEn ? "About" : "Sobre nosotros"}
              </p>
              <h2 className="font-display text-display-md font-medium text-brand-text mb-5">
                {t("about.title")}
              </h2>
              <p className="font-body text-base text-brand-muted mb-6 leading-relaxed">
                {t("about.body")}
              </p>
              <Link
                href={`${prefix}/sobre-mi`}
                className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-accent hover:gap-2.5 transition-all"
              >
                {t("about.cta")} <ArrowRight size={13} />
              </Link>
            </div>
            {/* Abstract visual */}
            <div className="rounded-card border border-brand-border bg-[#F0F0EE] p-8 flex items-center justify-center aspect-video md:aspect-auto md:h-64">
              <svg viewBox="0 0 200 140" className="w-full max-w-xs opacity-60" aria-hidden="true">
                {/* Abstract geometric composition */}
                <rect x="10" y="10" width="80" height="80" rx="3" fill="none" stroke="#0B2A4A" strokeWidth="1" />
                <rect x="30" y="30" width="80" height="80" rx="3" fill="none" stroke="#0B2A4A" strokeWidth="0.5" opacity="0.4" />
                <line x1="10" y1="90" x2="90" y2="10" stroke="#0B2A4A" strokeWidth="0.5" opacity="0.3" />
                <circle cx="150" cy="50" r="35" fill="none" stroke="#0B2A4A" strokeWidth="1" />
                <circle cx="150" cy="50" r="22" fill="none" stroke="#0B2A4A" strokeWidth="0.5" opacity="0.4" />
                <circle cx="150" cy="50" r="4" fill="#0B2A4A" opacity="0.6" />
                <line x1="100" y1="110" x2="190" y2="110" stroke="#0B2A4A" strokeWidth="0.5" opacity="0.3" />
                <line x1="110" y1="100" x2="110" y2="130" stroke="#0B2A4A" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-brand-accent">
        <Container>
          <div className="max-w-xl">
            <h2 className="font-display text-display-lg font-medium text-white mb-5">
              {t("finalCta.title")}
            </h2>
            <p className="font-body text-base text-white/70 mb-8 leading-relaxed">
              {t("finalCta.body")}
            </p>
            <Link
              href={`${prefix}/contacto`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-accent font-body font-medium text-base rounded-btn hover:bg-brand-bg transition-colors"
            >
              {t("finalCta.cta")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
