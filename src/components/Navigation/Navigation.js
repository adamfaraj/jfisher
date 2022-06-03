import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './Navigation.css';

export default function Navigation() {
  // const toHome = (e) => {
  //     e.preventDefault();
  //     window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //     })
  // }

  const toSection = (section) => {
      const sectionId = document.getElementById(section);
      sectionId.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>Jourdain Fisher</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="text-white" eventKey={1} href="" onClick={toSection.bind(this, 'about')}>
                About Jourdain
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={2} href="" onClick={toSection.bind(this,'shows')}>
                Shows
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={3} href="" onClick={toSection.bind(this,'videos')}>
                Videos
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={4} href="" onClick={toSection.bind(this,'photos')}>
                Photos
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={5} href="" onClick={toSection.bind(this,'contact')}>
                Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};