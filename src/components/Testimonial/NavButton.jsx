import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function NavButton({
  id,
  currentTestimonial,
  testimonialMap,
}) {
  const theme = useContext(ThemeContext);

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
        onClick={() => scrollToTestimonial(id)}
        className="transition-all duration-300 ease-in-out size-2 bg-[#D9D9D9] rounded-full appearance-none hover:w-[15px] hover:checked:w-[23px] checked:w-[23px] md:size-3 md:hover:w-[30px] md:checked:w-[44px] md:checked:hover:w-[44px] lg:size-4 lg:hover:w-[55px] lg:checked:w-[72px] lg:checked:hover:w-[72px]"
        checked={id == currentTestimonial}
        readOnly={true}
      />
    </>
  );
}
