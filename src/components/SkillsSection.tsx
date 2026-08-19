import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  FileCode, 
  Palette, 
  Cpu, 
  Database, 
  Layers, 
  Server, 
  GitBranch, 
  Terminal, 
  Binary, 
  Play, 
  Copy, 
  Check, 
  Flame,
  CheckCircle2,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeCodeTab, setActiveCodeTab] = useState<'python' | 'gis' | 'web'>('python');
  const [copied, setCopied] = useState(false);
  const [outputConsole, setOutputConsole] = useState<string | null>(null);
  const [isRunningCode, setIsRunningCode] = useState(false);

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'technical', label: 'Technical Skills (Python, GIS, Web, R, AutoCAD)' },
    { id: 'academic', label: 'Academic & Professional' },
    { id: 'soft', label: 'Soft Skills' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'FileCode': return FileCode;
      case 'Palette': return Palette;
      case 'Cpu': return Cpu;
      case 'Database': return Database;
      case 'Layers': return Layers;
      case 'Sparkles': return Sparkles;
      case 'Server': return Server;
      case 'GitBranch': return GitBranch;
      case 'Terminal': return Terminal;
      case 'Flame': return Flame;
      default: return Binary;
    }
  };

  // Sample Code snippets for Python, GIS/Hydrology, and Web
  const codeSnippets = {
    python: {
      title: "Python Crop Water Requirement & Hydrology Modeling",
      filename: "crop_water_calc.py",
      language: "python",
      code: `# Python 3.12 - Crop Water Requirement & Irrigation Modeling
def calculate_irrigation_requirement(
    crop_evapotranspiration_mm: float, 
    effective_rainfall_mm: float, 
    field_efficiency: float = 0.75
) -> dict:
    """Calculates net and gross irrigation requirements for agricultural plots."""
    net_irrigation = max(0.0, crop_evapotranspiration_mm - effective_rainfall_mm)
    gross_irrigation = net_irrigation / field_efficiency
    
    return {
        "crop_ET": f"{crop_evapotranspiration_mm:.2f} mm/day",
        "effective_rain": f"{effective_rainfall_mm:.2f} mm/day",
        "net_irrigation": f"{net_irrigation:.2f} mm/day",
        "gross_irrigation": f"{gross_irrigation:.2f} mm/day",
        "status": "Optimal Irrigation Scheduled"
    }

result = calculate_irrigation_requirement(crop_evapotranspiration_mm=6.2, effective_rainfall_mm=1.5)
print(f"[STATUS] {result['status']}")
print(f"Gross Water Requirement: {result['gross_irrigation']}")`,
      simulatedOutput: `[STATUS] Optimal Irrigation Scheduled
Gross Water Requirement: 6.27 mm/day
Net Irrigation: 4.70 mm/day
Crop ET: 6.20 mm/day | Effective Rain: 1.50 mm/day
Computation finished successfully (BAU Department of Irrigation & Water Mgmt).`
    },
    gis: {
      title: "GIS & Spatial Watershed Hydrology Script",
      filename: "watershed_spatial.py",
      language: "python",
      code: `# Spatial Hydrology & Watershed Analysis
import numpy as np

class WatershedAnalysis:
    def __init__(self, catchment_area_sqkm: float, runoff_coefficient: float):
        self.area = catchment_area_sqkm
        self.c_factor = runoff_coefficient

    def compute_peak_runoff(self, rainfall_intensity_mmhr: float) -> float:
        # Rational Method: Q = (C * I * A) / 360  (m³/s)
        peak_q = (self.c_factor * rainfall_intensity_mmhr * self.area) / 360.0
        return round(peak_q, 3)

watershed = WatershedAnalysis(catchment_area_sqkm=45.2, runoff_coefficient=0.45)
peak_discharge = watershed.compute_peak_runoff(rainfall_intensity_mmhr=52.0)
print(f"[GIS WATERSHED] Area: 45.2 km² | Runoff Coeff: 0.45")
print(f"Computed Peak Discharge (Q): {peak_discharge} m³/s")`,
      simulatedOutput: `[GIS WATERSHED] Area: 45.2 km² | Runoff Coeff: 0.45
Computed Peak Discharge (Q): 2.938 m³/s
Channel Capacity Validated.
Spatial drainage network mapped.`
    },
    web: {
      title: "Semantic HTML5 & CSS3 Academic Learning Component",
      filename: "academic-card.html",
      language: "html",
      code: `<!-- Semantic HTML5 & CSS3 Academic Component -->
<article class="academic-profile-card">
  <header class="card-header">
    <span class="badge">Irrigation & Water Management</span>
    <h2>Tanveer Rahman Emon</h2>
  </header>
  <p class="summary">
    Academic professional & educator with expertise in GIS, hydrology, 
    and computational engineering applications.
  </p>
  <div class="skills-chips">
    <span>Python</span>
    <span>GIS</span>
    <span>AutoCAD</span>
    <span>HTML5/CSS3</span>
  </div>
</article>

<style>
.academic-profile-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.badge {
  color: #2563eb;
  font-weight: 600;
  font-size: 0.75rem;
}
</style>`,
      simulatedOutput: `[HTML5 & CSS3 Engine]
✔ Valid Semantic HTML5 structure
✔ Clean, accessible CSS3 typography & layout
✔ WCAG AA Compliance verified: 9.2:1 contrast ratio`
    }
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setOutputConsole(null);
    setTimeout(() => {
      setIsRunningCode(false);
      setOutputConsole(codeSnippets[activeCodeTab].simulatedOutput);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Technical & Academic Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Core Skills & Capabilities
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Structured skills across technical engineering tools, academic content instruction, and professional competencies.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
          {filteredSkills.map((skill) => {
            const Icon = getSkillIcon(skill.iconName);
            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all duration-300 hover:shadow-sm group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-all shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-slate-500 font-mono">
                        {skill.experienceYears}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-blue-600 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-2.5">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {skill.tagline && (
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {skill.tagline}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Interactive Code Showcase & Computational Playground */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          {/* Top Bar with Language Tabs & Actions */}
          <div className="bg-slate-900 px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                computational_inspector
              </span>
            </div>

            {/* Language Switcher Tabs */}
            <div className="inline-flex p-1 rounded-full bg-slate-800 border border-slate-700">
              <button
                onClick={() => { setActiveCodeTab('python'); setOutputConsole(null); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeCodeTab === 'python' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Python (Hydrology)</span>
              </button>

              <button
                onClick={() => { setActiveCodeTab('gis'); setOutputConsole(null); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeCodeTab === 'gis' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>GIS Spatial</span>
              </button>

              <button
                onClick={() => { setActiveCodeTab('web'); setOutputConsole(null); }}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeCodeTab === 'web' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>HTML & CSS</span>
              </button>
            </div>

            {/* Run & Copy Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="p-1.5 sm:px-2.5 sm:py-1 rounded-full text-xs text-slate-300 hover:text-white bg-slate-800 border border-slate-700 hover:border-slate-600 flex items-center gap-1 cursor-pointer transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleRunCode}
                disabled={isRunningCode}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50 active:scale-95 transition-all"
              >
                <Play className={`w-3.5 h-3.5 ${isRunningCode ? 'animate-spin' : 'fill-white'}`} />
                <span>{isRunningCode ? 'Executing...' : 'Run Script'}</span>
              </button>
            </div>
          </div>

          {/* Code Viewer & Output Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Code Body */}
            <div className="lg:col-span-8 p-4 sm:p-6 bg-slate-950 overflow-x-auto border-b lg:border-b-0 lg:border-r border-slate-800/80">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                <span>{codeSnippets[activeCodeTab].filename}</span>
                <span className="text-blue-400">{codeSnippets[activeCodeTab].language.toUpperCase()}</span>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed font-normal">
                <code>{codeSnippets[activeCodeTab].code}</code>
              </pre>
            </div>

            {/* Simulated Terminal Console */}
            <div className="lg:col-span-4 p-4 sm:p-6 bg-slate-900 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pb-3 border-b border-slate-800 mb-3">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span>Computational Output</span>
                </div>

                {outputConsole ? (
                  <div className="space-y-2 font-mono text-xs text-green-400 whitespace-pre-wrap leading-relaxed animate-in fade-in duration-300">
                    {outputConsole}
                  </div>
                ) : (
                  <div className="text-slate-500 text-xs font-mono py-8 text-center space-y-2">
                    <p>Click "Run Script" above to execute this {activeCodeTab.toUpperCase()} computation model.</p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                <span>Computational Engine: Ready</span>
                <span className="text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
