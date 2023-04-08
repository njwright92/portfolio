import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    Row,
    Col
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FaHome, FaSnowflake, FaInfo } from "react-icons/fa";
import jrDev from "../img/jrDev.jpeg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container className="mx-0 px-0">
            <Row className="mb-0 mx-0 px-0">
                <Navbar
                    fixed="top"
                    dark
                    expand="md"
                    style={{ backgroundColor: "#343131" }}
                >
                    <Col className="d-flex justify-content-start px-0">
                        <NavbarBrand href="#">
                            <img
                                className=" img-fluid rounded-circle px-0 mx-0"
                                alt="JrDev"
                                src={jrDev}
                                style={{ height: '3.3rem'}}
                            />

                        </NavbarBrand>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center mb-0 px-0 mx-0">
                        <h1 className="mb-1 showcase">
                            "Showcase"
                        </h1>
                        <p className="mb-0 headline">
                            <em>
                                "Your best investment is in yourself"
                            </em>
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-end mx-0 px-0">
                        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                        <Collapse isOpen={menuOpen} navbar>
                            <Nav navbar className="ms-auto mx-0 px-0">
                                <NavItem>
                                    <NavLink className="nav-link text-primary" to="/">
                                        <FaHome size={28} /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/Interests">
                                        <FaSnowflake size={28} />
                                        Passions
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-warning" to="/About">
                                        <FaInfo size={28} /> About
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Col>
                </Navbar>
            </Row>
        </Container>
    );
};

export default Header;
