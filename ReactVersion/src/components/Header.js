import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaHome, FaSnowflake, FaInfo } from "react-icons/fa";
import Dog from "../img/dog.jpeg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar
            fixed="top"
            dark
            expand="md"
            style={{ backgroundColor: "#343131" }}
        >
            <NavbarBrand className="mx-auto" href="#">
                <img
                    className="d-inline-block align-top img-fluid img-thumbnail rounded-circle app-logo"
                    alt="dog"
                    src={Dog}
                    style={{
                        height: 60,
                        float: "left",
                        marginRight: "1rem",
                    }}
                />
                <span
                    className="navbar-brand-text"
                    style={{
                        marginLeft: "5em",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h1 className="fw-bold text-center">Natedoggs SPA</h1>
                </span>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar className="ms-auto">
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            <FaHome size={30} /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/Interests">
                            <FaSnowflake size={30} style={{ animationDuration: "5s" }} />{" "}
                            Interests
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/About">
                            <FaInfo size={30} /> About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
