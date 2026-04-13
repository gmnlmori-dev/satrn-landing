import { Button } from "@/components/ui/Button";
import { CONTACT_SECTION_HASH } from "@/lib/constants";
import { HeroMockup } from "@/components/landing/HeroMockup";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200/60 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.07),transparent)]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-14 pt-12 max-md:max-w-lg sm:gap-12 sm:px-5 sm:py-16 md:max-w-6xl md:grid-cols-2 md:items-center md:gap-10 md:py-24 lg:gap-16">
        <div className="max-w-xl md:max-w-xl">
          <p className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.12em] text-blue-700/90 sm:text-xs sm:tracking-[0.14em]">
            Sistema operativo per flussi operativi dispersi
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-balance text-[1.6875rem] font-semibold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-[2.45rem] lg:leading-[1.12]"
          >
            Richieste, follow-up e operatività: un solo sistema.
          </h1>
          <p className="mt-5 text-pretty text-[1.0625rem] leading-[1.65] text-slate-600 sm:text-[1.05rem] sm:leading-relaxed">
            Per agenzie, studi e società di servizi che oggi spostano il lavoro
            tra email, fogli, chat e passaggi fatti a mano.
          </p>
          <div className="mt-9 flex w-full max-w-md flex-col gap-3.5 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
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
          <p className="mt-7 text-[0.9375rem] font-medium leading-snug text-slate-500 sm:mt-6 sm:text-sm">
            Ordine operativo, meno dispersione.
          </p>
        </div>
        <div className="flex justify-center pt-2 md:justify-end md:pt-0">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
