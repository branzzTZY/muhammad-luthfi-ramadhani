import { academicSubjects, trainingRecords } from '../data/portfolioData';

export function AcademicSection() {
  const averageScore = (
    academicSubjects.reduce((acc, item) => acc + item.score, 0) / academicSubjects.length
  ).toFixed(1);

  return (
    <section id="akademik" className="border-b border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#1D4ED8]">
              04. Rekam Akademik &amp; Pelatihan
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Capaian Mata Pelajaran Produktif Kelas X TITL 2
            </h2>
          </div>

          <p className="font-mono text-sm font-semibold text-slate-700 tabular-nums">
            Rata-Rata Produktif: {averageScore} / 100
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-[#F8FAFC] text-xs font-semibold text-slate-600">
                <th scope="col" className="px-5 py-3.5 whitespace-nowrap">
                  Kode
                </th>
                <th scope="col" className="px-5 py-3.5">
                  Mata Pelajaran Kejuruan
                </th>
                <th scope="col" className="hidden px-5 py-3.5 md:table-cell">
                  Materi Pokok
                </th>
                <th scope="col" className="px-5 py-3.5 text-right whitespace-nowrap">
                  Jam / Minggu
                </th>
                <th scope="col" className="px-5 py-3.5 text-right whitespace-nowrap">
                  Nilai
                </th>
                <th scope="col" className="px-5 py-3.5 text-right whitespace-nowrap">
                  Predikat
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {academicSubjects.map((row) => (
                <tr key={row.code} className="transition-colors hover:bg-slate-50/75">
                  <td className="px-5 py-4 font-mono text-xs font-medium text-slate-500 tabular-nums whitespace-nowrap">
                    {row.code}
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {row.subject}
                  </td>
                  <td className="hidden px-5 py-4 text-slate-600 md:table-cell">
                    {row.focus}
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-slate-700 tabular-nums whitespace-nowrap">
                    {row.hoursPerWeek} JP
                  </td>
                  <td className="px-5 py-4 text-right font-mono font-semibold text-slate-950 tabular-nums whitespace-nowrap">
                    {row.score}
                  </td>
                  <td className="px-5 py-4 text-right font-medium text-[#1D4ED8] whitespace-nowrap">
                    {row.predicate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-bold tracking-tight text-slate-950">
            Pelatihan Bengkel &amp; Kegiatan Kejuruan
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
            {trainingRecords.map((record) => (
              <article
                key={record.title}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <div>
                  <p className="text-xs font-medium text-slate-500">{record.period}</p>
                  <h4 className="mt-2 text-base font-bold leading-snug text-slate-950">
                    {record.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {record.scope}
                  </p>
                </div>
                <p className="mt-5 border-t border-slate-200 pt-4 text-xs font-medium text-slate-500">
                  {record.organizer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
