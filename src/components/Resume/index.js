import "./index.css"
import { SiStandardresume } from "react-icons/si";

const Resume = () => {
    return <div className="resume-bg">
        <div className="about-top">
            <span className="about-span">Resume</span>
            <SiStandardresume className="about-icon" />
        </div>
        <hr className="hr" />
        <div className="resume-bottom">
            <div className="resume-bottom-left">
                <span className="resume-span">EXPERIENCE</span>
                <div className="resume-flex">
                    <hr className="resume-hr" />
                    <div className="resume-design"></div>
                    <div className="experience">
                        <span className="experience-span">NxtWave intensive 2.0 programme</span>
                        <p className="resume-experience-para">I have hands on Experience on HTML, CSS, JavaScript, Python, SQLite, React JS</p>
                    </div>
                </div>
            </div>
            <div className="resume-bottom-right margin">
                <span className="resume-span" >EDUCATION</span>
                <div className="resume-flex">
                    <hr className="resume-hr" style={{height: "570px"}} />
                    <div className="resume-design"></div>
                    <div className="resume-design" style={{marginTop: "200px"}}></div>
                    <div className="resume-design" style={{marginTop: "330px"}}></div>
                    <div className="resume-design" style={{marginTop: "460px"}}></div>
                    <div className="resume-experience-flex">
                        <div className="experience one">
                            <span className="experience-span">NxtWave intensive 2.0 programme</span>
                            <p className="resume-experience-para">I have hands on Experience on HTML, CSS, JavaScript, Python, SQLite, React JS</p>
                        </div>
                        <div className="experience one">
                            <span className="experience-span">NxtWave intensive 2.0 programme</span>
                            <p className="resume-experience-para">I have hands on Experience on HTML, CSS, JavaScript, Python, SQLite, React JS</p>
                        </div>
                        <div className="experience one">
                            <span className="experience-span">NxtWave intensive 2.0 programme</span>
                            <p className="resume-experience-para">I have hands on Experience on HTML, CSS, JavaScript, Python, SQLite, React JS</p>
                        </div>
                        <div className="experience one">
                            <span className="experience-span">NxtWave intensive 2.0 programme</span>
                            <p className="resume-experience-para">I have hands on Experience on HTML, CSS, JavaScript, Python, SQLite, React JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Resume