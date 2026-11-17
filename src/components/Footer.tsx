import { studentProfile } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="no-print border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {studentProfile.fullName}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            {studentProfile.classRoom} · {studentProfile.major} · {studentProfile.school}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500">
          <a href="#profil" className="transition-colors hover:text-slate-900">
            Profil
          </a>
          <a href="#kompetensi" className="transition-colors hover:text-slate-900">
            Kompetensi
          </a>
          <a href="#praktikum" className="transition-colors hover:text-slate-900">
            Praktikum
          </a>
          <a href="#akademik" className="transition-colors hover:text-slate-900">
            Akademik
          </a>
          <a href="#kontak" className="transition-colors hover:text-slate-900">
            Kontak
          </a>
        </div>
      </div>
    </footer>
  );
}
