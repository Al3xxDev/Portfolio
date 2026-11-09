import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function PrivacyPolicyModal({ isOpen, onClose, t }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';

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
        if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const privacy = t.privacyModal;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={() => {
        soundFX.playClick();
        onClose();
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-xl animate-fadeIn cursor-pointer"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl glass-panel-gold rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border-gold-500/40 flex flex-col gap-6 max-h-[88vh] overflow-y-auto cursor-default text-left"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          aria-label={privacy.closeBtn}
          className="absolute top-5 right-5 p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-full glass-panel border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-all cursor-pointer z-20 focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 border-b border-slate-800 pb-5 pr-10">
          <div className="p-3 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/30 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 id="privacy-modal-title" className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {privacy.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
              {privacy.subtitle}
            </p>
          </div>
        </div>

        {/* Data Controller Details */}
        <div className="p-4 rounded-xl bg-obsidian-900/90 border border-slate-800/80 flex flex-col gap-1 text-xs font-mono">
          <span className="text-gold-400 font-bold uppercase tracking-wider">
            {privacy.controllerLabel}
          </span>
          <span className="text-slate-300">
            {privacy.controllerValue}
          </span>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-5 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
          {privacy.sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <h4 className="text-slate-100 font-semibold font-mono text-sm">
                {section.heading}
              </h4>
              <p className="text-slate-300">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400/90 text-[11px] font-mono flex items-center gap-2">
          <Lock className="w-4 h-4 shrink-0" />
          <span>{privacy.placeholderNote}</span>
        </div>

        {/* Bottom Close Action */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="px-6 py-2.5 min-h-[42px] rounded-full bg-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            {privacy.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
