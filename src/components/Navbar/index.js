import "./index.css"
import { FaReact } from "react-icons/fa";
import {Link}  from "react-router-dom";
import {Component} from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";


class Navbar extends Component  {
    state = {clicked: false}

    clickButton = () => {
        const {clicked} = this.state
        this.setState({clicked: !clicked})
    }

    clickButtonFalse = () => {
        this.setState({clicked: false})
    }

    navBottom = () => {
        return <ul className="nav-ul-1">
        <li className="nav-li-1"><Link to="/" className="nav-link-1" onClick={this.clickButton}>HOME</Link></li>
        <li className="nav-li-1"><Link to="/about" className="nav-link-1" onClick={this.clickButton}>ABOUT ME</Link></li>
        <li className="nav-li-1"><Link to="/skills" className="nav-link-1" onClick={this.clickButton}>SKILLS</Link></li>
        <li className="nav-li-1"><Link to="/resume" className="nav-link-1" onClick={this.clickButton}>RESUME</Link></li>
        <li className="nav-li-1"><Link to="/portfolio" className="nav-link-1" onClick={this.clickButton}>PORTFOLIO</Link></li>
        <li className="nav-li-1"><Link to="/contact" className="nav-link-1" onClick={this.clickButton}>CONTACT</Link></li>
    </ul>
    }

    render(){
        const {clicked} = this.state
        return (<nav>
        <div className="flex-nav">
        <Link className="logo-link" to="/" onClick={this.clickButtonFalse}><FaReact className="logo" /></Link>
        <ul className="nav-ul">
            <li className="nav-li"><Link to="/" className="nav-link">HOME</Link></li>
            <li className="nav-li"><Link to="/about" className="nav-link">ABOUT ME</Link></li>
            <li className="nav-li"><Link to="/skills" className="nav-link">SKILLS</Link></li>
            <li className="nav-li"><Link to="/resume" className="nav-link">RESUME</Link></li>
            <li className="nav-li"><Link to="/portfolio" className="nav-link">PORTFOLIO</Link></li>
            <li className="nav-li"><Link to="/contact" className="nav-link">CONTACT</Link></li>
        </ul>
        {clicked ? <button type="button" className="nav-btn" onClick={this.clickButton}><MdOutlineCancel /></button> : <button type="button" className="nav-btn" onClick={this.clickButton}><GiHamburgerMenu /></button>}
        </div>
        {clicked === true && this.navBottom()}
        </nav>)
    }
}

export default Navbar