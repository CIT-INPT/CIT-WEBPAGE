import { useEffect, useState } from "react";
import citlogo_dark from "./../../../assets/citlogo_dark.svg";
import citlogo_white from "./../../../assets/citlogo_white.svg";
import "./index.scss";
import { themes } from "./../../../helpers/themes";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavbarItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(themes[location.pathname]);
  }, [props, location]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        dark
        style={{ backgroundColor: theme === "dark" ? "#21354D" : "#11bbf5" }}
        expand="lg"
        className="w-100 navbar-dark citnav"
      >
        <div className="container">
          <NavbarBrand>
            <Link className="navbar-brand" to="/">
              <img
                src={theme === "dark" ? citlogo_white : citlogo_dark}
                width="50"
                height="50"
                alt=""
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler
            onClick={toggle}
            style={{
              borderColor: theme === "dark" ? "#fff" : "#21354D",
            }}
            className="navbar-toggler-light"
          />
          <Collapse isOpen={isOpen} navbar id="navbarNav">
            <Nav className="ml-auto links" navbar>
              <NavItem>
                <CustomLink theme={theme} to="/about/">
                  About
                </CustomLink>
              </NavItem>
              <NavItem>
                <CustomLink theme={theme} to="/partners/">
                  Partners
                </CustomLink>
              </NavItem>
              <NavItem>
                <CustomLink theme={theme} to="/events/">
                  Events
                </CustomLink>
              </NavItem>
              <NavItem>
                <CustomLink theme={theme} to="/contact/">
                  Contact
                </CustomLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
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

export default NavbarItem;
