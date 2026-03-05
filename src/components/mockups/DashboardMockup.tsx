export default function DashboardMockup() {
  return (
    <div className="relative w-full rounded-card overflow-hidden bg-white shadow-card">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <span
          className="font-display text-4xl md:text-6xl font-medium text-brand-accent/8 select-none rotate-[-20deg] tracking-widest"
          aria-hidden="true"
        >
          DEMO
        </span>
      </div>

      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-accent/80" />
          <span className="font-mono text-xs text-brand-muted">Dashboard Financiero · FY 2024</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#E6E8EB]" />
          <div className="w-2 h-2 rounded-full bg-[#E6E8EB]" />
          <div className="w-2 h-2 rounded-full bg-[#E6E8EB]" />
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 gap-px bg-brand-border">
        {[
          { label: "Ingresos", value: "€284.7K", delta: "+12.4%", up: true },
          { label: "EBITDA", value: "€61.2K", delta: "+8.1%", up: true },
          { label: "Margen bruto", value: "38.4%", delta: "−1.2pp", up: false },
          { label: "Deuda neta", value: "€42.0K", delta: "−18.6%", up: true },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white px-4 py-3.5">
            <p className="font-body text-[10px] text-brand-muted uppercase tracking-wider mb-1">{kpi.label}</p>
            <p className="font-mono text-base font-medium text-brand-text">{kpi.value}</p>
            <p className={`font-mono text-[10px] mt-0.5 ${kpi.up ? "text-emerald-600" : "text-rose-500"}`}>
              {kpi.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="px-5 pt-4 pb-5">
        <p className="font-body text-[10px] font-medium uppercase tracking-wider text-brand-muted mb-3">
          Evolución mensual — Ingresos vs EBITDA
        </p>
        <svg viewBox="0 0 560 120" className="w-full" aria-hidden="true">
          {/* Grid lines */}
          {[0, 30, 60, 90].map((y) => (
            <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="#E6E8EB" strokeWidth="1" />
          ))}
          {/* Revenue bars */}
          {[18, 22, 26, 20, 28, 32, 30, 35, 34, 40, 38, 44].map((h, i) => (
            <rect
              key={i}
              x={i * 46 + 4}
              y={110 - h * 2.5}
              width="18"
              height={h * 2.5}
              rx="2"
              fill="#0B2A4A"
              opacity="0.9"
            />
          ))}
          {/* EBITDA bars */}
          {[6, 8, 9, 7, 10, 11, 10, 13, 12, 15, 14, 17].map((h, i) => (
            <rect
              key={i}
              x={i * 46 + 24}
              y={110 - h * 2.5}
              width="18"
              height={h * 2.5}
              rx="2"
              fill="#0B2A4A"
              opacity="0.25"
            />
          ))}
        </svg>
        {/* Legend */}
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-2 rounded-sm bg-brand-accent" />
            <span className="font-body text-[10px] text-brand-muted">Ingresos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-2 rounded-sm bg-brand-accent/25" />
            <span className="font-body text-[10px] text-brand-muted">EBITDA</span>
          </div>
        </div>
      </div>

      {/* Bottom ratios row */}
      <div className="px-5 pb-4 grid grid-cols-3 gap-3 border-t border-brand-border pt-3.5">
        {[
          { label: "Ratio liquidez", value: "1.42", note: "Solvente" },
          { label: "Cobertura deuda", value: "3.1x", note: "Adecuado" },
          { label: "ROE", value: "14.8%", note: "Año anterior: 11.2%" },
        ].map((r) => (
          <div key={r.label} className="bg-[#F7F7F5] rounded-lg px-3 py-2">
            <p className="font-body text-[9px] text-brand-muted uppercase tracking-wider">{r.label}</p>
            <p className="font-mono text-sm font-medium text-brand-text mt-0.5">{r.value}</p>
            <p className="font-body text-[9px] text-brand-muted/70 mt-0.5">{r.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
