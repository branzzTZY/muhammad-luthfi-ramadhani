import { coreCompetencies } from '../data/portfolioData';

export function CompetenciesSection() {
  return (
    <section id="kompetensi" className="border-b border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#1D4ED8]">
              02. Kompetensi Kejuruan
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Bidang Penguasaan Dasar Teknik Instalasi Tenaga Listrik
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-500">
            Mengacu pada capaian pembelajaran Fase E Kurikulum Merdeka dan standar kerja
            bengkel TITL.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {coreCompetencies.map((item) => (
            <article
              key={item.number}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm font-semibold text-[#1D4ED8] tabular-nums">
                    {item.number}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {item.reference}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t border-slate-200 pt-5 text-sm text-slate-700">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-3 shrink-0 bg-[#1D4ED8]"
                    />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
