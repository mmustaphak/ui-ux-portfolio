import { Suspense, useContext, useState } from "react";
import { Await, defer } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { client } from "../sanity";
import Spinner from "./Spinner";
import H1 from "./Reusable/H1";

export async function getProjectPromise() {
  const sessionCache = JSON.parse(sessionStorage.getItem("projectData"))

  if (sessionCache) {
    const projectPromise = new Promise(resolve => resolve(sessionCache))
    return defer({ projectPromise })
  } else {
    const projectPromise = client.fetch(
      "*[_type == 'project']| order(_updatedAt desc){'id': _id, projectName, projectLink, 'imageUrl': projectImage.asset->url}",
    )
    projectPromise
      .then(res => sessionStorage.setItem("projectData", JSON.stringify(res)))
      .catch((err) => console.error("Failed to fetch projects from sanity", err))

    return defer({ projectPromise });
  }
}


export default function Portfolio({ projectPromise, isPaginated = false }) {

  const [currentPage, setCurrentPage] = useState(1)
  const [isShown, setIsShown] = useState(true)
  const theme = useContext(ThemeContext);

  function ProjectCard({ name, url, img }) {
    return (
      <a href={url} className="transition-all focus:-translate-y-2 focus:scale-105 hover:-translate-y-2 hover:scale-105">
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

  function handleShowMore() {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
  }

  return (
    <>
      <H1>My Portfolio Projects</H1>
      <p className="mt-2 text-[0.75rem] mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
        Explore the artistry and precision in my portfolio projects
      </p>

      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-1 justify-items-center items-center gap-4 mt-4 min-[500px]:grid-cols-2 min-[500px]:gap-x-10 min-[500px]:gap-y-8">
          <Await
            resolve={projectPromise}
            errorElement={
              <h1 style={{ color: theme }} className="col-span-full my-4 font-semibold md:text-2xl lg:text-[2.5rem]">Projects are unavailable at the moment</h1>
            }
          >
            {(projectData) => {
              const recentProject = currentPage * 6
              const shownProjects = (isPaginated === false) ?
                projectData : projectData.slice(0, recentProject)

              if (recentProject >= projectData.length) {
                setIsShown(false)
              }

              const renderedProjects = shownProjects.map(
                ({ id, projectName, imageUrl, projectLink }) => (
                  <ProjectCard
                    key={id}
                    name={projectName}
                    img={imageUrl}
                    url={projectLink}
                  />
                ),
              );

              return (
                <>
                  {renderedProjects}
                  {
                    ((isPaginated && isShown)) &&
                    <button
                      onClick={handleShowMore}
                      style={{ backgroundColor: theme }}
                      className="mx-auto col-span-full py-0.5 px-[23px] w-full max-w-[110px] min-[375px]:max-w-[130px] mt-4 font-medium rounded-[3.37px] text-[10.11px] text-white disabled:opacity-50 md:py-2 md:text-[18px] md:rounded-md md:max-w-[280px] md:font-semibold md:mt-6 lg:mt-8 lg:pt-[10px] lg:text-2xl lg:rounded-lg"
                    >
                      Load More
                    </button>
                  }
                </>
              )

            }}
          </Await>
        </div>
      </Suspense>
    </>
  );
}
