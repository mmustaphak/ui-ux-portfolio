import { useRef, useState } from "react";
import testimonialData from "../testimonial.json";
import NavButton from "./Testimonial/NavButton";
import TestimonialCard from "./Testimonial/TestimonialCard";

export default function Testimonial() {
  const testimonialRef = useRef(null);
  const [onScreenTestimonial, setOnScreenTestimonial] = useState(testimonialData[0].id);

  function getMap() {
    if (!testimonialRef.current) {
      testimonialRef.current = new Map();
    }
    return testimonialRef.current;
  }

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { id } = entry.target
        setOnScreenTestimonial(id)
      }
    });
  }
  const observer = new IntersectionObserver(handleIntersection, {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.5,
  });

  function handleObserve(node) {
    observer.observe(node)
  }

  const renderedTestimonials = testimonialData.map((person,) => (
    <TestimonialCard
      key={person.id}
      id={person.id}
      name={person.name}
      message={person.message}
      handleObserve={handleObserve}
      testimonialMap={getMap}
    />
  ));

  const navigationButtons = testimonialData.map((person) => (
    <NavButton
      key={person.id}
      currentTestimonial={onScreenTestimonial}
      id={person.id}
      testimonialMap={getMap}
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
