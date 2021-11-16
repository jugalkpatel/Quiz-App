import { useEffect, useState } from "react";

import { Theme } from "../../common";
import { lightTheme, darkTheme } from "../../styles/themes.styles";

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const localTheme = localStorage?.getItem("liquiz-theme");

    return localTheme === "light" ? "light" : "dark";
  });

  const toggleTheme = (): void => {
    console.log("i am executing");
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage?.setItem("liquiz-theme", theme);
  }, [theme]);

  const themePack = theme === "light" ? lightTheme : darkTheme;

  console.log({ themePack });

  return [theme, themePack, toggleTheme] as const;
};

export { useDarkMode };
