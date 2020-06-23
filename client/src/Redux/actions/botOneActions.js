import { botOneActions } from './index'
import { sudZbitAPI } from '../../Utils/js/api'

export const handleNext = (step, selection, stepper) => async dispatch => {
    if (step === 3) {
        dispatch({
            type: botOneActions.handleNext,
            payload: stepper
        })
    } else {
        try {
            const res = await sudZbitAPI(step, selection, 1)
            if (res.final) {
                dispatch({
                    type: botOneActions.handleNext,
                    payload: 3
                })
            } else {
                dispatch({
                    type: botOneActions.handleNext,
                    payload: stepper
                })
            }
            dispatch({
                type: botOneActions.getOptions,
                payload: res
            })
        } catch (error) {
            dispatch({
                type: botOneActions.handleError,
                payload: `Error getting data: ${error}`
            })
        }
    }
}

export const handleBack = (step, selection) => async dispatch => {
    try {
        const res = await sudZbitAPI(step, selection, 1)
        dispatch({
            type: botOneActions.handleBack
        })
        dispatch({
            type: botOneActions.getOptions,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: botOneActions.handleError,
            payload: `Error getting data: ${error}`
        })
    }
}

export const handleReset = (step, selection, leave) => async dispatch => {
    if (leave) {
        dispatch({
            type: botOneActions.handleReset
        })
    } else {  
        try {
            const res = await sudZbitAPI(step, selection, 1)
            dispatch({
                type: botOneActions.handleReset
            })
            dispatch({
                type: botOneActions.getOptions,
                payload: res
            })
        } catch (error) {
            dispatch({
                type: botOneActions.handleError,
                payload: `Error getting data: ${error}`
            })
        }
    }
}

export const setSelection = (id) => {
    return {
        type: botOneActions.setSelection,
        payload: id
    }
}

export const getOptions = (step, selection) => async dispatch => {
    try {
        const res = await sudZbitAPI(step, selection, 1)
        dispatch({
            type: botOneActions.getOptions,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: botOneActions.handleError,
            payload: `Error getting data: ${error}`
        })
    }
}

export default {
    reset: handleReset,
    back: handleBack,
    next: handleNext
}