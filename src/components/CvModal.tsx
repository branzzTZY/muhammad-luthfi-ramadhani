import { useEffect } from 'react';
import { Printer, X } from 'lucide-react';
import {
  academicSubjects,
  coreCompetencies,
  practicalProjects,
  studentProfile,
  trainingRecords,
} from '../data/portfolioData';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({ open, onClose }: CvModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 sm:p-6 print:static print:bg-white print:p-0"
      onClick={onClose}
    >
      <div
        className="print-only-container max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl print:max-h-none print:overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
          <p className="text-sm font-semibold text-slate-900">
            Ringkasan Dokumen Daftar Riwayat Hidup (CV)
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              <Printer className="h-4 w-4" aria-hidden="true" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup dokumen CV"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors duration-150 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-8 sm:p-12">
          <div className="border-b border-slate-300 pb-6">
            <p className="text-xs font-semibold tracking-wide text-[#1D4ED8]">
              Daftar Riwayat Hidup &amp; Rekam Kompetensi Siswa
            </p>
            <h2
              id="cv-modal-title"
              className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              {studentProfile.fullName}
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-700">
              {studentProfile.classRoom} · {studentProfile.major} · {studentProfile.school}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {studentProfile.schoolAddress} · {studentProfile.email}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold tracking-wide text-slate-900">
              1. Ringkasan Akademik
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {studentProfile.formalSummary}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold tracking-wide text-slate-900">
              2. Kompetensi Inti Kejuruan
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {coreCompetencies.map((comp) => (
                <div
                  key={comp.number}
                  className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {comp.number} {comp.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{comp.reference}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold tracking-wide text-slate-900">
              3. Proyek Praktikum Terverifikasi
            </h3>
            <ul className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
              {practicalProjects.map((proj) => (
                <li
                  key={proj.id}
                  className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-center"
                >
                  <span className="text-sm font-medium text-slate-900">
                    {proj.title}
                  </span>
                  <span className="text-xs text-slate-500 whitespace-nowrap">
                    {proj.category} · {proj.standard}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold tracking-wide text-slate-900">
                4. Nilai Mata Pelajaran Produktif
              </h3>
              <dl className="mt-3 divide-y divide-slate-100 border-t border-slate-200 text-sm">
                {academicSubjects.map((sub) => (
                  <div key={sub.code} className="flex justify-between gap-3 py-2">
                    <dt className="text-slate-600">{sub.subject}</dt>
                    <dd className="font-mono font-semibold text-slate-900 tabular-nums">
                      {sub.score}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-wide text-slate-900">
                5. Pelatihan &amp; Kegiatan Kejuruan
              </h3>
              <ul className="mt-3 space-y-3 border-t border-slate-200 pt-3 text-sm">
                {trainingRecords.map((tr) => (
                  <li key={tr.title}>
                    <p className="font-medium text-slate-900">{tr.title}</p>
                    <p className="text-xs text-slate-500">
                      {tr.period} · {tr.organizer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
