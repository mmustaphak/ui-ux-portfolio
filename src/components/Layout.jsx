import { Link, Outlet } from "react-router-dom"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { LiaBehance } from "react-icons/lia";
import { PiLinkedinLogoFill } from "react-icons/pi";
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

export default function Layout() {

    const year = new Date().getFullYear()

    return (
        <div className="flex flex-col">
            <nav className="px-6 py-4 flex justify-between">
                <Link to="/">
                    <img src={logo} alt="Mufteey Logo" />
                </Link>
                <img src={menu} alt="Open menu" />
            </nav>

            <Outlet />

            <div>
                <h1>Get In Touch</h1>
                <p>Let’s create something extraordinary- Get In Touch</p>
                {/* Form Component */}
            </div>

            <footer className="absolute bottom-0 flex flex-col justify-center mt-auto pt-6 pb-3 px-7 w-full text-center text-white text-[6.24px] bg-black">
                <p>Mufteey&apos;s Design</p>
                <div className="self-center flex justify-between mt-4 w-full max-w-[135px] text-base">
                    <a href=""><BiLogoInstagramAlt /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><PiLinkedinLogoFill /></a>
                    <a href=""><LiaBehance /></a>
                </div>
                <div>
                    <div className="mt-4 flex justify-between">
                        <select className={`appearance-none pr-3 bg-transparent bg-[url('./src/assets/menu-down.svg')] bg-right bg-no-repeat`} name="language">
                            <option value="English">English</option>
                        </select>
                        <p>{year} Mufteey. All right reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}