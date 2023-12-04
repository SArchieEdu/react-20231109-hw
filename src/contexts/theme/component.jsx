import { useState } from "react";
import { DEFAULT_THEME } from "./constants";
import { ThemeContext } from "./context";
import { useCallback } from "react";

export const ThemeProvider = ({ children, defaultTheme = DEFAULT_THEME }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
