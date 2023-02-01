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
import Dog from '../img/dog.jpeg';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className="my-2" fixed='top' dark expand='md'
            style={{ backgroundColor: '#343131' }}
        >
            <NavbarBrand href="/">
                <img className="img-fluid"
                    alt="dog"
                    src={Dog}
                    style={{
                        height: 80
                    }}
                />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/Interests'>
                            <i className='fa fa-snowflake-o fa-lg fa-spin' /> Interests
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/About'>
                            <i className='fa fa-briefcase fa-lg' /> About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    )
}

export default Header;