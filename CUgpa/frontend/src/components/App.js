import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

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

import { Provider } from 'react-redux';
import store from '../store'

class App extends Component {

    render() {
        return (
            <Fragment>
                <Navbar />
                <Alerts />
                <div className="container mb-3">
                    <Dashboard />
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<Provider store={store}><AlertProvider template={AlertTemplate}{...alertOptions}><App /></AlertProvider></Provider>, document.getElementById('app'))