import PortfolioComponent from "../components/Portfolio";
import Resume from "../components/Resume";
import { loader as portfolioComponentLoader } from "../components/Portfolio";
import { useLoaderData } from "react-router-dom";

export function loader(){
  return portfolioComponentLoader()
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
