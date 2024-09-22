import { useContext, useRef, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { client } from "../sanity";

export async function loader() {
  return await client.fetch("*[_type == 'testimonial']{name, message}")
}

const data = [
  {
    name: "Alamaster",
    message:
      "I just wanted to share a quick note and let you know that you are doing  really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.",
  },
  {
    name: "Dev Ade",
    message:
      "I pray you become the best version of yourself and also the biggest techie in Arewa and Naija in a whole insha Allah.",
  },
  {
    name: "Techbro",
    message:
      "You have some cool stuff here, i’ll send your work to my other guys to see what the outcome will be. Don’t stop designing bcos u really have some good concept.",
  },
  { name: "Damilola", message: "This is impressive, i must commend you." },
  {
    name: "GDG",
    message:
      "Thanks to you and your team for bringing your passion and creativity to the design of #DevFest",
  },
];

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
          style={{color: theme}}
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

  function NavButton({ index }) {

    return (
      <>
        <style>{`:checked{background: ${theme}}`}</style>
        <input
          name="testimonials"
          type="radio"
          onClick={() => scrollToTestimonial(index)}
          className="size-2 bg-[#D9D9D9] rounded-full appearance-none hover:min-w-[15px] hover:checked:min-w-[23px] checked:min-w-[23px] checked:transition checked:duration-200 checked:ease-in-out md:size-3 md:hover:min-w-[30px] md:checked:min-w-[44px] lg:size-4 lg:hover:min-w-[55px] lg:checked:min-w-[72px]"
          checked={index == onScreenTestimonial}
        />
      </>
    );
  }

  const renderedTestimonials = data.map((testimonial, index) => (
    <Testimonial key={testimonial.name} {...{ ...testimonial, index }} />
  ));

  const navigationButtons = data.map((person, index) => (
    <NavButton key={index} index={index} />
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
