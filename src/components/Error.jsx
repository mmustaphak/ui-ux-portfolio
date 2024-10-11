import { useRouteError } from "react-router-dom";

export default function Error() {
  const errorMessage = useRouteError();

  return (
    <div className="my-32">
      <h1 className="text-black font-bold md:text-3xl lg:text-[3rem]">
        There was an Error
      </h1>
      <p className="mt-8 text-base mx-auto max-w-[280px] md:max-w-[560px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[700px] lg:text-[2.5rem]">
        {errorMessage}
        <br />
        <br /> Try refreshing the page or contact Mufteey using the links below{" "}
      </p>
    </div>
  );
}
