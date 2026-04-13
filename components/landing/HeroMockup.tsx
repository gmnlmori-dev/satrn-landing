export function HeroMockup() {
  return (
    <div
      className="relative w-full max-w-[min(100%,22.5rem)] select-none sm:max-w-[min(100%,26.5rem)]"
      aria-hidden
    >
      <div className="absolute -inset-px rounded-[14px] bg-gradient-to-br from-slate-200/90 via-white to-blue-50/70 p-px shadow-[0_28px_90px_-28px_rgba(15,23,42,0.2)]">
        <div className="overflow-hidden rounded-[13px] border border-slate-200/80 bg-[#f4f6f9] shadow-inner">
          {/* Window chrome */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 bg-white/95 px-3 py-2">
            <span className="flex gap-1.5">
              <span className="h-2 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2 w-2.5 rounded-full bg-slate-200" />
            </span>
            <span className="text-[10px] font-medium tracking-[0.08em] text-slate-400">
              Satrn
            </span>
            <span className="w-8" />
          </div>

          <div className="p-2.5 sm:p-3">
            {/* Breadcrumb / contesto */}
            <p className="mb-2.5 truncate text-[10px] font-medium text-slate-400">
              <span className="text-slate-500">Richieste</span>
              <span className="mx-1.5 text-slate-300">/</span>
              <span className="text-slate-600">Nuovo lead sito</span>
            </p>

            <div className="grid gap-2.5 sm:grid-cols-[1fr_7.25rem] sm:items-start sm:gap-3">
              {/* Colonna principale: scheda richiesta */}
              <div className="space-y-2.5">
                <div className="rounded-[10px] border border-slate-200/90 bg-white p-3 shadow-sm shadow-slate-900/[0.035]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="truncate text-[13px] font-semibold leading-tight tracking-tight text-slate-900">
                          Nuovo lead sito
                        </h2>
                      </div>
                      <p className="mt-1 font-mono text-[10px] text-slate-400">
                        REQ-2048 · Acme Studio
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center justify-end gap-1">
                      <span className="inline-flex items-center rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-900 ring-1 ring-amber-200/90">
                        In valutazione
                      </span>
                      <span className="inline-flex items-center rounded-md bg-rose-50 px-1.5 py-0.5 text-[10px] font-medium text-rose-900 ring-1 ring-rose-200/90">
                        Alta priorità
                      </span>
                    </div>
                  </div>

                  {/* Cronologia — tabella compatta */}
                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Cronologia
                    </p>
                    <div className="mt-2 overflow-hidden rounded-lg border border-slate-100 bg-slate-50/50">
                      <table className="w-full text-left text-[10px]">
                        <thead>
                          <tr className="border-b border-slate-100 bg-white/80 text-slate-400">
                            <th className="px-2 py-1.5 font-medium">Quando</th>
                            <th className="px-2 py-1.5 font-medium">Evento</th>
                            <th className="hidden w-[3.25rem] px-2 py-1.5 font-medium sm:table-cell">
                              Chi
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-600">
                          <tr className="border-b border-slate-100/80">
                            <td className="whitespace-nowrap px-2 py-1.5 font-mono text-[9px] text-slate-500">
                              Oggi 09:41
                            </td>
                            <td className="px-2 py-1.5 leading-snug">
                              Lead ricevuto dal form
                            </td>
                            <td className="hidden px-2 py-1.5 text-slate-500 sm:table-cell">
                              Sistema
                            </td>
                          </tr>
                          <tr className="border-b border-slate-100/80">
                            <td className="whitespace-nowrap px-2 py-1.5 font-mono text-[9px] text-slate-500">
                              Ieri
                            </td>
                            <td className="px-2 py-1.5 leading-snug">
                              Richiesti dettagli budget
                            </td>
                            <td className="hidden px-2 py-1.5 text-slate-500 sm:table-cell">
                              M. Rossi
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-2 py-1.5 font-mono text-[9px] text-slate-500">
                              Lun
                            </td>
                            <td className="px-2 py-1.5 leading-snug">
                              Primo contatto email
                            </td>
                            <td className="hidden px-2 py-1.5 text-slate-500 sm:table-cell">
                              M. Rossi
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Ultime note */}
                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Ultime note
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[10px] leading-snug text-slate-600">
                      <li className="rounded-md bg-slate-50/90 px-2 py-1.5 ring-1 ring-slate-100">
                        Preferisce essere richiamato dopo le 15:00.
                        <span className="mt-0.5 block text-[9px] text-slate-400">
                          M. Rossi · Oggi
                        </span>
                      </li>
                      <li className="rounded-md bg-slate-50/90 px-2 py-1.5 ring-1 ring-slate-100">
                        Budget da definire in call conoscitiva.
                      </li>
                    </ul>
                  </div>

                  {/* Prossima azione */}
                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Prossima azione
                    </p>
                    <div className="mt-2 flex gap-2 rounded-lg border border-blue-100/90 bg-gradient-to-br from-blue-50/90 to-white px-2.5 py-2 shadow-sm shadow-blue-900/[0.04] ring-1 ring-blue-100/60">
                      <span
                        className="mt-0.5 h-6 w-0.5 shrink-0 rounded-full bg-blue-600/85"
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold leading-snug text-slate-900">
                          Richiamare entro oggi
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          Slot consigliato · 15:30
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pannello laterale */}
              <aside className="rounded-[10px] border border-slate-200/90 bg-white p-2.5 shadow-sm shadow-slate-900/[0.035]">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Attività da seguire
                </p>
                <ul className="mt-2.5 space-y-2">
                  <li>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/60 px-2 py-1.5 transition-colors hover:bg-slate-50">
                      <p className="text-[10px] font-medium leading-snug text-slate-800">
                        Preventivo brand
                      </p>
                      <p className="mt-0.5 text-[9px] text-slate-400">
                        In attesa cliente
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/60 px-2 py-1.5 transition-colors hover:bg-slate-50">
                      <p className="text-[10px] font-medium leading-snug text-slate-800">
                        Brief cliente X
                      </p>
                      <p className="mt-0.5 text-[9px] text-slate-400">
                        Da completare
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/60 px-2 py-1.5 transition-colors hover:bg-slate-50">
                      <p className="text-[10px] font-medium leading-snug text-slate-800">
                        Risposta fornitore
                      </p>
                      <p className="mt-0.5 text-[9px] text-amber-600/90">
                        Oltre SLA
                      </p>
                    </div>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
