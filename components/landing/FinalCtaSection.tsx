import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/landing/ContactForm";
import { Reveal } from "@/components/landing/Reveal";
import { CONTACT_SECTION_HASH } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <section
      id="contatti"
      className="scroll-mt-24 bg-white py-14 sm:py-16 md:py-24"
      aria-labelledby="contatti-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <Reveal>
          <div className="rounded-[14px] border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-5 py-11 shadow-sm shadow-slate-900/[0.05] sm:px-8 sm:py-12 md:px-14 md:py-16">
            <div className="grid gap-11 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
              <div>
                <h2
                  id="contatti-heading"
                  className="max-w-2xl text-balance text-[1.375rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-2xl sm:leading-tight md:text-3xl"
                >
                  Richieste, follow-up e processi: un unico sistema.
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-[1.0625rem] leading-[1.65] text-slate-600 sm:text-base sm:leading-relaxed">
                  Per chi vuole ordine operativo, meno dispersione e uno stato
                  delle cose leggibile in ogni momento.
                </p>
                <div className="mt-9 sm:mt-8">
                  <Button
                    href={CONTACT_SECTION_HASH}
                    variant="primary"
                    className="w-full justify-center px-6 sm:w-auto sm:min-w-[12rem]"
                  >
                    Richiedi una demo
                  </Button>
                </div>
                <p className="mt-4 text-[0.9375rem] leading-snug text-slate-500 sm:text-sm">
                  Demo breve: vedete subito se è adatta al vostro flusso.
                </p>
              </div>

              <div className="border-t border-slate-200/80 pt-9 sm:pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
                <p className="text-pretty text-[0.9375rem] leading-relaxed text-slate-600 sm:text-sm">
                  Raccontami come gestisci oggi richieste, follow-up e attività.
                  Ti mostro se Satrn può aiutarti a centralizzare il flusso.
                </p>
                <div className="mt-6 rounded-[12px] border border-slate-200/90 bg-white/90 p-5 shadow-sm shadow-slate-900/[0.04] sm:mt-6 sm:p-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
