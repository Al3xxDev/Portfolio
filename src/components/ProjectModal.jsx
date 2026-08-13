import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { soundFX } from '../utils/sound';

export default function ProjectModal({ project, onClose, t }) {
  useEffect(() => {
    // Lock body scroll when modal is active
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div
      onClick={() => {
        soundFX.playClick();
        onClose();
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-xl animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl glass-panel-gold rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border-gold-500/50 flex flex-col gap-6 max-h-[90vh] overflow-y-auto z-[10000] cursor-default"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-all cursor-pointer z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Project Image Banner */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
        </div>

        {/* Details & Specs */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-100">
              {project.title}
            </h3>
            <span className="text-sm font-mono text-emeraldGlow">
              {project.category}
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {project.longDescription}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 py-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg glass-panel border-slate-700 text-gold-400 text-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 text-obsidian-950 text-xs font-bold tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t.projects.viewLive}</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-slate-700 text-slate-200 hover:border-gold-500/40 hover:text-gold-400 text-xs font-bold tracking-wider transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{t.projects.viewCode}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
