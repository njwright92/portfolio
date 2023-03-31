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
        <Navbar fixed='top' dark expand='md' style={{ backgroundColor: '#343131' }}>
            <NavbarBrand className='mx-auto' href='#'>
                <img
                    className="d-inline-block align-top img-fluid img-thumbnail rounded-circle app-logo"
                    alt="dog"
                    src={Dog}
                    style={{
                        height: 80,
                        float: 'left',
                        marginRight: '3rem',
                    }}
                />
                <span className='navbar-brand-text' style={{ marginLeft: '10em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 className='fw-bold text-center'>Natedoggs SPA</h1>
                </span>

            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav navbar className='ms-auto'>
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
