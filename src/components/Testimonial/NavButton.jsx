import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function NavButton({ index, currentTestimonial, testimonialMap }) {
    const theme = useContext(ThemeContext)

    function scrollToTestimonial(testimonial) {
      const map = testimonialMap();
      const node = map.get(testimonial);
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  
    return (
      <>
        <style>{`:checked{background: ${theme}}`}</style>
        <input
          name="testimonials"
          type="radio"
          onClick={() => scrollToTestimonial(index)}
          className="size-2 bg-[#D9D9D9] rounded-full appearance-none hover:min-w-[15px] hover:checked:min-w-[23px] checked:min-w-[23px] checked:transition checked:duration-200 checked:ease-in-out md:size-3 md:hover:min-w-[30px] md:checked:min-w-[44px] lg:size-4 lg:hover:min-w-[55px] lg:checked:min-w-[72px]"
          checked={index == currentTestimonial}
          readOnly={true}
        />
      </>
    );
  }