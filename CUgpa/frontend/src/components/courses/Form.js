import React, { Component, Fragment } from 'react'

export class Form extends Component {
    render() {
        return (
            <form className="bg-light p-4 w-50">
                <div className="form-group">
                    <label htmlFor="courseName">Course Name</label>
                    <input type="text" className="form-control" id="courseName" />
                </div>
                <div className="form-group">
                    <label htmlFor="courseCode">Course Code</label>
                    <input type="text" className="form-control" id="courseCode" />
                </div>
                <div className="form-group">
                    <label htmlFor="creditValue">Credit Value</label>
                    <input type="number" className="form-control" id="creditValue" step="0.01" min="0" />
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                    <input type="text" className="form-control" id="grade" />
                </div>
                <div className="form-group">
                    <label htmlFor="gradePoint">Grade Point</label>
                    <input type="number" className="form-control" id="gradePoint" step="0.01" min="0" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }
}

export default Form
