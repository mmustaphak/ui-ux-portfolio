import Services from "../components/Services"
import Resume from "../components/Resume"
import Portfolio from "../components/Portfolio"
export default function Home() {
    return (
        <section>
            <div className="lg:mt-56">
                <h1 className="text-black font-semibold md:text-2xl lg:text-[40px]">My name is Mustapha Danladi</h1>
                <p className="mt-2 mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">A UI/UX Designer currently designing thoughtful experience, beautiful websites, products, and design system to help designers, product managers and engineers to collaborate together.</p>

                <button className="mt-6 px-[42px] py-1 rounded-[3.37px] text-[10px] text-white bg-black md:mt-7 lg:mt-8 md:text-xl md:py-[5px] md:px-[75px] md:rounded-md lg:py-[10px] lg:px-[150px] lg:text-2xl lg:rounded-lg">Let&apos;s Talk</button>
            </div>

            <div className="mt-16 mx-auto lg:mt-[178px] ">
                <Services />
            </div>

            <div className="mt-6">
                <Portfolio />
            </div>

            <div className="mt-6 flex flex-col justify-center items-center min-h-[135px] w-full rounded-lg text-white bg-black bg-[url('src/assets/corner-logo-top.svg'),_url('src/assets/corner-logo-bottom.svg')] bg-[position:top_right,_bottom_left] bg-no-repeat">
                <p className="text-[12px] font-medium">Redesign your Existing website with me.</p>
                <button className="w-fit mt-2 py-1 px-[33px] rounded-button font-medium text-[10.11px] text-black bg-white">Get In Touch</button>
            </div>

            <div className="mt-6">
                <h1 className="text-black font-semibold">Testimonial</h1>
                <p>Testimonials Speak louder than words.</p>
                {/* Gallery Component */}
            </div>

            <Resume />
        </section>
    )
}