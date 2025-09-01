import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Menu from "./components/Menu";
import DetailProject from "./sections/DetailProject";

export default function App() {
  const [hash, setHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const normalized = hash.replace(/^#\/?/, "").replace(/\?.*$/, "");
  const isDetail = /^projects\//i.test(normalized);

  // Force-scroll to the bottom of Selected Projects when landing on '#projects'
  useEffect(() => {
    const norm = window.location.hash
      .replace(/^#\/?/, "")
      .replace(/\?.*$/, "")
      .replace(/\/+$/, "");
    if (norm === "projects") {
      requestAnimationFrame(() => {
        const el = document.getElementById("projects");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "end" });
        } else {
          const root = document.scrollingElement || document.documentElement;
          window.scrollTo({ top: root.scrollHeight, behavior: "smooth" });
        }
      });
    }
  }, [hash]);
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-400">
      <Menu />
      <main className="mx-auto w-full max-w-6xl px-4 pt-20 pb-10">
        {isDetail ? (
          <DetailProject />
        ) : (
          <>
            <Hero />
            <About />
            <Stack />
            <Experience />
            <Projects />
          </>
        )}
      </main>
    </div>
  );
}
