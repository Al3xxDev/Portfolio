import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2 } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function TerminalLab({ t, lang = 'it' }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: t.terminal.welcomeMsg }
  ]);
  const terminalBoxRef = useRef(null);

  useEffect(() => {
    if (terminalBoxRef.current) {
      terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    soundFX.playClick();

    const newHistory = [...history, { type: 'command', text: `$ ${cmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: lang === 'it'
            ? `Comandi disponibili:
  • help       : Mostra questa guida dei comandi
  • services   : Piani e servizi di sviluppo web (Starter, Business, Premium)
  • projects   : Dettaglio progetti e concept (Criscemunno, TocToc)
  • bio        : Informazioni su Alessandro Barbato (UNISA, Focaccia, B2)
  • skills     : Stack tecnologico e linguaggi verificati
  • contact    : Informazioni per richiedere un preventivo o collaborare
  • clear      : Pulisce la schermata del terminale`
            : `Available commands:
  • help       : Display available commands
  • services   : Web development service tiers (Starter, Business, Premium)
  • projects   : Featured projects & concepts (Criscemunno, TocToc)
  • bio        : Information about Alessandro Barbato (UNISA, Focaccia, B2)
  • skills     : Verified tech stack & core languages
  • contact    : Direct contact details and quote requests
  • clear      : Clear terminal screen`
        });
        break;

      case 'services':
        newHistory.push({
          type: 'response',
          text: lang === 'it'
            ? `[SERVIZI DI SVILUPPO WEB]
1. STARTER (Landing Page) — a partire da €299
   • Presenza essenziale, veloce e focalizzata su conversioni e contatti
   • Responsive 100%, modulo contatti, pulsante WhatsApp, SEO base

2. BUSINESS (Sito Web Professionale) — a partire da €599 [CONSIGLIATO]
   • Ideale per ristoranti, pizzerie, cocktail bar e PMI
   • Menu digitale interattivo, galleria fotografica, Google Maps, SEO locale

3. PREMIUM (Piattaforma Avanzata) — su misura
   • Componenti UI avanzati, integrazioni terze parti, massime performance (Lighthouse 95+)`
            : `[WEB DEVELOPMENT SERVICES]
1. STARTER (Landing Page) — starting from €299
   • Swift, conversion-focused online presence for local businesses & pros
   • 100% responsive, contact form, WhatsApp button, baseline SEO

2. BUSINESS (Professional Website) — starting from €599 [RECOMMENDED]
   • Ideal for restaurants, pizzerias, cocktail bars, and SMBs
   • Interactive digital menu, photo gallery, Google Maps, local SEO

3. PREMIUM (Advanced Platform) — custom quote
   • Complex UI interactions, external API integrations, top performance (Lighthouse 95+)`
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'response',
          text: lang === 'it'
            ? `[ALESSANDRO BARBATO]
• Età: 20 anni | Salerno, Italia
• Email: al3xx.main1@gmail.com
• Ruolo: Web Developer & Studente di Informatica UNISA
• Percorso: Laurea in Informatica UNISA (prevista 2028)
• Diploma: Istituto Tecnico Basilio Focaccia — Voto: 96 / 100
• Lingue: Italiano (Madrelingua) | Inglese (Certificato Cambridge B2)
• Metodo: Sviluppo rigoroso assistito da Google Antigravity & AI per massima velocità e qualità.`
            : `[ALESSANDRO BARBATO]
• Age: 20 | Salerno, Italy
• Email: al3xx.main1@gmail.com
• Role: Web Developer & CS Student at UNISA
• Education: Bachelor's in Computer Science UNISA (Expected 2028)
• High School Diploma: Istituto Tecnico Basilio Focaccia — Grade: 96 / 100
• Languages: Italian (Native) | English (Cambridge B2 Certified)
• Method: Rigorous engineering powered by Google Antigravity & AI workflows.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: `[STACK TECNOLOGICO VERIFICATO]
• Frontend: React, Tailwind CSS, JavaScript (ES6+), HTML5 Semantico, CSS3, Bootstrap
• Backend & DB: Node.js, MySQL / Relational SQL, C, Java
• Tooling: Vite, Git & GitHub, Netlify, Google Antigravity
• Certificazioni: Cambridge English Assessment B2 Certified`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: `[CONCEPT & PORTFOLIO]
1. Criscemunno (Ristorante & Pizzeria — Concept Web)
   • Live: https://criscemunno.netlify.app/
   • Stack: HTML5, CSS3, JavaScript, Responsive UX, Netlify
   • Focus: Menu digitale, atmosfera ristorante, prenotazioni rapide

2. TocToc Salerno (Cocktail Bar & Nightlife — Concept Web)
   • Live: https://toctocsalerno.netlify.app/
   • Stack: HTML5, CSS3, JavaScript, UI/UX Design, Netlify
   • Focus: Drink list notturna, atmosfera serale, prenotazione tavoli`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `[CONTATTI & PREVENTIVI]
• Email: al3xx.main1@gmail.com
• GitHub: https://github.com/Al3xxDev
• Sede: Salerno, Campania, Italia
• Per richiedere un preventivo gratuito, usa il modulo contatti in fondo alla pagina.`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: lang === 'it'
            ? `Comando non riconosciuto: '${cmd}'. Digita 'help' per vedere la lista comandi.`
            : `Command not recognized: '${cmd}'. Type 'help' to view commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full glass-panel border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.terminal.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100">
            {t.terminal.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            {t.terminal.subtitle}
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="glass-panel rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col font-mono text-xs sm:text-sm">
          
          {/* Top Bar Controls */}
          <div className="bg-obsidian-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs text-slate-400 font-mono">
                al3xxdev-terminal v2.0.0
              </span>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setHistory([{ type: 'system', text: t.terminal.welcomeMsg }]);
              }}
              className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-gold-400 transition-colors focus-visible:ring-2 focus-visible:ring-gold-400"
              title="Reset terminal"
              aria-label="Pulisci schermata terminale"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Console Output */}
          <div
            ref={terminalBoxRef}
            tabIndex={0}
            role="region"
            aria-label="Output terminale interattivo"
            className="p-6 h-80 sm:h-96 overflow-y-auto flex flex-col gap-3 bg-obsidian-950/90 text-slate-200 focus:outline-none"
          >
            {history.map((item, index) => (
              <div
                key={index}
                className={`whitespace-pre-wrap leading-relaxed animate-fadeIn ${
                  item.type === 'command'
                    ? 'text-gold-400 font-bold'
                    : item.type === 'error'
                    ? 'text-red-400'
                    : item.type === 'system'
                    ? 'text-emeraldGlow font-semibold'
                    : 'text-slate-300'
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Terminal Input Line */}
          <form
            onSubmit={handleCommand}
            className="px-6 py-4 bg-obsidian-900/80 border-t border-slate-800 flex items-center gap-3"
          >
            <span className="text-gold-400 font-bold" aria-hidden="true">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.terminal.placeholder}
              aria-label="Riga di comando del terminale"
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none font-mono text-xs sm:text-sm"
            />
            <button
              type="submit"
              aria-label="Esegui comando"
              className="p-2 rounded-lg bg-gold-500/20 text-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-all focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
