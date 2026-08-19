import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Printer, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  Sparkles,
  FileCheck,
  Building2,
  BookOpen,
  UserCheck,
  Layers,
  Compass
} from 'lucide-react';
import { PortfolioData } from '../types';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, data }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPdfLink = () => {
    navigator.clipboard.writeText(data.cvPdfUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between gap-3 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600 text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Curriculum Vitae</h3>
              <p className="text-[11px] text-slate-400 font-mono">{data.name} • Academic & Professional CV</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print Curriculum Vitae"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href={data.cvPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              title="Open Google Drive CV Link"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            <button
              onClick={handleCopyPdfLink}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs cursor-pointer"
              title="Copy PDF URL"
            >
              {copiedLink ? <Check className="w-4 h-4 text-green-400" /> : <ExternalLink className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Body (Styled as a clean, high-precision academic resume document) */}
        <div className="overflow-y-auto p-6 sm:p-10 text-slate-800 space-y-7 bg-white print:p-0 print:overflow-visible">
          
          {/* Header Banner */}
          <div className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                  {data.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1 max-w-2xl">
                  {data.title}
                </p>
              </div>

              {/* Contact Information */}
              <div className="text-xs font-mono text-slate-600 space-y-1 text-left sm:text-right flex-shrink-0">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{data.socials.email}</span>
                </div>
                {data.socials.phone && (
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{data.socials.phone}</span>
                  </div>
                )}
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{data.socials.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-2 pt-0.5">
                  <a href={data.socials.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                  <span>•</span>
                  <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Professional Profile & Career Objective */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
              Professional Profile & Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {data.bio}
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 italic">
              <strong className="font-semibold text-slate-900 not-italic">Career Objective: </strong>
              "{data.careerObjective}"
            </div>
          </div>

          {/* Section: Educational Qualifications (SSC, HSC, BSC with institution & GPA) */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
              Educational Qualifications
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-2 px-3">Exam / Degree</th>
                    <th className="py-2 px-3">Institution</th>
                    <th className="py-2 px-3">Board / Dept</th>
                    <th className="py-2 px-3">Group / Discipline</th>
                    <th className="py-2 px-3 text-right">Result</th>
                    <th className="py-2 px-3 text-right">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                  {data.education.map((edu) => (
                    <tr key={edu.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{edu.degree}</td>
                      <td className="py-2.5 px-3">{edu.institution}</td>
                      <td className="py-2.5 px-3 text-[11px] text-slate-600">{edu.boardOrUniversity}</td>
                      <td className="py-2.5 px-3 text-[11px]">{edu.groupOrMajor}</td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-blue-700">
                        {edu.gpa === 'N/A' ? 'CGPA: N/A' : `GPA ${edu.gpa}`}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-slate-600">{edu.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
              Professional Experience
            </h2>

            <div className="space-y-3">
              {data.experience.map((exp) => (
                <div key={exp.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{exp.role}</span>
                      <span className="text-slate-500 ml-2">| {exp.company} ({exp.location})</span>
                    </div>
                    <span className="font-mono text-slate-600 font-semibold">{exp.period}</span>
                  </div>

                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 pt-1">
                    {exp.description.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Core Skills (Technical, Academic/Professional, Soft Skills) */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
              Core Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {/* Technical */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                <h4 className="font-bold text-slate-900 uppercase text-[11px] text-blue-700 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Technical Skills</span>
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  HTML5, CSS3, JavaScript, Python, Git & GitHub, Data Analysis, GIS & Remote Sensing, MS Office (MS Excel, MS PowerPoint, MS Access), R, AutoCAD, Adobe Photoshop, Adobe Illustrator.
                </p>
              </div>

              {/* Academic / Professional */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                <h4 className="font-bold text-slate-900 uppercase text-[11px] text-blue-700 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic & Professional</span>
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  Teaching, Academic Content Development, Research, Problem Solving, Technical Documentation, Presentation & Public Speaking, Project Management.
                </p>
              </div>

              {/* Soft Skills */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                <h4 className="font-bold text-slate-900 uppercase text-[11px] text-blue-700 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Soft Skills</span>
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  Communication, Leadership, Teamwork, Time Management, Critical Thinking, Adaptability.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Research Interests & Academic Areas */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
              Research Interests & Academic Areas
            </h2>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {data.researchInterests.map((interest, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded text-slate-800 font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
              Projects & Technical Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {data.projects.map((proj) => (
                <div key={proj.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div className="font-bold text-slate-900">{proj.title}</div>
                  <div className="text-slate-600 text-[11px]">{proj.description}</div>
                  <div className="text-[10px] font-mono text-blue-600">
                    Tags: {proj.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
                Certifications & Training
              </h2>
              {data.certifications.map(c => (
                <div key={c.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded text-xs space-y-0.5">
                  <div className="font-bold text-slate-900">{c.title}</div>
                  <div className="text-slate-500 text-[11px]">{c.issuer}</div>
                  <div className="text-slate-600">{c.description}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
                Achievements & Awards
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {data.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: References */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-2.5 py-1 rounded border-l-3 border-blue-600">
              References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {data.references.map((ref) => (
                <div key={ref.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-0.5">
                  <div className="font-bold text-slate-900 text-sm">{ref.name}</div>
                  <div className="text-blue-700 font-semibold">{ref.designation}</div>
                  <div className="text-slate-600">{ref.department}</div>
                  <div className="text-slate-500">{ref.institution}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Footer Action Strip */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs font-mono text-slate-500">
            PDF Link: <span className="text-blue-600 font-medium truncate max-w-xs inline-block align-bottom">{data.cvPdfUrl}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer shadow-xs"
            >
              Close
            </button>
            <a
              href={data.cvPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
