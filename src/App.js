import React, { Component } from 'react';
import 'spectre.css';
import 'spectre.css/dist/spectre-icons.css';

import { SidebarHider } from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SidebarHider />
      </div>
    );
  }
}

export default App;
