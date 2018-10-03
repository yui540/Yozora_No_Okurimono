import { combineReducers } from 'redux'
import opening from './opening'
import message from './message'
import menu from './menu'

export default combineReducers({
  opening,
  message,
  menu
})
