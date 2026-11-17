import { ArrowDownRight } from 'lucide-react';
import { studentProfile } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section id="beranda" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-7 py-2">
            <div>
              <p className="text-xs font-medium tracking-wide text-slate-500">
                <span>{studentProfile.schoolShort}</span>
                <span className="mx-2 text-slate-300" aria-hidden="true">
                  ·
                </span>
                <span>{studentProfile.classRoom}</span>
                <span className="mx-2 text-slate-300" aria-hidden="true">
                  ·
                </span>
                <span>{studentProfile.major}</span>
              </p>

              <h1 className="mt-5 text-[clamp(2.15rem,4vw,3.35rem)] font-bold leading-[1.12] tracking-tight text-slate-950">
                Portofolio Akademik &amp; Kompetensi Teknik Instalasi Tenaga Listrik
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-[17px]">
                {studentProfile.formalSummary}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#praktikum"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#1D4ED8] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                <span>Lihat Dokumentasi Praktikum</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#profil"
                className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                Identitas &amp; Profil Siswa
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <ResilientImage
                src={studentProfile.portraitImage}
                alt={studentProfile.portraitAlt}
                fallbackTitle={studentProfile.fullName}
                fallbackSubtitle={`${studentProfile.classRoom} · ${studentProfile.schoolShort}`}
                className="aspect-[3/4] w-full object-cover object-top lg:aspect-auto lg:h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 md:grid-cols-4 lg:gap-8">
          {studentProfile.keyMetrics.map((metric) => (
            <div key={metric.label} className="min-w-0">
              <p className="text-xs font-medium text-slate-500">{metric.label}</p>
              <p className="mt-1.5 font-mono text-xl font-semibold tracking-tight text-slate-950 tabular-nums sm:text-2xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
