import Resume from "../components/Resume";
import mufteey from "../assets/Mufteey.svg";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export default function About() {

  const {color, text} = useContext(ThemeContext)

  return (
    <section className="mt-6 min-[400px]:mt-0 lg:-mt-6">
      <h1 className={`${text} font-semibold md:text-2xl lg:text-[2.5rem]`}>
        About Me
      </h1>
      <img
        className="mx-auto mt-4 w-[29.4%] max-w-[160px] md:mt-6 lg:min-w-[329px] lg:mt-8"
        src={mufteey}
        alt="Mustapha Danladi"
      />

      <p className="mt-6 mx-auto text-[0.75rem] max-w-[512px] md:text-xl md:max-w-[760px] md:leading-[normal] lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
        Hey there! I&apos;m <span className={`${text} font-semibold`}>Mufteey</span>, a UI/UX designer driven by a passion for
        creating seamless and visually stunning digital experiences. With a keen
        eye for detail and a love for problem-solving, I specialize in
        translating ideas into user-friendly designs. Let&apos;s craft something
        exceptional together!
      </p>
      <Resume />
    </section>
  );
}
