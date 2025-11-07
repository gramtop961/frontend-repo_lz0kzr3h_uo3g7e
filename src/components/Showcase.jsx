import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Smooth animations',
    desc: 'Micro-interactions that feel natural and responsive.',
  },
  {
    title: 'Minimalist aesthetic',
    desc: 'Whitespace, balance, and clarity at the forefront.',
  },
  {
    title: 'Interactive 3D',
    desc: 'Bring moments of delight using lightweight 3D scenes.',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">What you get</h2>
          <p className="mt-3 text-slate-600">A foundation that looks great and feels even better.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-rose-50/60 to-transparent" />
              <h3 className="relative z-10 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="relative z-10 mt-1 text-sm text-slate-600">{c.desc}</p>
              <motion.div
                className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-rose-100"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
