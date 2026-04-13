"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

/** Simula l’invio; sostituire con fetch verso API o servizio esterno. */
async function submitContactSimulated(formData: FormData): Promise<void> {
  await new Promise((r) => setTimeout(r, 700));
  if (!formData.get("nome") || !formData.get("email")) throw new Error("missing");
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await submitContactSimulated(data);
      // Future: await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(data)) })
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-[10px] border border-slate-200/90 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm shadow-slate-900/[0.03] transition-[border-color,box-shadow] placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20";

  const labelClass = "mb-1.5 block text-xs font-medium text-slate-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
      aria-describedby={status === "success" ? "contact-form-success" : undefined}
    >
      <div>
        <label htmlFor="contact-nome" className={labelClass}>
          Nome <span className="text-rose-600">*</span>
        </label>
        <input
          id="contact-nome"
          name="nome"
          type="text"
          autoComplete="name"
          required
          className={inputClass}
          placeholder="Il tuo nome"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email <span className="text-rose-600">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
          placeholder="nome@azienda.it"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="contact-azienda" className={labelClass}>
          Azienda
        </label>
        <input
          id="contact-azienda"
          name="azienda"
          type="text"
          autoComplete="organization"
          className={inputClass}
          placeholder="Nome azienda o studio"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="contact-messaggio" className={labelClass}>
          Messaggio <span className="text-rose-600">*</span>
        </label>
        <textarea
          id="contact-messaggio"
          name="messaggio"
          rows={4}
          required
          className={`${inputClass} min-h-[6.5rem] resize-y`}
          placeholder="Come gestite oggi richieste e follow-up?"
          disabled={status === "sending"}
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-[2.75rem] items-center justify-center rounded-[10px] bg-slate-900 px-6 text-sm font-medium text-white shadow-sm shadow-slate-900/10 transition-[background-color,transform,opacity] hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? "Invio in corso…" : "Invia"}
        </button>
      </div>

      <div className="min-h-[1.25rem]" aria-live="polite">
        {status === "success" && (
          <p
            id="contact-form-success"
            className="text-sm font-medium text-emerald-700"
          >
            Grazie. Invio simulato: in produzione si collegherà il vostro
            endpoint o un servizio email.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-rose-700">
            Qualcosa non ha funzionato. Riprovate o scrivete a hello@satrn.tech.
          </p>
        )}
      </div>
    </form>
  );
}
