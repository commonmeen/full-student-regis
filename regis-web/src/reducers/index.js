import StudentReducer from './StudentReducer'
import {combineReducers} from 'redux'

export default combineReducers ({
    form:StudentReducer
})