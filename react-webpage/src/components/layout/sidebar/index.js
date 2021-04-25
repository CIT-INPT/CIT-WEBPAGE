import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import "./index.scss";

function Sidebar(props) {


    return (
        <div className="sidebar">
            <ul className="dotslist">
                <li className="dotselement">
                <ScrollLink
                    className="unactiveDot"
                    activeClass="activeDot"
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={2000}
                />
                </li>
                <li className="dotselement">
                <ScrollLink
                    className="unactiveDot"
                    activeClass="activeDot"
                    to="about_us"
                    spy={true}
                    smooth={true}
                    duration={2000}
                />
                </li>
                <li className="dotselement">
                <ScrollLink
                    className="unactiveDot"
                    activeClass="activeDot"
                    to="nos_cellules"
                    spy={true}
                    smooth={true}
                    duration={2000}
                />
                </li>
                <li className="dotselement">
                <ScrollLink
                    className="unactiveDot"
                    activeClass="activeDot"
                    to="nos_partenaires"
                    spy={true}
                    smooth={true}
                    duration={2000}
                />
                </li>
                <li className="dotselement">
                <ScrollLink
                    className="unactiveDot"
                    activeClass="activeDot"
                    to="temoignages"
                    spy={true}
                    smooth={true}
                    duration={2000}
                />
                </li>
                
                
            </ul>

        </div>
    )

}


export default Sidebar;