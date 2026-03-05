/**
 * Sarria Wealth — Brand Tokens
 * Single source of truth for design system values.
 */

export const colors = {
  bg: "#F7F7F5",
  text: "#0B0F14",
  muted: "#5B6470",
  accent: "#0B2A4A",
  accentLight: "#163D6A",
  border: "#E6E8EB",
  white: "#FFFFFF",
  surface: "#FFFFFF",
  surfaceAlt: "#F0F0EE",
} as const;

export const typography = {
  fontDisplay: "var(--font-playfair)",
  fontBody: "var(--font-dm-sans)",
  fontMono: "var(--font-dm-mono)",
  scaleXl: "clamp(3rem, 6vw, 5rem)",
  scaleLg: "clamp(2.25rem, 4vw, 3.5rem)",
  scaleMd: "clamp(1.75rem, 3vw, 2.5rem)",
  scaleBody: "1.125rem",
  scaleSmall: "0.875rem",
} as const;

export const spacing = {
  sectionY: "7rem",
  sectionYSm: "4rem",
  containerMax: "1080px",
  containerPx: "1.5rem",
} as const;

export const radii = {
  card: "14px",
  btn: "10px",
  sm: "6px",
} as const;

export const shadows = {
  card: "0 1px 3px rgba(11,15,20,0.06), 0 4px 16px rgba(11,15,20,0.04)",
  cardHover: "0 4px 24px rgba(11,15,20,0.10)",
  subtle: "0 1px 2px rgba(11,15,20,0.05)",
} as const;

// Social / contact
export const siteConfig = {
  name: "Sarria Wealth",
  tagline: "Claridad en tus números. Confianza en tus decisiones.",
  taglineEn: "Clarity in your numbers. Confidence in your decisions.",
  email: "contacto@sarriawealth.com",
  calendlyUrl: "https://calendly.com/sarriawealth", // Replace with real link
  defaultLocale: "es",
  locales: ["es", "en"],
} as const;
