export default function CashFlowMockup() {
  const quarters = ["Q1", "Q2", "Q3", "Q4"];
  const opData = [14.2, 18.6, 16.4, 22.1];
  const invData = [-8.4, -3.2, -12.1, -5.6];
  const finData = [-2.8, -2.8, -2.8, -2.8];
  const netData = opData.map((v, i) => v + invData[i] + finData[i]);

  const maxAbs = 25;

  const barWidth = 22;
  const groupWidth = 110;
  const chartH = 120;
  const zeroY = chartH / 2;
  const scale = (zeroY - 8) / maxAbs;

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
          <span className="font-mono text-xs text-brand-muted">Cash Flow · 2024 por trimestre (€K)</span>
        </div>
      </div>

      {/* Chart */}
      <div className="px-5 pt-4 pb-2">
        <svg viewBox={`0 0 ${groupWidth * 4 + 20} ${chartH + 30}`} className="w-full" aria-hidden="true">
          {/* Zero line */}
          <line x1="0" y1={zeroY} x2={groupWidth * 4 + 20} y2={zeroY} stroke="#E6E8EB" strokeWidth="1.5" />
          {/* Grid lines positive */}
          {[10, 20].map((v) => (
            <line key={v} x1="0" y1={zeroY - v * scale} x2={groupWidth * 4 + 20} y2={zeroY - v * scale} stroke="#E6E8EB" strokeWidth="0.5" strokeDasharray="4,3" />
          ))}
          {/* Grid lines negative */}
          {[10, 20].map((v) => (
            <line key={v} x1="0" y1={zeroY + v * scale} x2={groupWidth * 4 + 20} y2={zeroY + v * scale} stroke="#E6E8EB" strokeWidth="0.5" strokeDasharray="4,3" />
          ))}

          {quarters.map((q, qi) => {
            const gx = qi * groupWidth + 14;
            const op = opData[qi];
            const inv = invData[qi];
            const fin = finData[qi];
            const net = netData[qi];

            return (
              <g key={q}>
                {/* Operating - positive bar */}
                <rect x={gx} y={zeroY - op * scale} width={barWidth} height={op * scale} rx="2" fill="#0B2A4A" opacity="0.85" />
                {/* Investing - negative bar */}
                <rect x={gx + barWidth + 3} y={zeroY} width={barWidth} height={Math.abs(inv) * scale} rx="2" fill="#5B6470" opacity="0.6" />
                {/* Financing - negative bar */}
                <rect x={gx + (barWidth + 3) * 2} y={zeroY} width={barWidth * 0.6} height={Math.abs(fin) * scale} rx="2" fill="#9BA3AC" opacity="0.5" />

                {/* Net dot */}
                <circle
                  cx={gx + barWidth + 3}
                  cy={zeroY - net * scale}
                  r="3.5"
                  fill={net >= 0 ? "#059669" : "#DC2626"}
                  stroke="white"
                  strokeWidth="1.5"
                />

                {/* Quarter label */}
                <text x={gx + barWidth} y={chartH + 18} textAnchor="middle" className="font-mono" fontSize="9" fill="#5B6470">
                  {q}
                </text>
                {/* Net value label */}
                <text
                  x={gx + barWidth + 3}
                  y={zeroY - net * scale - 7}
                  textAnchor="middle"
                  className="font-mono"
                  fontSize="8"
                  fill={net >= 0 ? "#059669" : "#DC2626"}
                  fontWeight="500"
                >
                  {net > 0 ? "+" : ""}{net.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Y axis labels */}
          {[20, 10, 0, -10, -20].map((v) => (
            <text key={v} x="0" y={zeroY - v * scale + 3} fontSize="8" fill="#9BA3AC" className="font-mono">
              {v > 0 ? `+${v}` : v}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 px-5 pb-3 border-t border-brand-border pt-3 bg-[#F7F7F5]">
        {[
          { color: "#0B2A4A", label: "Operativo", opacity: "85" },
          { color: "#5B6470", label: "Inversión", opacity: "60" },
          { color: "#9BA3AC", label: "Financiero", opacity: "50" },
          { color: "#059669", label: "FCF neto", opacity: "100", dot: true },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            {l.dot ? (
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: l.color }} />
            ) : (
              <div className="w-3 h-2 rounded-sm" style={{ backgroundColor: l.color }} />
            )}
            <span className="font-body text-[10px] text-brand-muted">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
