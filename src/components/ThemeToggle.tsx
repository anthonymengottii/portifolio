"use client";

import { useEffect, useState } from "react";
import { ToggleButton } from "@once-ui-system/core";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Roda só no client
  useEffect(() => {
    setMounted(true);

    // Exemplo comum: theme salvo no localStorage
    const storedTheme = window.localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.dataset.theme = storedTheme;
    }
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  function toggleTheme() {
    const newTheme = nextTheme;

    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    window.localStorage.setItem("theme", newTheme);
  }

  return (
    <ToggleButton
      prefixIcon={isDark ? "light" : "dark"}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
}
