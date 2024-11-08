import { createContext, useState } from "react";

export const ThemeContext = createContext('#151515');

export function ThemeProvider({ children }) {

  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)

  const themes = ["#151515", "#00A070", "#000958"]; // black, green and blue theme

  setInterval(()=>{
    setCurrentThemeIndex(oldIndex => {
      const nextIndex = (oldIndex + 1) % themes.length
      return nextIndex
    })
  },5000)



  return (
    <ThemeContext.Provider value={themes[currentThemeIndex]}>
      {children}
    </ThemeContext.Provider>
  );
}
