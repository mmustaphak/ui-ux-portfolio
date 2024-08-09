import { Form } from "react-router-dom";

/*Add the poppins font
figure out how to push the submit button to the left*/

export default function GetInTouchForm() {
  return (
    <Form className="p-4 flex flex-col">
        <label className="block text-left text-black">
            Name <br />
                <input className="w-full py-2 px-4 rounded-[4.29px] bg-whitish focus:outline-none focus: border focus:border-black" type="text" placeholder="Enter your name here" />
        </label>
        <label className="block mt-4 text-left text-black">
            Email Address <br />
                <input className="w-full py-2 px-4 rounded-[4.29px] bg-whitish focus:outline-none focus: border focus:border-black" type="email"  placeholder="Enter your name here" />
        </label> 
        <label className="block mt-4 text-left text-black">
            Message <br />
                <textarea className="w-full min-h-[119px] resize-none py-2 px-4 rounded-[4.29px] bg-whitish focus:outline-none focus: border focus:border-black" placeholder="Drop you message here"></textarea>
        </label>

        <button className="self-start py-1 px-[52px] mt-4 rounded-[3.37px] text-[10.11px] text-white bg-black" type="submit">Send</button>
    </Form>
  )
}