import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;

        if (error !== prevProps.error) {
            if (error.msg.courseName) {
                alert.error(`Course Name: ${error.msg.courseName.join()}`)
            }
            if (error.msg.courseCode) {
                alert.error(`Course Code: ${error.msg.courseCode.join()}`)
            }
            if (error.msg.creditValue) {
                alert.error(`Credit Value: ${error.msg.creditValue.join()}`)
            }
            if (error.msg.grade) {
                alert.error(`Grade: ${error.msg.grade.join()}`)
            }
            if (error.msg.gradePoint) {
                alert.error(`Grade Point: ${error.msg.gradePoint.join()}`)
            }
        }

        if (message !== prevProps.message) {
            if (message.deleteCourse) {
                alert.success(message.deleteCourse)
            }
            if (message.addCourse) {
                alert.success(message.addCourse)
            }
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))
