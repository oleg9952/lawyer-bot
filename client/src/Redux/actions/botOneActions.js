import { botOneActions } from './index'

export const handleNext = () => dispatch => {
    
    dispatch({
        type: botOneActions.handleNext
    })
}

export const handleBack = () => dispatch => {
    dispatch({
        type: botOneActions.handleBack
    })
}

export const handleReset = () => dispatch => {
    dispatch({
        type: botOneActions.handleReset
    })
}