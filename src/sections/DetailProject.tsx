import { useEffect, useState } from "react";
import { projects } from "../data/Projects";
import { FiArrowLeft } from "react-icons/fi";

export default function DetailProject() {
  const [hash, setHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  // Normalize hash to support variants like '#/projects/slug', '#projects/slug/', '#projects/slug?x=y'
  const normalized = hash
    .replace(/^#\/?/, "")
    .replace(/\?.*$/, "")
    .replace(/\/+$/, "");
  const match = normalized.match(/^projects\/(.+)$/i);
  const rawSlug = match ? decodeURIComponent(match[1]) : null;
  const slug = rawSlug ? rawSlug.replace(/\/+$/, "") : null;
  const detailProject = slug
    ? projects.find((p) => slugify(p.title) === slug) ?? null
    : null;

  const handleBack = () => {
    // Navigate to projects without auto-scrolling here; App can conditionally render sections
    window.location.hash = "#projects";
    // Optional: if you still want to scroll, do it only if already on the home view
    // setTimeout(() => {
    //   const el = document.getElementById("projects");
    //   if (el) el.scrollIntoView({ behavior: "smooth", block: "end" });
    // }, 0);
  };
  if (!detailProject) return null;

  // Ensure no auto-scroll to projects area when opening a detail page
  useEffect(() => {
    const html = document.documentElement as HTMLElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0 });
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prev;
    });
  }, [detailProject]);

  return (
    <section className="mb-16">
      <div className="mx-auto w-full max-w-3xl">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition"
        >
          <FiArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <h1 className="mt-6 text-center text-5xl font-extrabold tracking-tight text-white">
          {detailProject.title}
        </h1>

        <div className="mt-8 grid gap-8">
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400">
              Year
            </p>
            <p className="text-neutral-200 mt-1">{detailProject.year ?? ""}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400">
              Tech & Technique
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-300">
              {detailProject.tools.map((tool, i) => (
                <span key={`${tool}-${i}`} className="inline-flex items-center">
                  {i > 0 && <span className="mx-1 text-neutral-500">•</span>}
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400">
              Description
            </p>
            <p className="mt-2 max-w-3xl text-neutral-300">
              {detailProject.description}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400">
              Key Features
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-300">
              {(detailProject.keyFeatures ?? []).map((f, i) => (
                <li key={`kf-${i}`}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400">
              Technical Highlights
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-neutral-300">
              {(detailProject.technicalHighlights ?? []).map((h, i) => (
                <li key={`th-${i}`}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400">
              My Role
            </p>
            <p className="mt-2 max-w-3xl text-neutral-300">
              {detailProject.myRole ?? ""}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-6 mx-auto w-full max-w-3xl">
        {detailProject.images.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={`${detailProject.title} screenshot ${i + 1}`}
            className="w-full rounded-xl border border-white/10 shadow"
          />
        ))}
      </div>
    </section>
  );
}
