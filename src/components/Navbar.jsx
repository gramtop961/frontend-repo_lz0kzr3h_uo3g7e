import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'} fixed inset-x-0 top-0 z-50 transition-all`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-500 to-rose-400 shadow ring-1 ring-rose-300/40" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Foundation</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-slate-700 hover:text-slate-900">Features</a>
          <a href="#showcase" className="text-sm text-slate-700 hover:text-slate-900">Showcase</a>
          <a href="#contact" className="text-sm text-slate-700 hover:text-slate-900">Contact</a>
          <a
            href="#get-started"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
