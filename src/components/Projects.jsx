import React, { useState } from 'react';
import { ExternalLink, Clock, Sparkles, Eye } from 'lucide-react';
import GithubIcon from './GithubIcon';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';
import { soundFX } from '../utils/sound';

export default function Projects({ t }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'criscemunno',
      title: t.projects.project1Title,
      category: t.projects.project1Category,
      description: t.projects.project1Desc,
      longDescription: t.projects.project1LongDesc,
      image: '/assets/Criscemunno.webp',
      liveUrl: 'https://criscemunno.netlify.app/',
      githubUrl: 'https://github.com/Al3xxDev/Criscemunno',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UX', 'Netlify', 'Fast Prototyping'],
    },
    {
      id: 'toctoc',
      title: t.projects.project2Title,
      category: t.projects.project2Category,
      description: t.projects.project2Desc,
      longDescription: t.projects.project2LongDesc,
      image: '/assets/TocToc.webp',
      liveUrl: 'https://toctocsalerno.netlify.app/',
      githubUrl: 'https://github.com/Al3xxDev/TocTocSalerno',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Netlify', 'Rapid Build'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full glass-panel border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest">
            {t.projects.title}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100 max-w-3xl">
            {t.projects.subtitle}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-emeraldGlow rounded-full mt-2" />
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <TiltCard key={project.id} glowColor="rgba(212, 175, 55, 0.25)">
              <div
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-3xl p-6 border-slate-800 hover:border-gold-500/50 hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden h-full"
              >
                {/* Image Preview Container */}
                <div
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedProject(project);
                  }}
                  className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 cursor-pointer group/img"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover/img:scale-108 transition-transform duration-700 filter saturate-[1.05]"
                  />
                  
                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover/img:opacity-100 bg-obsidian-950/60 backdrop-blur-sm transition-opacity duration-300 z-30">
                    <span className="px-5 py-2.5 rounded-full bg-gold-500 text-obsidian-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>{t.projects.detailsBtn}</span>
                    </span>
                  </div>
                </div>

                {/* Text Information */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-emeraldGlow">
                    {project.category}
                  </span>
                  <h3
                    onClick={() => {
                      soundFX.playClick();
                      setSelectedProject(project);
                    }}
                    className="text-2xl font-display font-bold text-slate-100 group-hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-obsidian-900 border border-slate-800 text-slate-300 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80 relative z-30">
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-gold-400 hover:text-gold-300 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.projects.detailsBtn}</span>
                  </button>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-slate-300 hover:text-gold-400 transition-colors"
                    >
                      <span>{t.projects.viewLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{t.projects.viewCode}</span>
                    </a>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          t={t}
        />
      )}
    </section>
  );
}
