import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import H1 from "../components/Reusable/H1";

export default function About() {
  const theme = useContext(ThemeContext);

  function imageTheme(hexCode) {
    switch (hexCode) {
      case "#151515":
        return "black-mufteey.svg";
      case "#00A070":
        return "green-mufteey.svg";
      case "#000958":
        return "blue-mufteey.svg";
    }
  }

  return (
    <section className="mt-6 min-[400px]:mt-0 lg:-mt-6">
      <H1>About Me</H1>

      <img
        className="mx-auto mt-4 w-[29.4%] max-w-[160px] md:mt-6 lg:min-w-[329px] lg:mt-8"
        src={imageTheme(theme)}
        alt="Mustapha Danladi"
      />

      <p className="mt-6 mx-auto text-[0.75rem] max-w-[512px] md:text-xl md:max-w-[760px] md:leading-[normal] lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
        Hey there! I&apos;m{" "}
        <span style={{ color: theme }} className="font-semibold">
          Mufteey
        </span>
        , a UI/UX designer driven by a passion for creating seamless and
        visually stunning digital experiences. With a keen eye for detail and a
        love for problem-solving, I specialize in translating ideas into
        user-friendly designs. Let&apos;s craft something exceptional together!
      </p>
      <Resume />
    </section>
  );
}
