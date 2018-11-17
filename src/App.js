import React, { Component } from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';
import Shows from './components/Shows/Shows';
import Navigation from './components/Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Navigation />
          <Home />
          <About />
          <Shows />
        </div>
    );
  }
}

export default App;
