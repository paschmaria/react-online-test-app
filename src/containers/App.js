import React, { Component } from 'react';

import Header from '../components/header';
import Section from '../components/section';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;