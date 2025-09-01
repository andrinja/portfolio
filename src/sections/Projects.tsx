import FlowerIcon from "../components/FlowerIcon";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/Projects";

export default function Projects() {
  const slugify = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  return (
    <section id="projects" className="mb-6 pb-24 md:pb-32">
      <div className="flex items-center gap-2">
        <FlowerIcon />
        <h2 className="text-xl font-medium tracking-tight uppercase">
          Selected Projects
        </h2>
      </div>
      <div className="relative mt-6">
        <ul className="divide-y divide-white/10">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group relative flex items-center justify-between gap-4 pr-5 py-4"
            >
              <div className="min-w-0">
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-3">
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 row-span-2">
                    _{String(index + 1).padStart(2, "0")}.
                  </span>
                  <div className="flex items-baseline gap-3 col-start-2">
                    <a
                      href={`/#projects/${slugify(project.title)}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const html = document.documentElement;
                        const prev = html.style.scrollBehavior;
                        html.style.scrollBehavior = "auto";
                        window.location.hash = `#projects/${slugify(
                          project.title
                        )}`;
                        requestAnimationFrame(() => {
                          html.style.scrollBehavior = prev;
                        });
                      }}
                    >
                      <p className="text-5xl my-2 font-semibold tracking-tight text-neutral-100 transition group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400">
                        {project.title}
                      </p>
                    </a>
                    {/* Open in new page icon (next to title) */}
                    <a
                      href={`/#projects/${slugify(project.title)}`}
                      aria-label={`Open ${project.title}`}
                      className="inline-flex items-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100"
                      onClick={(e) => {
                        e.preventDefault();
                        const html = document.documentElement;
                        const prev = html.style.scrollBehavior;
                        html.style.scrollBehavior = "auto";
                        window.location.hash = `#projects/${slugify(
                          project.title
                        )}`;
                        requestAnimationFrame(() => {
                          html.style.scrollBehavior = prev;
                        });
                      }}
                    >
                      <FiExternalLink className="h-10 w-10 text-neutral-300 hover:text-white" />
                    </a>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-300 col-start-2">
                    {project.tools.slice(0, 3).map((tool, i) => (
                      <span key={tool} className="inline-flex items-center">
                        {i > 0 && (
                          <span className="mx-1 text-neutral-500">•</span>
                        )}
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.images?.[0] && (
                <img
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  className="pointer-events-none absolute right-0 top-1/2 hidden w-80 lg:w-[28rem] -translate-y-1/2 rounded-xl border border-white/10 shadow-xl opacity-0 transition will-change-transform z-10 md:block md:group-hover:opacity-100 md:group-hover:-translate-x-2"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
