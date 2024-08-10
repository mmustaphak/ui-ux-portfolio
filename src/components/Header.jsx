import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

export default function Header() {
    return (
        <header>
            <nav className="px-6 py-4 flex justify-between">
                <Link to="/">
                    <img src={logo} alt="Mufteey Logo" />
                </Link>
                <img src={menu} alt="Open menu" />
            </nav>
        </header>
    )
}