import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { soundFX } from '../utils/sound';

export default function ProjectModal({ project, onClose, t }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    // Save previously focused element to restore when modal closes
    previousFocusRef.current = document.activeElement;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        soundFX.playClick();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to opening button
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={() => {
        soundFX.playClick();
        onClose();
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-xl animate-fadeIn cursor-pointer"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl glass-panel-gold rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border-gold-500/50 flex flex-col gap-6 max-h-[90vh] overflow-y-auto z-[10000] cursor-default text-left"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          aria-label="Chiudi dettagli progetto"
          className="absolute top-5 right-5 p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-full glass-panel border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-all cursor-pointer z-20 focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative w-full h-60 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-obsidian-950">
          <img
            src={project.image}
            alt={project.title}
            width="1907"
            height="984"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/40 backdrop-blur-md">
              {project.badge}
            </span>
          </div>
        </div>

        {/* Details & Specs */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono font-bold text-emeraldGlow">
              {project.category}
            </span>
            <h3 id="modal-project-title" className="text-2xl sm:text-4xl font-display font-extrabold text-slate-100">
              {project.title}
            </h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {project.longDescription}
          </p>

          {/* Key Features List */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.projects.keyFeaturesLabel}</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-obsidian-900/80 border border-slate-800 text-xs text-slate-300 font-light">
                  <CheckCircle2 className="w-4 h-4 text-emeraldGlow shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t.projects.verifiedTechLabel}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg glass-panel border-slate-700 text-gold-400 text-xs font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="flex items-center gap-2 px-6 py-3 min-h-[42px] rounded-full bg-gold-500 text-obsidian-950 text-xs font-bold tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400"
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
              className="flex items-center gap-2 px-6 py-3 min-h-[42px] rounded-full glass-panel border border-slate-700 text-slate-200 hover:border-gold-500/40 hover:text-gold-400 text-xs font-bold tracking-wider transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400"
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
