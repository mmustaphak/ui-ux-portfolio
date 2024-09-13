import Services from "../components/Services";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Paragraph from "../components/Paragraph";
export default function Home() {
  return (
    <section>
      <div>
        <h1 className="text-black font-semibold md:text-2xl lg:text-[2.5rem]">
          My name is Mustapha Danladi
        </h1>
        
        <Paragraph>A UI/UX Designer currently designing thoughtful experience, beautiful
          websites, products, and design system to help designers, product
          managers and engineers to collaborate together.
        </Paragraph>

        <button className="mt-6 py-0.5 w-full max-w-[110px] min-[375px]:max-w-[130px] min-[500px]:py-2 rounded-[3.37px] text-[10px] text-white bg-black md:mt-7 lg:mt-8 md:text-xl md:max-w-[280px] md:px-0 md:rounded-md lg:max-w-[409px] lg:py-[10px] lg:text-2xl lg:rounded-lg">
          Let&apos;s Talk
        </button>
      </div>

      <div className="mt-16 mx-auto lg:mt-[178px] ">
        <Services />
      </div>

      <div className="mt-6 md:mt-8 lg:mt-[50px]">
        <Portfolio />
      </div>

      <div className="mt-6 flex flex-col justify-center mx-auto items-center min-h-[135px] w-full rounded-lg bg-black bg-[url('src/assets/corner-logo-top.svg'),_url('src/assets/corner-logo-bottom.svg')] bg-[position:top_right,_bottom_left] bg-no-repeat md:py-[70px] md:bg-[position:104%_0%,-4%_100%] md:bg-[size:19%_32%] lg:py-[136px] lg:bg-[position:104%_0%,-4%_100%] min-[1488px]:bg-[size:234px_166px] min-[1488px]:bg-[position:101%_0%,-1%_100%]">
        <Paragraph ClassName="!mt-0 !text-[0.75rem] text-white  !font-medium !md:text-2xl !lg:text-[2.5rem]">Redesign your Existing website with me.</Paragraph>
        <button className="mt-2 py-0.5 px-[23px] w-full max-w-[110px] min-[375px]:max-w-[130px] rounded-button font-medium text-[10.11px] text-black bg-white md:text-lg md:px-0 md:mt-4 lg:text-[1.5rem] lg:mt-8 lg:py-[10px] md:py-1 md:max-w-[280px] lg:max-w-[409px]">
          Get In Touch
        </button>
      </div>

      <div className="mt-6 md:mt-8 lg:mt-[50px]">
        <h1 className="text-black font-semibold md:text-2xl lg:text-[2.5rem]">
          Testimonial
        </h1>
        <Paragraph>
          Testimonials Speak louder than words.
        </Paragraph>
        <Testimonial />
      </div>

      <Resume />
    </section>
  );
}
