import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

//Alert Options
const alertOptions = {
    timeout: 3000,
    position: "top center"
}

import Navbar from './layout/Navbar';
import Dashboard from './courses/Dashboard';
import Alerts from './layout/Alerts'
import Login from './accounts/Login';
import Register from './accounts/Register'
import PrivateRoute from './common/PrivateRoute'

import { Provider } from 'react-redux';
import store from '../store'
import { loadUser } from '../actions/auth';

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Alerts />
                    <div className="container mb-3">
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

ReactDOM.render(<Provider store={store}><AlertProvider template={AlertTemplate}{...alertOptions}><App /></AlertProvider></Provider>, document.getElementById('app'))