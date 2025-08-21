import { GiSunflower } from "react-icons/gi";

export default function Experience() {
  return (
    <section id="experience" className="mb-12 py-12">
      <div className="w-full">
        <div className="flex items-center gap-2">
          <GiSunflower
            className="h-5 w-5 text-neutral-200 animate-spin"
            style={{ animationDuration: "7000ms" }}
            aria-hidden
          />
          <h2 className="text-xl font-medium tracking-tight uppercase">
            My Experience
          </h2>
        </div>
        <ul className="mt-6 space-y-8 md:space-y-12">
          {[
            {
              company: "Moodagent A/S",
              role: "Software Engineer (Frontend)",
              dates: "2020 - 2025",
              primary: true,
            },
            {
              company: "Ditaso A/S",
              role: "Full Stack Developer",
              dates: "2019 - 2020",
            },
            {
              company: "Iportalen ApS",
              role: "Frontend Engineer",
              dates: "2017 - 2019",
            },
          ].map(({ company, role, dates, primary }) => (
            <li key={company} className="py-5 pr-5">
              <div className="flex flex-col items-start gap-1">
                <div>
                  <p className="text-xl">{company}</p>
                  <p
                    className={`text-5xl font-bold my-2 ${
                      primary ? "text-neutral-300" : "text-neutral-100"
                    }`}
                  >
                    {role}
                  </p>
                </div>
                <p className="text-lg">{dates}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
