import { combineReducers } from 'redux'
import botOneReducer from './botOneReducer'
import homeReducer from './homeReducers'

export default combineReducers({
    botOneReducer,
    homeReducer
})