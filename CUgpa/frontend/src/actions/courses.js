import axios from 'axios';
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_COURSES, DELETE_COURSE, ADD_COURSE, CALCULATE_GPA } from './types'

//GET COURSES
export const getCourses = () => (dispatch, getState) => {
    axios.get('api/courses/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_COURSES,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//DELETE COURSE
export const deleteCourse = (id) => (dispatch, getState) => {
    axios.delete(`api/courses/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteCourse: "Course Deleted" }))
            dispatch({
                type: DELETE_COURSE,
                payload: id
            })
        }).catch(err => console.log(err))
}

//ADD COURSE
export const addCourse = (course) => (dispatch, getState) => {
    axios.post("api/courses/", course, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addCourse: "Course Added" }))
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

//CALCULATE GPA
export const calculateGPA = (courses) => dispatch => {
    let totalCred = 0
    let total_grade_points = 0

    for (const i in courses) {
        totalCred += courses[i].creditValue
        total_grade_points += courses[i].gradePoint
    }

    if (totalCred == 0)
        totalCred = 1

    let gpa = total_grade_points / totalCred
    dispatch({
        type: CALCULATE_GPA,
        payload: gpa
    })
}