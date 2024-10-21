import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

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

export default function Services() {
  const theme = useContext(ThemeContext);

  function ServiceCard({ title, description }) {
    const theme = useContext(ThemeContext);

    return (
      <div className="py-8 px-5 max-w-[420px] rounded-lg bg-whitish lg:max-w-none  lg:px-[38px] lg:pt-8 lg:pb-[59px]">
        <svg
          className="mx-auto lg:size-[109px]"
          width="68"
          height="67"
          viewBox="0 0 68 67"
          fill="none"
          version="1.1"
          id="svg3"
        >
          <circle
            cx="34.223"
            cy="33.2991"
            r="31.747"
            stroke="url(#paint0_linear_518_910)"
            strokeWidth="3.08224"
            id="circle1"
          />
          <circle
            cx="34.2231"
            cy="33.2992"
            r="26.5072"
            fill={theme}
            id="circle2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m 32.237186,30.655389 c -0.29275,0 -0.58262,0.05766 -0.85308,0.16969 -0.27046,0.11203 -0.5162,0.27623 -0.7232,0.48323 -0.207,0.207 -0.37121,0.45272 -0.48323,0.72322 -0.11203,0.2704 -0.16969,0.5603 -0.16969,0.8531 0,0.2927 0.05766,0.5826 0.16969,0.853 0.11202,0.2705 0.27623,0.5162 0.48323,0.7232 0.207,0.207 0.45274,0.3712 0.7232,0.4833 0.27046,0.112 0.56033,0.1697 0.85308,0.1697 h 2.22915 v -2.1844 c -3e-4,-0.0299 -3e-4,-0.0598 0,-0.0897 v -2.18434 z m 2.22915,-1.29454 h -2.22915 c -0.59134,0 -1.15845,-0.23491 -1.57659,-0.65304 -0.41814,-0.41814 -0.65304,-0.98525 -0.65304,-1.57659 0,-0.59133 0.2349,-1.15845 0.65304,-1.57658 0.41814,-0.41814 0.98525,-0.65305 1.57659,-0.65305 h 2.22915 z m 1.2946,-4.45926 v 4.45926 h 2.2292 c 0.5837,-0.01148 1.1397,-0.25144 1.5484,-0.66832 0.4088,-0.41689 0.6378,-0.97746 0.6378,-1.56131 0,-0.58385 -0.229,-1.14442 -0.6378,-1.5613 -0.4087,-0.41689 -0.9647,-0.65684 -1.5484,-0.66833 z m 2.2292,5.75294 c -0.5852,-8e-5 -1.1469,0.22992 -1.5639,0.64036 -0.4171,0.41044 -0.656,0.96834 -0.6653,1.55344 v 0.0716 c 0.0071,0.4393 0.1439,0.8667 0.3932,1.2285 0.2492,0.3618 0.5998,0.6419 1.0077,0.805 0.4079,0.1632 0.855,0.2022 1.285,0.1121 0.43,-0.09 0.8238,-0.3051 1.1319,-0.6183 0.3082,-0.3131 0.5169,-0.7104 0.6,-1.1418 0.0831,-0.4314 0.0369,-0.8777 -0.1328,-1.2829 -0.1697,-0.4053 -0.4554,-0.7513 -0.8212,-0.99469 -0.3658,-0.24338 -0.7953,-0.37325 -1.2346,-0.37331 z m -5.75295,5.7538 c -0.4411,-2e-4 -0.87235,0.1305 -1.23919,0.3754 -0.36685,0.2449 -0.65281,0.5932 -0.82174,1.0007 -0.16892,0.4074 -0.2132,0.8558 -0.12725,1.2885 0.08595,0.4326 0.29827,0.8301 0.61012,1.142 0.31184,0.312 0.7092,0.5245 1.14181,0.6106 0.43262,0.0861 0.88105,0.042 1.28859,-0.1268 0.40754,-0.1687 0.75588,-0.4545 1.00101,-0.8213 0.245,-0.3667 0.3758,-0.7979 0.3758,-1.239 v -2.2301 z"
            fill="#ffffff"
            id="path1"
          />
          <defs id="defs3">
            <linearGradient
              id="paint0_linear_518_910"
              x1="34.223"
              y1="-48.6884"
              x2="34.223"
              y2="107.889"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#505050" id="stop2" />
              <stop offset="1" stopColor="#505050" stopOpacity="0" id="stop3" />
            </linearGradient>
          </defs>
        </svg>

        <h2
          style={{ color: theme }}
          className="font-medium text-[13.3px] mt-[18px] md:text-lg lg:mt-8 lg:text-[1.5rem]"
        >
          {title}
        </h2>
        <p className="text-[13.3px] mt-2 lg:mt-4 lg:text-[1.25rem]">
          {description}
        </p>
      </div>
    );
  }

  const renderedServices = servicesDataArr.map((service) => (
    <ServiceCard key={service.title} {...service} />
  ));

  return (
    <>
      <h1
        style={{ color: theme }}
        className="font-semibold md:text-2xl lg:text-[2.5rem]"
      >
        My Services
      </h1>
      <p className="mt-2 text-[0.75rem] mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]">
        Transforming visions into captivating realities where design meets
        innovation for an exceptional UI/UX journey.
      </p>
      <div className="grid gap-4 mx-auto mt-2 justify-center md:grid-cols-2 md:gap-5 md:max-w-[700px] lg:max-w-none lg:gap-10 lg:mt-8">
        {renderedServices}
      </div>
    </>
  );
}
