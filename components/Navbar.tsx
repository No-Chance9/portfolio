"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
      return;
    }
    if (stored === "light") {
      setIsDark(false);
      return;
    }
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    if (isDark === null) return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/70">
      <nav className="container-soft flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold text-slate-900 dark:text-slate-100">
          Armel.dev
        </Link>
        <div className="flex items-center gap-2">
          <ul className="flex gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-2xl px-2 py-1 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80 ${
                  pathname === l.href
                    ? "bg-gray-900 text-white hover:bg-gray-900 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-100"
                    : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          </ul>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
            title={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/80"
          >
            {isDark ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M5 5l1.5 1.5" />
                <path d="M17.5 17.5L19 19" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M5 19l1.5-1.5" />
                <path d="M17.5 6.5L19 5" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
