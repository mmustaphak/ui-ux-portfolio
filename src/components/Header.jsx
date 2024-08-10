import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close-hamburger.svg"
import { useState } from "react"

export default function Header() {

    const [isHamburger, setIsHamburger] = useState(false)

    function handleToggle() {
        setIsHamburger(oldIsHamburger => !oldIsHamburger)
    }


    return (
        <header>
            <nav className="px-6 py-4 flex justify-between">
                <Link to="/">
                    <img src={logo} alt="Mufteey Logo" />
                </Link>

                <button onClick={handleToggle}>
                    <img src={menu} alt="Open menu" />
                </button>
            </nav>

            <nav className={`${isHamburger && "hidden"} fixed top-0 p-[30px] flex flex-col items-center w-full h-lvh bg-white`}>

                <button onClick={handleToggle} className="self-start">
                    <img src={close} alt="Close " />
                </button>

                <ul className="mt-7">
                    <NavLink to="about">
                        <li className="mx-auto w-fit text-center">About</li>
                    </NavLink>
                    <NavLink to="services">
                        <li className="mt-7 mx-auto w-fit text-center">Services</li>
                    </NavLink>
                    <NavLink to="portfolio">
                        <li className="mt-7 mx-auto w-fit text-center">Portfolio</li>
                    </NavLink>
                    <NavLink to="blog">
                        <li className="mt-7 mx-auto w-fit text-center">Blog</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}