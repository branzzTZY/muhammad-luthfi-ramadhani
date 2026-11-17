import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  practicalProjects,
  type PracticalProject,
  type ProjectCategory,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onSelectProject: (project: PracticalProject) => void;
}

const categories: ProjectCategory[] = [
  'Semua',
  'Instalasi Penerangan',
  'Panel & Kontrol',
  'Pengukuran Listrik',
];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Semua');

  const filteredProjects =
    activeCategory === 'Semua'
      ? practicalProjects
      : practicalProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="praktikum" className="border-b border-slate-200 bg-[#F8FAFC] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#1D4ED8]">
              03. Dokumentasi Praktikum Bengkel
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Proyek Kerja &amp; Pengujian Instalasi Listrik
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter kategori proyek praktikum"
            className="flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 p-1"
          >
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-10 rounded-md px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                    isSelected
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-sm font-medium text-slate-700">
              Belum ada dokumentasi praktikum untuk kategori ini.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors duration-150 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="block w-full overflow-hidden bg-slate-100 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                >
                  <ResilientImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    fallbackSubtitle={project.category}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </button>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.semester}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.standard}</span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="text-left transition-colors duration-150 hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                      >
                        {project.title}
                      </button>
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
                      {project.specifications[0]?.label}: {project.specifications[0]?.value}
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                    >
                      <span>Detail Teknis</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
