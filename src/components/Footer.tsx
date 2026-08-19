import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  FileText, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  FolderGit2,
  Heart
} from 'lucide-react';
import { PortfolioData } from '../types';

interface FooterProps {
  data: PortfolioData;
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education (SSC, HSC, BSC)', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={data.profilePicUrl}
                alt={data.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-2xs"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div>
                <span className="text-base font-bold text-slate-900">{data.name}</span>
                <p className="text-xs text-slate-500 font-mono">Academic Professional & Educator</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Professional personal website & CV highlighting academic excellence (SSC & HSC GPA 5.00, B.Sc in Agricultural Engineering at Bangladesh Agricultural University), research in Irrigation & Water Management, and technical competencies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & CV Button */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Connect & Resume
            </h4>
            
            <div className="flex items-center gap-2">
              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors shadow-2xs"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-blue-600 hover:text-blue-700 transition-colors shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${data.socials.email}`}
                className="p-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 transition-colors shadow-2xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-3.5 py-2 rounded-full text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CV (PDF)</span>
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono text-slate-500">
            <span>Crafted with HTML, CSS, React, TypeScript, Python & Java</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
