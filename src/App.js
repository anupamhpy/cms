import React, { Component } from 'react';
import { FirstVisit, Shop } from './components';
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
      // <div className="App">
        <Shop />
      // </div>
    );
  }
}

export default App;
