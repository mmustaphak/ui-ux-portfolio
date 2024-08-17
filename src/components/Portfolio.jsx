import projectImg from "../assets/portfolio-project.png";

export default function Portfolio() {
    return (
        <>
            <h1 className="text-black font-semibold md:text-2xl lg:text-[2.5rem]">My Portfolio Projects</h1>
            <p className="mt-2 mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">Explore the artistry and precision in my portfolio projects</p>
            {/* Project Cards */}
            <a href="">
                <div className="mt-4 mx-auto lg:w-[90%]">
                    <div className="p-7 rounded-lg bg-whitish md:bg-transparent">
                        <img className="mx-auto md:mx-0 md:mr-auto" src={projectImg} alt="The Bee Charge Design Project" />
                    </div>
                    <h2 className="mt-3 font-semibold text-left text-black md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:text-[2rem]">The Bee Charge Design</h2>
                </div>
            </a>
        </>
    )
}
