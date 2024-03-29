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
                    <hr className="resume-hr" style={{height: "630px"}} />
                    <div className="resume-design"></div>
                    <div className="resume-design" style={{marginTop: "230px"}}></div>
                    <div className="resume-design" style={{marginTop: "380px"}}></div>
                    <div className="resume-design" style={{marginTop: "530px"}}></div>
                    <div className="resume-experience-flex">
                        <div className="experience one">
                            <span className="experience-span">BSc in Mathematics, Physics, Chemistry</span>
                            <p className="resume-experience-para">
                            <span className="college-span"> Time Period : </span> 2019 - 2022 <br />
                            <span className="college-span"> College Name : </span>Sreenivasa Degree college - Kalikiri <br />
                            <span className="college-span"> CGPA : </span>8.6
                            </p>
                        </div>
                        <div className="experience one">
                            <span className="experience-span">Diploma in Elementary Education (D.El.Ed)</span>
                            <p className="resume-experience-para">
                            <span className="college-span"> Time Period : </span> 2017 - 2019 <br />
                            <span className="college-span"> College Name : </span>Sreenivasa DEd college - Kalikiri <br />
                            <span className="college-span"> Percentage : </span> 89%
                            </p>
                        </div>
                        <div className="experience one">
                            <span className="experience-span">Intermediate Education (MPC)</span>
                            <p className="resume-experience-para">
                            <span className="college-span"> Time Period : </span> 2015 - 2017 <br />
                            <span className="college-span"> College Name : </span>S.K.V.N Govt Jr College - Somala <br />
                            <span className="college-span"> Percentage : </span> 93%
                            </p>
                        </div>
                        <div className="experience one">
                            <span className="experience-span">Secondary School Certificate (10th Class)</span>
                            <p className="resume-experience-para">
                            <span className="college-span"> Time Period : </span> 2014 - 2015 <br />
                            <span className="college-span"> College Name : </span>Z.P High School - Somala <br />
                            <span className="college-span"> CGPA : </span> 9.5
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Resume