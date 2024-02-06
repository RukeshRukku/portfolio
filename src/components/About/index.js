import "./index.css"
import { IoIosInformationCircle } from "react-icons/io";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

const About = () => {
    return <div className="about-bg">
        <div className="about-top">
            <span className="about-span">About Me</span>
            <IoIosInformationCircle className="about-icon" />
        </div>
        <hr className="hr" />
        <div className="about-bottom">
            <div className="about-bottom-left">
                <p className="about-head">Frontened Developer</p>
                <p>My name is Rukesh, Am from chittor dist Andhra Pradesh.
                    I am from weavers Family.
                    I am a front-end developer with 1 years of hands on experience in web development.
                    I am a fresher, I don't have professional experience. I build so many static, responsive and dynamic websites.
                    I am passionate about creating great user experiences and have a strong understanding of usability and accessibility standards.
                    I am proficient in HTML, CSS, and JavaScript, and I have experience with a variety of front-end frameworks and libraries, including React and vite React.
                    I am also familiar with back-end development technologies such as Node.js and Python.
                    I am a team player and I am always willing to learn new things. I am also a good communicator and I am able to clearly explain complex technical concepts to non-technical audiences.
                    In my free time, I enjoy reading, hiking, drawing and spending time with my family and friends.
                </p>
                <hr className="hr" style={{marginTop: "20px", marginBottom: "20px"}} />
                <p className="about-head">Personal Information</p>
                <p className="about-para-span"><span className="para-span">Name:</span> Rukesh Guditi</p>
                <p className="about-para-span"><span className="para-span">Age:</span> 24</p>
                <p className="about-para-span"><span className="para-span">Address:</span> India, Andhra Pradesh, Chittoor</p>
                <p className="about-para-span"><span className="para-span">Email:</span> guditirukesh23@gmail.com</p>
                <p className="about-para-span"><span className="para-span">Contact No:</span> +91 9121076376</p>
            </div>
        <div className="about-bottom-right">
            <ul className="diagram">
                <li className="about-list" style={{"--i": 1}}>
                <BsAndroid2 className="diagram-icons"/>
                </li>
                <li className="about-list" style={{"--i": 2}}>
                <FaApple className="diagram-icons" />
                </li>
                <li className="about-list" style={{"--i": 3}}>
                <FaDatabase className="diagram-icons" />
                </li>
                <li className="about-list" style={{"--i": 4}}>
                <FaDev className="diagram-icons" />
                </li>
            </ul>
        </div>
        </div>
    </div>
}

export default About