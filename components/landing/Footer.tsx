import Link from "next/link";
import { Logo } from "@/components/landing/Logo";
import { SITE_DOMAIN_DISPLAY, SITE_URL_WWW } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-11 sm:px-5 sm:py-12">
        <div className="flex flex-col gap-9 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <div className="min-w-0 max-w-md">
            <Logo />
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
              Sistema operativo per flussi operativi dispersi.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:mt-6 sm:gap-3">
              <a
                href="mailto:hello@satrn.tech"
                className="inline-flex min-h-11 w-fit items-center text-[0.9375rem] font-medium text-slate-800 transition-colors hover:text-blue-700 sm:min-h-0 sm:text-sm"
              >
                hello@satrn.tech
              </a>
              <a
                href={SITE_URL_WWW}
                className="inline-flex min-h-11 w-fit items-center text-[0.9375rem] font-medium text-slate-800 transition-colors hover:text-blue-700 sm:min-h-0 sm:text-sm"
                rel="noopener noreferrer"
              >
                {SITE_DOMAIN_DISPLAY}
              </a>
            </div>
          </div>

          <nav
            aria-label="Informazioni legali"
            className="flex shrink-0 flex-col gap-2 border-t border-slate-100 pt-7 sm:border-t-0 sm:pt-0"
          >
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-slate-600 transition-colors hover:text-slate-900 sm:min-h-0 sm:text-sm"
            >
              Privacy
            </Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-200/60 pt-7 sm:mt-12 sm:pt-6">
          <p className="text-center text-[0.8125rem] text-slate-400 sm:text-xs">
            © {new Date().getFullYear()} Satrn
          </p>
        </div>
      </div>
    </footer>
  );
}
