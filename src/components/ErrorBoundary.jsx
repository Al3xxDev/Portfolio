import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="glass-panel-gold rounded-3xl p-8 max-w-lg border-gold-500/40 flex flex-col gap-4">
            <h2 className="text-2xl font-display font-bold text-gold-400">
              Alessandro Barbato — Portfolio
            </h2>
            <p className="text-slate-300 text-sm">
              Si è verificato un piccolo errore di caricamento. Ricarica la pagina.
            </p>
            <pre className="text-xs font-mono text-red-400 bg-obsidian-900 p-3 rounded-xl overflow-x-auto text-left">
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full bg-gold-500 text-obsidian-950 font-bold text-xs uppercase font-mono tracking-wider cursor-pointer"
            >
              Ricarica Pagina
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
