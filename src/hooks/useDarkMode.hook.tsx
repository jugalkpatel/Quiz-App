import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export type ThemeProps = {
  mode: Theme;
  setMode: () => void;
};

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = localStorage?.getItem("liquiz-theme");

    return localTheme === "light" ? "light" : "dark";
  });

  const toggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage?.setItem("liquiz-theme", theme);
  }, [theme]);

  return [theme, toggleTheme] as const;
};

export { useDarkMode };
