import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses, deleteCourse } from '../../actions/courses.js'


export class Courses extends Component {

    static propTypes = {
        courses: PropTypes.array.isRequired,
        getCourses: PropTypes.func.isRequired,
        deleteCourse: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getCourses();
    }

    render() {
        return (
            <Fragment>
                <h1>The course list</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Course Title</th>
                            <th>Course Code</th>
                            <th>Credit Value</th>
                            <th>Grade</th>
                            <th>Quality Points</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.courseName}</td>
                                <td>{course.courseCode}</td>
                                <td>{course.creditValue}</td>
                                <td>{course.grade}</td>
                                <td>{course.gradePoint}</td>
                                <td><button onClick={this.props.deleteCourse.bind(this, course.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToprops = state => ({
    courses: state.courses.courses
})

export default connect(mapStateToprops, { getCourses, deleteCourse })(Courses)
