import { GET_COURSES, DELETE_COURSE, ADD_COURSE, CALCULATE_GPA } from "../actions/types.js"

const initialState = {
    courses: [],
    gpa: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case DELETE_COURSE:
            return {
                ...state,
                courses: state.courses.filter(course => course.id != action.payload)
            }
        case ADD_COURSE:
            return {
                ...state,
                courses: [...state.courses, action.payload]
            }
        case CALCULATE_GPA:
            return {
                ...state,
                gpa: action.payload
            }
        default:
            return state
    }
}