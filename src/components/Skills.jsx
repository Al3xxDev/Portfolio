import React from 'react';
import { Code2, Server, Wrench, Globe, HeartHandshake, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function Skills({ t }) {
  const { frontend, backend, tools, langCerts, softSkills } = t.skills;

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-obsidian-900/40">
      
      {/* Mobile Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyanGlow/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full glass-panel border-emeraldGlow/40 text-xs font-mono text-emeraldGlow uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-emeraldGlow" />
            <span>{t.skills.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100 max-w-3xl leading-tight">
            {t.skills.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            {t.skills.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emeraldGlow via-gold-500 to-cyanGlow rounded-full mt-2" />
        </div>

        {/* Category 1: Frontend Development */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
                {t.skills.categoryFrontend}
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-gold-400/80 sm:ml-2">
              ({t.skills.categoryFrontendSub})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {frontend.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-2xl p-5 border-slate-800/90 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.18)] transition-all group relative overflow-hidden flex flex-col justify-between shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-lg sm:text-xl font-bold font-display text-slate-100 group-hover:text-gold-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gold-500/20 text-gold-400 border border-gold-500/30">
                    {skill.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono mt-1">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Backend & Database */}
        <div className="flex flex-col gap-5 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <Server className="w-5 h-5 sm:w-6 sm:h-6 text-emeraldGlow" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
                {t.skills.categoryBackend}
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-emeraldGlow/80 sm:ml-2">
              ({t.skills.categoryBackendSub})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {backend.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-2xl p-5 border-slate-800/90 hover:border-emeraldGlow/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.18)] transition-all group flex flex-col justify-between shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-base sm:text-lg font-bold font-display text-slate-100 group-hover:text-emeraldGlow transition-colors">
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

        {/* Category 3: Tools & Workflow */}
        <div className="flex flex-col gap-5 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-cyanGlow" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
                {t.skills.categoryTools}
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs font-mono text-cyanGlow/80 sm:ml-2">
              ({t.skills.categoryToolsSub})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {tools.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-2xl p-5 border-slate-800/90 hover:border-cyanGlow/50 hover:shadow-[0_0_20px_rgba(79,172,254,0.18)] transition-all group flex flex-col justify-between shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-base sm:text-lg font-bold font-display text-slate-100 group-hover:text-cyanGlow transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyanGlow/20 text-cyanGlow border border-cyanGlow/30">
                    {skill.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono mt-1">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category 4: Languages & Certifications */}
        <div className="flex flex-col gap-5 pt-2">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {t.skills.categoryLangsCert}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {langCerts.map((cert, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel rounded-2xl p-5 border-slate-800/90 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.18)] transition-all group flex flex-col justify-between shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{cert.icon}</span>
                    <span className="text-lg sm:text-xl font-bold font-display text-slate-100 group-hover:text-gold-400 transition-colors">
                      {cert.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gold-500/20 text-gold-400 border border-gold-500/30">
                    {cert.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-200 font-mono font-semibold">{cert.level}</p>
                <p className="text-[11px] text-slate-400 font-mono mt-2.5 pt-2.5 border-t border-slate-800/80">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category 5: Workplace & Soft Skills */}
        <div className="flex flex-col gap-5 pt-2">
          <div className="flex items-center gap-2.5">
            <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-emeraldGlow" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {t.skills.categorySoft}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {softSkills.map((soft, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="glass-panel-gold rounded-2xl p-5 sm:p-7 flex flex-col gap-2.5 relative group shadow-md"
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
