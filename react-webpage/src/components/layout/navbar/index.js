import React, { useEffect, useState } from "react";
import citlogo_dark from "./../../../assets/citlogo_dark.svg";
import citlogo_white from "./../../../assets/citlogo_white.svg";
import "./index.scss"
import { themes } from './../../../helpers/themes';
import {Link, useLocation} from 'react-router-dom';

// TODO A changer, aykhsskom tsawbo plusieurs composants, machi b darora tktbo style kif ktebt hna
const Navbar = (props) => {
    const location = useLocation();
    const [theme, setTheme] = useState('dark');
    
    useEffect(() => {
        setTheme(themes[location.pathname]);
    }, [props, location])

    return (
        <nav className="navbar navbar-dark navbar-expand-lg w-100 citnav">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={theme === 'dark' ? citlogo_white : citlogo_dark} width="50" height="50" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav links">
                        <Link className="nav-link link" style={theme === 'dark' ? { color: "white" } : { color: "#0a1f3b" }} to="/about/" >
                            About
                        </Link>
                        <Link className="nav-link link" style={theme === 'dark' ? { color: "white" } : { color: "#0a1f3b" }} to="/about/" >
                            Partners
                        </Link>
                        <Link className="nav-link link" style={theme === 'dark' ? { color: "white" } : { color: "#0a1f3b" }} to="/about/" >
                            Events
                        </Link>
                        <Link className="nav-link link" style={theme === 'dark' ? { color: "white" } : { color: "#0a1f3b" }} to="/about/" >
                            Contact
                        </Link>
                    </ul>
                </div>

            </div>

        </nav>

    );
};

export default Navbar;
