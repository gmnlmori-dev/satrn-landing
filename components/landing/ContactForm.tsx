"use client";

import { useState } from "react";
import { FORMSPREE_ACTION } from "@/lib/constants";

type Status = "idle" | "sending" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validateForm(form: HTMLFormElement): FieldErrors {
  const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
  const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
  const errors: FieldErrors = {};
  if (!name) errors.name = "Inserisci il nome.";
  if (!email) {
    errors.email = "Inserisci l’email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Inserisci un’email valida.";
  }
  if (!message) errors.message = "Scrivi un breve messaggio.";
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setFieldErrors({});
    setStatus("idle");

    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      requestAnimationFrame(() => {
        const el = form.querySelector<HTMLElement>("[aria-invalid='true']");
        el?.scrollIntoView({ block: "center", behavior: "smooth" });
        if (el && "focus" in el) {
          (el as HTMLInputElement).focus({ preventScroll: true });
        }
      });
      return;
    }

    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        if (body?.errors) throw new Error("validation");
        throw new Error("network");
      }
      setStatus("success");
      form.reset();
      requestAnimationFrame(() => {
        document
          .getElementById("contact-form-success")
          ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-[10px] border border-slate-200/90 bg-white px-3.5 py-3 text-base text-slate-900 shadow-sm shadow-slate-900/[0.03] transition-[border-color,box-shadow] placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 disabled:opacity-60 md:py-2.5 md:text-sm";

  const inputErrorClass = "border-rose-300/90 ring-1 ring-rose-200/60 focus:border-rose-400 focus:ring-rose-500/20";

  const labelClass =
    "mb-2.5 block text-[0.9375rem] font-medium text-slate-600 md:mb-1.5 md:text-xs";

  return (
    <form
      id="contact-form"
      method="POST"
      action={FORMSPREE_ACTION}
      onSubmit={handleSubmit}
      className="space-y-6 sm:space-y-4"
      noValidate
      aria-describedby={status === "success" ? "contact-form-success" : undefined}
    >
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Nome <span className="text-rose-600">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          enterKeyHint="next"
          className={`${inputClass} min-h-12 md:min-h-0 ${fieldErrors.name ? inputErrorClass : ""}`}
          placeholder="Il tuo nome"
          disabled={status === "sending"}
          aria-invalid={!!fieldErrors.name}
          aria-describedby={fieldErrors.name ? "err-name" : undefined}
        />
        {fieldErrors.name && (
          <p id="err-name" className="mt-2 text-sm font-medium text-rose-600 md:mt-1.5 md:text-xs">
            {fieldErrors.name}
          </p>
        )}
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
          inputMode="email"
          enterKeyHint="next"
          className={`${inputClass} min-h-12 md:min-h-0 ${fieldErrors.email ? inputErrorClass : ""}`}
          placeholder="nome@azienda.it"
          disabled={status === "sending"}
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? "err-email" : undefined}
        />
        {fieldErrors.email && (
          <p id="err-email" className="mt-2 text-sm font-medium text-rose-600 md:mt-1.5 md:text-xs">
            {fieldErrors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-company" className={labelClass}>
          Azienda
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          enterKeyHint="next"
          className={`${inputClass} min-h-12 md:min-h-0`}
          placeholder="Nome azienda o studio"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Messaggio <span className="text-rose-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className={`${inputClass} min-h-[7.5rem] resize-y md:min-h-[6.5rem] ${fieldErrors.message ? inputErrorClass : ""}`}
          placeholder="Come gestite oggi richieste e follow-up?"
          disabled={status === "sending"}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "err-message" : undefined}
        />
        {fieldErrors.message && (
          <p id="err-message" className="mt-2 text-sm font-medium text-rose-600 md:mt-1.5 md:text-xs">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-[10px] bg-slate-900 px-6 text-base font-medium text-white shadow-sm shadow-slate-900/10 transition-[background-color,transform,opacity] hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60 sm:min-h-11 sm:w-auto sm:text-sm"
        >
          {status === "sending" ? "Invio in corso…" : "Invia messaggio"}
        </button>
      </div>

      <div className="min-h-[1.25rem]" aria-live="polite">
        {status === "success" && (
          <p
            id="contact-form-success"
            className="rounded-lg border border-emerald-200/90 bg-emerald-50/90 px-3 py-3 text-base font-medium text-emerald-900 sm:py-2.5 sm:text-sm"
          >
            Messaggio inviato. Ti risponderò appena possibile.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg border border-rose-200/90 bg-rose-50/90 px-3 py-3 text-base font-medium text-rose-900 sm:py-2.5 sm:text-sm">
            Invio non riuscito. Controlla la connessione e riprova, oppure scrivi a
            hello@satrn.tech.
          </p>
        )}
      </div>
    </form>
  );
}
