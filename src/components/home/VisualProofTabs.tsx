"use client";

import { useState } from "react";
import DashboardMockup from "@/components/mockups/DashboardMockup";
import EERRMockup from "@/components/mockups/EERRMockup";
import CashFlowMockup from "@/components/mockups/CashFlowMockup";

interface Tab {
  id: string;
  label: string;
  caption: string;
}

export default function VisualProofTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "dashboard");

  const activeTab = tabs.find((t) => t.id === active);

  const mockups: Record<string, React.ReactNode> = {
    dashboard: <DashboardMockup />,
    eerr: <EERRMockup />,
    cashflow: <CashFlowMockup />,
  };

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 mb-6 bg-[#F0F0EE] rounded-card p-1 w-fit border border-brand-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-[10px] font-body text-sm font-medium transition-all ${
              active === tab.id
                ? "bg-white text-brand-accent shadow-subtle"
                : "text-brand-muted hover:text-brand-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mockup */}
      <div className="w-full max-w-3xl">
        {mockups[active]}
        {activeTab && (
          <p className="mt-3 font-body text-sm text-brand-muted/70">
            {activeTab.caption}
          </p>
        )}
      </div>
    </div>
  );
}
