import React, { Component } from 'react';
import { FirstVisit, MainContainer } from './components';
import './common.css';
import './commonPage.css';

import Routes from './utilities/routes';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default App;
