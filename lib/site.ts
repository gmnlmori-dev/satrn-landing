/** URL pubblico canonico (con www). */
export const SITE_URL_WWW = "https://www.satrn.tech";

/** Testo mostrato in UI per il dominio. */
export const SITE_DOMAIN_DISPLAY = "www.satrn.tech";

/**
 * URL base per metadata e link assoluti: override env, preview Vercel, o produzione.
 */
export function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return SITE_URL_WWW;
}
