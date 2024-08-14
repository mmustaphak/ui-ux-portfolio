import { Outlet } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { LiaBehance } from "react-icons/lia";
import { PiLinkedinLogoFill } from "react-icons/pi";
import Header from "./Header";
import GetInTouchForm from "./GetInTouchForm";
import logo from "../assets/footer-logo.svg";

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col text-center text-grey bg-[url('src/assets/background-logo.svg')] bg-[position:center_4%] bg-no-repeat">
      <Header />

      <div className="pt-16 px-6 pb-6">
        <Outlet />
      </div>

      <div>
        <h1 className="text-black font-semibold">Get In Touch</h1>
        <p>Let’s create something extraordinary- Get In Touch</p>
        <GetInTouchForm />
      </div>

      <footer className="flex flex-col justify-center mt-auto pt-6 pb-3 px-7 w-full text-center text-white text-[6.24px] bg-black">
        <div className="flex mx-auto">
          <img className="mr-1" src={logo} alt=" " />
          <p>Mufteey&apos;s Design</p>
        </div>
        <div className="self-center flex justify-between mt-4 w-full max-w-[135px] text-base">
          <a href="">
            <BiLogoInstagramAlt />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <PiLinkedinLogoFill />
          </a>
          <a href="">
            <LiaBehance />
          </a>
        </div>
        <div>
          <div className="mt-4 flex justify-between">
            <select
              className={`appearance-none pr-3 bg-transparent bg-[url('./src/assets/menu-down.svg')] bg-right bg-no-repeat`}
              name="language"
            >
              <option value="English">English</option>
            </select>
            <p>{year} Mufteey. All right reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
