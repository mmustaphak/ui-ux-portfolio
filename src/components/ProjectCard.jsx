import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ProjectCard({ name, url, img, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const theme = useContext(ThemeContext);
  const animation =
    index % 2
      ? "animate-[slide-from-right_900ms_forwards]"
      : "animate-[slide-from-left_900ms_forwards]";


  function handleIntersection(entry) {
    if (entry[0].isIntersecting) {
      setIsVisible(true)
    }
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }

  const observer = new IntersectionObserver(handleIntersection, options)

  return (
    <a
      href={url}
      className={` opacity-0 transition-all ${isVisible ? animation : ""} focus:-translate-y-2 focus:scale-105 hover:-translate-y-2 hover:scale-105`}
      ref={(node) => {
        if (node) {
          observer.observe(node)
        }
      }}
    >
      <div className="w-fit min-[500px]:w-full">
        <div className="p-7 rounded-lg bg-whitish">
          <img
            className="mx-auto w-full aspect-video object-cover rounded-lg"
            src={img}
            alt="The Bee Charge Design Project"
          />
        </div>
        <h2
          style={{ color: theme }}
          className="mt-3 font-semibold text-left md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:text-[2rem]"
        >
          {name}
        </h2>
      </div>
    </a>
  );
}
