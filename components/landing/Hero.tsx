import { Button } from "@/components/ui/Button";
import { CONTACT_SECTION_HASH } from "@/lib/constants";
import { HeroMockup } from "@/components/landing/HeroMockup";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200/60 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.07),transparent)]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 md:items-center md:gap-10 md:py-24 lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700/90">
            Sistema operativo per flussi operativi dispersi
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.45rem] lg:leading-[1.12]"
          >
            Richieste, follow-up e operatività: un solo sistema.
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
            Per agenzie, studi e società di servizi che oggi spostano il lavoro
            tra email, fogli, chat e passaggi fatti a mano.
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              href={CONTACT_SECTION_HASH}
              variant="primary"
              className="w-full justify-center sm:w-auto sm:min-w-[11rem]"
            >
              Richiedi una demo
            </Button>
            <Button
              href="#come-funziona"
              variant="secondary"
              className="w-full justify-center sm:w-auto sm:min-w-[11rem]"
            >
              Scopri come funziona
            </Button>
          </div>
          <p className="mt-6 text-sm font-medium text-slate-500">
            Ordine operativo, meno dispersione.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
