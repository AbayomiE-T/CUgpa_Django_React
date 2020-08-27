import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addCourse } from '../../actions/courses'

export class Form extends Component {
    state = {
        courseName: '',
        courseCode: '',
        creditValue: '',
        grade: '',
        gradePoint: ''
    }

    static propTypes = {
        addCourse: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = e => {
        e.preventDefault();
        const { courseName, courseCode, creditValue, grade, gradePoint } = this.state
        const course = { courseName, courseCode, creditValue, grade, gradePoint }

        this.props.addCourse(course)
        this.setState({
            courseName: '',
            courseCode: '',
            creditValue: '',
            grade: '',
            gradePoint: ''
        })
    }

    render() {
        const { courseName, courseCode, creditValue, grade, gradePoint } = this.state

        return (
            <form onSubmit={this.onSubmit} className="bg-light p-4 w-50">
                <div className="form-group">
                    <label htmlFor="courseName">Course Name</label>
                    <input type="text" className="form-control" name="courseName" onChange={this.onChange} value={courseName} />
                </div>
                <div className="form-group">
                    <label htmlFor="courseCode">Course Code</label>
                    <input type="text" className="form-control" name="courseCode" onChange={this.onChange} value={courseCode} />
                </div>
                <div className="form-group">
                    <label htmlFor="creditValue">Credit Value</label>
                    <input type="number" className="form-control" name="creditValue" step="0.01" min="0" onChange={this.onChange} value={creditValue} />
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                    <input type="text" className="form-control" name="grade" onChange={this.onChange} value={grade} />
                </div>
                <div className="form-group">
                    <label htmlFor="gradePoint">Grade Point</label>
                    <input type="number" className="form-control" name="gradePoint" step="0.01" min="0" onChange={this.onChange} value={gradePoint} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }
}

export default connect(null, { addCourse })(Form)
