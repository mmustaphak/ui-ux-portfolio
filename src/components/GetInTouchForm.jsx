import { useContext, useState } from "react";
import { useFetcher } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import Spinner from "./Spinner.jsx";

export async function action({ request }) {
  const formData = await request.formData();
  formData.append("access_key", import.meta.env.VITE_APP_WEB3FORM_ACCESS_KEY);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    return data.success ? "Message sent successfully ✔" : "Failed to send Email";
  } catch (e) {
    console.error("Failed to send Message to email service", e)
  }

}

export default function GetInTouchForm() {
  const { Form, data } = useFetcher();
  const formResponse = data;
  const [isClicked, setIsClicked] = useState(false);
  const theme = useContext(ThemeContext);

  function SubmissionMessage() {
    if (isClicked) {
      return formResponse ? (
        <p style={{ color: theme }} className="text-xl font-bold">
          {formResponse}
        </p>
      ) : (
        <Spinner />
      );
    }
  }

  function handleClick({ target }) {
    const formData = new FormData(target.form);
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    if (!emailCheck.test(formData.get("email"))) {
      console.log("Wrong Email supplied")
      return
    }
    for (const value of formData.values()) {
      console.log(value)
      if (!value) {
        // empty string
        return;
      }
    }
    setIsClicked(true);
  }

  return (
    <Form
      method="post"
      className="px-4 my-6 flex flex-col mx-auto sm:max-w-[650px] md:max-w-none md:my-8 md:px-8 lg:px-0 lg:my-[50px] lg:w-[90%]"
    >
      <SubmissionMessage />

      <label
        style={{ color: theme }}
        className="block font-medium text-left md:mt-6 lg:text-2xl"
      >
        Name <br />
        <input
          className="text-black w-full py-2 px-4 rounded-[4.29px] font-normal bg-whitish focus:outline-none focus:border focus:border-black placeholder:font-normal md:rounded-lg md:min-h-[52px] lg:mt-4 lg:py-[27px] lg:px-10 lg:focus:border-3 lg:rounded-2xl"
          type="text"
          name="name"
          placeholder="Enter your name here"
          required
        />
      </label>
      <label
        style={{ color: theme }}
        className="block mt-4 font-medium text-left md:mt-6 lg:mt-8 lg:text-2xl"
      >
        Email Address <br />
        <input
          className="text-black w-full py-2 px-4 rounded-[4.29px] font-normal bg-whitish focus:outline-none focus:border focus:border-black placeholder:font-normal md:rounded-lg md:min-h-[52px] lg:mt-4 lg:py-[27px] lg:px-10 lg:focus:border-3 lg:rounded-2xl"
          type="email"
          name="email"
          placeholder="Enter your name here"
          required
        />
      </label>
      <label
        style={{ color: theme }}
        className="block mt-4 font-medium text-left md:mt-6 lg:mt-8 lg:text-2xl"
      >
        Message <br />
        <textarea
          className="text-black w-full min-h-[119px] resize-none py-2 px-4 rounded-[4.29px] font-normal bg-whitish focus:outline-none focus:border focus:border-black placeholder:font-normal md:rounded-lg md:min-h-[270px] lg:mt-4 lg:py-[27px] lg:px-10 lg:focus:border-3 lg:rounded-2xl"
          placeholder="Drop you message here"
          name="message"
          required
        ></textarea>
      </label>

      <button
        onClick={(e) => handleClick(e)}
        style={{ background: theme }}
        className="py-0.5 px-[23px] w-full max-w-[110px] min-[375px]:max-w-[130px] mt-4 font-medium rounded-[3.37px] text-[10.11px] text-white disabled:opacity-50 md:py-2 md:text-[18px] md:rounded-md md:max-w-[280px] md:font-semibold md:mt-6 lg:mt-8 lg:pt-[10px] lg:text-2xl lg:rounded-lg"
        type="submit"
        disabled={formResponse}
      >
        Send
      </button>
    </Form>
  );
}
