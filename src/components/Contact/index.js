import "./index.css"
import { BiSolidContact } from "react-icons/bi";

const Contact = () => {
    return <div className="contact-bg">
        <div className="about-top">
            <span className="about-span">Contact Me</span>
            <BiSolidContact className="about-icon" />
        </div>
        <hr className="hr" />
        <div className="contact-bottom">
            <span className="contact-span">LETS TALK</span>
            <form type="submit">
                <div className="contact-flex">
                    <input type="text" className="input" placeholder="Enter Your Name" />
                    <input type="text" className="input input1" placeholder="Enter Your Email" />
                </div>
                <textarea rows="10"  className="input-textarea" placeholder="Description"></textarea>
                <input type="submit" className="contact-btn" value="Submit" />
            </form>
        </div>
    </div>
}

export default Contact