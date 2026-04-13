import { Reveal } from "@/components/landing/Reveal";

const points = [
  "Una scheda per ogni richiesta o pratica",
  "Stato e priorità sempre in vista",
  "Note e cronologia nello stesso posto",
  "Prossima azione sempre indicata",
  "Le attività ferme saltano all’occhio",
] as const;

export function SolutionSection() {
  return (
    <section
      className="border-b border-slate-200/60 bg-slate-50/50 py-14 sm:py-16 md:py-24"
      aria-labelledby="soluzione-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="grid gap-11 lg:grid-cols-[1fr_minmax(0,20rem)] lg:items-start lg:gap-16">
          <Reveal>
            <h2
              id="soluzione-heading"
              className="text-balance text-[1.375rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-2xl sm:leading-tight md:text-3xl"
            >
              Una scrivania per tutto il flusso operativo
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-[1.0625rem] leading-[1.65] text-slate-600 sm:text-base sm:leading-relaxed">
              Satrn mette richieste, attività e follow-up nello stesso posto:
              una scheda con stato, priorità, note, cronologia e prossima
              azione.
            </p>
          </Reveal>
          <Reveal>
            <ul className="space-y-4 rounded-[12px] border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/[0.04] sm:space-y-3 sm:p-5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-slate-700 sm:gap-3 sm:text-sm"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/90 sm:mt-1.5"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
