import React, { useState } from 'react';
import { ExternalLink, Sparkles, Eye, Info, Check } from 'lucide-react';
import GithubIcon from './GithubIcon';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';
import { soundFX } from '../utils/sound';

export default function Projects({ t }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = t.projects.items;

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full glass-panel border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.projects.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100 max-w-3xl leading-tight">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            {t.projects.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-emeraldGlow rounded-full mt-2" />
        </div>

        {/* Transparency Notice Box */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-gold-500/25 bg-obsidian-900/60 flex items-start gap-3.5 text-xs text-slate-300 font-mono max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-light">
            {t.projects.disclaimerNotice}
          </p>
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <TiltCard key={project.id} glowColor="rgba(212, 175, 55, 0.3)">
              <div
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-3xl p-6 sm:p-7 border-slate-800 hover:border-gold-500/50 hover:shadow-[0_10px_40px_rgba(212,175,55,0.22)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden h-full"
              >
                {/* Concept Badge Tag */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/40 backdrop-blur-md">
                    {project.badge}
                  </span>
                </div>

                {/* Image Preview Container */}
                <div
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedProject(project);
                  }}
                  className="relative h-60 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 cursor-pointer group/img bg-obsidian-950"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    width="1907"
                    height="984"
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700 filter saturate-[1.05]"
                  />
                  
                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80 group-hover/img:opacity-50 transition-opacity" />

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
                    className="text-2xl sm:text-3xl font-display font-bold text-slate-100 group-hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {t.projects.keyFeaturesLabel}
                    </span>
                    <ul className="flex flex-col gap-1">
                      {project.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-gold-400 hover:text-gold-300 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.projects.detailsBtn}</span>
                  </button>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/15 border border-gold-500/30 text-xs font-bold font-mono text-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-all focus-visible:ring-2 focus-visible:ring-gold-400"
                      aria-label={`${t.projects.viewLive} - ${project.title} (apre in una nuova scheda)`}
                    >
                      <span>{t.projects.viewLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-obsidian-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-gold-400"
                      title={t.projects.viewCode}
                      aria-label={`${t.projects.viewCode} per ${project.title} su GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
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
