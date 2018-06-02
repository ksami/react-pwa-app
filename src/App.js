import React, { Component } from 'react';
import 'spectre.css';

import { Navbar } from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
      </div>
    );
  }
}

export default App;
