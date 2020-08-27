import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './layout/Navbar';
import Dashboard from './courses/Dashboard';

import { Provider } from 'react-redux';
import store from '../store'

class App extends Component {

    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="container mb-3">
                    <Dashboard />
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))