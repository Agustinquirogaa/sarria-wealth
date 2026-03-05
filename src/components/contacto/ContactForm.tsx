"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface ContactFormProps {
  labels: {
    q1Label: string;
    q1Options: string[];
    q2Label: string;
    q2Placeholder: string;
    q3Label: string;
    q3Options: string[];
    submit: string;
  };
}

export default function ContactForm({ labels }: ContactFormProps) {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#F0F0EE] rounded-card p-6 border border-brand-border text-center">
        <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-3">
          <Send size={16} className="text-brand-accent" />
        </div>
        <p className="font-body text-sm text-brand-muted">
          Respuestas recibidas. Puedes agendar ahora usando el botón de arriba.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Q1 */}
      <div>
        <label className="font-body text-xs font-medium uppercase tracking-wider text-brand-muted block mb-2">
          {labels.q1Label}
        </label>
        <div className="flex flex-wrap gap-2">
          {labels.q1Options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setQ1(opt)}
              className={`px-3.5 py-1.5 rounded-btn font-body text-sm border transition-colors ${
                q1 === opt
                  ? "bg-brand-accent text-white border-brand-accent"
                  : "border-brand-border text-brand-muted hover:border-brand-accent hover:text-brand-accent"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Q2 */}
      <div>
        <label className="font-body text-xs font-medium uppercase tracking-wider text-brand-muted block mb-2">
          {labels.q2Label}
        </label>
        <textarea
          value={q2}
          onChange={(e) => setQ2(e.target.value)}
          placeholder={labels.q2Placeholder}
          rows={3}
          className="w-full px-4 py-2.5 border border-brand-border rounded-btn font-body text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent transition-colors resize-none"
        />
      </div>

      {/* Q3 */}
      <div>
        <label className="font-body text-xs font-medium uppercase tracking-wider text-brand-muted block mb-2">
          {labels.q3Label}
        </label>
        <div className="flex flex-wrap gap-2">
          {labels.q3Options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setQ3(opt)}
              className={`px-3.5 py-1.5 rounded-btn font-body text-sm border transition-colors ${
                q3 === opt
                  ? "bg-brand-accent text-white border-brand-accent"
                  : "border-brand-border text-brand-muted hover:border-brand-accent hover:text-brand-accent"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-white font-body font-medium text-sm rounded-btn hover:bg-brand-accent-light transition-colors"
      >
        <Send size={13} />
        {labels.submit}
      </button>
    </form>
  );
}
