import { combineReducers } from 'redux'
import courses from './courses.js'
import errors from './errors.js'
import messages from './messages.js'

export default combineReducers({
    courses,
    errors,
    messages
});