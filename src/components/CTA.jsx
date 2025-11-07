export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-14 text-center text-white shadow-xl">
        <h3 className="text-2xl font-semibold sm:text-3xl">Ready to build your foundation?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-300">
          Start with a clean, modern baseline and ship faster with confidence.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100">
            Contact Us
          </a>
          <a href="#features" className="rounded-md bg-rose-500 px-5 py-3 text-sm font-medium text-white hover:bg-rose-400">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
