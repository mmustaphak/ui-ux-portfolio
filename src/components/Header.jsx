import { Link, NavLink } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close-hamburger.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const [isHamburger, setIsHamburger] = useState(false);

  function handleToggle() {
    setIsHamburger((oldIsHamburger) => !oldIsHamburger);
  }

  const theme = useContext(ThemeContext);

  return (
    <header>
      <nav className="px-6 py-4 flex justify-between items-center min-[500px]:pt-[2.5rem] min-[500px]:pb-10 lg:pt-[65px]">
        <Link to="/">
          <svg
            className="min-w-[39px] min-h-[27px] min-[500px]:w-14 lg:w-[85px]"
            viewBox="0 0 39 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4601 23.9451L12.3856 25.6643C12.0222 26.2457 12.4402 27 13.1259 27H28.3755C28.6861 27 28.9732 26.8351 29.1296 26.5669L30.1325 24.8477C30.472 24.2657 30.0522 23.5348 29.3784 23.5348H14.2004C13.8994 23.5348 13.6196 23.6898 13.4601 23.9451Z"
              fill="#D4DDE1"
            />
            <path
              d="M9.45672 27H7.42896C6.7576 27 6.33748 26.2738 6.67214 25.6918L15.1311 10.9805C15.4656 10.3989 16.3039 10.3962 16.642 10.9758L17.6496 12.7031C17.8069 12.9728 17.8082 13.306 17.653 13.5769L10.2142 26.5609C10.0587 26.8325 9.76966 27 9.45672 27Z"
              fill={theme}
            />
            <path
              d="M37.4193 19.6257L36.4881 21.3449C36.3355 21.6266 36.0408 21.8021 35.7204 21.8021H16.1928C15.5313 21.8021 15.1101 21.095 15.4252 20.5133L16.3564 18.7941C16.509 18.5124 16.8036 18.3369 17.124 18.3369H36.6517C37.3132 18.3369 37.7344 19.044 37.4193 19.6257Z"
              fill={theme}
            />
            <path
              d="M3.68824 27H1.51644C0.843426 27 0.423513 26.2706 0.761456 25.6886L12.2372 5.92474C12.5743 5.34427 13.413 5.34544 13.7484 5.92684L14.9061 7.93344C15.0633 8.2059 15.0617 8.54185 14.9021 8.81286L4.44042 26.5701C4.28349 26.8365 3.99739 27 3.68824 27Z"
              fill="#D4DDE1"
            />
            <path
              d="M22.5958 2.02138H20.5653C19.8945 2.02138 19.4743 2.74632 19.8077 3.32833L27.3263 16.4539C27.4818 16.7255 27.7709 16.893 28.0838 16.893H30.1144C30.7851 16.893 31.2053 16.1681 30.8719 15.5861L23.3534 2.46047C23.1978 2.1889 22.9088 2.02138 22.5958 2.02138Z"
              fill="#D4DDE1"
            />
            <path
              d="M15.8059 0H13.357C12.6838 0 12.2639 0.729695 12.6022 1.31171L21.4056 16.4587C21.5619 16.7276 21.8494 16.8931 22.1604 16.8931H24.3504C25.0186 16.8931 25.439 16.1731 25.1108 15.5911L16.5663 0.444088C16.4115 0.169713 16.1209 0 15.8059 0Z"
              fill={theme}
            />
          </svg>
        </Link>

        <ul className="hidden justify-between self-center w-full max-w-64 min-[500px]:flex min-[550px]:max-w-[20rem] min-[550px]:text-lg md:max-w-[25rem] lg:max-w-[575px] lg:text-2xl">
          <li className="hover:font-bold">
            <NavLink className={({ isActive }) => isActive ? "font-bold underline" : undefined} to="about">About</NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink className={({ isActive }) => isActive ? "font-bold underline" : undefined} to="services">Services</NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink className={({ isActive }) => isActive ? "font-bold underline" : undefined} to="portfolio">Portfolio</NavLink>
          </li>
          <li className="hover:font-bold">
            <NavLink className={({ isActive }) => isActive ? "font-bold underline" : undefined} to="blog">Blog</NavLink>
          </li>
        </ul>


        <button
          style={{ background: theme }}
          className="hidden py-2 w-full max-w-[110px] ml-4 rounded-md font-medium text-white md:ml-0 min-[500px]:block min-[500px]:max-w-[105px] md:px-0 lg:max-w-[206px] lg:py-[10px] lg:px-[58px]"
        >
          Hire Me
        </button>

        <button className="min-[500px]:hidden" onClick={handleToggle}>
          <img src={menu} alt="Open menu" />
        </button>
      </nav>

      <nav
        className={`${isHamburger === false ? "-translate-x-full" : "translate-x-0"} transition-all duration-500 fixed top-0 p-[30px] flex flex-col items-center w-full h-lvh bg-white min-[500px]:hidden`}
      >
        <button onClick={handleToggle} className="self-start">
          <img src={close} alt="Close " />
        </button>

        <ul className="mt-7">
          <NavLink className={({ isActive }) => isActive ? "font-bold underline" : undefined} to="about" onClick={handleToggle}>
            <li className="mx-auto w-fit text-center">About</li>
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline" : undefined} to="services" onClick={handleToggle}>
            <li className="mt-7 mx-auto w-fit text-center">Services</li>
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline" : undefined} to="portfolio" onClick={handleToggle}>
            <li className="mt-7 mx-auto w-fit text-center">Portfolio</li>
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline" : undefined} to="blog" onClick={handleToggle}>
            <li className="mt-7 mx-auto w-fit text-center">Blog</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
