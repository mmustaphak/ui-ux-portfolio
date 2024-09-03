import { useRef } from "react"

export default function Testimonial() {

  const testimonialRef = useRef(null)


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

  function getMap() {
    if (!testimonialRef.current) {
      testimonialRef.current = new Map()
    }
    return testimonialRef.current
  }

  function scrollToTestimonial(testimonial) {
    const map = getMap();
    const node = map.get(testimonial)
    node.scrollIntoView({
      behavior: "smooth",
      block:"nearest",
      inline:"center",
    })
  }

  const renderedTestimonials = data.map((testimonial, index) => (
    <div
      key={testimonial.name}
      ref={node => {
        const map = getMap();
        if (node) {
          map.set(index, node);
        } else {
          map.delete(testimonial)
        }
      }}
      className={`testimonial${index} min-w-[327px] bg-whitish p-5 mr-4 snap-center snap-always`}
    >
      <h3 className="font-semibold text-[13.3px] text-black mt-[18px] md:text-lg lg:mt-8 lg:text-[1.5rem]">
        From {testimonial.name}
      </h3>
      <p className="text-[11px] mt-2 lg:mt-4 lg:text-[1.25rem]">
        {testimonial.message}
      </p>
    </div>
  ));

  const navigationButtons = data.map((person, index) => {
    return (<button key={person.name} onClick={()=>scrollToTestimonial(index)} className="size-2 bg-[#D9D9D9] rounded-full"></button>)
  })


  return (
    <>
      <div className="testimonial relative flex mt-2 overflow-x-scroll snap-x snap-mandatory">
        {renderedTestimonials}
      </div>
      <div className="flex justify-between mx-auto max-w-[75px]">
        {navigationButtons}
      </div>
    </>
  );
}
