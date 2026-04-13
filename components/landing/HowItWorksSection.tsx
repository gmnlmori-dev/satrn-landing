import { Reveal } from "@/components/landing/Reveal";

const steps = [
  {
    title: "Raccogli",
    body: "Da più fonti a un solo spazio operativo.",
  },
  {
    title: "Organizza",
    body: "Classificare, aggiornare e tracciare senza saltare tra strumenti.",
  },
  {
    title: "Agisci",
    body: "Chi se ne occupa, a che punto siete, qual è il prossimo passo.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="come-funziona"
      className="scroll-mt-24 border-b border-slate-200/60 bg-white py-14 sm:py-16 md:py-24"
      aria-labelledby="come-funziona-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <Reveal>
          <h2
            id="come-funziona-heading"
            className="text-balance text-[1.375rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-2xl sm:leading-tight md:text-3xl"
          >
            Dal flusso sparso al sistema operativo
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-7 md:mt-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal className="h-full">
                <article className="relative flex h-full min-h-0 flex-col rounded-[12px] border border-slate-200/90 bg-slate-50/30 p-6 shadow-sm shadow-slate-900/[0.035] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-slate-300/90 hover:shadow-md hover:shadow-slate-900/[0.06]">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-blue-700/85 sm:text-xs">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-3.5 text-lg font-semibold leading-snug text-slate-900 sm:mt-3">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
