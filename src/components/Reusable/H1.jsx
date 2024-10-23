import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

export default function H1({ children }) {
    const theme = useContext(ThemeContext)
    return (
        <h1
            style={{color: theme}}
            className="font-semibold md:text-2xl lg:text-[2.5rem]"
        >
            {children}
        </h1>
    )
}