import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function TestimonialCard({
  id,
  name,
  message,
  handleCurrentTestimonial,
  testimonialMap,
}) {
  const theme = useContext(ThemeContext);

  const observer = new IntersectionObserver(handleIntersection, {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.5,
  });

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        handleCurrentTestimonial();
      }
    });
  }

  return (
    <div
      ref={(node) => {
        const map = testimonialMap();
        if(!map.get(id)){
          map.set(id, node)
          observer.observe(node)
        }
      }}
      className={`testimonial${id} max-h-[374px] bg-whitish p-5 mr-4 snap-center snap-always min-w-full md:p-10 lg:px-[188px] lg:py-[88px]`}
      data-index={id}
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
