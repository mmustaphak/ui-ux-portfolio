import { createContext } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {

    function randomTheme() {
        const themes = [
            {
                // black Theme
                background: "bg-[#151515]",
                text: "text-[#151515]",
                color: "#151515",
            },
            {
                // green Theme
                background: "bg-[#00A070]",
                text: "text-[#00A070]",
                color: "#00A070",
            },
            {
                // blue Theme
                background: "bg-[#000958]",
                text: "text-[#000958]",
                color: "#000958",
            },
        ]

        const randomIndex = Math.floor(Math.random() * 3)
        return themes[randomIndex]
    }

    return (
        <ThemeContext.Provider value={randomTheme()}>
            {children}
        </ThemeContext.Provider>
    )
}
