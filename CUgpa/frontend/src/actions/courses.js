import axios from 'axios';
import { createMessage } from './messages'

import { GET_COURSES, DELETE_COURSE, ADD_COURSE, GET_ERRORS } from './types'

//GET COURSES
export const getCourses = () => dispatch => {
    axios.get('api/courses/')
        .then(res => {
            dispatch({
                type: GET_COURSES,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

//DELETE COURSE
export const deleteCourse = (id) => dispatch => {
    axios.delete(`api/courses/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteCourse: "Course Deleted" }))
            dispatch({
                type: DELETE_COURSE,
                payload: id
            })
        }).catch(err => console.log(err))
}

//ADD COURSE
export const addCourse = (course) => dispatch => {
    axios.post("api/courses/", course)
        .then(res => {
            dispatch(createMessage({ addCourse: "Course Added" }))
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            })
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}