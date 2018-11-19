import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shows from './components/Shows/Shows';
import Videos from './components/Videos/Videos';
import Photos from './components/Photos/Photos';
import Contact from './components/Contact/Contact';

import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("Created by Adam Faraj");
    console.log("Why are you looking at the console?");
  }

  render() {
    return (
        <div>
          <Navigation />
          <Home />
          <About />
          <Shows />
          <Videos />
          <Photos />
          <Contact />
        </div>
    );
  }
}

export default App;
