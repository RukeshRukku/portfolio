import "./index.css"
import { AiFillProject } from "react-icons/ai";

const list = [
    {
        imageLink: "1706839005419.png",
        siteLink: "https://rukeshnxttrends.ccbp.tech"
    },
    {
        imageLink: "1706839189538.png",
        siteLink: "https://rukeshnxtwatch.ccbp.tech"
    },
    {
        imageLink: "1706839189547.jpg",
        siteLink: "https://rukeshchatbot.ccbp.tech"
    },
    {
        imageLink: "1706839189555.png",
        siteLink: "https://rukeshfoodmunch.ccbp.tech"
    },
    {
        imageLink: "1706839189563.png",
        siteLink: "https://rukeshtodolist.ccbp.tech"
    },
    {
        imageLink: "1706839189571.png",
        siteLink: "https://rukeshchecking.ccbp.tech"
    },
    {
        imageLink: "1706839189580.png",
        siteLink: "https://rukeshrukesh.ccbp.tech"
    },
    {
        imageLink: "1706839189589.png",
        siteLink: "https://rukeshguditi.ccbp.tech"
    },
    {
        imageLink: "1706839189599.png",
        siteLink: "https://rukesh2000.ccbp.tech"
    },
    {
        imageLink: "1706839189607.png",
        siteLink: "https://rukeshcat.ccbp.tech"
    },
]

const Portfolio = () => {
    return <div className="portfolio-bg">
        <div className="about-top">
            <span className="about-span">My Portfolio</span>
            <AiFillProject className="about-icon" />
        </div>
        <hr className="hr" />
        <div className="portfolio-bottom">
            <ul className="images">
                {
                    list.map(each => <li className="port-list">
                            <a rel="noreferrer" target="_blank" href={each.siteLink}>
                                <img alt="links" src={each.imageLink} className="size" />
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>
}

export default Portfolio