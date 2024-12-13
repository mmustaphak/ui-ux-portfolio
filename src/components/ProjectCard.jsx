import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ProjectCard({ name, url, img }) {
  const theme = useContext(ThemeContext);

  return (
    <a
      href={url}
      className="transition-all focus:-translate-y-2 focus:scale-105 hover:-translate-y-2 hover:scale-105"
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
