import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Informativa sulla privacy di Satrn.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-900 transition-colors hover:text-blue-700"
          >
            ← Torna alla home
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Privacy
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          Questa pagina è un segnaposto per l&apos;informativa sulla privacy.
          Sostituisci questo testo con i contenuti legali definitivi del tuo
          progetto.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Per informazioni:{" "}
          <a
            href="mailto:hello@satrn.tech"
            className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-blue-700"
          >
            hello@satrn.tech
          </a>
        </p>
      </main>
    </div>
  );
}
