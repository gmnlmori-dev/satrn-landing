import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/landing/Logo";
import { SITE_DOMAIN_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Come Satrn tratta i dati raccolti dal sito e dal modulo contatti.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/85 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-4 py-3.5 sm:py-4">
          <Logo />
          <Link
            href="/"
            className="shrink-0 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Privacy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Ultimo aggiornamento: aprile 2026
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Chi gestisce questo sito
            </h2>
            <p className="mt-3">
              Il sito <strong className="font-medium text-slate-800">{SITE_DOMAIN_DISPLAY}</strong>{" "}
              presenta <strong className="font-medium text-slate-800">Satrn</strong>, un software
              operativo per centralizzare richieste, follow-up e processi operativi. Per
              qualsiasi domanda su questa informativa o sui dati che ci invii, puoi scrivere a{" "}
              <a
                href="mailto:hello@satrn.tech"
                className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800"
              >
                hello@satrn.tech
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Cosa raccogliamo dal modulo contatti
            </h2>
            <p className="mt-3">
              Se compili il form in homepage, ci invii i dati che inserisci nei campi (ad esempio
              nome, email, azienda e messaggio). Non ti chiediamo informazioni oltre a quelle
              necessarie per capire la tua richiesta e ricontattarti.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Per cosa usiamo questi dati
            </h2>
            <p className="mt-3">
              Usiamo i dati del form{" "}
              <strong className="font-medium text-slate-800">
                solo per leggere la tua richiesta e risponderti
              </strong>
              , incluso eventuale follow-up legato al contatto. Non vendiamo i tuoi dati e non li
              usiamo per finalità estranee a questo scopo, salvo obblighi di legge.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Dove è ospitato il sito
            </h2>
            <p className="mt-3">
              Il sito è pubblicato su{" "}
              <strong className="font-medium text-slate-800">Vercel</strong>, che fornisce
              l&apos;infrastruttura di hosting. I loro trattamenti sono regolati dalle loro
              informative e accordi applicabili al servizio.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">
              Come funziona l&apos;invio del modulo
            </h2>
            <p className="mt-3">
              Il modulo contatti è gestito tramite{" "}
              <strong className="font-medium text-slate-800">Formspree</strong>: i dati che invii
              passano attraverso il loro servizio per essere recapitati a noi. Per i dettagli sul
              trattamento lato Formspree, puoi consultare la documentazione e l&apos;informativa sul
              sito di Formspree.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">
              I tuoi diritti e i contatti
            </h2>
            <p className="mt-3">
              Se vuoi chiedere informazioni sui dati che ci hai inviato, rettificarli o sollevare
              dubbi, scrivi pure a{" "}
              <a
                href="mailto:hello@satrn.tech"
                className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800"
              >
                hello@satrn.tech
              </a>
              . Ti risponderemo nel modo più semplice possibile.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900">Nota</h2>
            <p className="mt-3">
              Satrn è in una fase iniziale: questa pagina descrive in modo chiaro e onesto cosa
              facciamo oggi con i dati del sito. Se in futuro cambieranno strumenti o finalità,
              aggiorneremo questa informativa di conseguenza.
            </p>
          </section>
        </div>

        <p className="mt-12 border-t border-slate-200/80 pt-8 text-center text-xs text-slate-400">
          <Link href="/" className="font-medium text-slate-500 hover:text-slate-800">
            ← Torna alla home
          </Link>
        </p>
      </main>
    </div>
  );
}
