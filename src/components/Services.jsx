import React from 'react';
import { Check, Sparkles, ArrowRight, Layers, Layout, Rocket } from 'lucide-react';
import TiltCard from './TiltCard';
import { soundFX } from '../utils/sound';

export default function Services({ t, onSelectService }) {
  const serviceIcons = {
    starter: <Layout className="w-5 h-5 text-gold-400" />,
    business: <Layers className="w-5 h-5 text-emeraldGlow" />,
    premium: <Rocket className="w-5 h-5 text-cyanGlow" />,
  };

  const handleServiceClick = (serviceId) => {
    soundFX.playClick();
    if (onSelectService) {
      onSelectService(serviceId);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emeraldGlow/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-14 sm:gap-18">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full glass-panel border-gold-500/40 text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.services.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100 max-w-3xl leading-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            {t.services.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 via-emeraldGlow to-cyanGlow rounded-full mt-2" />
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {t.services.items.map((service) => {
            const isPopular = service.isPopular;

            return (
              <TiltCard
                key={service.id}
                glowColor={isPopular ? 'rgba(212, 175, 55, 0.45)' : 'rgba(0, 242, 254, 0.25)'}
                className="h-full flex"
              >
                <div
                  onMouseEnter={() => soundFX.playHover()}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full w-full transition-all duration-500 overflow-hidden group ${
                    isPopular
                      ? 'glass-panel-gold border-gold-500/60 shadow-[0_12px_45px_rgba(212,175,55,0.22)]'
                      : 'glass-panel border-slate-800 hover:border-slate-700 shadow-xl'
                  }`}
                >
                  {/* Popular Accent Ribbon */}
                  {isPopular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-l from-gold-500 to-amber-400 text-obsidian-950 text-[10px] font-mono font-extrabold uppercase tracking-widest py-1 px-4 rounded-bl-xl shadow-md flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>{t.services.popularBadge}</span>
                      </div>
                    </div>
                  )}

                  {/* Card Top: Category, Icon & Title */}
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-3 rounded-2xl border ${
                          isPopular
                            ? 'bg-gold-500/20 text-gold-400 border-gold-500/40'
                            : 'bg-obsidian-900 text-emeraldGlow border-slate-800'
                        }`}
                      >
                        {serviceIcons[service.id]}
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {service.category}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 group-hover:text-gold-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs font-mono text-emeraldGlow">
                        {service.target}
                      </p>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing Box */}
                    <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-slate-800/80 flex items-baseline justify-between mt-1">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          {t.services.startingFrom}
                        </span>
                        <span className="text-2xl sm:text-3xl font-display font-bold text-gold-400">
                          {service.price}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 text-right">
                        {service.priceNote}
                      </span>
                    </div>

                    {/* Features Checklist */}
                    <div className="flex flex-col gap-2.5 pt-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        Caratteristiche incluse:
                      </span>
                      <ul className="flex flex-col gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light leading-snug">
                            <Check className="w-4 h-4 text-emeraldGlow shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom: CTA Button */}
                  <div className="pt-8 mt-6 border-t border-slate-800/80">
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className={`w-full py-3.5 px-5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400 ${
                        isPopular
                          ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-obsidian-950 hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                          : 'bg-obsidian-900 border border-slate-700 text-slate-200 hover:border-gold-500/60 hover:text-gold-400 hover:bg-obsidian-800'
                      }`}
                    >
                      <span>{t.services.ctaBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
