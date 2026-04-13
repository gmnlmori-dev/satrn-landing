import { Reveal } from "@/components/landing/Reveal";

const blocks = [
  {
    title: "Agenzie",
    body: "Lead, task e passaggi operativi nello stesso quadro.",
  },
  {
    title: "Studi professionali",
    body: "Richieste, pratiche e stato con ordine.",
  },
  {
    title: "Società di servizi",
    body: "Contesto chiaro tra prime richieste, follow-up e operatività quotidiana.",
  },
] as const;

export function TargetSection() {
  return (
    <section
      id="per-chi-e"
      className="scroll-mt-24 border-b border-slate-200/60 bg-white py-14 sm:py-16 md:py-24"
      aria-labelledby="per-chi-e-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <Reveal>
          <h2
            id="per-chi-e-heading"
            className="max-w-3xl text-balance text-[1.375rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-2xl sm:leading-tight md:text-3xl"
          >
            Per chi vive tra richieste, pratiche e follow-up
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {blocks.map((block) => (
            <li key={block.title}>
              <Reveal className="h-full">
                <article className="flex h-full min-h-0 flex-col rounded-[12px] border border-slate-200/90 bg-slate-50/40 p-6 shadow-sm shadow-slate-900/[0.035] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-900/[0.06]">
                  <h3 className="text-base font-semibold leading-snug text-slate-900">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600 sm:text-sm">
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
