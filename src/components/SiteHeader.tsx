"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/catalog", label: "Каталог" },
  { href: "/profile", label: "Профиль" },
  { href: "/feed", label: "Лента" },
  { href: "/settings", label: "Настройки" },
];

export default function SiteHeader() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("bk-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("bk-theme", nextTheme);
  };

  return (
    <header className="mx-auto w-full max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pb-10 sm:pt-10">
      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--card)] text-xl shadow-[var(--shadow)]">
            BK
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              BookKatalog
            </p>
            <p className="font-[var(--font-playfair)] text-lg font-semibold text-[var(--fg)]">
              Личный читательский профиль
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="hover:text-[var(--fg)]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <button
            onClick={toggleTheme}
            className="w-full rounded-full border border-[var(--line)] px-4 py-2 text-center text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition hover:text-[var(--fg)] sm:w-auto"
            type="button"
          >
            {theme === "light" ? "Темная" : "Светлая"} тема
          </button>
          <Link
            href="/catalog"
            className="w-full rounded-full bg-[var(--fg)] px-5 py-2 text-center text-sm font-semibold text-[var(--bg)] shadow-[var(--shadow)] sm:w-auto"
          >
            Начать
          </Link>
        </div>
      </div>
      <nav className="mt-6 grid w-full grid-cols-2 gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] lg:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className="rounded-full border border-[var(--line)] px-3 py-2 text-center hover:text-[var(--fg)]"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
