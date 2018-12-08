import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Navigation.css';

class Navigation extends React.Component {
    toHome = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    toSection(section) {
        const sectionId = document.getElementById(section);
        sectionId.scrollIntoView({behavior: 'smooth'})
    }

    render() {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <button href="" onClick={this.toHome}>Jourdain Fisher</button>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="" onClick={this.toSection.bind(this, 'about')}>
                            About Jourdain
                        </NavItem>
                        <NavItem eventKey={2} href="" onClick={this.toSection.bind(this,'shows')}>
                            Shows
                        </NavItem>
                        <NavItem eventKey={3} href="" onClick={this.toSection.bind(this,'videos')}>
                            Videos
                        </NavItem>
                        <NavItem eventKey={4} href="" onClick={this.toSection.bind(this,'photos')}>
                            Photos
                        </NavItem>
                        <NavItem eventKey={5} href="" onClick={this.toSection.bind(this,'contact')}>
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

export default Navigation;