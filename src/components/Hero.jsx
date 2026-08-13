import React from 'react';
import { ArrowUpRight, Award, Zap, MapPin, Mail, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';
import TiltCard from './TiltCard';
import { soundFX } from '../utils/sound';

export default function Hero({ t }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Glow Spots */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-[650px] sm:h-[650px] bg-gold-500/15 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-60 h-60 sm:w-[450px] sm:h-[450px] bg-emeraldGlow/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-cyanGlow/10 rounded-full blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
        
        {/* Left Column: Text & Kinetic Headlines */}
        <div className="md:col-span-7 flex flex-col gap-4 sm:gap-6 text-left">
          
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border-gold-500/40 text-[11px] sm:text-xs font-mono text-gold-400 w-fit shadow-lg hover:border-gold-400/60 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emeraldGlow animate-ping shrink-0" />
            <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="truncate max-w-[240px] sm:max-w-none">{t.hero.badge}</span>
          </div>

          {/* Main Headline (Perfectly sized for iPad & Desktop) */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <h2 className="text-slate-400 font-mono text-xs sm:text-sm tracking-widest uppercase animate-fadeIn">
              {t.hero.greeting}
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.15] sm:leading-[1.1]">
              Alessandro <br className="hidden sm:inline" />
              <span className="font-serifTitle italic font-semibold gold-gradient-text relative inline-block">
                Barbato
              </span>
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-emeraldGlow tracking-wide font-mono mt-0.5 sm:mt-1 leading-relaxed">
              {t.hero.role}
            </p>
          </div>

          {/* Biography summary */}
          <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
            {t.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="#projects"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-obsidian-950 font-bold text-xs sm:text-sm tracking-wider hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] active:scale-95 transition-all cursor-pointer"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full glass-panel border border-slate-700 text-slate-200 hover:border-gold-500/50 hover:text-gold-400 text-xs sm:text-sm font-semibold tracking-wider active:scale-95 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{t.hero.ctaContact}</span>
            </a>

            <a
              href="https://github.com/Al3xxDev"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="p-3 sm:p-3.5 rounded-full glass-panel border border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-800/80 max-w-xl">
            <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-obsidian-900/60 border border-gold-500/20">
              <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-gold-400">
                UNISA
              </span>
              <span className="text-[9px] sm:text-xs text-slate-400 font-mono mt-0.5 leading-tight">{t.hero.statUniversity}</span>
            </div>
            <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-obsidian-900/60 border border-emeraldGlow/20">
              <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-emeraldGlow">
                96/100
              </span>
              <span className="text-[9px] sm:text-xs text-slate-400 font-mono mt-0.5 leading-tight">{t.hero.statDiploma}</span>
            </div>
            <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-obsidian-900/60 border border-cyanGlow/20">
              <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-cyanGlow">
                B2 Cert.
              </span>
              <span className="text-[9px] sm:text-xs text-slate-400 font-mono mt-0.5 leading-tight">{t.hero.statPrototyping}</span>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Tilt Glass Portrait Card */}
        <div className="md:col-span-5 flex justify-center relative w-full px-2 sm:px-0">
          <TiltCard className="max-w-md w-full" glowColor="rgba(212, 175, 55, 0.4)">
            <div className="relative group w-full">
              
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-emeraldGlow to-cyanGlow rounded-3xl blur-md sm:blur-lg opacity-40 group-hover:opacity-85 transition duration-700" />
              
              {/* Main Portrait Card */}
              <div className="relative glass-panel-gold rounded-3xl p-3 sm:p-4 overflow-hidden shadow-2xl">
                <div className="relative h-[340px] sm:h-[400px] md:h-[420px] lg:h-[480px] w-full rounded-2xl overflow-hidden">
                  <img
                    src="/assets/ProfessionalPFP.JPEG"
                    alt="Alessandro Barbato"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter saturate-[1.05]"
                  />
                  
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-85" />

                  {/* Location & Age Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 sm:p-3 rounded-xl glass-panel border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-200 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{t.hero.location}</span>
                    </div>
                    <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-gold-500/20 text-gold-400 text-[10px] sm:text-[11px] font-mono font-bold border border-gold-500/40">
                      {t.hero.ageBadge}
                    </div>
                  </div>
                </div>

                {/* Mobile & Tablet Badges Flow (Contained nicely inside card bottom on phones and iPad) */}
                <div className="flex xl:hidden flex-col gap-2 mt-3 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-obsidian-900/90 border border-gold-500/30">
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold text-slate-100">{t.hero.focacciaBadge}</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-gold-400 bg-gold-500/20 px-2 py-0.5 rounded">{t.hero.focacciaGrade}</span>
                  </div>

                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-obsidian-900/90 border border-emeraldGlow/30">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emeraldGlow shrink-0" />
                      <span className="text-[11px] sm:text-xs font-bold text-slate-100">{t.hero.aiBadge}</span>
                    </div>
                    <span className="text-[10px] text-slate-300 font-mono">{t.hero.aiBadgeSub}</span>
                  </div>
                </div>

              </div>

              {/* Large Desktop Only Floating Badge Top Right */}
              <div className="hidden xl:flex absolute -top-4 -right-4 glass-panel border border-gold-500/40 rounded-2xl p-3 items-center gap-3 shadow-xl backdrop-blur-xl animate-float pointer-events-none z-20">
                <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left pr-2">
                  <span className="text-xs font-bold text-slate-100">{t.hero.focacciaBadge}</span>
                  <span className="text-[10px] text-emeraldGlow font-mono font-bold">{t.hero.focacciaGrade}</span>
                </div>
              </div>

              {/* Large Desktop Only Floating Badge Bottom Left */}
              <div className="hidden xl:flex absolute -bottom-4 -left-4 glass-panel border border-emeraldGlow/40 rounded-2xl p-3 items-center gap-3 shadow-xl backdrop-blur-xl pointer-events-none z-20">
                <div className="p-2 rounded-xl bg-emeraldGlow/20 text-emeraldGlow">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left pr-2">
                  <span className="text-xs font-bold text-slate-100">{t.hero.aiBadge}</span>
                  <span className="text-[10px] text-slate-300 font-mono">{t.hero.aiBadgeSub}</span>
                </div>
              </div>

            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
