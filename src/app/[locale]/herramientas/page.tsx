import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ToolsClient from "@/components/herramientas/ToolsClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.herramientas" });
  return { title: t("title"), description: t("description") };
}

export default async function HerramientasPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "herramientas" });

  const items = t.raw("items") as Array<{
    id: string;
    title: string;
    description: string;
    tags: string[];
  }>;

  const modalLabels = {
    modalTitle: t("modal.title"),
    modalBody: t("modal.body"),
    namePlaceholder: t("modal.namePlaceholder"),
    emailPlaceholder: t("modal.emailPlaceholder"),
    submit: t("modal.submit"),
    success: t("modal.success"),
    downloadLink: t("modal.downloadLink"),
    cancel: t("modal.cancel"),
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

      {/* Tools grid */}
      <section className="py-16 md:py-24 border-b border-brand-border">
        <Container>
          <ToolsClient items={items} downloadBtn={t("downloadBtn")} modalLabels={modalLabels} />
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-10">
        <Container narrow>
          <div className="flex items-start gap-3 p-5 bg-[#F0F0EE] rounded-card border border-brand-border">
            <div className="w-1 h-full min-h-[2rem] bg-brand-accent/30 rounded-full shrink-0" />
            <p className="font-body text-sm text-brand-muted leading-relaxed">
              {t("disclaimer")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
