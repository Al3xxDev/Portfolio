import React from 'react';
import { Code2, Layers, HeartHandshake, Globe } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function Skills({ t }) {
  const coreLanguages = t.skills.languages;
  const modernStack = t.skills.frameworks;
  const langCerts = t.skills.langCerts;

  const softSkills = [
    { title: t.skills.soft1Title, desc: t.skills.soft1Desc, badge: 'Key Asset' },
    { title: t.skills.soft2Title, desc: t.skills.soft2Desc, badge: 'Reliability' },
    { title: t.skills.soft3Title, desc: t.skills.soft3Desc, badge: 'Resilience' },
    { title: t.skills.soft4Title, desc: t.skills.soft4Desc, badge: 'Core Strength' },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-obsidian-900/40">
      
      {/* Mobile Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyanGlow/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2.5">
          <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full glass-panel border-emeraldGlow/40 text-[11px] sm:text-xs font-mono text-emeraldGlow uppercase tracking-widest">
            {t.skills.title}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-100 max-w-3xl leading-snug sm:leading-tight">
            {t.skills.subtitle}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emeraldGlow via-gold-500 to-cyanGlow rounded-full mt-2" />
        </div>

        {/* Section 1: Core Languages */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
                {t.skills.categoryLanguages}
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-gold-400/80 sm:ml-2">
              ({t.skills.categoryLanguagesSub})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coreLanguages.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-2xl p-5 border-slate-800/90 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all group relative overflow-hidden flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-lg sm:text-xl font-bold font-display text-slate-100 group-hover:text-gold-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gold-500/20 text-gold-400 border border-gold-500/30">
                      {skill.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 font-mono font-semibold mb-1">
                    {skill.level}
                  </p>
                </div>
                <p className="text-[11px] text-slate-400 font-mono mt-2.5 pt-2.5 border-t border-slate-800/80">
                  {skill.exp}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Modern Stack & Frameworks */}
        <div className="flex flex-col gap-5 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-emeraldGlow" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
                {t.skills.categoryWeb}
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-emeraldGlow/80 sm:ml-2">
              ({t.skills.categoryWebSub})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modernStack.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-2xl p-5 border-slate-800/90 hover:border-emeraldGlow/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all group flex flex-col justify-between shadow-md"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-lg sm:text-xl font-bold font-display text-slate-100 group-hover:text-emeraldGlow transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emeraldGlow/20 text-emeraldGlow border border-emeraldGlow/30">
                    {skill.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono mt-1">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Languages & Certifications */}
        {langCerts && (
          <div className="flex flex-col gap-5 pt-2">
            <div className="flex items-center gap-2.5">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-cyanGlow" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
                {t.skills.categoryLangsCert}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {langCerts.map((cert, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundFX.playHover()}
                  className="glass-panel rounded-2xl p-5 border-slate-800/90 hover:border-cyanGlow/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all group flex flex-col justify-between shadow-md"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{cert.icon}</span>
                      <span className="text-lg sm:text-xl font-bold font-display text-slate-100 group-hover:text-cyanGlow transition-colors">
                        {cert.name}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyanGlow/20 text-cyanGlow border border-cyanGlow/30">
                      {cert.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 font-mono font-semibold">{cert.level}</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-2.5 pt-2.5 border-t border-slate-800/80">{cert.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Soft Skills */}
        <div className="flex flex-col gap-5 pt-2">
          <div className="flex items-center gap-2.5">
            <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {t.skills.categorySoft}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {softSkills.map((soft, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel-gold rounded-2xl p-5 sm:p-8 flex flex-col gap-2.5 relative group shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-gold-400 transition-colors">
                    {soft.title}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-md bg-gold-500/20 text-gold-400 font-mono text-[10px] sm:text-[11px] font-bold border border-gold-500/30">
                    {soft.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {soft.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
