import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Code, 
  Sparkles, 
  Layers, 
  Terminal, 
  FileCode,
  Compass,
  Code2
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProjectForCode, setSelectedProjectForCode] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || p.tags.some(t => t.toLowerCase().includes(filter)));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'python': return Code2;
      case 'gis': return Compass;
      case 'web': return FileCode;
      default: return Layers;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 shadow-xs">
              <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Academic & Technical Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects & Research Work
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Academic engineering projects, GIS spatial mapping, computational hydrology models, and responsive web platforms.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap p-1 rounded-full bg-slate-100 border border-slate-200/60 shadow-xs">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'engineering', label: 'Engineering' },
              { id: 'gis', label: 'GIS & Hydrology' },
              { id: 'python', label: 'Python & Data' },
              { id: 'web', label: 'Web Platform' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Category & Links */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-600 shadow-xs">
                      <CategoryIcon className="w-3.5 h-3.5 text-blue-600" />
                      <span className="capitalize">{project.category} Project</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.codeSnippet && (
                        <button
                          onClick={() => setSelectedProjectForCode(project)}
                          className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                          title="View Computational Snippet"
                        >
                          <Code className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline text-xs">Code</span>
                        </button>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors shadow-xs"
                        title="View Project Link"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 transition-colors shadow-xs"
                          title="Demo Link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 font-medium mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags bottom row */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-white text-slate-600 border border-slate-200 shadow-2xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Code Snippet Modal */}
      {selectedProjectForCode && selectedProjectForCode.codeSnippet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white">{selectedProjectForCode.title}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-blue-300">
                  {selectedProjectForCode.codeSnippet.language}
                </span>
              </div>
              <button
                onClick={() => setSelectedProjectForCode(null)}
                className="p-1 rounded-md text-slate-400 hover:text-white bg-slate-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-5 max-h-[60vh] overflow-y-auto bg-slate-950 font-mono text-xs text-slate-200 leading-relaxed">
              <pre><code>{selectedProjectForCode.codeSnippet.code}</code></pre>
            </div>

            <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedProjectForCode.codeSnippet!.code);
                }}
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer shadow-xs"
              >
                Copy Code
              </button>
              <a
                href={selectedProjectForCode.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 cursor-pointer shadow-xs"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
