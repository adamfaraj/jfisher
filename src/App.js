import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shows from './components/Shows/Shows';
import Videos from './components/Videos/Videos';
import Photos from './components/Photos/Photos';
import Contact from './components/Contact/Contact';

import scrollToComponent from 'react-scroll-to-component';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Navigation />
          <Home />
          <About />
          <Shows ref={(section) => { this.Shows = section; }} />
          <Videos className="scrollToHere"/>
          <Photos />
          <Contact />
        </div>
    );
  }
}

export default App;
