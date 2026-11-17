import { studentProfile } from '../data/portfolioData';

const identityRows = [
  { label: 'Nama Lengkap', value: studentProfile.fullName },
  { label: 'Kelas', value: studentProfile.classRoom },
  { label: 'Program Keahlian', value: studentProfile.program },
  { label: 'Konsentrasi Keahlian', value: studentProfile.major },
  { label: 'Satuan Pendidikan', value: studentProfile.school },
  { label: 'Tahun Ajaran', value: `${studentProfile.academicYear} · ${studentProfile.phase}` },
  { label: 'Domisili Sekolah', value: studentProfile.location },
];

export function ProfileSection() {
  return (
    <section id="profil" className="border-b border-slate-200 bg-[#F8FAFC] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#1D4ED8]">
            01. Identitas &amp; Profil Akademik
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Data Formal Peserta Didik
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-base font-semibold text-slate-900">
              Keterangan Resmi Siswa
            </h3>
            <dl className="mt-5 divide-y divide-slate-100 border-t border-slate-100">
              {identityRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-12 sm:gap-4"
                >
                  <dt className="text-sm font-medium text-slate-500 sm:col-span-5">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-semibold text-slate-900 tabular-nums sm:col-span-7">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-5">
            <div>
              <p className="text-xs font-medium text-slate-500">
                Prinsip Kerja &amp; Etos Kejuruan
              </p>
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-slate-800 italic">
                “{studentProfile.statementQuote}”
              </blockquote>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Selama menempuh pendidikan di kelas {studentProfile.classRoom} Jurusan
                Listrik {studentProfile.schoolShort}, fokus utama pembelajaran diarahkan
                pada penguasaan dasar kelistrikan yang disiplin, pembacaan diagram kerja
                yang akurat, serta penerapan standar keselamatan kerja di setiap sesi
                praktikum bengkel.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="text-xs font-medium text-slate-500">Fokus Pengembangan Diri</p>
              <p className="mt-1.5 text-sm font-medium text-slate-900">
                Instalasi Domestik 1 Fasa · Panel PHB · Instrumentasi Ukur · Pengendali
                Kontaktor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
