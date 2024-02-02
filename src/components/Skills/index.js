import "./index.css"
import { GiSkills } from "react-icons/gi";

const Skills = () => {
    return <div className="skills-bg">
        <div className="about-top">
            <span className="about-span">Skills</span>
            <GiSkills className="about-icon" />
        </div>
        <hr className="hr" />
        <div className="skills-bottom">
            <div className="skills">
                <span className="skills-span">FRONTENED</span>
                <div className="skills-bottom-bottom">
                    <span className="sub-skills-span">HTML</span>
                    <div className="bar" ><div className="inner" style={{"--i": "90%"}}></div></div>
                </div>
                <div className="skills-bottom-bottom">
                    <span className="sub-skills-span">CSS</span>
                    <div className="bar"><div className="inner" style={{"--i": "80%"}}></div></div>
                </div>
                <div className="skills-bottom-bottom">
                    <span className="sub-skills-span">JAVASCRIPT</span>
                    <div className="bar"><div className="inner" style={{"--i": "70%"}}></div></div>
                </div>
                <div className="skills-bottom-bottom">
                    <span className="sub-skills-span">REACT JS</span>
                    <div className="bar"><div className="inner" style={{"--i": "60%"}}></div></div>
                </div>
            </div>
            <div className="skills">
                <span className="skills-span">BACKEND</span>
                <div className="skills-bottom-bottom">
                    <span className="sub-skills-span">PYTHON</span>
                    <div className="bar"><div className="inner" style={{"--i": "70%"}}></div></div>
                </div>
            </div>
            <div className="skills">
                <span className="skills-span">DATABASES</span>
                <div className="skills-bottom-bottom">
                    <span className="sub-skills-span">SQLITE</span>
                    <div className="bar"><div className="inner" style={{"--i": "60%"}}></div></div>
                </div>
            </div>
        </div>
    </div>
}

export default Skills