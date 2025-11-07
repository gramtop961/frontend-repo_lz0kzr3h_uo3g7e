import { MotionConfig, motion } from 'framer-motion';
import { Sparkles, Gauge, Handshake, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished UI Kit',
    desc: 'Thoughtful defaults, tasteful typography, and modern components out of the box.',
  },
  {
    icon: Gauge,
    title: 'Fast by default',
    desc: 'Optimized interactions and smooth animations tuned for performance.',
  },
  {
    icon: Handshake,
    title: 'Accessible & Inclusive',
    desc: 'Built with best practices so more people can enjoy your product.',
  },
  {
    icon: Shield,
    title: 'Production ready',
    desc: 'Clean structure that scales gracefully as your app grows.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Modern under the hood</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to ship a beautiful, high-performing web app foundation.
          </p>
        </div>

        <MotionConfig transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent hover:border-rose-200 hover:ring-rose-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </MotionConfig>
      </div>
    </section>
  );
}
