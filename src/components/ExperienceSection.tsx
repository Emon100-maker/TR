import React from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  onOpenEditModal: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  experience, 
  onOpenEditModal 
}) => {
  return (
    <section id="experience" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 shadow-xs">
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              <span>Professional History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional Experience & Teaching
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Instructional teaching across online and offline platforms, academic content development, and agricultural engineering research.
            </p>
          </div>

          <button
            onClick={onOpenEditModal}
            className="self-start md:self-auto px-4 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer shadow-xs"
          >
            + Update Experience
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-slate-200">
          {experience.map((job) => {
            return (
              <div 
                key={job.id}
                id={`experience-item-${job.id}`}
                className="relative pl-10 md:pl-16 group"
              >
                {/* Timeline node icon */}
                <div className={`absolute left-2 md:left-6 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-125 ${
                  job.current 
                    ? 'bg-blue-600 border-white ring-4 ring-blue-100' 
                    : 'bg-slate-400 border-white'
                }`} />

                {/* Job Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:shadow-md space-y-4">
                  
                  {/* Top Meta Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Active
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-100 text-slate-600">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-700 font-medium mt-1.5 flex-wrap">
                        <span className="flex items-center gap-1.5 text-blue-600 font-semibold">
                          <Building2 className="w-4 h-4" />
                          <span>{job.company}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-1">Focus Areas:</span>
                    {job.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
