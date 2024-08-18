import { Form } from "react-router-dom";

/*Add the poppins font
figure out how to push the submit button to the left*/

export default function GetInTouchForm() {
  return (
    <Form className="px-4 my-6 flex flex-col mx-auto md:my-8 md:px-8 lg:px-0 lg:my-[50px] lg:w-[90%]">
      <label className="block font-medium text-left text-black md:mt-6 lg:text-2xl">
        Name <br />
        <input
          className="w-full py-2 px-4 rounded-[4.29px] font-normal bg-whitish focus:outline-none focus:border focus:border-black placeholder:font-normal md:rounded-lg md:min-h-[52px] lg:mt-4 lg:py-[27px] lg:px-10 lg:focus:border-3 lg:rounded-2xl"
          type="text"
          placeholder="Enter your name here"
        />
      </label>
      <label className="block mt-4 font-medium text-left text-black md:mt-6 lg:mt-8 lg:text-2xl">
        Email Address <br />
        <input
          className="w-full py-2 px-4 rounded-[4.29px] font-normal bg-whitish focus:outline-none focus:border focus:border-black placeholder:font-normal md:rounded-lg md:min-h-[52px] lg:mt-4 lg:py-[27px] lg:px-10 lg:focus:border-3 lg:rounded-2xl"
          type="email"
          placeholder="Enter your name here"
        />
      </label>
      <label className="block mt-4 font-medium text-left text-black md:mt-6 lg:mt-8 lg:text-2xl">
        Message <br />
        <textarea
          className="w-full min-h-[119px] resize-none py-2 px-4 rounded-[4.29px] font-normal bg-whitish focus:outline-none focus:border focus:border-black placeholder:font-normal md:rounded-lg md:min-h-[270px] lg:mt-4 lg:py-[27px] lg:px-10 lg:focus:border-3 lg:rounded-2xl"
          placeholder="Drop you message here"
        ></textarea>
      </label>

      <button
        className="py-0.5 px-[23px] w-full max-w-[110px] min-[375px]:max-w-[130px] mt-4 font-medium rounded-[3.37px] text-[10.11px] text-white md:py-2 md:text-[18px] md:rounded-md md:max-w-[280px] bg-black md:font-semibold md:mt-6 lg:mt-8 lg:pt-[10px] lg:text-2xl lg:rounded-lg"
        type="submit"
      >
        Send
      </button>
    </Form>
  );
}
