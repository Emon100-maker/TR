import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ProfileEditModal } from './components/ProfileEditModal';
import { defaultPortfolioData } from './data/defaultPortfolio';
import { PortfolioData } from './types';

const STORAGE_KEY = 'tanveer_portfolio_data_v1';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.error('Failed to load portfolio data from localStorage:', err);
    }
    return defaultPortfolioData;
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Save to localStorage when updated
  const handleSaveData = (newData: PortfolioData) => {
    setPortfolioData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (err) {
      console.error('Failed to save portfolio data:', err);
    }
  };

  const handleResetData = () => {
    setPortfolioData(defaultPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error('Failed to reset portfolio data:', err);
    }
  };

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'skills', 'experience', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative selection:bg-blue-500/20 selection:text-blue-900 font-sans">
      
      {/* Sticky Top Navigation Bar */}
      <Navbar
        data={portfolioData}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Corner Profile Picture, Headline, Typing effect, and Action Buttons */}
        <Hero
          data={portfolioData}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        {/* 2. About Me & GitHub Statistics */}
        <AboutSection
          data={portfolioData}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* 3. Educational Qualifications (SSC, HSC, BSC with institution names, GPA 5.00 / CGPA) */}
        <EducationSection
          education={portfolioData.education}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        {/* 4. Skills & Core Technologies (HTML, CSS, Python, Java, JS, DBs, + Interactive Code Inspector) */}
        <SkillsSection
          skills={portfolioData.skills}
        />

        {/* 5. Career & Job Experience */}
        <ExperienceSection
          experience={portfolioData.experience}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        {/* 6. Featured GitHub Projects & Repositories */}
        <ProjectsSection
          projects={portfolioData.projects}
        />

        {/* 7. Contact Section & Direct Message Form */}
        <ContactSection
          data={portfolioData}
        />
      </main>

      {/* Footer */}
      <Footer
        data={portfolioData}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* CV / Resume Viewer Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        data={portfolioData}
        onOpenEditModal={() => {
          setIsCvModalOpen(false);
          setIsEditModalOpen(true);
        }}
      />

      {/* Customizer / Profile Editor Modal */}
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        data={portfolioData}
        onSave={handleSaveData}
        onReset={handleResetData}
      />

    </div>
  );
}
