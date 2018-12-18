import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { MainContainer, MainContent } from "../components";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route path="/main" component={MainContent} />
            </Switch>
        );
    }
}

export default withRouter(Routes);