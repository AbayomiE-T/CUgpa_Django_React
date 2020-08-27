import axios from 'axios';

import { GET_COURSES, DELETE_COURSE, ADD_COURSE } from './types'

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
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            })
        }).catch(err => console.log(err))
}