import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Star, 
  Sparkles,
  TrendingUp,
  FileCheck,
  Edit3
} from 'lucide-react';
import { EducationItem } from '../types';

interface EducationSectionProps {
  education: EducationItem[];
  onOpenEditModal: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ 
  education, 
  onOpenEditModal 
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');

  const filteredEducation = selectedLevel === 'ALL' 
    ? education 
    : education.filter(item => item.level === selectedLevel);

  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'BSC':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'HSC':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'SSC':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getIcon = (level: string) => {
    switch (level) {
      case 'BSC':
        return GraduationCap;
      case 'HSC':
        return Award;
      case 'SSC':
        return BookOpen;
      default:
        return FileCheck;
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Educational Qualifications
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Formal academic achievements spanning B.Sc. in Agricultural Engineering & Technology, Higher Secondary (HSC), and Secondary School Certificate (SSC).
            </p>
          </div>

          {/* Quick Filter Tabs & Edit Trigger */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex p-1 rounded-full bg-white border border-slate-200 shadow-xs">
              {['ALL', 'BSC', 'HSC', 'SSC'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedLevel(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedLevel === tab 
                      ? 'bg-slate-900 text-white shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab === 'ALL' ? 'All Qualifications' : tab}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenEditModal}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
              title="Edit Institution & GPA information"
            >
              <Edit3 className="w-3.5 h-3.5 text-blue-600" />
              <span>Edit Details</span>
            </button>
          </div>
        </div>

        {/* Education Timeline / Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredEducation.map((item) => {
            const IconComponent = getIcon(item.level);
            const isGpaMax = item.gpa === item.maxGpa && item.gpa === '5.00';

            return (
              <div 
                key={item.id}
                id={`education-card-${item.level.toLowerCase()}`}
                className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
              >
                {/* Top Corner Badge & Level Tag */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${getBadgeColor(item.level)}`}>
                          {item.level} Qualification
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* GPA / Result Badge */}
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-sm">
                        <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                        <span>{item.gpa === 'N/A' ? 'CGPA: N/A' : `GPA: ${item.gpa}`}</span>
                        {item.gpa !== 'N/A' && <span className="text-xs text-blue-500 font-normal">/ {item.maxGpa}</span>}
                      </div>
                      {isGpaMax && (
                        <div className="text-[10px] text-green-700 font-bold uppercase tracking-wider mt-0.5">
                          Golden Grade A+
                        </div>
                      )}
                      {item.level === 'BSC' && (
                        <div className="text-[10px] text-blue-700 font-bold uppercase tracking-wider mt-0.5">
                          Under Graduate
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Degree Title & Institution */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                    {item.degree}
                  </h3>

                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Building2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{item.institution}</span>
                    </div>
                    <div className="text-xs text-slate-500 font-mono pl-6">
                      {item.boardOrUniversity} • <span className="text-slate-700 font-medium">{item.groupOrMajor}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Key Achievements Checklist */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Highlights & Details</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        {/* Academic Summary Metric Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Verified Academic Record</h4>
              <p className="text-xs text-slate-500">Secondary (2017: GPA 5.00), Higher Secondary (2019: GPA 5.00), and B.Sc at Bangladesh Agricultural University.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-blue-600">GPA 5.00</div>
              <div className="text-xs font-mono text-slate-500">SSC 2017 (Premier Ideal)</div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-blue-600">GPA 5.00</div>
              <div className="text-xs font-mono text-slate-500">HSC 2019 (Cantonment Public)</div>
            </div>
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-blue-600">BAU</div>
              <div className="text-xs font-mono text-slate-500">B.Sc. Ag. Engg (Irrigation & Water)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
