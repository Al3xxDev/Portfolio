import React from 'react';
import { Cpu, Zap, ShieldCheck, Rocket, BookOpen, GraduationCap, Award, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/sound';
import TiltCard from './TiltCard';

export default function AboutAI({ t }) {
  const aiPillars = [
    {
      icon: <Zap className="w-5 h-5 text-gold-400" />,
      title: t.about.aiItem1Title,
      desc: t.about.aiItem1Desc,
      accentBorder: 'border-gold-500/30',
      accentBg: 'bg-gold-500/10',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emeraldGlow" />,
      title: t.about.aiItem2Title,
      desc: t.about.aiItem2Desc,
      accentBorder: 'border-emeraldGlow/30',
      accentBg: 'bg-emeraldGlow/10',
    },
    {
      icon: <Rocket className="w-5 h-5 text-cyanGlow" />,
      title: t.about.aiItem3Title,
      desc: t.about.aiItem3Desc,
      accentBorder: 'border-cyanGlow/30',
      accentBg: 'bg-cyanGlow/10',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Mobile Ambient Glow Spots */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-emeraldGlow/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full glass-panel border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.about.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100 max-w-3xl leading-tight">
            {t.about.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            {t.about.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 via-emeraldGlow to-cyanGlow rounded-full mt-2" />
        </div>

        {/* Top Split: Bio Card & AI Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio Glass Card */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-10 flex flex-col justify-between border-slate-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <BookOpen className="w-48 h-48 text-slate-100" />
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-gold-400 tracking-wider uppercase">
                ALESSANDRO BARBATO • SALERNO
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100 leading-snug">
                {t.about.bioTitle}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {t.about.bioText1}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {t.about.bioText2}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {t.about.bioText3}
              </p>
            </div>
          </div>

          {/* AI Synergy Box */}
          <div className="lg:col-span-6 glass-panel-gold rounded-3xl p-6 sm:p-10 flex flex-col gap-6 justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Cpu className="w-48 h-48 text-gold-400" />
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-emeraldGlow tracking-wider uppercase">
                ANTIGRAVITY & AI AUGMENTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                {t.about.aiTitle}
              </h3>
            </div>

            <div className="flex flex-col gap-3.5 relative z-10">
              {aiPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl glass-panel ${pillar.accentBorder} hover:bg-obsidian-900/80 transition-all group`}
                >
                  <div className={`p-2.5 rounded-xl ${pillar.accentBg} shrink-0 group-hover:scale-110 transition-transform`}>
                    {pillar.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-gold-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="flex flex-col gap-6 sm:gap-8 mt-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <GraduationCap className="w-8 h-8 text-gold-400" />
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
              {t.about.timelineTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Timeline Item 1: UNISA */}
            <TiltCard glowColor="rgba(212, 175, 55, 0.3)">
              <div
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 border-slate-800 hover:border-gold-500/40 transition-all relative overflow-hidden group h-full shadow-lg"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-gold-500 rounded-r-2xl" />
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-gold-500/20 text-gold-400 font-mono text-[11px] sm:text-xs font-bold border border-gold-500/30">
                    {t.about.edu1Year}
                  </span>
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-gold-400 transition-colors">
                    {t.about.edu1Title}
                  </h4>
                  <span className="text-xs font-semibold text-emeraldGlow font-mono">
                    {t.about.edu1Sub}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mt-1">
                    {t.about.edu1Desc}
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Timeline Item 2: Basilio Focaccia */}
            <TiltCard glowColor="rgba(0, 242, 254, 0.3)">
              <div
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 border-slate-800 hover:border-emeraldGlow/40 transition-all relative overflow-hidden group h-full shadow-lg"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-emeraldGlow rounded-r-2xl" />
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-emeraldGlow/20 text-emeraldGlow font-mono text-[11px] sm:text-xs font-bold border border-emeraldGlow/30">
                    {t.about.edu2Year}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-md border border-gold-500/30">
                    96 / 100
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-emeraldGlow transition-colors">
                    {t.about.edu2Title}
                  </h4>
                  <span className="text-xs font-semibold text-slate-300 font-mono">
                    {t.about.edu2Sub}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mt-1">
                    {t.about.edu2Desc}
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Timeline Item 3: Cambridge B2 Certification */}
            <TiltCard glowColor="rgba(79, 172, 254, 0.35)">
              <div
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel-gold rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-4 border-gold-500/30 hover:border-gold-400 transition-all relative overflow-hidden group h-full shadow-lg"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-cyanGlow rounded-r-2xl" />
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-cyanGlow/20 text-cyanGlow font-mono text-[11px] sm:text-xs font-bold border border-cyanGlow/30">
                    {t.about.edu3Year}
                  </span>
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-gold-400 transition-colors">
                    {t.about.edu3Title}
                  </h4>
                  <span className="text-xs font-semibold text-gold-400 font-mono">
                    {t.about.edu3Sub}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mt-1">
                    {t.about.edu3Desc}
                  </p>
                </div>
              </div>
            </TiltCard>

          </div>
        </div>

      </div>
    </section>
  );
}
