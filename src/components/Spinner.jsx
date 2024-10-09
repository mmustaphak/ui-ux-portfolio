import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Spinner() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ borderColor: theme }}
      className="animate-[spinner_1s_infinite_0s_linear] mx-auto mt-4 size-4 border-x-2 border-t-2 rounded-full md:size-12"
    ></div>
  );
}
