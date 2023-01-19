import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import Dog from '../assets/img/dog.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className="my-2" color='success' fixed='top' dark expand='md'>
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
                <Nav className='mx-auto' navbar>
                    <NavItem>

                        <i className='fa fa-home fa-lg' /> Home

                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header