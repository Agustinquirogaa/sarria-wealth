"use client";

import { useState } from "react";
import { Download, Tag } from "lucide-react";
import DownloadModal from "@/components/herramientas/DownloadModal";

interface ToolItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

interface ToolsClientProps {
  items: ToolItem[];
  downloadBtn: string;
  modalLabels: {
    modalTitle: string;
    modalBody: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    submit: string;
    success: string;
    downloadLink: string;
    cancel: string;
  };
}

export default function ToolsClient({ items, downloadBtn, modalLabels }: ToolsClientProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-card p-6 border border-brand-border/50 shadow-card flex flex-col"
          >
            {/* Icon area */}
            <div className="w-10 h-10 rounded-[8px] bg-brand-accent/8 flex items-center justify-center mb-4">
              <svg viewBox="0 0 20 20" className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="3" width="14" height="14" rx="2" />
                <line x1="7" y1="8" x2="13" y2="8" />
                <line x1="7" y1="11" x2="13" y2="11" />
                <line x1="7" y1="14" x2="10" y2="14" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-medium text-brand-text mb-2">
              {item.title}
            </h3>
            <p className="font-body text-sm text-brand-muted leading-relaxed mb-4 flex-1">
              {item.description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-brand-muted border border-brand-border rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => setActiveModal(item.id)}
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-brand-accent text-brand-accent font-body font-medium text-sm rounded-btn hover:bg-brand-accent hover:text-white transition-colors"
            >
              <Download size={13} />
              {downloadBtn}
            </button>
          </div>
        ))}
      </div>

      <DownloadModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={items.find((i) => i.id === activeModal)?.title ?? ""}
        labels={modalLabels}
      />
    </>
  );
}
