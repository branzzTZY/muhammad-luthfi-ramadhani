import { useState } from 'react';
import { AcademicSection } from './components/AcademicSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProfileSection } from './components/ProfileSection';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import type { PracticalProject } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PracticalProject | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar onOpenCv={() => setCvModalOpen(true)} />

      <main className={cvModalOpen ? 'no-print' : undefined}>
        <HeroSection />
        <ProfileSection />
        <CompetenciesSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <AcademicSection />
        <ContactSection onOpenCv={() => setCvModalOpen(true)} />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CvModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
