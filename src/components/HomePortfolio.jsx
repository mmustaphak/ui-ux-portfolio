import Portfolio, { getProjectPromise } from "./Portfolio";

export function loader() {
  return getProjectPromise();
}

export default function HomePortfolio({ projectPromise }) {
  return (
    <>
      <Portfolio projectPromise={projectPromise} isPaginated={true} />
    </>
  );
}
