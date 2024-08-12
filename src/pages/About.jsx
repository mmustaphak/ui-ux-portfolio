import Resume from "../components/Resume"
import mufteey from "../assets/mufteey.png"

export default function About() {
  return (
    <section className="pt-8 px-6 pb-6">
        <h1 className="font-semibold text-black">About Me</h1>
        <img className="mx-auto pt-4" src={mufteey} alt="Mustapha Danladi" />
        <p className="mt-6">Hey there! I&apos;m Mufteey, a UI/UX designer driven by a passion for creating seamless and visually stunning digital experiences. With a keen eye for detail and a love for problem-solving, I specialize in translating ideas into user-friendly designs. Let&apos;s craft something exceptional together!</p>
        <Resume />
    </section>
  )
}