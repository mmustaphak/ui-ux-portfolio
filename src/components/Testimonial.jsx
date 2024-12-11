import { useContext, useRef, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import testimonialData from "../testimonial.json"
import NavButton from "./Testimonial/NavButton";

export default function Testimonial() {
  const testimonialRef = useRef(null);
  const [onScreenTestimonial, setOnScreenTestimonial] = useState(0);
  const theme = useContext(ThemeContext);

  function getMap() {
    if (!testimonialRef.current) {
      testimonialRef.current = new Map();
    }
    return testimonialRef.current;
  }

  function scrollToTestimonial(testimonial) {
    const map = getMap();
    const node = map.get(testimonial);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }


  const observer = new IntersectionObserver(handleIntersection, {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.5,
  });
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const eleIndex = entry.target.dataset.index;
        setOnScreenTestimonial(eleIndex);
      }
    });
  }

  function Testimonial({ index, name, message }) {
    return (
      <div
        ref={(node) => {
          const map = getMap();
          if (node) {
            map.set(index, node);
          }
          const nodeRef = map.get(index);
          observer.observe(nodeRef);
        }}
        className={`testimonial${index} max-h-[374px] bg-whitish p-5 mr-4 snap-center snap-always min-w-full md:p-10 lg:px-[188px] lg:py-[88px]`}
        data-index={index}
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


  const renderedTestimonials = testimonialData.map((testimonial, index) => (
    <Testimonial key={testimonial.name} {...{ ...testimonial, index }} />
  ));

  const navigationButtons = testimonialData.map((person, index) => (
    <NavButton
      key={index}
      handleScroll={scrollToTestimonial}
      currentTestimonial={onScreenTestimonial}
      index={index}
    />
  ));

  return (
    <>
      <div className="testimonial relative w-full flex mt-2 overflow-x-scroll snap-x snap-mandatory md:mt-8">
        {renderedTestimonials}
      </div>
      <div className="flex justify-between mx-auto mt-2 max-w-[75px] md:mt-8 md:max-w-[150px] lg:max-w-[232px]">
        {navigationButtons}
      </div>
    </>
  );
}
