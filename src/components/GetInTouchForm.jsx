import { Form } from "react-router-dom";

export default function GetInTouchForm() {
  return (
    <Form>
        <label>
            Name
                <input type="text" name="" id="" placeholder="Enter your name here" />
        </label>
        <label>
            Email Address
                <input type="text" name="" id="" placeholder="Enter your name here" />
        </label>
        <label>
            Message
                <textarea placeholder="Drop you message here"></textarea>
        </label>

        <button type="submit">Send</button>
    </Form>
  )
}