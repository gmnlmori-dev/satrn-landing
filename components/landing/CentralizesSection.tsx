import { Reveal } from "@/components/landing/Reveal";

const blocks = [
  {
    title: "Richieste in arrivo",
    body: "Form, email, contatti, nuove opportunità.",
  },
  {
    title: "Follow-up",
    body: "Ricontatti, promemoria, prossime mosse.",
  },
  {
    title: "Task operativi",
    body: "Passaggi interni, assegnazioni, avanzamento.",
  },
  {
    title: "Stato delle attività",
    body: "Aperto, in attesa o fermo: in un colpo d’occhio.",
  },
] as const;

export function CentralizesSection() {
  return (
    <section
      id="cosa-centralizza"
      className="scroll-mt-24 border-b border-slate-200/60 bg-slate-50/50 py-14 sm:py-16 md:py-24"
      aria-labelledby="cosa-centralizza-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2
            id="cosa-centralizza-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            Quello che oggi si perde tra gli strumenti
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {blocks.map((block) => (
            <li key={block.title}>
              <Reveal className="h-full">
                <article className="h-full rounded-[12px] border border-slate-200/90 bg-white p-5 shadow-sm shadow-slate-900/[0.035] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-900/[0.06]">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {block.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
