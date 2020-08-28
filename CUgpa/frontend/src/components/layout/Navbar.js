import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5 p-4">
                <div className="container">
                    <a className="navbar-brand" href="#">CUgpa</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/register" className="nav-link" href="#">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" href="#">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar

