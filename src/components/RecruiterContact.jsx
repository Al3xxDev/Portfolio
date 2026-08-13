import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/sound';

export default function RecruiterContact({ t }) {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = 'al3xx.main1@gmail.com';

  const copyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFX.playClick();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    setFormSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-obsidian-900/30">
      
      {/* Mobile Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2.5">
          <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full glass-panel border-gold-500/30 text-[11px] sm:text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.contact.title}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-100 max-w-3xl leading-snug sm:leading-tight">
            {t.contact.subtitle}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gold-500 via-emeraldGlow to-cyanGlow rounded-full mt-2" />
        </div>

        {/* Grid: Recruiter Info vs Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          
          {/* Recruiter & Company Spotlight */}
          <div className="lg:col-span-5 glass-panel-gold rounded-3xl p-6 sm:p-10 flex flex-col justify-between border-gold-500/30 shadow-2xl">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-center gap-2.5 text-gold-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{t.contact.recruiterTag}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 leading-snug">
                {t.contact.recruiterHeading}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {t.contact.recruiterText}
              </p>
            </div>

            {/* Quick Contact & Copy Bar */}
            <div className="flex flex-col gap-3 sm:gap-4 mt-6 pt-5 sm:pt-6 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">
                {t.contact.emailDirect}
              </span>

              <div className="flex items-center justify-between p-3 rounded-2xl glass-panel border-slate-700 gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-100 font-bold truncate">
                    {emailAddress}
                  </span>
                </div>

                <button
                  onClick={copyEmail}
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-500 text-obsidian-950 hover:brightness-110 text-xs font-bold font-mono transition-all cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Toast feedback */}
              {copied && (
                <div className="text-xs font-mono text-emeraldGlow font-bold animate-fadeIn">
                  ✓ {t.contact.copiedToast}
                </div>
              )}
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border-slate-800 flex flex-col justify-between shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Name / Company"
                  className="w-full px-4 py-3.5 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-base sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-base sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="..."
                  className="w-full px-4 py-3.5 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-base sm:text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => soundFX.playHover()}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-obsidian-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] active:scale-98 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.sendBtn}</span>
              </button>

              {formSent && (
                <div className="p-3.5 rounded-xl bg-emeraldGlow/10 border border-emeraldGlow/30 text-emeraldGlow text-xs font-mono font-bold animate-fadeIn text-center">
                  {t.contact.formSuccess}
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
