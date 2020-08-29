import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { calculateGPA } from '../../actions/courses'

class Gpa extends Component {

    static propTypes = {
        courses: PropTypes.array.isRequired
    }

    render() {
        return (

            <div className="card d-inline-block align-self-center bg-dark text-light">
                <div className="card-body">
                    Your overall GPA is: <br></br>
                    {this.props.calculateGPA(this.props.courses)}
                    <p className="text-center">{this.props.gpa}</p>
                </div>
            </div>
        )
    }
}

const mapStateToprops = state => ({
    courses: state.courses.courses,
    gpa: state.courses.gpa
})

export default connect(mapStateToprops, { calculateGPA })(Gpa)
