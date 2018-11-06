import React, { Component } from 'react';
import { FirstVisit, MainContainer } from './components';
import './common.css';
import './commonPage.css';

/** Used to hold "this" refrence. */
let self;

class App extends Component {
  constructor(props) {
    super(props);
    /** Assigned value of "this" to self. */
    self = this;
    this.state = { switch: false }
  }

  render() {
    return (
        <MainContainer />
    );
  }
}

export default App;
