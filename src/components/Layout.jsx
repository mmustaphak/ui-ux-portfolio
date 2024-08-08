import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { LiaBehance } from "react-icons/lia";
import { PiLinkedinLogoFill } from "react-icons/pi";
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

export default function Layout() {
  return (
    <>
        <nav>
            <img src={logo} alt="Mufteey Logo" />
            <img src={menu} alt="Open menu" />
        </nav>
        <footer>
            <p>Mufteey&apos;s Design</p>
            <div>
                {/*Socials Image Links*/}
                <a href=""><BiLogoInstagramAlt/></a>
                <a href=""><FaTwitter /></a>
                <a href=""><PiLinkedinLogoFill /></a>
                <a href=""><LiaBehance /></a>                
            </div>
            <div>
                <div>
                    
                </div>
                <div>
                    <select name="language">
                        <option value="English">English</option>
                    </select>
                    <p>2024 Mufteey. All right reserved</p>
                </div>
            </div>
        </footer>
    </>
  )
}