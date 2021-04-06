import React, { useEffect, useState } from "react";
import citlogo_dark from "./../../../assets/citlogo_dark.svg";
import citlogo_white from "./../../../assets/citlogo_white.svg";
import "./index.scss";
import { themes } from "../../../helpers/themes";
import { Link, useLocation } from "react-router-dom";
// bach tkhdem had icons khask d5el "npm install react-icons"
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

// TODO A changer, aykhsskom tsawbo plusieurs composants, machi b darora tktbo style kif ktebt hna
const Footer = (props) => {
    const location = useLocation();
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        setTheme(themes[location.pathname]);
    }, [props, location]);

    return (

        <div className="Footer-Box">

            <div className="Footer-Container">
                <div className="Footer-Row">
                    <div className="Footer-Column">

                        <div className="Footer-Heading">Links :</div>
                        <CustomLink theme={theme} to="/about/">
                            About
            </CustomLink>
                        <CustomLink theme={theme} to="/partners/">
                            Partners
            </CustomLink>
                        <CustomLink theme={theme} to="/events/">
                            Events
            </CustomLink>
                        <CustomLink theme={theme} to="/contact/">
                            Contact
            </CustomLink>
                    </div>
                    <div className="Footer-Column">
                        <div className="Footer-Heading">Events :</div>
                        <CustomLink theme={theme} to="/IDEH/">
                            IDEH
            </CustomLink>
                        <CustomLink theme={theme} to="/JNJD/">
                            JNJD
            </CustomLink>
                    </div>
                    <div className="Footer-icons">
                        <div className="Footer-Heading">Get in touch by following us on social media :</div>
                        <div className="FooterIcons">
                            <a target="_blank" href="https://www.facebook.com/CIT.INPT">
                                <FaFacebook className="icon" size="2.5em" color="#0a4996"></FaFacebook>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/cit.inpt/">
                                <FaInstagram className="icon" size="2.5em" color="#c20079"></FaInstagram>
                            </a>
                            <a className="icon" target="_blank" href="#">
                                <FaTwitter className="icon" size="2.5em" color="#1c9cea"></FaTwitter>
                            </a>
                            <a className="icon" target="_blank" href="https://www.linkedin.com/company/cit-inpt">
                                <FaLinkedin className="icon" size="2.5em" color="#01649b" ></FaLinkedin>
                            </a>
                        </div>

                    </div>

                    <div className="Footer-Column">
                        <Link className="navbar-brand" to="/">
                            <img
                                src={theme === "dark" ? citlogo_white : citlogo_dark}
                                width="200"
                                height="200"

                                alt=""
                            />
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

/**
 * Un refactoring du composant Link
 */
const CustomLink = ({ theme, to, children }) => {
    return (
        <Link
            className="FooterLink"
            style={theme === "dark" ? { color: "white" } : { color: "#0a1f3b" }}
            to={to}
        >
            {children}
        </Link>
    );
};

export default Footer;


