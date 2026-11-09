import React from 'react';
import { Mail, Sparkles, ShieldCheck } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { soundFX } from '../utils/sound';

export default function Footer({ t, onOpenPrivacy }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-obsidian-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-obsidian-900 border border-gold-500/40 flex items-center justify-center font-display font-bold text-gold-400 text-base shadow-sm">
                AB
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold text-slate-100 tracking-wider">
                  AL3XXDEV
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Alessandro Barbato • Salerno, Italia
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm mt-1">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
              {t.footer.navTitle}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => soundFX.playHover()}
                  onClick={() => soundFX.playClick()}
                  className="text-slate-300 hover:text-gold-400 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal & Social Connect */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
              {t.footer.legalTitle}
            </span>
            
            <button
              onClick={() => {
                soundFX.playClick();
                if (onOpenPrivacy) onOpenPrivacy();
              }}
              className="text-xs text-slate-300 hover:text-gold-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>{t.footer.privacyPolicy}</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Al3xxDev"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                onClick={() => soundFX.playClick()}
                className="p-2.5 rounded-full glass-panel border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-all focus-visible:ring-2 focus-visible:ring-gold-400"
                title="GitHub"
                aria-label="Profilo GitHub di Alessandro Barbato"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:al3xx.main1@gmail.com"
                onMouseEnter={() => soundFX.playHover()}
                onClick={() => soundFX.playClick()}
                className="p-2.5 rounded-full glass-panel border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-all focus-visible:ring-2 focus-visible:ring-gold-400"
                title="Email"
                aria-label="Invia un'email ad Alessandro Barbato"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} Alessandro Barbato (AL3XXDEV). {t.footer.rights}
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.footer.designedWith}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
