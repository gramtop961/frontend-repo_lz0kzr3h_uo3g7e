import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-500 to-rose-400 ring-1 ring-rose-300/40" />
            <span className="text-sm font-semibold text-slate-900">Foundation</span>
          </div>
          <p className="text-center text-xs text-slate-500 sm:text-left">© {new Date().getFullYear()} Foundation — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
