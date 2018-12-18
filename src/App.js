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
      <div className="App">
        {/* Button to Display/Hide First component */}
        {/* <button className="displayHideButton" onClick={() => self.setState({ switch: !self.state.switch })}>
          {self.state.switch && "Hide"}
          {!self.state.switch && "Display"}
        </button> */}

        {/* First Component, displays when switch value is true */}
        {self.state.switch && <FirstVisit />}
        {/* Second Component, displays always */}
        <Shop />

      </div>
    );
  }
}

export default App;
