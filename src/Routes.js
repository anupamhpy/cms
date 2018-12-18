import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';


/** Import all components here. */
import { FirstVisit, Shop } from './components/index';

class Routes extends Component {
    render() {
        return (
            <div className="col main-container">
                <Switch>
                    <Route path={`/FirstVisit`} component={FirstVisit} />
                </Switch>
            </div>)
    }
}

export default withRouter(Routes);