"use client";

import { useState } from "react";
import { X, Download } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  labels: {
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

export default function DownloadModal({
  isOpen,
  onClose,
  title,
  labels,
}: DownloadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-brand-text/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-card shadow-card-hover p-8 z-10 animate-fade-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-brand-muted hover:text-brand-text transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {!submitted ? (
          <>
            <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-muted mb-1">
              {title}
            </p>
            <h2 className="font-display text-xl font-medium text-brand-text mb-2">
              {labels.modalTitle}
            </h2>
            <p className="font-body text-sm text-brand-muted mb-6">
              {labels.modalBody}
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={labels.namePlaceholder}
                required
                className="w-full px-4 py-2.5 border border-brand-border rounded-btn font-body text-sm text-brand-text placeholder-brand-muted/60 focus:outline-none focus:border-brand-accent transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={labels.emailPlaceholder}
                required
                className="w-full px-4 py-2.5 border border-brand-border rounded-btn font-body text-sm text-brand-text placeholder-brand-muted/60 focus:outline-none focus:border-brand-accent transition-colors"
              />
              <div className="flex gap-3 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-brand-accent text-white font-body font-medium text-sm rounded-btn hover:bg-brand-accent-light transition-colors disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Download size={13} />
                      {labels.submit}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 border border-brand-border text-brand-muted font-body text-sm rounded-btn hover:border-brand-text transition-colors"
                >
                  {labels.cancel}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
              <Download size={20} className="text-brand-accent" />
            </div>
            <p className="font-body text-sm text-brand-muted mb-4">{labels.success}</p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-accent hover:underline"
            >
              {labels.downloadLink}
            </a>
            <p className="mt-4 font-body text-xs text-brand-muted/60">
              (Placeholder — connect real file storage in production)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
