import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
  };
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  return <HomePage locale={locale} />;
}
