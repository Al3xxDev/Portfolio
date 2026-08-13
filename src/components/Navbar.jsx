import React, { useState, useEffect } from 'react';
import { Globe, Volume2, VolumeX, Menu, X, Sparkles, Terminal } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    soundFX.playClick();
    setLang(lang === 'it' ? 'en' : 'it');
  };

  const toggleAudio = () => {
    const newState = soundFX.toggleSound();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#terminal', label: t.nav.terminal },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
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
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-full bg-obsidian-900 border border-gold-500/40 flex items-center justify-center font-display font-bold text-gold-400 text-lg group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
            AB
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emeraldGlow rounded-full ring-2 ring-obsidian-950 animate-pulse" />
          </div>
          <span className="font-display text-base tracking-wider font-bold text-slate-100 group-hover:text-gold-400 transition-colors">
            Alessandro Barbato
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="text-xs uppercase tracking-widest text-slate-300 hover:text-gold-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls & Quick Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-slate-700/80 bg-obsidian-900/60 text-slate-300 hover:border-gold-500/50 hover:text-gold-400 transition-all cursor-pointer"
            title="Switch Language (IT / EN)"
          >
            <Globe className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-bold uppercase tracking-wider">{lang}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundFX.playHover()}
            className="p-2 rounded-full border border-slate-700/80 bg-obsidian-900/60 text-slate-300 hover:border-gold-500/50 hover:text-gold-400 transition-all cursor-pointer"
            title={soundEnabled ? 'Disattiva Audio UI' : 'Attiva Audio UI'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emeraldGlow" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* CTA Hire Me Button */}
          <a
            href="#contact"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="hidden xl:flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-obsidian-950 text-xs font-bold tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.nav.hire}</span>
          </a>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-2 rounded-lg bg-obsidian-900 text-slate-200 border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-b border-gold-500/20 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
              }}
              className="text-sm font-semibold text-slate-200 hover:text-gold-400 py-2 border-b border-slate-800/60"
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
            className="mt-2 text-center py-2.5 rounded-lg bg-gold-500 text-obsidian-950 font-bold text-sm"
          >
            {t.nav.hire}
          </a>
        </div>
      )}
    </header>
  );
}
