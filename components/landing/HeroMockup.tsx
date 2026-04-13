export function HeroMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[min(100%,21.5rem)] select-none min-[400px]:max-w-[min(100%,22.5rem)] sm:mx-0 sm:max-w-[min(100%,24rem)] md:max-w-[min(100%,26.5rem)]"
      aria-hidden
    >
      <div className="absolute -inset-px rounded-[14px] bg-gradient-to-br from-slate-200/90 via-white to-blue-50/70 p-px shadow-[0_28px_90px_-28px_rgba(15,23,42,0.2)]">
        <div className="overflow-hidden rounded-[13px] border border-slate-200/80 bg-[#f4f6f9] shadow-inner">
          <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 bg-white/95 px-3 py-2.5 md:py-2">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200 md:h-2 md:w-2.5" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200 md:h-2 md:w-2.5" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200 md:h-2 md:w-2.5" />
            </span>
            <span className="text-[11px] font-medium tracking-[0.08em] text-slate-400 md:text-[10px]">
              Satrn
            </span>
            <span className="w-8" />
          </div>

          <div className="p-3 md:p-3">
            <p className="mb-3 text-[11px] font-medium leading-snug text-slate-400 max-md:whitespace-normal md:mb-2.5 md:truncate md:text-[10px]">
              <span className="text-slate-500">Richieste</span>
              <span className="mx-1.5 text-slate-300">/</span>
              <span className="text-slate-600">Nuovo lead sito</span>
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_7.25rem] sm:items-start sm:gap-3">
              <div className="space-y-3 md:space-y-2.5">
                <div className="rounded-[10px] border border-slate-200/90 bg-white p-3.5 shadow-sm shadow-slate-900/[0.035] md:p-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-semibold leading-snug tracking-tight text-slate-900 max-md:whitespace-normal md:truncate md:text-[13px]">
                        Nuovo lead sito
                      </h2>
                      <p className="mt-1 font-mono text-[11px] text-slate-400 md:text-[10px]">
                        REQ-2048 · Acme Studio
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center justify-end gap-1.5 md:gap-1">
                      <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-[11px] font-medium text-amber-900 ring-1 ring-amber-200/90 md:px-1.5 md:py-0.5 md:text-[10px]">
                        In valutazione
                      </span>
                      <span className="inline-flex items-center rounded-md bg-rose-50 px-2 py-1 text-[11px] font-medium text-rose-900 ring-1 ring-rose-200/90 md:px-1.5 md:py-0.5 md:text-[10px]">
                        Alta priorità
                      </span>
                    </div>
                  </div>

                  <div className="mt-3.5 border-t border-slate-100 pt-3.5 md:mt-3 md:pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 md:text-[9px]">
                      Cronologia
                    </p>
                    <div className="mt-2 overflow-hidden rounded-lg border border-slate-100 bg-slate-50/50">
                      <table className="w-full text-left text-[11px] md:text-[10px]">
                        <thead>
                          <tr className="border-b border-slate-100 bg-white/80 text-slate-400">
                            <th className="px-2.5 py-2 font-medium md:px-2 md:py-1.5">
                              Quando
                            </th>
                            <th className="px-2.5 py-2 font-medium md:px-2 md:py-1.5">
                              Evento
                            </th>
                            <th className="hidden w-[3.25rem] px-2 py-1.5 font-medium sm:table-cell">
                              Chi
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-600">
                          <tr className="border-b border-slate-100/80">
                            <td className="whitespace-nowrap px-2.5 py-2 font-mono text-[10px] text-slate-500 md:px-2 md:py-1.5 md:text-[9px]">
                              Oggi 09:41
                            </td>
                            <td className="px-2.5 py-2 leading-snug md:px-2 md:py-1.5">
                              Lead ricevuto dal form
                            </td>
                            <td className="hidden px-2 py-1.5 text-slate-500 sm:table-cell">
                              Sistema
                            </td>
                          </tr>
                          <tr className="border-b border-slate-100/80">
                            <td className="whitespace-nowrap px-2.5 py-2 font-mono text-[10px] text-slate-500 md:px-2 md:py-1.5 md:text-[9px]">
                              Ieri
                            </td>
                            <td className="px-2.5 py-2 leading-snug md:px-2 md:py-1.5">
                              Richiesti dettagli budget
                            </td>
                            <td className="hidden px-2 py-1.5 text-slate-500 sm:table-cell">
                              M. Rossi
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-2.5 py-2 font-mono text-[10px] text-slate-500 md:px-2 md:py-1.5 md:text-[9px]">
                              Lun
                            </td>
                            <td className="px-2.5 py-2 leading-snug md:px-2 md:py-1.5">
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

                  <div className="mt-3.5 border-t border-slate-100 pt-3.5 md:mt-3 md:pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 md:text-[9px]">
                      Ultime note
                    </p>
                    <ul className="mt-2 space-y-2 text-[11px] leading-relaxed text-slate-600 md:space-y-1.5 md:text-[10px] md:leading-snug">
                      <li className="rounded-md bg-slate-50/90 px-2.5 py-2 ring-1 ring-slate-100 md:px-2 md:py-1.5">
                        Preferisce essere richiamato dopo le 15:00.
                        <span className="mt-1 block text-[10px] text-slate-400 md:mt-0.5 md:text-[9px]">
                          M. Rossi · Oggi
                        </span>
                      </li>
                      <li className="rounded-md bg-slate-50/90 px-2.5 py-2 ring-1 ring-slate-100 md:px-2 md:py-1.5">
                        Budget da definire in call conoscitiva.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3.5 border-t border-slate-100 pt-3.5 md:mt-3 md:pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 md:text-[9px]">
                      Prossima azione
                    </p>
                    <div className="mt-2 flex gap-2.5 rounded-lg border border-blue-100/90 bg-gradient-to-br from-blue-50/90 to-white px-3 py-2.5 shadow-sm shadow-blue-900/[0.04] ring-1 ring-blue-100/60 md:gap-2 md:px-2.5 md:py-2">
                      <span
                        className="mt-0.5 h-7 w-0.5 shrink-0 rounded-full bg-blue-600/85 md:h-6"
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.8125rem] font-semibold leading-snug text-slate-900 md:text-[11px]">
                          Richiamare entro oggi
                        </p>
                        <p className="mt-1 text-[11px] text-slate-500 md:mt-0.5 md:text-[10px]">
                          Slot consigliato · 15:30
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="mt-2 rounded-[10px] border border-slate-200/90 bg-white p-3 shadow-sm shadow-slate-900/[0.035] sm:mt-0 md:p-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 md:text-[9px]">
                  Attività da seguire
                </p>
                <ul className="mt-3 space-y-2.5 md:mt-2.5 md:space-y-2">
                  <li>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/60 px-2.5 py-2 transition-colors hover:bg-slate-50 md:px-2 md:py-1.5">
                      <p className="text-[11px] font-medium leading-snug text-slate-800 md:text-[10px]">
                        Preventivo brand
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400 md:mt-0.5 md:text-[9px]">
                        In attesa cliente
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/60 px-2.5 py-2 transition-colors hover:bg-slate-50 md:px-2 md:py-1.5">
                      <p className="text-[11px] font-medium leading-snug text-slate-800 md:text-[10px]">
                        Brief cliente X
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400 md:mt-0.5 md:text-[9px]">
                        Da completare
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/60 px-2.5 py-2 transition-colors hover:bg-slate-50 md:px-2 md:py-1.5">
                      <p className="text-[11px] font-medium leading-snug text-slate-800 md:text-[10px]">
                        Risposta fornitore
                      </p>
                      <p className="mt-1 text-[10px] text-amber-600/90 md:mt-0.5 md:text-[9px]">
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
