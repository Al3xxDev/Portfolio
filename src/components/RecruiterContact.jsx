import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, Send, Sparkles, Building2, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFX } from '../utils/sound';

export default function RecruiterContact({ t, selectedService, onOpenPrivacy }) {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null
  const [validationErrors, setValidationErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    projectType: 'business',
    budget: '500-800',
    message: '',
    privacyAccepted: false,
    botField: '',
  });

  const emailAddress = 'al3xx.main1@gmail.com';

  // Automatically adapt project type when user picks a service from Services section
  useEffect(() => {
    if (selectedService === 'starter') {
      setFormData((prev) => ({ ...prev, projectType: 'landing', budget: 'under300' }));
    } else if (selectedService === 'business') {
      setFormData((prev) => ({ ...prev, projectType: 'restaurant', budget: '500-800' }));
    } else if (selectedService === 'premium') {
      setFormData((prev) => ({ ...prev, projectType: 'premium', budget: '800-1500' }));
    }
  }, [selectedService]);

  const copyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Il nome è obbligatorio / Name is required';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Inserisci un indirizzo email valido / Valid email required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Inserisci una descrizione di almeno 10 caratteri / At least 10 characters required';
    }
    if (!formData.privacyAccepted) {
      errors.privacy = 'È necessario accettare la privacy policy / Privacy consent is required';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (formData.botField) return; // Silent anti-spam drop

    if (!validate()) {
      soundFX.playClick();
      return;
    }

    soundFX.playClick();
    setIsSubmitting(true);
    setFormStatus(null);

    const payload = {
      'form-name': 'contact',
      name: formData.name,
      email: formData.email,
      businessName: formData.businessName,
      projectType: formData.projectType,
      budget: formData.budget,
      message: formData.message,
      privacyAccepted: formData.privacyAccepted ? 'accettata' : 'non_accettata',
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      });

      // On Netlify in production response.ok will be true when handled by Netlify Forms.
      if (response.ok) {
        setFormStatus('success');
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.7 },
        });
        setFormData({
          name: '',
          email: '',
          businessName: '',
          projectType: 'business',
          budget: '500-800',
          message: '',
          privacyAccepted: false,
          botField: '',
        });
        setValidationErrors({});
      } else {
        // Local preview servers return 404/405 without Netlify's backend form handler
        if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
          setFormStatus('dev_notice');
        } else {
          setFormStatus('error');
        }
      }
    } catch (err) {
      if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        setFormStatus('dev_notice');
      } else {
        setFormStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-obsidian-900/40">
      
      {/* Mobile Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-gold-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full glass-panel border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.contact.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-100 max-w-3xl leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 via-emeraldGlow to-cyanGlow rounded-full mt-2" />
        </div>

        {/* Grid: Recruiter Info vs Client Lead Generation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          
          {/* Left Column: Client Guidance & Recruiter Spotlight */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Commercial Lead In Banner */}
            <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 flex flex-col gap-4 border-gold-500/40 shadow-xl">
              <div className="flex items-center gap-2 text-gold-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{t.contact.clientTag}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-100 leading-snug">
                {t.contact.clientHeading}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {t.contact.clientSub}
              </p>

              <div className="flex flex-col gap-2 pt-2 border-t border-slate-800 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emeraldGlow shrink-0" />
                  <span>{t.contact.responsePledge || "Risposta rapida (generalmente entro 24-48 ore lavorative)"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emeraldGlow shrink-0" />
                  <span>{t.contact.transparentQuote || "Preventivo trasparente e senza impegno"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emeraldGlow shrink-0" />
                  <span>{t.contact.customConsulting || "Consulenza iniziale personalizzata"}</span>
                </div>
              </div>
            </div>

            {/* Recruiter & Company Spotlight */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-slate-800 shadow-xl gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-emeraldGlow font-mono text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>{t.contact.recruiterTag}</span>
                </div>
                <h4 className="text-lg font-display font-bold text-slate-100">
                  {t.contact.recruiterHeading}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {t.contact.recruiterText}
                </p>
              </div>

              {/* Direct Email Copy Box */}
              <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono">
                  {t.contact.emailDirect}
                </span>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-obsidian-950 border border-slate-700/80 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-slate-100 font-bold truncate">
                      {emailAddress}
                    </span>
                  </div>

                  <button
                    onClick={copyEmail}
                    onMouseEnter={() => soundFX.playHover()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-500 text-obsidian-950 hover:brightness-110 text-xs font-bold font-mono transition-all cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{t.contact.copiedBtn || "Copiata!"}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.contact.copyBtn}</span>
                      </>
                    )}
                  </button>
                </div>

                {copied && (
                  <div className="text-xs font-mono text-emeraldGlow font-bold animate-fadeIn">
                    ✓ {t.contact.copiedToast}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Lead Generation Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border-slate-800 flex flex-col justify-between shadow-2xl">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 sm:gap-6"
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field for spam prevention */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Don't fill this out if you're human:{' '}
                  <input
                    name="bot-field"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  />
                </label>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono font-bold text-slate-300 uppercase">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (validationErrors.name) setValidationErrors({ ...validationErrors, name: null });
                    }}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-obsidian-950 border text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-sm ${
                      validationErrors.name ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {validationErrors.name && (
                    <span className="text-[11px] font-mono text-red-400">{validationErrors.name}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono font-bold text-slate-300 uppercase">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (validationErrors.email) setValidationErrors({ ...validationErrors, email: null });
                    }}
                    placeholder={t.contact.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-obsidian-950 border text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-sm ${
                      validationErrors.email ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {validationErrors.email && (
                    <span className="text-[11px] font-mono text-red-400">{validationErrors.email}</span>
                  )}
                </div>
              </div>

              {/* Business / Venue Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-business" className="text-xs font-mono font-bold text-slate-300 uppercase">
                  {t.contact.businessLabel}
                </label>
                <input
                  id="contact-business"
                  name="businessName"
                  type="text"
                  maxLength={100}
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder={t.contact.businessPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-sm"
                />
              </div>

              {/* Project Type & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-project-type" className="text-xs font-mono font-bold text-slate-300 uppercase">
                    {t.contact.projectTypeLabel}
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-sm cursor-pointer"
                  >
                    {t.contact.projectTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-obsidian-900 text-slate-100">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-budget" className="text-xs font-mono font-bold text-slate-300 uppercase">
                    {t.contact.budgetLabel}
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-sm cursor-pointer"
                  >
                    {t.contact.budgetRanges.map((range) => (
                      <option key={range.value} value={range.value} className="bg-obsidian-900 text-slate-100">
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Description Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono font-bold text-slate-300 uppercase">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  maxLength={3000}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (validationErrors.message) setValidationErrors({ ...validationErrors, message: null });
                  }}
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl bg-obsidian-950 border text-slate-100 font-sans focus:border-gold-500 outline-none transition-colors text-sm resize-none ${
                    validationErrors.message ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {validationErrors.message && (
                  <span className="text-[11px] font-mono text-red-400">{validationErrors.message}</span>
                )}
              </div>

              {/* Privacy Notice Checkbox */}
              <div className="flex flex-col gap-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300 leading-snug">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={(e) => {
                      setFormData({ ...formData, privacyAccepted: e.target.checked });
                      if (validationErrors.privacy) setValidationErrors({ ...validationErrors, privacy: null });
                    }}
                    className="mt-0.5 w-4 h-4 rounded bg-obsidian-950 border-slate-700 text-gold-500 focus:ring-gold-400 focus:ring-offset-obsidian-950"
                  />
                  <span>
                    {t.contact.privacyNotice}{' '}
                    <button
                      type="button"
                      onClick={() => onOpenPrivacy && onOpenPrivacy()}
                      className="text-gold-400 hover:underline font-mono inline-flex items-center gap-1 cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 inline" />
                      <span>{t.contact.privacyLink}</span>
                    </button>
                  </span>
                </label>
                {validationErrors.privacy && (
                  <span className="text-[11px] font-mono text-red-400">{validationErrors.privacy}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-obsidian-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] active:scale-98 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-400 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-obsidian-950 border-t-transparent rounded-full animate-spin" />
                    <span>{t.contact.sendingBtn}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendBtn}</span>
                  </>
                )}
              </button>

              {/* Status Feedbacks */}
              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emeraldGlow/10 border border-emeraldGlow/30 text-emeraldGlow text-xs font-mono font-bold animate-fadeIn flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>{t.contact.formSuccess}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormStatus(null)}
                    className="px-3 py-1.5 rounded-lg bg-emeraldGlow/20 hover:bg-emeraldGlow/30 text-emerald-300 text-xs font-mono border border-emeraldGlow/40 cursor-pointer shrink-0 transition-colors"
                  >
                    {t.contact.sendAnotherBtn || "Invia un'altra richiesta"}
                  </button>
                </div>
              )}

              {formStatus === 'dev_notice' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono leading-relaxed animate-fadeIn flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-bold text-amber-400">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Localhost / Dev Environment Notice</span>
                  </div>
                  <p className="text-[11px] text-amber-200/90 font-sans font-normal">
                    {t.contact.formDevNotice}
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold animate-fadeIn flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{t.contact.formError}</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
