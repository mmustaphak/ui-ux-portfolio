import { useRef, useState } from "react";
import testimonialData from "../testimonial.json"
import NavButton from "./Testimonial/NavButton";
import TestimonialCard from "./Testimonial/TestimonialCard"

export default function Testimonial() {
  const testimonialRef = useRef(null);
  const [onScreenTestimonial, setOnScreenTestimonial] = useState(0);

  function getMap() {
    if (!testimonialRef.current) {
      testimonialRef.current = new Map();
    }
    return testimonialRef.current;
  }


  function handleCurrentTestimonial(index){
    setOnScreenTestimonial(index)
  }

  const renderedTestimonials = testimonialData.map((testimonial, index) => (
    <TestimonialCard 
      key={testimonial.name} 
      name={testimonial.name}
      message={testimonial.message}
      handleCurrentTestimonial={()=>handleCurrentTestimonial(index)}
      testimonialMap={getMap}
      index={index}
      />
  ));

  const navigationButtons = testimonialData.map((_, index) => (
    <NavButton
      key={index}
      currentTestimonial={onScreenTestimonial}
      index={index}
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
