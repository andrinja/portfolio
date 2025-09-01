import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiDocker,
  SiAmazon,
  SiStorybook,
  SiJira,
  SiBitbucket,
  SiFigma,
  SiLaravel,
  SiPhp,
  SiCypress,
  SiJest,
  SiAngular,
  SiDotnet,
} from "react-icons/si";
import FlowerIcon from "../components/FlowerIcon";

export default function Stack() {
  return (
    <section id="stack" className="mb-16">
      <div className="flex items-center gap-2">
        <FlowerIcon />
        <h2 className="text-xl font-medium tracking-tight uppercase">
          My Stack
        </h2>
      </div>
      <div className="mt-8 space-y-8">
        {[
          {
            title: "Frontend",
            items: [
              { label: "JavaScript", Icon: SiJavascript },
              { label: "TypeScript", Icon: SiTypescript },
              { label: "React", Icon: SiReact },
              { label: "Next.js", Icon: SiNextdotjs },
              { label: "Redux", Icon: SiRedux },
              { label: "Tailwind CSS", Icon: SiTailwindcss },
              { label: "GSAP", Icon: SiGreensock },
              { label: "Framer Motion", Icon: SiFramer },
              { label: "Sass", Icon: SiSass },
              { label: "Bootstrap", Icon: SiBootstrap },
              { label: "Angular", Icon: SiAngular },
            ],
          },
          {
            title: "Backend",
            items: [
              { label: "Node.js", Icon: SiNodedotjs },
              { label: "NestJS", Icon: SiNestjs },
              { label: "Express", Icon: SiExpress },
              { label: "Laravel", Icon: SiLaravel },
              { label: "PHP", Icon: SiPhp },
              { label: ".NET", Icon: SiDotnet },
            ],
          },
          {
            title: "Database",
            items: [
              { label: "MySQL", Icon: SiMysql },
              { label: "PostgreSQL", Icon: SiPostgresql },
              { label: "MongoDB", Icon: SiMongodb },
              { label: "Prisma", Icon: SiPrisma },
            ],
          },
          {
            title: "Tools",
            items: [
              { label: "Git", Icon: SiGit },
              { label: "Docker", Icon: SiDocker },
              { label: "Storybook", Icon: SiStorybook },
              { label: "Jira", Icon: SiJira },
              { label: "Bitbucket", Icon: SiBitbucket },
              { label: "Figma", Icon: SiFigma },
              { label: "Cypress", Icon: SiCypress },
              { label: "Jest", Icon: SiJest },
              { label: "AWS", Icon: SiAmazon },
            ],
          },
        ].map(({ title, items }) => (
          <div
            key={title}
            className="grid grid-cols-1 items-start gap-4 md:grid-cols-[minmax(12rem,20rem)_1fr] md:gap-10"
          >
            <p className="uppercase font-bold tracking-wide text-3xl md:text-5xl leading-tight break-words">
              {title}
            </p>
            <div className="min-w-0 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {items.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2 px-2 py-1">
                  <Icon className="h-8 w-8 text-neutral-200" />
                  <span className="text-2xl text-neutral-200">{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
