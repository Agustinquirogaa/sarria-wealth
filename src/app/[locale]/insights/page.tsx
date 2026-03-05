import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.insights" });
  return { title: t("title"), description: t("description") };
}

export default async function InsightsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "insights" });
  const isEn = locale === "en";
  const prefix = isEn ? "/en" : "";

  return (
    <section className="py-32 md:py-48">
      <Container>
        <div className="max-w-xl">
          <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-display text-display-lg font-medium text-brand-text mb-5">
            {t("hero.h1")}
          </h1>
          <p className="font-body text-base text-brand-muted mb-8 leading-relaxed">
            {t("hero.body")}
          </p>
          <Link
            href={`${prefix}/`}
            className="inline-flex items-center gap-2 font-body text-sm text-brand-muted hover:text-brand-accent transition-colors"
          >
            <ArrowLeft size={13} />
            {t("hero.cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
