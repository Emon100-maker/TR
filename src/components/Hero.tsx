import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  GraduationCap, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Code2,
  Coffee,
  FileCode,
  Palette
} from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
  onOpenCvModal: () => void;
  onOpenEditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenCvModal, onOpenEditModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = data.roles && data.roles.length > 0 ? data.roles : [
    "Software Engineer",
    "Python & Java Developer",
    "Full-Stack Web Specialist",
    "Problem Solver"
  ];

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTypingSpeed(1800); // pause at full text
          setIsDeleting(true);
        } else {
          setTypingSpeed(90);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => prev + 1);
          setTypingSpeed(350);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction & Call-To-Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status & Headline Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-700 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-semibold text-green-700">Academic & Technical Professional</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-medium">Portfolio & CV</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Academic & Professional Portfolio</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
                {data.name}
              </h1>
              
              {/* Typing Animated Subtitle */}
              <div className="h-10 sm:h-12 flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold text-blue-600 uppercase tracking-wider">
                <span>{displayedText}</span>
                <span className="w-0.5 h-5 sm:h-6 bg-blue-600 animate-pulse inline-block" />
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {data.bio}
            </p>

            {/* Quick Tech Highlights Badge Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-1">Core Areas:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-xs">
                <Code2 className="w-3.5 h-3.5 text-blue-600" /> Python
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> GIS & Remote Sensing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-xs">
                <FileCode className="w-3.5 h-3.5 text-amber-500" /> HTML5 & CSS3
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> Data Analysis
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-purple-600" /> Teaching & Education
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Button: View CV (PDF) */}
              <button
                onClick={onOpenCvModal}
                id="hero-cv-btn"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer active:scale-98"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Download CV</span>
                <span className="text-[10px] bg-blue-700 px-1.5 py-0.5 rounded-full font-mono font-bold">PDF</span>
              </button>

              {/* Button: Educational Qualifications (SSC, HSC, BSC) */}
              <button
                onClick={() => scrollTo('#education')}
                id="hero-education-btn"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-slate-300" />
                <span>Education</span>
              </button>

              {/* Button: Experience & Projects */}
              <button
                onClick={() => scrollTo('#projects')}
                id="hero-projects-btn"
                className="px-5 py-2.5 border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-slate-600" />
                <span>Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Social & Contact Metadata Strip */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-5 text-xs font-mono uppercase tracking-wider text-slate-500">
              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
                id="hero-social-github"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
                id="hero-social-linkedin"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${data.socials.email}`}
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
                id="hero-social-email"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span className="lowercase">{data.socials.email}</span>
              </a>

              {data.socials.phone && (
                <a
                  href={`tel:${data.socials.phone}`}
                  className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors font-mono"
                  id="hero-social-phone"
                >
                  <span className="font-semibold text-slate-800">{data.socials.phone}</span>
                </a>
              )}

              <span className="flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{data.socials.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Prominent Profile Picture with Corner Layout, GPA Badges & Status */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-5">
                
                {/* Profile Image with Corner Accent */}
                <div className="relative group">
                  <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-200 border-4 border-white shadow-xl relative">
                    <img 
                      src={data.profilePicUrl} 
                      alt={data.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop";
                      }}
                    />

                    {/* Corner Image Info Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-mono flex items-center gap-1.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        <span>Academic & Research</span>
                      </div>
                      <button
                        onClick={onOpenEditModal}
                        className="bg-white/95 hover:bg-slate-100 text-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200 transition-colors text-xs font-medium cursor-pointer shadow-sm"
                        title="Change Photo URL"
                      >
                        Change Photo
                      </button>
                    </div>
                  </div>

                  {/* Corner Status Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full" title="Active & Ready" />

                  {/* Top Corner Pill */}
                  <div className="absolute -top-3 -right-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>BAU Under Graduate</span>
                  </div>
                </div>

                {/* Academic Quick Stats Grid (SSC, HSC, BSC summary) */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">SSC 2017</div>
                    <div className="text-base font-bold text-blue-600">5.00 <span className="text-[10px] text-slate-400 font-normal">/ 5.0</span></div>
                    <div className="text-[10px] text-slate-500 truncate">Premier Ideal</div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">HSC 2019</div>
                    <div className="text-base font-bold text-blue-600">5.00 <span className="text-[10px] text-slate-400 font-normal">/ 5.0</span></div>
                    <div className="text-[10px] text-slate-500 truncate">Cantonment Public</div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">B.Sc BAU</div>
                    <div className="text-base font-bold text-blue-600">Irrig. & Water</div>
                    <div className="text-[10px] text-slate-500 truncate">Under Graduate</div>
                  </div>
                </div>

                {/* Direct CV Button on Profile Card */}
                <button
                  onClick={onOpenCvModal}
                  className="w-full py-2.5 px-4 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>Download Curriculum Vitae (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
