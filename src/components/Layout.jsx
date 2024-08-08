import { Link } from "react-router-dom"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { LiaBehance } from "react-icons/lia";
import { PiLinkedinLogoFill } from "react-icons/pi";
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
import arrow from "../assets/menu-down.svg"

export default function Layout() {
  return (
    <div className="flex flex-col">
        <nav className="px-6 py-4 flex justify-between">
            <Link to="/">
                <img src={logo} alt="Mufteey Logo" />
            </Link>
            <img src={menu} alt="Open menu" />
        </nav>

        <footer className="absolute bottom-0 flex flex-col justify-center mt-auto pt-6 pb-3 px-7 w-full text-center text-white text-[6.24px] bg-black">
            <p>Mufteey&apos;s Design</p>
            <div className="self-center flex justify-between mt-4 w-full max-w-[135px] text-base">
                {/*Socials Image Links*/}
                <a href=""><BiLogoInstagramAlt/></a>
                <a href=""><FaTwitter /></a>
                <a href=""><PiLinkedinLogoFill /></a>
                <a href=""><LiaBehance /></a>                
            </div>
            <div>
                <div className="mt-4 flex justify-between">
                    <select className={`appearance-none pr-3 bg-transparent bg-[url('.${arrow}')] bg-right bg-no-repeat`} name="language">
                        <option value="English">English</option>
                    </select>
                    <p>2024 Mufteey. All right reserved</p>
                </div>
            </div>
        </footer>
    </div>
  )
}