import React, { useEffect, useState } from "react";
import citlogo_dark from "./../../../assets/citlogo_dark.svg";
import citlogo_white from "./../../../assets/citlogo_white.svg";
import "./index.scss";
import { themes } from "./../../../helpers/themes";
import { Link, useLocation } from "react-router-dom";

// TODO A changer, aykhsskom tsawbo plusieurs composants, machi b darora tktbo style kif ktebt hna
const Navbar = (props) => {
  const location = useLocation();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(themes[location.pathname]);
  }, [props, location]);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg w-100 citnav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={theme === "dark" ? citlogo_white : citlogo_dark}
            width="50"
            height="50"
            alt=""
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav links">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

/**
 * Un refactoring du composant Link
 */
const CustomLink = ({ theme, to, children }) => {
  return (
    <Link
      className="nav-link link"
      style={theme === "dark" ? { color: "white" } : { color: "#0a1f3b" }}
      to={to}
    >
      {children}
    </Link>
  );
};

export default Navbar;
