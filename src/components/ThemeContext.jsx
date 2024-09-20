import { createContext } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({children}){
    return(
        <ThemeContext.Provider value={'light'}>
            {children}
        </ThemeContext.Provider>
    )
}
