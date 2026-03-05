import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ExternalLink, Mail, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contacto/ContactForm";
import { siteConfig } from "@/lib/tokens";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.contacto" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactoPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "contacto" });

  const whatToExpectItems = t.raw("whatToExpect.items") as string[];
  const q1Options = t.raw("form.q1Options") as string[];
  const q3Options = t.raw("form.q3Options") as string[];

  const formLabels = {
    q1Label: t("form.q1Label"),
    q1Options,
    q2Label: t("form.q2Label"),
    q2Placeholder: t("form.q2Placeholder"),
    q3Label: t("form.q3Label"),
    q3Options,
    submit: t("form.submit"),
  };

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

      {/* Main content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: what to expect + Calendly */}
            <div>
              <h2 className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-5">
                {t("whatToExpect.title")}
              </h2>
              <ul className="space-y-3 mb-10">
                {whatToExpectItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={14} className="text-brand-accent mt-0.5 shrink-0" />
                    <span className="font-body text-base text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Calendly block */}
              <div id="calendly" className="bg-[#F0F0EE] rounded-card p-6 border border-brand-border">
                <h3 className="font-display text-lg font-medium text-brand-text mb-3">
                  {t("calendly.title")}
                </h3>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-white font-body font-medium text-sm rounded-btn hover:bg-brand-accent-light transition-colors"
                >
                  {t("calendly.btn")}
                  <ExternalLink size={13} />
                </a>
                <p className="mt-3 font-body text-xs text-brand-muted/70">
                  {t("calendly.note")}
                </p>
              </div>

              {/* Email */}
              <div className="mt-6 flex items-center gap-3">
                <Mail size={14} className="text-brand-muted shrink-0" />
                <div>
                  <p className="font-body text-xs text-brand-muted/70 mb-0.5">
                    {t("email.label")}
                  </p>
                  <a
                    href={`mailto:${t("email.value")}`}
                    className="font-body text-sm font-medium text-brand-accent hover:underline"
                  >
                    {t("email.value")}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: optional form */}
            <div>
              <h2 className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-5">
                {t("form.title")}
              </h2>
              <ContactForm labels={formLabels} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
