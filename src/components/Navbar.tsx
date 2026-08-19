import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Settings, 
  Menu, 
  X, 
  ExternalLink,
  GraduationCap, 
  Code, 
  Briefcase, 
  FolderGit2, 
  User, 
  Mail,
  Github,
  Linkedin,
  Download
} from 'lucide-react';
import { PortfolioData } from '../types';

interface NavbarProps {
  data: PortfolioData;
  onOpenCvModal: () => void;
  onOpenEditModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  data, 
  onOpenCvModal, 
  onOpenEditModal,
  activeSection 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Education', href: '#education', icon: GraduationCap },
    { label: 'Skills', href: '#skills', icon: Code },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3' 
          : 'bg-slate-50/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand with Corner Profile Picture */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-1"
            id="nav-brand-link"
          >
            <div className="relative">
              <img 
                src={data.profilePicUrl} 
                alt={data.name} 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl object-cover border-2 border-white shadow-md group-hover:scale-105 transition-all duration-300"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop";
                }}
              />
              {data.availableForHire && (
                <span 
                  className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" 
                  title="Available for Opportunities"
                />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight flex items-center gap-1.5 uppercase">
                {data.name}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <span className="text-blue-600 font-bold">~/</span>portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Download/View CV Button */}
            <button
              onClick={onOpenCvModal}
              id="nav-cv-button"
              className="px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Resume / CV</span>
              <span className="text-[10px] bg-blue-700/80 text-white px-1.5 py-0.5 rounded-full font-mono font-bold">PDF</span>
            </button>

            {/* Customize / Edit Profile Button */}
            <button
              onClick={onOpenEditModal}
              id="nav-edit-profile-btn"
              title="Edit Profile Information & Links"
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              id="nav-cv-mobile-btn"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle-btn"
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-white border border-slate-200 shadow-sm focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-100 hover:text-blue-600 border border-slate-200/60"
                >
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="flex-1 py-2.5 px-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-blue-600 text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download & View CV</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditModal();
              }}
              className="p-2.5 rounded-full text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200 cursor-pointer"
              title="Edit Profile"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
