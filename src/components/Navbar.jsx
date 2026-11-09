import React, { useState, useEffect, useRef } from 'react';
import { Globe, Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => soundFX.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          soundFX.playClick();
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [mobileMenuOpen]);

  const toggleLang = () => {
    soundFX.playClick();
    setLang(lang === 'it' ? 'en' : 'it');
  };

  const toggleAudio = () => {
    const newState = soundFX.toggleSound();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#terminal', label: t.nav.terminal },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-obsidian-950/85 backdrop-blur-md border-b border-gold-500/20 shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Monogram Brand */}
          <a
            href="#"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-gold-400 rounded-full"
          >
            <div className="relative w-10 h-10 rounded-full bg-obsidian-900 border border-gold-500/40 flex items-center justify-center font-display font-bold text-gold-400 text-lg group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
              AB
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emeraldGlow rounded-full ring-2 ring-obsidian-950 animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-base tracking-wider font-bold text-slate-100 group-hover:text-gold-400 transition-colors">
                AL3XXDEV
              </span>
              <span className="text-[10px] font-mono text-slate-400 leading-none">
                Alessandro Barbato
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navigazione principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => soundFX.playHover()}
                onClick={() => soundFX.playClick()}
                className="text-xs uppercase tracking-widest text-slate-300 hover:text-gold-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 min-h-[38px] rounded-full text-xs font-mono border border-slate-700/80 bg-obsidian-900/60 text-slate-300 hover:border-gold-500/50 hover:text-gold-400 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400"
              title="Switch Language (IT / EN)"
              aria-label={`Lingua corrente: ${lang.toUpperCase()}. Clicca per cambiare`}
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-bold uppercase tracking-wider">{lang}</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleAudio}
              onMouseEnter={() => soundFX.playHover()}
              className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full border border-slate-700/80 bg-obsidian-900/60 text-slate-300 hover:border-gold-500/50 hover:text-gold-400 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400"
              title={soundEnabled ? 'Disattiva Audio UI' : 'Attiva Audio UI'}
              aria-label={soundEnabled ? 'Disattiva effetti sonori' : 'Attiva effetti sonori'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emeraldGlow" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* CTA Hire / Preventivo Button */}
            <a
              href="#contact"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="hidden sm:flex items-center gap-2 px-4 py-2 min-h-[38px] rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-obsidian-950 text-xs font-bold tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all focus-visible:ring-2 focus-visible:ring-gold-400 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.hire}</span>
            </a>

            {/* Mobile/Tablet Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              className="lg:hidden p-2.5 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-xl bg-obsidian-900 text-slate-200 border border-slate-700 focus-visible:ring-2 focus-visible:ring-gold-400 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Drawer Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden glass-panel border-b border-gold-500/20 px-6 py-6 flex flex-col gap-3 animate-fadeIn relative z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  soundFX.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-semibold text-slate-200 hover:text-gold-400 py-2.5 border-b border-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
              }}
              className="mt-3 text-center py-3.5 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-obsidian-950 font-bold text-sm tracking-wider uppercase shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.nav.hire}</span>
            </a>
          </div>
        )}
      </header>

      {/* Backdrop for Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
