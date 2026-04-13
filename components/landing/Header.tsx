import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/landing/Logo";
import { DEMO_MAILTO } from "@/lib/constants";

const nav = [
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#cosa-centralizza", label: "Cosa centralizza" },
  { href: "#per-chi-e", label: "Per chi è" },
  { href: "#contatti", label: "Contatti" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4">
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>
        <div className="flex flex-col gap-4 sm:flex-1 sm:flex-row sm:items-center sm:justify-end sm:gap-8">
          <nav aria-label="Principale">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button href={DEMO_MAILTO} variant="primary" className="shrink-0 px-4 py-2.5">
            Richiedi una demo
          </Button>
        </div>
      </div>
    </header>
  );
}
