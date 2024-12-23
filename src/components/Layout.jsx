import { Outlet } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { LiaBehance } from "react-icons/lia";
import { PiLinkedinLogoFill } from "react-icons/pi";
import Header from "./Header";
import GetInTouchForm from "./GetInTouchForm";
import logo from "../assets/footer-logo.svg";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import H1 from "./Reusable/H1";

export default function Layout({ children }) {
  const year = new Date().getFullYear();
  const theme = useContext(ThemeContext);

  return (
    <div className="flex flex-col text-center text-grey">
      <div className="w-full max-w-[1220px] mx-auto">
        <Header />

        <div className="pt-16 px-6 mb-6 bg-layout bg-[size:min(89%,350px)] bg-[position:center_16px] min-[400px]:bg-[position:center_top] md:bg-[size:55%] md:bg-[position:center_25px] lg:pt-[239px]  bg-no-repeat  lg:bg-[size:817px_579px] lg:bg-[position:center_80px] md:mb-[35px] md:px-8 lg:mb-[50px] min-[1250px]:px-0">
          <Outlet />
        </div>

        <div>
          <H1>Get In Touch</H1>
          <p className="text-[0.75rem] mt-2 mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
            Let’s create something extraordinary- Get In Touch
          </p>
          <GetInTouchForm />
        </div>
      </div>

      <footer
        style={{ background: theme }}
        className="mt-auto pt-6 pb-3 px-7 w-full text-center text-white text-[6.24px] min-[480px]:text-lg min-[480px]:px-12 min-[480px]:pt-8 min-[480px]:pb-4 lg:px-[110px] lg:pt-[96px] lg:pb-[50px]"
      >
        <div className="flex flex-col justify-center mx-auto w-full max-w-[1220px]">
          <a href="/">
            <div className="flex justify-between items-center mx-auto w-full max-w-[72px] min-[480px]:max-w-[105px] md:max-w-[125px] lg:max-w-[270px]">
              <img
                className="min-h-[1.2em] min-[480px]:min-h-[1em] lg:min-h-[2.2em]"
                src={logo}
                alt="Mufteey&apos;s Logo"
              />
              <p className="min-[480px]:text-[0.55rem] lg:text-2xl md:text-[0.7rem]">
                Mufteey&apos;s Design
              </p>
            </div>
          </a>

          <div className="self-center flex justify-between mt-4 w-full max-w-[154px] text-base min-[480px]:max-w-[185px] lg:mt-[53px] lg:max-w-[552px]">
            <a href="https://www.instagram.com/muftee_yy/" aria-label="Go to Mufteey&apos;s Instagram page">
              <BiLogoInstagramAlt className="size-[12px] min-[480px]:size-[20px] md:size-[25px] lg:size-[48px]" />
            </a>
            <a href="https://x.com/Mustee__jr" aria-label="Go to Mufteey&apos;s X (previously known as twitter) page">
              <FaTwitter className="size-[12px] min-[480px]:size-[20px] md:size-[25px] lg:size-[48px]" />
            </a>
            <a href="https://www.linkedin.com/in/mustapha-danladi-3122491ba" aria-label="Go to Mufteey&apos;s LinkedIn page">
              <PiLinkedinLogoFill className="size-[12px] min-[480px]:size-[20px] md:size-[25px] lg:size-[48px]" />
            </a>
            <a href="https://www.behance.net/mustaphadanladi" aria-label="Go to Mufteey&apos;s Behance page">
              <LiaBehance className="size-[12px] min-[480px]:size-[20px] md:size-[25px] lg:size-[48px]" />
            </a>
          </div>

          <div>
            <div className="mt-4 flex justify-between min-[480px]:mt-10 lg:mt-[63px]">
              <select
                className="appearance-none text-[0.38rem] w-full max-w-[32px] bg-transparent bg-drop-down bg-[position:center_right] bg:[size:6.21px] bg-no-repeat min-[480px]:bg-[size:14px] min-[480px]:max-w-[40px] min-[480px]:text-[0.55rem] md:max-w-[70px] lg:max-w-[120px] lg:bg-[size:24px] lg:text-2xl md:text-[0.7rem]"
                name="language"
                aria-label="Language"
              >
                <option value="English">English</option>
              </select>
              <p className="text-[0.38rem] min-[480px]:text-[0.55rem] lg:text-2xl md:text-[0.7rem]">
                {year} Mufteey. All right reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
