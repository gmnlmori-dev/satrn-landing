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
      className="border-b border-slate-200/60 bg-white py-16 md:py-24"
      aria-labelledby="problema-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2
            id="problema-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            Il lavoro sparso rallenta tutto
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-600">
            Richieste da più canali, follow-up persi, informazioni sparse e
            stato poco leggibile. Nei team di servizio il problema spesso non è
            il volume: è la dispersione.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {cards.map((card, i) => (
            <li key={card.title}>
              <Reveal className="h-full">
                <article className="group h-full rounded-[12px] border border-slate-200/90 bg-slate-50/40 p-5 shadow-sm shadow-slate-900/[0.035] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-slate-300/90 hover:shadow-md hover:shadow-slate-900/[0.06]">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.body}
                  </p>
                  <span
                    className="mt-4 inline-block text-[11px] font-medium tabular-nums text-slate-400"
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
