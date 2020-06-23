import { combineReducers } from 'redux'
import botOneReducer from './botOneReducer'
import botTwoReducer from './botTwoReducer'
import homeReducer from './homeReducers'

export default combineReducers({
    botOneReducer,
    botTwoReducer,
    homeReducer
})