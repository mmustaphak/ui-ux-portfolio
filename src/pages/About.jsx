import Resume from "../components/Resume";
import mufteey from "../assets/Mufteey.svg";
import Paragraph from "../components/Paragraph";

export default function About() {
  return (
    <section className="mt-6 min-[400px]:mt-0 lg:-mt-6">
      <h1 className="text-black font-semibold md:text-2xl lg:text-[2.5rem]">
        About Me
      </h1>
      <img
        className="mx-auto mt-4 w-[29.4%] max-w-[160px] md:mt-6 lg:min-w-[329px] lg:mt-8"
        src={mufteey}
        alt="Mustapha Danladi"
      />
      
      <Paragraph ClassName="mt-6 lg:mt-8">
        Hey there! I&apos;m Mufteey, a UI/UX designer driven by a passion for
        creating seamless and visually stunning digital experiences. With a keen
        eye for detail and a love for problem-solving, I specialize in
        translating ideas into user-friendly designs. Let&apos;s craft something
        exceptional together!
      </Paragraph>
      <Resume />
    </section>
  );
}
