import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export class Navbar extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav">
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}` : ''}</strong>
                </span>
                <li className="nav-item">
                    <button onClick={this.props.logout} className="nav-link btn btn-danger btn-sm text-light">
                        Logout
          </button>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
          </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
          </Link>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5 p-4">
                <div className="container">
                    <a className="navbar-brand" href="#">CUgpa</a>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

