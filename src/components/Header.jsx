import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close-hamburger.svg";
import { useState } from "react";

export default function Header() {
  const [isHamburger, setIsHamburger] = useState(false);

  function handleToggle() {
    setIsHamburger((oldIsHamburger) => !oldIsHamburger);
  }

  return (
    <header>
      <nav className="px-6 py-4 flex justify-between items-center min-[480px]:pt-[2.5rem] lg:pt-[65px]">
        <Link className="" to="/">
          <img className="min-[480px]:w-14 lg:w-[85px]" src={logo} alt="Mufteey Logo" />
        </Link>

        <ul className="hidden justify-between self-center w-full max-w-64 min-[480px]:flex min-[550px]:max-w-[20rem] min-[550px]:text-lg md:max-w-[25rem] lg:max-w-[575px] lg:text-2xl">
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="services">Services</NavLink>
          </li>
          <li>
            <NavLink to="porfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
        </ul>

        <button className="hidden py-2 px-6 rounded-md font-medium text-white bg-black min-[480px]:block md:px-8 lg:py-[10px] lg:px-[58px]">Hire Me</button>

        <button className="min-[480px]:hidden" onClick={handleToggle}>
          <img src={menu} alt="Open menu" />
        </button>
      </nav>


      <nav className={`${isHamburger === false && "hidden"} fixed top-0 p-[30px] flex flex-col items-center w-full h-lvh bg-white`}>

        <button onClick={handleToggle} className="self-start">
          <img src={close} alt="Close " />
        </button>

        <ul className="mt-7">
          <NavLink to="about" onClick={handleToggle}>
            <li className="mx-auto w-fit text-center">About</li>
          </NavLink>
          <NavLink to="services" onClick={handleToggle}>
            <li className="mt-7 mx-auto w-fit text-center">Services</li>
          </NavLink>
          <NavLink to="portfolio" onClick={handleToggle}>
            <li className="mt-7 mx-auto w-fit text-center">Portfolio</li>
          </NavLink>
          <NavLink to="blog" onClick={handleToggle}>
            <li className="mt-7 mx-auto w-fit text-center">Blog</li>
          </NavLink>
        </ul>
      </nav>
    </header >
  )
}
