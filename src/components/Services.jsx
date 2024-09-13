import figma from "../assets/figma.svg";
import Paragraph from "./Paragraph";

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
      "Evaluating the effectiveness of a design through testing with real users, collecting feedback, and making iterative improvements.",
  },
];

const renderedServices = servicesDataArr.map((service) => (
  <div
    key={service.title}
    className="mt-2 py-8 px-4 max-w-[420px] rounded-lg bg-whitish lg:max-w-none  lg:px-[38px] lg:pt-8 lg:pb-[59px]"
  >
    <img className="mx-auto lg:size-[109px]" src={figma} alt=" " />
    <h2 className="font-medium text-[13.3px] text-black mt-[18px] md:text-lg lg:mt-8 lg:text-[1.5rem]">
      {service.title}
    </h2>
    <Paragraph ClassName="!text-[0.738rem] lg:!mt-4 lg:!text-[1.25rem]">
      {service.description}
    </Paragraph>
  </div>
));

export default function Services() {
  return (
    <>
      <h1 className="text-black font-semibold md:text-2xl lg:text-[2.5rem]">
        My Services
      </h1>
      <Paragraph>
        Transforming visions into captivating realities where design meets
        innovation for an exceptional UI/UX journey.
      </Paragraph>
      
      <div className="grid mx-auto mt-2  justify-center md:grid-cols-2 md:gap-5 md:max-w-[700px] lg:max-w-none lg:gap-10 lg:mt-8">
        {renderedServices}
      </div>
    </>
  );
}
