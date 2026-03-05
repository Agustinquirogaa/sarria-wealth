export default function EERRMockup() {
  const rows = [
    { label: "Ingresos netos", v1: "284.700", v2: "254.100", bold: false, accent: false, indent: 0 },
    { label: "Coste de ventas", v1: "(175.300)", v2: "(157.200)", bold: false, accent: false, indent: 0 },
    { label: "Margen bruto", v1: "109.400", v2: "96.900", bold: true, accent: false, indent: 0 },
    { label: "  % sobre ingresos", v1: "38.4%", v2: "38.1%", bold: false, accent: false, indent: 1 },
    { label: "Gastos personal", v1: "(31.200)", v2: "(28.400)", bold: false, accent: false, indent: 0 },
    { label: "Gastos generales fijos", v1: "(12.600)", v2: "(11.800)", bold: false, accent: false, indent: 0 },
    { label: "Otros gastos variables", v1: "(4.400)", v2: "(3.900)", bold: false, accent: false, indent: 0 },
    { label: "EBITDA", v1: "61.200", v2: "52.800", bold: true, accent: true, indent: 0 },
    { label: "  % sobre ingresos", v1: "21.5%", v2: "20.8%", bold: false, accent: false, indent: 1 },
    { label: "Amortización", v1: "(8.400)", v2: "(7.900)", bold: false, accent: false, indent: 0 },
    { label: "EBIT", v1: "52.800", v2: "44.900", bold: true, accent: false, indent: 0 },
    { label: "Resultado financiero", v1: "(3.200)", v2: "(2.800)", bold: false, accent: false, indent: 0 },
    { label: "Resultado antes impuestos", v1: "49.600", v2: "42.100", bold: true, accent: false, indent: 0 },
    { label: "Impuesto sobre beneficios", v1: "(12.400)", v2: "(10.500)", bold: false, accent: false, indent: 0 },
    { label: "Resultado neto", v1: "37.200", v2: "31.600", bold: true, accent: true, indent: 0 },
  ];

  return (
    <div className="relative w-full rounded-card overflow-hidden bg-white shadow-card">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <span className="font-display text-4xl md:text-6xl font-medium text-brand-accent/8 select-none rotate-[-20deg] tracking-widest" aria-hidden="true">
          DEMO
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-accent/80" />
          <span className="font-mono text-xs text-brand-muted">EERR Gestión · Ejercicio 2024 vs 2023 (€)</span>
        </div>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[1fr_100px_100px] px-5 py-2 border-b border-brand-border bg-[#F7F7F5]">
        <span className="font-body text-[10px] font-medium uppercase tracking-wider text-brand-muted" />
        <span className="font-mono text-[10px] font-medium text-brand-muted text-right">2024</span>
        <span className="font-mono text-[10px] font-medium text-brand-muted text-right">2023</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-brand-border/50">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_100px_100px] px-5 py-2 ${
              row.accent ? "bg-brand-accent/5" : ""
            }`}
          >
            <span
              className={`font-body text-xs ${row.indent ? "pl-3" : ""} ${
                row.bold ? "font-semibold text-brand-text" : "text-brand-muted"
              } ${row.accent ? "!text-brand-accent font-semibold" : ""}`}
            >
              {row.label}
            </span>
            <span
              className={`font-mono text-xs text-right ${
                row.bold ? "font-medium text-brand-text" : "text-brand-muted"
              } ${row.accent ? "!text-brand-accent" : ""}`}
            >
              {row.v1}
            </span>
            <span className={`font-mono text-xs text-right ${row.bold ? "text-brand-text" : "text-brand-muted"}`}>
              {row.v2}
            </span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="px-5 py-2.5 border-t border-brand-border bg-[#F7F7F5]">
        <p className="font-body text-[9px] text-brand-muted/60">
          Modelo de gestión. Elaborado para análisis interno. No válido para fines fiscales.
        </p>
      </div>
    </div>
  );
}
