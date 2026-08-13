import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2, Cpu } from 'lucide-react';
import { soundFX } from '../utils/sound';

export default function TerminalLab({ t, lang = 'it' }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: t.terminal.welcomeMsg }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef(null);
  const terminalBoxRef = useRef(null);

  useEffect(() => {
    // Only scroll the internal terminal container, NOT the window
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
  • bio        : Informazioni su Alessandro Barbato
  • skills     : Lista competenze tecniche e linguaggi
  • projects   : Dettaglio progetti sviluppati
  • ai         : Visione sull'uso dell'Intelligenza Artificiale
  • contact    : Contatti diretti (Email / GitHub)
  • hire       : Perché scegliere Alessandro nel tuo team
  • clear      : Pulisce la schermata del terminale`
            : `Available commands:
  • help       : Display available commands
  • bio        : Information about Alessandro Barbato
  • skills     : Technical skills & core languages
  • projects   : View developed projects
  • ai         : Vision on AI implementation
  • contact    : Direct contact details (Email / GitHub)
  • hire       : Why hire Alessandro for your team
  • clear      : Clear terminal screen`
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'response',
          text: lang === 'it'
            ? `[ALESSANDRO BARBATO]
• Età: 19 anni | Salerno, Italia
• Email: al3xx.main1@gmail.com
• Università: Università degli Studi di Salerno (UNISA) - Laurea Prevista 2028
• Diploma: Istituto Tecnico Basilio Focaccia - Voto: 96 / 100
• Lingue: Italiano (Madrelingua) | Inglese (Fluente - Certificato Cambridge B2)
• Tratti: Veloce ad imparare, eccellente gestione dello stress, rispetto rigoroso delle deadlines.`
            : `[ALESSANDRO BARBATO]
• Age: 19 | Salerno, Italy
• Email: al3xx.main1@gmail.com
• University: Università degli Studi di Salerno (UNISA) - Degree expected 2028
• Diploma: Istituto Tecnico Basilio Focaccia - Grade: 96 / 100
• Languages: Italian (Native) | English (Fluent - Cambridge B2 Certified)
• Traits: Fast learner, high stress tolerance, strict deadline adherence.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: `[STACK TECNICO]
• Core Languages: C, Java, MySQL / SQL, HTML5, CSS3, JavaScript (ES6+)
• Modern Stack: Node.js (in approfondimento), React, Tailwind CSS, Bootstrap, Vite, Git/GitHub
• Certificazioni: Cambridge English B2 Certified
• Soft Skills: Rapid Learning, Stress Resilience, Problem Solving, Deadline Adherence.`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: `[PROGETTI REALIZZATI]
1. Criscemunno Ristorante (Web App Ristorazione)
   • Live: https://criscemunno.netlify.app/
   • Stack: HTML5, CSS3, JavaScript, Netlify

2. TocToc Salerno (Menu Digitale & Web App)
   • Live: https://toctocsalerno.netlify.app/
   • Stack: HTML5, CSS3, JavaScript, Netlify`
        });
        break;

      case 'ai':
        newHistory.push({
          type: 'response',
          text: lang === 'it'
            ? `[AI AUGMENTATION STRATEGY]
L'IA non sostituisce le mie competenze, le potenzia. Padroneggio i linguaggi tradizionali e la logica di programmazione, ed utilizzo modelli AI per:
- Velocizzare la prototipazione e il boilerplating
- Effettuare code-review e trovare bug al volo
- Scalare l'apprendimento di nuovi framework in tempo record`
            : `[AI AUGMENTATION STRATEGY]
AI does not replace my coding skills, it amplifies them. I hold solid CS fundamentals while leveraging AI models to:
- Accelerate prototyping and boilerplate setup
- Perform real-time code reviews & bug hunting
- Master new tech stacks in record time`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `[CONTATTI]
• Email: al3xx.main1@gmail.com
• GitHub: https://github.com/Al3xxDev
• Location: Salerno, Campania, Italia`
        });
        break;

      case 'hire':
        newHistory.push({
          type: 'response',
          text: lang === 'it'
            ? `[WHY HIRE ALESSANDRO]
Basi solide in C, Java, MySQL e Web Dev + Inglese B2 Cambridge + Devoto ad estendere lo stack a qualsiasi esigenza il lavoro richieda.
Affiancato i primi tempi da un Senior Dev, assimilo lo stack aziendale in tempi record!`
            : `[WHY HIRE ALESSANDRO]
Solid core in C, Java, MySQL & Web Dev + Cambridge B2 English + Devoted to extending tech stack to any job demand.
Guided during initial onboarding, I master company stacks in record time!`
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
    <section id="terminal" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full glass-panel border-gold-500/30 text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.terminal.title}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100">
            {t.terminal.subtitle}
          </h2>
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
                ai-terminal v1.0.0
              </span>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setHistory([{ type: 'system', text: t.terminal.welcomeMsg }]);
              }}
              className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-gold-400 transition-colors"
              title="Clear / Reset"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Console Output */}
          <div
            ref={terminalBoxRef}
            className="p-6 h-80 sm:h-96 overflow-y-auto flex flex-col gap-3 bg-obsidian-950/90 text-slate-200"
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
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Line */}
          <form
            onSubmit={handleCommand}
            className="px-6 py-4 bg-obsidian-900/80 border-t border-slate-800 flex items-center gap-3"
          >
            <span className="text-gold-400 font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.terminal.placeholder}
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none font-mono text-xs sm:text-sm"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-gold-500/20 text-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-all"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
