import figma from "../assets/figma.svg";

const servicesDataArr = [
  {
    title: "User Research and Analysis",
    description:
      "Understanding user needs and behaviors through methods like surveys and interviews to inform design decisions and create user personas.",
  },
  {
    title: "Wireframing and Prototyping",
    description:
      "Creating wireframes and prototypes to plan and test the structure and functionality of a digital interface before final design implementation.",
  },
  {
    title: "Visual Design",
    description:
      "Crafting the aesthetic elements of a digital interface, including color, typography, and imagery, to ensure a visually appealing.",
  },
  {
    title: "Usability Testing and Iteration",
    description:
      "Crafting the aesthetic elements of a digital interface, including color, typography, and imagery, to ensure a visually appealing.",
  },
  {
    title: "Usability Testing and Iteration",
    description:
      "Evaluating the effectiveness of a design through testing with real users, collecting feedback, and making iterative improvements.",
  },
];

const renderedServices = servicesDataArr.map((service) => (
  <div key={service.title} className="mt-2 py-8 px-5 rounded-lg bg-whitish">
    <img className="mx-auto" src={figma} alt=" " />
    <h2 className="font-medium text-[13.3px] text-black mt-[18px]">
      {service.title}
    </h2>
    <p className="text-[13.3px] mt-2">{service.description}</p>
  </div>
));

export default function Services() {
  return (
    <>
      <h1 className="text-black font-semibold">My Services</h1>
      <p>
        Transforming visions into captivating realities where design meets
        innovation for an exceptional UI/UX journey.
      </p>
      {renderedServices}
    </>
  );
}
