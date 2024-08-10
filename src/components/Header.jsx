import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close-hamburger.svg"

export default function Header() {

    return (
        <header>
            <nav className="px-6 py-4 flex justify-between">
                <Link to="/">
                    <img src={logo} alt="Mufteey Logo" />
                </Link>
                <img src={menu} alt="Open menu" />
            </nav>

            <nav>
                <button>
                    <img src={close} alt="Close " />
                </button>
                <ul>
                    <NavLink to="about">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="services">
                        <li>Services</li>
                    </NavLink>
                    <NavLink to="portfolio">
                        <li>Portfolio</li>
                    </NavLink>
                    <NavLink to="blog">
                        <li>Blog</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}