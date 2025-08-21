import Hero from "./sections/Hero";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Menu from "./components/Menu";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-400">
      <Menu />
      <main className="mx-auto w-full max-w-6xl px-4 pt-20 pb-10">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
