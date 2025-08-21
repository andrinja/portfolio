export default function About() {
  return (
    <section id="about" className="mb-14 min-h-[100svh] flex items-center">
      <div className="w-full">
        <h2 className="max-w-4xl text-4xl font-thin tracking-tight text-neutral-100 leading-tight md:text-6xl md:leading-none">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </h2>

        <div className="mt-8">
          <p className="text-xs tracking-wide">This is me.</p>
          <div className="mt-2 h-px w-full bg-white/10"></div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-6">
            <div className="text-5xl font-medium text-neutral-100">
              Hi, I'm Andra.
            </div>
            <div>
              <p className="text-sm leading-6 text-neutral-300">
                I'm a frontend web developer dedicated to turning ideas into
                creative solutions. I specialize in creating seamless and
                intuitive user experiences.
              </p>
              <p className="mt-4 text-sm leading-6 text-neutral-300">
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
