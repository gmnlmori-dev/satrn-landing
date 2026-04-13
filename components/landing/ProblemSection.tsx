import { Reveal } from "@/components/landing/Reveal";

const cards = [
  {
    title: "Richieste in più posti",
    body: "Email, form, messaggi, appunti, fogli: stessa richiesta, informazioni spacchettate.",
  },
  {
    title: "Follow-up fragili",
    body: "Le prossime mosse restano nella testa di qualcuno.",
  },
  {
    title: "Stato opaco",
    body: "Non capisci subito cosa è aperto, in attesa o fermo.",
  },
  {
    title: "Contesto da ricostruire",
    body: "Ogni volta riparti quasi da zero per capire dove si era arrivati.",
  },
] as const;

export function ProblemSection() {
  return (
    <section
      id="problema"
      className="scroll-mt-24 border-b border-slate-200/60 bg-white py-14 sm:py-16 md:py-24"
      aria-labelledby="problema-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <Reveal>
          <h2
            id="problema-heading"
            className="text-balance text-[1.375rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-2xl sm:leading-tight md:text-3xl"
          >
            Il lavoro sparso rallenta tutto
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-[1.0625rem] leading-[1.65] text-slate-600 sm:text-base sm:leading-relaxed">
            Richieste da più canali, follow-up persi, informazioni sparse e
            stato poco leggibile. Nei team di servizio il problema spesso non è
            il volume: è la dispersione.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {cards.map((card, i) => (
            <li key={card.title}>
              <Reveal className="h-full">
                <article className="group flex h-full min-h-0 flex-col rounded-[12px] border border-slate-200/90 bg-slate-50/40 p-6 shadow-sm shadow-slate-900/[0.035] transition-[box-shadow,transform,border-color] duration-200 sm:p-5 hover:-translate-y-0.5 hover:border-slate-300/90 hover:shadow-md hover:shadow-slate-900/[0.06]">
                  <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-sm">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                    {card.body}
                  </p>
                  <span
                    className="mt-5 inline-block text-xs font-medium tabular-nums text-slate-400 sm:mt-4 sm:text-[11px]"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
