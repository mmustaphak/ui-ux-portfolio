import Services from "../components/Services";
import Resume from "../components/Resume";
import { getProjectPromise } from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import H1 from "../components/Reusable/H1";
import { useLoaderData } from "react-router-dom";
import HomePortfolio from "../components/HomePortfolio";

export function loader() {
  return getProjectPromise();
}

export default function Home() {
  const theme = useContext(ThemeContext);
  const { projectPromise } = useLoaderData();

  return (
    <section>
      <div>
        <H1>My name is Mustapha Danladi</H1>
        <p className="mt-2 text-[0.75rem] mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
          A UI/UX Designer currently designing thoughtful experience, beautiful
          websites, products, and design system to help designers, product
          managers and engineers to collaborate together.
        </p>

        <a href="https://wa.me/+2348127529252">
          <div
            style={{ background: theme }}
            className="mt-6 transition font-medium mx-auto py-0.5 w-full max-w-[110px] min-[375px]:max-w-[130px] min-[500px]:py-2 rounded-[3.37px] text-[10px] text-white md:mt-7 lg:mt-8 md:text-xl md:max-w-[280px] md:px-0 md:rounded-md lg:max-w-[409px] lg:py-[10px] lg:text-2xl lg:rounded-lg hover:-translate-x-1 hover:-translate-y-1"
          >
            Let&apos;s Talk
          </div>
        </a>
      </div>

      <div className="mt-16 mx-auto lg:mt-[178px] ">
        <Services />
      </div>

      <div className="mt-6 md:mt-8 lg:mt-[50px]">
        <HomePortfolio projectPromise={projectPromise} />
      </div>

      <div
        style={{ backgroundColor: theme }}
        className="mt-6 flex flex-col justify-center mx-auto items-center min-h-[135px] w-full rounded-lg text-white bg-[image:theme(backgroundImage.top-logo),_theme(backgroundImage.bottom-logo)] bg-[position:top_right,_bottom_left] bg-no-repeat md:py-[70px] md:bg-[position:104%_0%,-4%_100%] md:bg-[size:19%_32%] lg:py-[136px] lg:bg-[position:104%_0%,-4%_100%] min-[1488px]:bg-[size:234px_166px] min-[1488px]:bg-[position:101%_0%,-1%_100%]"
      >
        <p className="text-[0.75rem] font-medium md:text-2xl lg:text-[2.5rem]">
          Redesign your Existing website with me.
        </p>
        <button
          style={{ color: theme }}
          className="mt-2 py-0.5 px-[23px] w-full max-w-[110px] min-[375px]:max-w-[130px] rounded-button font-medium text-[10.11px] bg-white md:text-lg md:px-0 md:mt-4 lg:text-[1.5rem] lg:mt-8 lg:py-[10px] md:py-1 md:max-w-[280px] lg:max-w-[409px]"
        >
          Get In Touch
        </button>
      </div>

      <div className="mt-6 md:mt-8 lg:mt-[50px]">
        <H1>Testimonial</H1>
        <p className="text-[0.75rem] mt-2 mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
          Testimonials Speak louder than words.
        </p>
        <Testimonial />
      </div>

      <Resume />
    </section>
  );
}
