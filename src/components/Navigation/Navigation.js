import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Jourdain Fisher</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#about">
                        About Jourdain
                    </NavItem>
                    <NavItem eventKey={2} href="#shows">
                        Shows
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        Videos
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        Photos
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        Contact
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;