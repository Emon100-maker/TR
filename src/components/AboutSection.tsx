import React from 'react';
import { 
  User, 
  Target, 
  Compass, 
  Award, 
  Sparkles, 
  CheckCircle2,
  FileCheck,
  GraduationCap,
  Layers,
  Cpu,
  BookOpen,
  Presentation,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { PortfolioData } from '../types';

interface AboutSectionProps {
  data: PortfolioData;
  onOpenCvModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data, onOpenCvModal }) => {
  return (
    <section id="about" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 shadow-xs">
            <User className="w-3.5 h-3.5 text-blue-600" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic & Professional Background
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2">
            Agricultural Engineering undergraduate, educator, and technical problem solver specializing in Irrigation & Water Management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative, Career Objective & Core Focus */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Profile Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Professional Profile & Academic Foundation</span>
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {data.bio}
              </p>

              {/* Career Objective Banner */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-100 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span>Career Objective</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  "{data.careerObjective}"
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Irrigation & Hydrology</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Water management, drainage design, crop water requirements, and soil-water dynamics.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">GIS & Spatial Analysis</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Remote sensing, hydrological spatial mapping, and agricultural land assessment.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <div className="p-2 rounded-lg bg-green-50 text-green-600">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Education & Teaching</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Instruction across online and offline platforms, academic content development.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Data & Computational Tools</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Python, R, MS Office, AutoCAD, and web technologies for technical problem solving.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Research Interests & Certifications / Achievements */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Research Interests & Academic Areas */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  <h4 className="text-sm font-bold text-slate-900">Research Interests & Academic Areas</h4>
                </div>
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                  9 Focus Areas
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.researchInterests.map((interest, i) => (
                  <div 
                    key={i} 
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <span className="truncate">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Training */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
                <FileCheck className="w-5 h-5 text-green-600" />
                <span>Certifications & Training</span>
              </div>

              {data.certifications.map((cert) => (
                <div key={cert.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold text-slate-900">{cert.title}</h5>
                    <span className="text-[10px] font-mono bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">
                      Completed
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievements & Awards */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Achievements & Honors</span>
              </div>

              <div className="space-y-2.5">
                {data.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ach}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
