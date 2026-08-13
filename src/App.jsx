import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAI from './components/AboutAI';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TerminalLab from './components/TerminalLab';
import RecruiterContact from './components/RecruiterContact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { translations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('it');
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-obsidian-950 text-slate-100 overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-400">
        {/* 3D Particle Canvas Background */}
        <ParticleBackground />

        {/* Custom Glow Cursor */}
        <CustomCursor />

        {/* Sticky Translucent Header */}
        <Navbar lang={lang} setLang={setLang} t={t} />

        {/* Page Sections */}
        <main className="relative z-10">
          <Hero t={t} />
          <AboutAI t={t} />
          <Skills t={t} />
          <Projects t={t} />
          <TerminalLab t={t} lang={lang} />
          <RecruiterContact t={t} />
        </main>

        {/* Footer */}
        <Footer t={t} />
      </div>
    </ErrorBoundary>
  );
}
