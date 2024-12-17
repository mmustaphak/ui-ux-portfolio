import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function TestimonialCard({
  id,
  name,
  message,
  handleObserve,
  testimonialMap,
}) {
  const theme = useContext(ThemeContext);

  return (
    <div
      ref={(node) => {
        const map = testimonialMap();
        if (!map.get(id)) {
          map.set(id, node)
          handleObserve(node)
        }
      }}
      className={`max-h-[374px] bg-whitish p-5 snap-center snap-always basis-[90vw] shrink-0 sm:max-w-[600px]  md:max-w-none md:p-10 lg:max-h-none lg:max-w-[1220px] lg:px-[188px] lg:py-[88px]`}
      id={id}
      data-id={id}
    >
      <h3
        style={{ color: theme }}
        className="text-[13.3px] font-semibold md:text-2xl lg:text-[2.5rem]"
      >
        From {name}
      </h3>
      <p className="mt-2 text-[.6875rem] mx-auto max-w-[412px] md:max-w-[700px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-6 lg:max-w-full lg:text-[2rem]">
        {message}
      </p>
    </div>
  );
}
