import { useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 z-30 w-full bg-neutral-950/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl justify-end px-4 py-3">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2.5 text-neutral-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute right-4 top-4 rounded-md border border-white/10 bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
          <nav className="absolute right-4 top-16 w-56 rounded-xl border border-white/10 bg-neutral-950/95 p-3 shadow-lg">
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-neutral-200 hover:bg-white/5"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-neutral-200 hover:bg-white/5"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-neutral-200 hover:bg-white/5"
                >
                  Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-neutral-200 hover:bg-white/5"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
