import { Mail, Heart, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { soundFX } from '../utils/sound';

export default function Footer({ t }) {
  return (
    <footer className="border-t border-slate-800/80 bg-obsidian-950 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Monogram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-obsidian-900 border border-gold-500/40 flex items-center justify-center font-display font-bold text-gold-400 text-sm">
            AB
          </div>
          <span className="font-display text-sm font-bold text-slate-200">
            Alessandro Barbato
          </span>
          <span className="text-xs text-slate-500 font-mono">
            • © {new Date().getFullYear()}
          </span>
        </div>

        {/* Tagline */}
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>{t.footer.designedWith}</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Al3xxDev"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="p-2 rounded-full glass-panel border-slate-700 text-slate-400 hover:text-gold-400 hover:border-gold-500/40 transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:al3xx.main1@gmail.com"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="p-2 rounded-full glass-panel border-slate-700 text-slate-400 hover:text-gold-400 hover:border-gold-500/40 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
