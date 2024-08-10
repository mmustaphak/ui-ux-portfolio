import Services from "../components/Services"
import Resume from "../components/Resume"
import projectImg from "../assets/portfolio-project.png"

export default function Home() {
    return (
        <section className="pt-16 px-6 pb-6">
            <div>
                <h1 className="text-black font-semibold">My name is Mustapha Danladi</h1>
                <p className="pt-2">A UI/UX Designer currently designing thoughtful experience, beautiful websites, products, and design system to help designers, product managers and engineers to collaborate together.</p>

                <button className="mt-6 px-[42px] py-1 rounded-[3.37px] text-[10px] text-white bg-black">Let&apos;s Talk</button>
            </div>

            <div className="mt-16">
                <h1 className="text-black font-semibold">My Services</h1>
                <p>Transforming visions into captivating realities where design meets innovation for an exceptional UI/UX journey.</p>
                <Services />
            </div>

            <div className="mt-6">
                <h1 className="text-black font-semibold">My Portfolio Projects</h1>
                <p>Explore the artistry and precision in my portfolio projects</p>
                {/* Project Cards */}
                <a href="">
                    <div className="mt-4">
                        <div className="p-7 rounded-lg bg-whitish">
                            <img className="mx-auto" src={projectImg} alt="The Bee Charge Design Project" />
                        </div>
                        <h2 className="mt-3 font-semibold text-left text-black">The Bee Charge Design</h2>
                    </div>
                </a>
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