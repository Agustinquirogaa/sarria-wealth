# Sarria Wealth — Website

Premium bilingual (ES/EN) website for an independent financial analysis practice.

Built with **Next.js 14 (App Router)** · **TypeScript** · **Tailwind CSS** · **next-intl**

---

## Quick Start

### Prerequisites
- Node.js ≥ 18
- pnpm (recommended) or npm

### Install & Run

```bash
# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

The site defaults to Spanish (`/`). English is at `/en`.

### Build for Production

```bash
pnpm build && pnpm start
```

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale layout (font loading, i18n provider)
│   │   ├── page.tsx            # Home (/)
│   │   ├── servicios/          # /servicios
│   │   ├── herramientas/       # /herramientas
│   │   ├── sobre-mi/           # /sobre-mi
│   │   ├── contacto/           # /contacto
│   │   └── insights/           # /insights (coming soon)
│   ├── globals.css             # Base styles, fonts
│   └── layout.tsx              # Root layout
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav + language toggle
│   │   └── Footer.tsx          # Brand footer
│   ├── ui/
│   │   ├── Container.tsx       # Max-width wrapper
│   │   ├── Section.tsx         # Section wrapper with optional eyebrow
│   │   └── Button.tsx          # Primary / outline / ghost variants
│   ├── home/
│   │   ├── HomePage.tsx        # All home sections
│   │   └── VisualProofTabs.tsx # Interactive DEMO tabs (client)
│   ├── mockups/
│   │   ├── DashboardMockup.tsx # Executive KPI dashboard
│   │   ├── EERRMockup.tsx      # Management P&L table
│   │   └── CashFlowMockup.tsx  # Cash flow bar chart
│   ├── herramientas/
│   │   ├── ToolsClient.tsx     # Tools grid with download trigger
│   │   └── DownloadModal.tsx   # Email capture modal
│   └── contacto/
│       └── ContactForm.tsx     # Optional qualifying form
│
├── i18n/
│   ├── es.json                 # Spanish copy (default)
│   ├── en.json                 # English copy
│   └── request.ts              # next-intl config
│
├── lib/
│   ├── tokens.ts               # Brand design tokens
│   └── utils.ts                # cn() helper
│
└── middleware.ts               # next-intl locale routing
```

---

## Design System

### Colors (src/lib/tokens.ts)
| Token          | Value     | Use                        |
|----------------|-----------|----------------------------|
| `bg`           | `#F7F7F5` | Page background            |
| `text`         | `#0B0F14` | Primary text               |
| `muted`        | `#5B6470` | Secondary text, labels     |
| `accent`       | `#0B2A4A` | Deep navy — CTAs, headings |
| `border`       | `#E6E8EB` | Hairlines                  |

### Typography
- **Display / H1–H3**: Playfair Display (serif) — elegant, editorial
- **Body / UI**: DM Sans — clean, neutral
- **Data / Mono**: DM Mono — for numbers and code

### Layout
- Container: max-width `1080px`, responsive horizontal padding
- Section vertical padding: `5rem` (mobile) → `7rem` (desktop)
- Card radius: `14px`, shadows: extremely subtle

---

## Production Checklist

### High Priority
- [ ] **Calendly**: Replace `siteConfig.calendlyUrl` in `src/lib/tokens.ts` with real link
- [ ] **Email**: Add real email address in `tokens.ts` and DNS records
- [ ] **Video**: Replace video placeholder in `HomePage.tsx` with actual embed (YouTube/Vimeo)
- [ ] **Download backend**: Connect download modal to a real email capture service (Resend, Mailchimp, ConvertKit) and serve real Excel files
- [ ] **Domain**: Configure `metadataBase` in `src/app/layout.tsx` with production domain

### SEO & Analytics
- [ ] **Analytics**: Add Plausible, Fathom, or GA4 in root layout (privacy-first recommended)
- [ ] **Sitemap**: Add `sitemap.ts` in `app/` using Next.js built-in sitemap support
- [ ] **OG Images**: Generate dynamic OG images with `next/og` per locale
- [ ] **robots.txt**: Add `robots.ts` to allow/disallow crawlers as needed

### Content
- [ ] Replace placeholder bio details with final approved copy
- [ ] Add real profile photo (or keep abstract illustration)
- [ ] Write first 2–3 Insights articles when ready
- [ ] Legal pages: Privacy Policy, Cookie Policy (GDPR — EU audience)

### Performance
- [ ] Self-host fonts or use `next/font` with Google Fonts (already configured for preloading)
- [ ] Optimise any images added with `next/image`
- [ ] Run Lighthouse audit after deployment; target 90+ on all metrics

---

## i18n Notes

- Default locale: `es` (Spanish) — served at `/`
- English at `/en/*`
- Language toggle in header switches locale and keeps the user on the same page
- All copy is in `src/i18n/es.json` and `src/i18n/en.json`
- Translator note: EN copy was written to sound institutional, not machine-translated

---

## Compliance & Disclaimer

The footer and herramientas page include the mandatory disclaimer:
> "No es asesoramiento de inversión. Sarria Wealth no custodia ni mueve fondos. No se comercializan productos financieros."

This must remain visible on all pages. Do not remove or obscure it.

---

Built for Sarria Wealth · 2025
