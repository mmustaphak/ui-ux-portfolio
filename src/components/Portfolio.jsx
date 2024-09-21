import { useContext } from "react";
import projectImg from "../assets/portfolio-project.png";
import { ThemeContext } from "./ThemeContext";

export default function Portfolio() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h1 style={{ color: theme }} className="font-semibold md:text-2xl lg:text-[2.5rem]">
        My Portfolio Projects
      </h1>
      <p className="mt-2 text-[0.75rem] mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
        Explore the artistry and precision in my portfolio projects
      </p>
      {/* Project Cards */}
      <a href="">
        <div className="mt-4 w-fit">
          <div className="p-7 rounded-lg bg-whitish">
            <img
              className="mx-auto md:mx-0 md:mr-auto"
              src={projectImg}
              alt="The Bee Charge Design Project"
            />
          </div>

          <h2
            style={{ color: theme }}
            className="mt-3 font-semibold text-left md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:text-[2rem]"
          >
            The Bee Charge Design
          </h2>
        </div>
      </a>
    </>
  );
}
