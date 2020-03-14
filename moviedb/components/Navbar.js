import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const NavbarMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="ml-md-5" href="/">Moviedb</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">TV Show</NavLink>
                        </NavItem>

                    </Nav>
                    <NavbarText className="mr-4">Login</NavbarText>
                    <NavbarText className="mr-5">Register</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarMenu;