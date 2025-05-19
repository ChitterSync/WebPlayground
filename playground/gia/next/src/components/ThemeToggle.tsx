"use client";

import React, { useState } from "react";

interface ThemeToggleProps {
  initialTheme?: "light" | "dark";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ initialTheme = "dark" }) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || initialTheme;
    }
    return initialTheme;
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="ml-4 px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark/light mode"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
