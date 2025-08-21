export default function Hero() {
  return (
    <section
      id="home"
      className="relative mb-14 min-h-[calc(100svh-5rem)] flex flex-col justify-center md:pb-10"
    >
      <h1 className="font-semibold uppercase leading-[0.9] tracking-tight text-5xl sm:text-7xl md:text-8xl">
        <span className="block text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          FRONTEND
        </span>
        <span className="block text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-neutral-400 to-white">
          DEVELOPER
        </span>
      </h1>
      <p className="mt-3 max-w-2xl">
        I craft modern UIs with React and TypeScript, translating designs into
        pixel-perfect, accessible, and scalable interfaces.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 p-[2px] shadow-sm transition hover:from-emerald-300 hover:to-cyan-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
        >
          <span className="rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white">
            View Projects
          </span>
        </a>
      </div>

      <div className="mt-8 ml-auto grid grid-cols-3 gap-3 sm:max-w-lg md:absolute md:bottom-6 md:right-4 md:mt-0 md:grid-cols-1 md:justify-items-end">
        <div className="text-right">
          <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            7+
          </div>
          <div className="text-xs">Years Experience</div>
        </div>
        <div className="text-right">
          <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            7+
          </div>
          <div className="text-xs">Completed Projects</div>
        </div>
        <div className="text-right">
          <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            10k+
          </div>
          <div className="text-xs">Hours Worked</div>
        </div>
      </div>
    </section>
  );
}
