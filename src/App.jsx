import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import AboutAI from './components/AboutAI';
import Skills from './components/Skills';
import TerminalLab from './components/TerminalLab';
import RecruiterContact from './components/RecruiterContact';
import Footer from './components/Footer';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import ErrorBoundary from './components/ErrorBoundary';
import { translations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem('al3xxdev_lang');
        if (saved === 'it' || saved === 'en') return saved;
        if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('en')) {
          return 'en';
        }
      }
    } catch (e) {}
    return 'it';
  });
  const [selectedService, setSelectedService] = useState(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    // Keep html lang attribute in sync with state for SEO & accessibility
    document.documentElement.lang = lang;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('al3xxdev_lang', lang);
      }
    } catch (e) {}
  }, [lang]);

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
  };

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-obsidian-950 text-slate-100 overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-400">
        {/* 3D Particle Canvas Background */}
        <ParticleBackground />

        {/* Custom Glow Cursor (hidden on touch devices) */}
        <CustomCursor />

        {/* Sticky Translucent Header with Nav */}
        <Navbar lang={lang} setLang={setLang} t={t} />

        {/* Page Main Sections */}
        <main className="relative z-10">
          <Hero t={t} />
          <Services t={t} onSelectService={handleSelectService} />
          <Projects t={t} />
          <AboutAI t={t} />
          <Skills t={t} />
          <TerminalLab t={t} lang={lang} />
          <RecruiterContact
            t={t}
            selectedService={selectedService}
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer t={t} onOpenPrivacy={() => setIsPrivacyOpen(true)} />

        {/* Privacy Policy Modal */}
        <PrivacyPolicyModal
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
          t={t}
        />
      </div>
    </ErrorBoundary>
  );
}
