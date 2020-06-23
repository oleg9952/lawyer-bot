import { botTwoActions } from './index'
import { sudZbitAPI } from '../../Utils/js/api'

export const handleNext = (step, selection, stepper) => async dispatch => {
    if (step === 3) {
        dispatch({
            type: botTwoActions.handleNext,
            payload: stepper
        })
    } else {
        try {
            const res = await sudZbitAPI(step, selection, 2)
            if (res.final) {
                dispatch({
                    type: botTwoActions.handleNext,
                    payload: 3
                })
            } else {
                dispatch({
                    type: botTwoActions.handleNext,
                    payload: stepper
                })
            }
            dispatch({
                type: botTwoActions.getOptions,
                payload: res
            })
        } catch (error) {
            dispatch({
                type: botTwoActions.handleError,
                payload: `Error getting data: ${error}`
            })
        }
    }
}

export const handleBack = (step, selection) => async dispatch => {
    try {
        const res = await sudZbitAPI(step, selection, 2)
        dispatch({
            type: botTwoActions.handleBack
        })
        dispatch({
            type: botTwoActions.getOptions,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: botTwoActions.handleError,
            payload: `Error getting data: ${error}`
        })
    }
}

export const handleReset = (step, selection, leave) => async dispatch => {
    if (leave) {
        dispatch({
            type: botTwoActions.handleReset
        })
    } else {  
        try {
            const res = await sudZbitAPI(step, selection, 2)
            dispatch({
                type: botTwoActions.handleReset
            })
            dispatch({
                type: botTwoActions.getOptions,
                payload: res
            })
        } catch (error) {
            dispatch({
                type: botTwoActions.handleError,
                payload: `Error getting data: ${error}`
            })
        }
    }
}

export const setSelection = (id) => {
    return {
        type: botTwoActions.setSelection,
        payload: id
    }
}

export const getOptions = (step, selection) => async dispatch => {
    try {
        const res = await sudZbitAPI(step, selection, 2)
        dispatch({
            type: botTwoActions.getOptions,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: botTwoActions.handleError,
            payload: `Error getting data: ${error}`
        })
    }
}

export default {
    reset: handleReset,
    back: handleBack,
    next: handleNext
}