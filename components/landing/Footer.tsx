import { Logo } from "@/components/landing/Logo";

const links = [
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#per-chi-e", label: "Per chi è" },
  { href: "#contatti", label: "Contatti" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Sistema operativo per flussi operativi dispersi.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 text-sm font-medium text-slate-600">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="-mx-1 inline-flex min-h-11 items-center rounded-md px-1 py-2 text-[0.9375rem] transition-colors hover:text-slate-900 active:bg-slate-100/80 sm:min-h-0 sm:py-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Email
            </p>
            <a
              href="mailto:hello@satrn.tech"
              className="mt-2 inline-flex min-h-11 items-center text-base font-medium text-slate-800 transition-colors hover:text-blue-700 sm:mt-1 sm:min-h-0 sm:text-sm"
            >
              hello@satrn.tech
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/60 py-6">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Satrn. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
