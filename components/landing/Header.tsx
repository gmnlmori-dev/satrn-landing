import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/landing/Logo";
import { CONTACT_SECTION_HASH } from "@/lib/constants";

const nav = [
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#cosa-centralizza", label: "Cosa centralizza" },
  { href: "#per-chi-e", label: "Per chi è" },
  { href: "#contatti", label: "Contatti" },
] as const;

const navLinkClass =
  "touch-manipulation rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors active:bg-slate-100/90 hover:text-slate-900 md:rounded-none md:px-0 md:py-1 md:active:bg-transparent";

function NavList({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {nav.map((item) => (
        <li key={item.href} className="shrink-0 md:shrink">
          <a href={item.href} className={navLinkClass}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-white/75">
      {/* Mobile / tablet: logo + CTA, poi nav scrollabile */}
      <div className="mx-auto max-w-6xl px-4 md:hidden">
        <div className="flex flex-col gap-3 py-3">
          <div className="flex min-w-0 items-center justify-between gap-3">
            <Logo />
            <Button
              href={CONTACT_SECTION_HASH}
              variant="primary"
              className="min-h-11 shrink-0 px-4 py-2.5 text-sm"
            >
              Richiedi una demo
            </Button>
          </div>
          <nav aria-label="Principale">
            <NavList className="scrollbar-none -mx-4 flex gap-0.5 overflow-x-auto px-4 pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" />
          </nav>
        </div>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-6 px-4 py-4 md:flex md:flex-row">
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-end md:gap-8">
          <nav aria-label="Principale">
            <NavList className="flex flex-wrap items-center gap-x-6 gap-y-2" />
          </nav>
          <Button
            href={CONTACT_SECTION_HASH}
            variant="primary"
            className="min-h-11 shrink-0 px-4 py-2.5"
          >
            Richiedi una demo
          </Button>
        </div>
      </div>
    </header>
  );
}
