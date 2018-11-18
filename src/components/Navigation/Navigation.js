import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Navigation.css';

class Navigation extends React.Component {
        constructor(props) {
            super(props);
        }

    toHome = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    toAbout = () => {
        const about = document.getElementById('about');
        about.scrollIntoView({behavior: 'smooth'});
    }

    toShows = () => {
        const shows = document.getElementById('shows');
        shows.scrollIntoView({behavior: 'smooth'});
    }
    toVideos = () => {
        const videos = document.getElementById('videos');
        videos.scrollIntoView({behavior: 'smooth'});
    }
    toPhotos = () => {
        const photos = document.getElementById('photos');
        photos.scrollIntoView({behavior: 'smooth'});
    }
    toContact = () => {
        const contact = document.getElementById('contact');
        contact.scrollIntoView({behavior: 'smooth'});
    }

    render() {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="" onClick={this.toHome}>Jourdain Fisher</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="" onClick={this.toAbout}>
                            About Jourdain
                        </NavItem>
                        <NavItem eventKey={2} href="" onClick={this.toShows}>
                            Shows
                        </NavItem>
                        <NavItem eventKey={3} href="" onClick={this.toVideos}>
                            Videos
                        </NavItem>
                        <NavItem eventKey={4} href="" onClick={this.toPhotos}>
                            Photos
                        </NavItem>
                        <NavItem eventKey={5} href="" onClick={this.toContact}>
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

export default Navigation;