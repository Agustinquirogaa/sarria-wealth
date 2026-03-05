import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames: {
      "/": "/",
      "/servicios": "/servicios",
      "/herramientas": "/herramientas",
      "/sobre-mi": "/sobre-mi",
      "/contacto": "/contacto",
      "/insights": "/insights",
    },
  });
