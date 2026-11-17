import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { PracticalProject } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: PracticalProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="no-print fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
          <p className="text-xs font-medium text-slate-500">
            <span>{project.category}</span>
            <span className="mx-2 text-slate-300" aria-hidden="true">
              ·
            </span>
            <span>{project.semester}</span>
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail praktikum"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors duration-150 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <ResilientImage
              src={project.image}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              fallbackSubtitle={project.category}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <h3
            id="project-modal-title"
            className="mt-6 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl"
          >
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {project.objective}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Parameter &amp; Spesifikasi Uji
              </h4>
              <dl className="mt-3 divide-y divide-slate-100 border-t border-slate-200">
                {project.specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 py-2.5 text-sm">
                    <dt className="text-slate-500">{spec.label}</dt>
                    <dd className="text-right font-mono font-medium text-slate-900 tabular-nums">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Alat, Bahan &amp; Komponen
              </h4>
              <ul className="mt-3 space-y-2 border-t border-slate-200 pt-3 text-sm text-slate-700">
                {project.toolsAndMaterials.map((tool) => (
                  <li key={tool} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-2.5 shrink-0 bg-[#1D4ED8]"
                    />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-[#F8FAFC] p-5">
            <p className="text-xs font-semibold text-slate-900">
              Hasil Verifikasi &amp; Kepatuhan K3LH ({project.standard})
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {project.verificationNotes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
