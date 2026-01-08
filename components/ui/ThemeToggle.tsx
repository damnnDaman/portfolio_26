"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = stored ? stored === "dark" : prefersDark;
    setIsDark(nextDark);
    applyTheme(nextDark);
  }, []);

  const applyTheme = useCallback((dark: boolean) => {
    const root = document.documentElement;
    root.dataset.theme = dark ? "dark" : "light";
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-label="Toggle theme"
      aria-checked={isDark}
      onClick={toggle}
      onKeyDown={handleKey}
      className="relative inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-95 transition-transform duration-150"
      style={{ minWidth: 44, minHeight: 44 }}
    >
      <div
        className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer border border-white/15 shadow-inner overflow-hidden ${
          isDark ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-gradient-to-r from-amber-400 to-orange-500"
        }`}
      >
        <Sun
          className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 transition-all duration-300"
          color={isDark ? "rgba(255,255,255,0.7)" : "#F59E0B"}
          opacity={isDark ? 0.7 : 1}
        />
        <Moon
          className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 transition-all duration-300"
          color={isDark ? "#3B82F6" : "rgba(255,255,255,0.7)"}
          opacity={isDark ? 1 : 0.7}
        />

        <div
          className="absolute top-[2px] h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center"
          style={{
            left: isDark ? "2px" : "calc(100% - 30px)",
          }}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-blue-500 transition-transform duration-400 rotate-0" />
          ) : (
            <Sun className="h-4 w-4 text-amber-400 transition-transform duration-400 rotate-180" />
          )}
        </div>

        <div
          className={`absolute inset-0 rounded-full pointer-events-none transition-shadow duration-200 ${
            isDark
              ? "hover:shadow-[0_0_0_6px_rgba(59,130,246,0.25)]"
              : "hover:shadow-[0_0_0_6px_rgba(249,115,22,0.25)]"
          }`}
        />
      </div>
    </button>
  );
}
