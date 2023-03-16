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
        <Navbar fixed='top' dark expand='md'
            style={{ backgroundColor: '#343131' }}
        >
            <NavbarBrand className='ms-5' href='#'>
                <img className="img-fluid img-thumbnail"
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
                            <i className='fa fa-home fa-lg' aria-hidden="true" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/Interests'>
                            <i className='fa fa-snowflake-o fa-lg fa-spin' aria-hidden="true" /> Interests
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/About'>
                            <i className='fa fa-info fa-lg' aria-hidden="true" /> About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    )
}

export default Header;