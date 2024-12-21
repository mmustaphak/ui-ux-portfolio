import { useRef, useState } from "react";
import testimonialData from "../testimonial.json";
import NavButton from "./Testimonial/NavButton";
import TestimonialCard from "./Testimonial/TestimonialCard";

export default function Testimonial() {
  const testimonialRef = useRef(null);
  const [onScreenTestimonial, setOnScreenTestimonial] = useState(null);

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
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  function handleObserve(node) {
    observer.observe(node)
  }

  const renderedTestimonials = testimonialData.map((person) => (
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
      <div className="testimonial relative w-full flex gap-x-80 mt-2 overflow-x-scroll snap-x snap-mandatory md:mt-8 min-[660px]:px-16">
        {renderedTestimonials}
      </div>
      <div className="flex justify-center gap-x-4 mt-2 md:mt-8 ">
        {navigationButtons}
      </div>
    </>
  );
}
