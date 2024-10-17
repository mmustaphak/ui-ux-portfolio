import { Suspense, useContext, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { client } from "../sanity";
import Spinner from "./Spinner";

export async function loader() {
  const sessionCache = JSON.parse(sessionStorage.getItem("projectData"))

  if (sessionCache) {
    const projectPromise = new Promise(resolve => resolve(sessionCache))
    return defer({projectPromise})
  } else {
    const projectPromise = client.fetch(
      "*[_type == 'project']{projectName, projectLink, 'imageUrl': projectImage.asset->url}",
    )
    projectPromise
      .then(res => sessionStorage.setItem("projectData", JSON.stringify(res)))

    return defer({ projectPromise });
  }
}


export default function Portfolio() {
  const [isShown, setIsShown] = useState(false)
  const theme = useContext(ThemeContext);
  const { projectPromise } = useLoaderData();

  function ProjectCard({ name, url, img }) {
    return (
      <a href={url}>
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
    );
  }

  return (
    <>
      <h1
        style={{ color: theme }}
        className="font-semibold md:text-2xl lg:text-[2.5rem]"
      >
        My Portfolio Projects
      </h1>
      <p className="mt-2 text-[0.75rem] mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
        Explore the artistry and precision in my portfolio projects
      </p>

      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-1 justify-items-center items-center gap-4 mt-4 min-[500px]:grid-cols-2 min-[500px]:gap-x-10 min-[500px]:gap-y-8">
          <Await resolve={projectPromise}>
            {(projectData) => {
              const recentProject = 6
              const allProject = projectData.length


              if(projectData.length === 0){
                return <h1 style={{color: theme}} className="col-span-full my-4 font-semibold md:text-2xl lg:text-[2.5rem]">Projects are unavailable at the moment</h1>
              }

              const shownProjects = (location.pathname === "/portfolio" || isShown) ?
                projectData.slice(0, allProject) : projectData.slice(0, recentProject)

              return shownProjects.map(
                ({ projectName, imageUrl, projectLink }) => (
                  <ProjectCard
                    key={projectName}
                    name={projectName}
                    img={imageUrl}
                    url={projectLink}
                  />
                ),
              );
            }}
          </Await>
        </div>
        {
          ((location.pathname === "/" && isShown === false )) &&
          <button
            onClick={()=>setIsShown(true)}
            style={{ backgroundColor: theme }}
            className="mx-auto py-0.5 px-[23px] w-full max-w-[110px] min-[375px]:max-w-[130px] mt-4 font-medium rounded-[3.37px] text-[10.11px] text-white disabled:opacity-50 md:py-2 md:text-[18px] md:rounded-md md:max-w-[280px] md:font-semibold md:mt-6 lg:mt-8 lg:pt-[10px] lg:text-2xl lg:rounded-lg"
          >
            Load More
          </button>
        }
      </Suspense>
    </>
  );
}
