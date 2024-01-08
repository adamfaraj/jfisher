import React from 'react';
import Container from 'react-bootstrap/Container';


import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shows from './components/Shows/Shows';
import Videos from './components/Videos/Videos';
import Photos from './components/Photos/Photos';
import Contact from './components/Contact/Contact';

import './App.css';

export default function App() {
    return (
        <Container fluid>
          <Navigation />
          <Home />
          <About />
          <Shows />
          <Videos />
          <Photos />
          <Contact />
        </Container>
    );
  }
