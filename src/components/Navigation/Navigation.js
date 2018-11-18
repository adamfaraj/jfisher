import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import scrollToComponent from 'react-scroll-to-component';
import './Navigation.css';

class Navigation extends React.Component {

    componentDidMount() {
        // scrollToComponent()
    }

    render() {

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
                        <NavItem eventKey={2} href="#shows" onClick={() => scrollToComponent(this.Shows)}>
                            Shows
                        </NavItem>
                        <NavItem eventKey={3} href="#videos">
                            Videos
                        </NavItem>
                        <NavItem eventKey={4} href="#photos">
                            Photos
                        </NavItem>
                        <NavItem eventKey={5} href="#contact">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;