import { Suspense, useContext } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import projectImg from "../assets/portfolio-project.png";
import projectImg2 from "../assets/portfolio-project2.png";
import projectImg3 from "../assets/portfolio-project3.png";
import projectImg4 from "../assets/portfolio-project4.png";
import { ThemeContext } from "./ThemeContext";
import { client } from "../sanity";
import Spinner from "./Spinner";

export async function loader() {
  const projectPromise = client.fetch("*[_type == 'project']{projectName, projectLink, 'imageUrl': projectImage.asset->url}")
  return defer({ projectPromise })
}


export default function Portfolio() {
  const theme = useContext(ThemeContext);
  const { projectPromise } = useLoaderData()


  console.log(projectPromise)

  function ProjectCard({ name, url, img }) {
    console.log(name, url, img)
    return (
      <a className="w-fit min-[500px]:w-full" href={url}>
        <div className="w-fit min-[500px]:w-full">
          <div className="p-7 rounded-lg bg-whitish">
            <img
              className="mx-auto w-full"
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
    )
  }

  return (
    <>
      <h1 style={{ color: theme }} className="font-semibold md:text-2xl lg:text-[2.5rem]">
        My Portfolio Projects
      </h1>
      <p className="mt-2 text-[0.75rem] mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
        Explore the artistry and precision in my portfolio projects
      </p>

      <div className="grid grid-cols-1 justify-items-center gap-4 mt-4 min-[500px]:grid-cols-2 min-[500px]:gap-x-10 min-[500px]:gap-y-8">
        <Suspense fallback={<Spinner />}>
          <Await resolve={projectPromise}>
            {
              (projectData) => {
                return projectData.map(({ projectName, imageUrl, projectLink }) => (
                  <ProjectCard
                    key={projectName}
                    name={projectName}
                    img={imageUrl}
                    url={projectLink} />
                ))
              }
            }
          </Await>
        </Suspense>
      </div>
    </>
  );
}
