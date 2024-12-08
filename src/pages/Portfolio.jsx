import PortfolioComponent from "../components/Portfolio";
import Resume from "../components/Resume";
import { getProjectPromise } from "../components/Portfolio";
import { useLoaderData } from "react-router-dom";

export function loader(){
  return getProjectPromise()
}


export default function Portfolio() {

  const { projectPromise } = useLoaderData();

  return (
    <section>
      <PortfolioComponent projectPromise={projectPromise}/>
      <Resume />
    </section>
  );
}
