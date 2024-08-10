import Resume from "../components/Resume"
import mufteey from "../assets/mufteey.png"

export default function About() {
  return (
    <>
        <h1>About Me</h1>
        <img src={mufteey} alt="Mustapha Danladi" />
        <p>Hey there! I&apos;m Mufteey, a UI/UX designer driven by a passion for creating seamless and visually stunning digital experiences. With a keen eye for detail and a love for problem-solving, I specialize in translating ideas into user-friendly designs. Let&apos;s craft something exceptional together!</p>
        <Resume />
    </>
  )
}