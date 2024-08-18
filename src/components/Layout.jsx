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
    <div className="flex flex-col text-center text-grey bg-[url('src/assets/background-logo.svg')] bg-[position:center_4%] bg-no-repeat md:bg-[size:67%_10%] lg:bg-[position:center_7%] lg:bg-[size:817px_579px]">
      <div className="max-w-[1220px] mx-auto">
        <Header />

        <div className="pt-16 px-6 pb-6 md:px-8 min-[1250px]:px-0">
          <Outlet />
        </div>

        <div>
          <h1 className="text-black font-semibold min-[480px]:text-2xl lg:text-[2.5rem]">
            Get In Touch
          </h1>
          <p className="lg:pt-8 lg:text-[2rem]">
            Let’s create something extraordinary- Get In Touch
          </p>
          <GetInTouchForm />
        </div>
      </div>

      <footer className="mt-auto pt-6 pb-3 px-7 w-full text-center text-white text-[6.24px] bg-black min-[480px]:text-lg min-[480px]:px-12 min-[480px]:pt-8 min-[480px]:pb-4 lg:px-[110px] lg:pt-[96px] lg:pb-[50px]">
        <div className="flex flex-col justify-center mx-auto w-full max-w-[1220px]">
          <div className="flex justify-between items-center mx-auto w-full max-w-[72px] min-[480px]:max-w-[105px] md:max-w-[125px] lg:max-w-[270px]">
            <img className="min-[480px]:min-w-6 lg:min-w-[55px] lg:min-h-10" src={logo} alt=" " />
            <p className="text-[0.38rem] min-[480px]:text-[0.55rem] lg:text-2xl md:text-[0.7rem]">Mufteey&apos;s Design</p>
          </div>

          <div className="self-center flex justify-between mt-4 w-full max-w-[154px] text-base min-[480px]:max-w-[185px] lg:mt-[53px] lg:max-w-[552px]">
            <a href="">
              <BiLogoInstagramAlt className="size-[12px] min-[480px]:size-[20px] md:size-[25px] lg:size-[48px]" />
            </a>
            <a href="">
              <FaTwitter className="size-[12px] min-[480px]:size-[20px] md:size-[25px] lg:size-[48px]" />
            </a>
            <a href="">
              <PiLinkedinLogoFill className="size-[12px] min-[480px]:size-[20px] md:size-[25px] lg:size-[48px]" />
            </a>
            <a href="">
              <LiaBehance className="size-[12px] min-[480px]:size-[20px] md:size-[25px] lg:size-[48px]" />
            </a>
          </div>

          <div>
            <div className="mt-4 flex justify-between min-[480px]:mt-10 lg:mt-[63px]">
              <select
                className="appearance-none text-[0.38rem] w-full max-w-[32px] bg-transparent bg-[url('./src/assets/menu-down.svg')] bg-[position:center_right] bg:[size:6.21px] bg-no-repeat min-[480px]:bg-[size:14px] min-[480px]:max-w-[40px] min-[480px]:text-[0.55rem] md:max-w-[70px] lg:max-w-[120px] lg:bg-[size:24px] lg:text-2xl md:text-[0.7rem]"
                name="language"
              >
                <option value="English">English</option>
              </select>
              <p className="text-[0.38rem] min-[480px]:text-[0.55rem] lg:text-2xl md:text-[0.7rem]">{year} Mufteey. All right reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
