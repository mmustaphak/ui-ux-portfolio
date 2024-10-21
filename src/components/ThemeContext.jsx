import { createContext } from "react";

export const ThemeContext = createContext('#151515');

export function ThemeProvider({ children }) {
  function randomTheme() {
    const themes = ["#151515", "#00A070", "#000958"]; // black, green and blue theme
    const randomIndex = Math.floor(Math.random() * 3);
    return themes[randomIndex];
  }

  return (
    <ThemeContext.Provider value={randomTheme()}>
      {children}
    </ThemeContext.Provider>
  );
}
