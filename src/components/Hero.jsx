import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

        <div className="relative z-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-rose-500" />
            Launch your modern foundation
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Build a modern, dynamic, user‑friendly web foundation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
            Clean aesthetics, smooth animations, and interactive 3D to delight users. Kickstart your next product with a beautiful baseline.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              Get Started
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              See it in action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
