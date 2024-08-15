import { Outlet } from "react-router-dom"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { LiaBehance } from "react-icons/lia";
import { PiLinkedinLogoFill } from "react-icons/pi";
import Header from "./Header";
import GetInTouchForm from "./GetInTouchForm";
import logo from "../assets/footer-logo.svg"

export default function Layout() {

    const year = new Date().getFullYear()

    return (
        <div className="flex flex-col text-center text-grey bg-[url('src/assets/background-logo.svg')] bg-[position:center_4%] bg-no-repeat">


            <div className="max-w-[1110px] mx-auto">
                <Header /> 
                <Outlet />
                <div className="">
                    <h1 className="text-black font-semibold min-[480px]:text-2xl lg:text-[2.5rem]">Get In Touch</h1>
                    <p className="lg:pt-8 lg:text-[2rem]">Let’s create something extraordinary- Get In Touch</p>
                    <GetInTouchForm />
                </div>
            </div>


            <footer className="mt-auto pt-6 pb-3 px-7 w-full text-center text-white text-[6.24px] bg-black min-[480px]:text-lg  min-[480px]:px-16 min-[480px]:pt-16 min-[480px]:pb-9 lg:px-[110px] lg:pt-[96px] lg:pb-[50px] lg:text-2xl">

                <div className="flex flex-col justify-center mx-auto w-full max-w-[1220px]">
                    <div className="flex mx-auto min-[480px]:min-w-[220px] lg:min-w-[300px]">
                        <img className="mr-1 md:mr-2 lg:mr-3" src={logo} alt=" " />
                        <p className="lg:text-2xl">Mufteey&apos;s Design</p>
                    </div>

                    <div className="self-center flex justify-between mt-4 w-full max-w-[135px] text-base min-[480px]:mt-8 min-[480px]:max-w-[450px] lg:mt-[53px] lg:max-w-[552px]">
                        <a href=""><BiLogoInstagramAlt className="min-[480px]:size-[25px] md:size-[30px] lg:size-[48px]" /></a>
                        <a href=""><FaTwitter className="min-[480px]:size-[25px] md:size-[30px] lg:size-[48px]" /></a>
                        <a href=""><PiLinkedinLogoFill className="min-[480px]:size-[25px] md:size-[30px] lg:size-[48px]" /></a>
                        <a href=""><LiaBehance className="min-[480px]:size-[25px] md:size-[30px] lg:size-[48px]" /></a>
                    </div>

                    <div>
                        <div className="mt-4 flex justify-between min-[480px]:mt-10 lg:mt-[63px]">
                            <select className={`appearance-none pr-3 bg-transparent bg-[url('./src/assets/menu-down.svg')] bg-[position:center_right] bg-no-repeat min-[480px]:bg-[size:18px] min-[480px]:min-w-[5.5rem] lg:min-w-[7rem] lg:bg-[size:24px]`} name="language">
                                <option value="English">English</option>
                            </select>
                            <p>{year} Mufteey. All right reserved</p>
                        </div>
                    </div>
                    
                </div>

            </footer>

        </div>
    )
}