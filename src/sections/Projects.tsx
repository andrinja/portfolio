import ImageSlider from "../components/ImageSlider";
import { projects } from "../data/Projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-6 min-h-[100svh] flex flex-col justify-center"
    >
      <h2 className="mb-4 text-xl font-medium tracking-tight">
        Selected Projects
      </h2>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <article
            key={index}
            className="rounded-2xl border border-white/10 bg-neutral-900 p-5 shadow-sm"
          >
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm">{project.role}</p>
              </div>
              <ul className="flex flex-wrap gap-2 text-xs">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-white/10 bg-neutral-800 px-2.5 py-1 text-neutral-200"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mb-4 text-sm leading-6 text-neutral-300">
              {project.description}
            </p>
            <ImageSlider images={project.images} />
          </article>
        ))}
      </div>
    </section>
  );
}
