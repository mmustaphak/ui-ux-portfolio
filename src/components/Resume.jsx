import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Resume() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ background: theme }}
      className="mt-6 mx-auto py-3 px-4 flex justify-between items-center rounded-[4px] text-white sm:max-w-[600px] md:max-w-none md:py-8 md:px-10 md:rounded-lg lg:mt-[50px] lg:px-[60px] lg:rounded-2xl lg:py-[45px]"
    >
      <p className="font-medium text-[8.58px] md:text-xl md:leading-[normal] lg:text-[1.4rem] min-[1134px]:text-[2rem]">
        Hey! Take a look at my resume
      </p>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/12bJDUx3-dgmwgQYxRTSM8DQV7K72gTL5/view"
        className="py-0.5 px-[23px] w-full max-w-[110px] min-[375px]:max-w-[130px] rounded-[2.14px] text-[6.43px] font-medium border border-white md:border-2 md:px-0 md:rounded-md md:text-xl md:py-1 md:max-w-[280px] lg:text-[1.25rem] lg:py-[10px] lg:max-w-[409px] lg:border-3 lg:text-2xl lg:rounded-lg "
      >
        Download Resume
      </a>
    </div>
  );
}
