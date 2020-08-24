import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './layout/Navbar';
import Dashboard from './courses/Dashboard';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="container">
                    <Dashboard />
                </div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))