import { botOneActions } from './index'
import { sudZbitAPI } from '../../Utils/js/api'

export const handleNext = (step, selection) => async dispatch => {
    if (step === 3) {
        dispatch({
            type: botOneActions.handleNext
        })
    } else {
        try {
            const res = await sudZbitAPI(step, selection)
            dispatch({
                type: botOneActions.getOptions,
                payload: res
            })
            dispatch({
                type: botOneActions.handleNext
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
        const res = await sudZbitAPI(step, selection)
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
            const res = await sudZbitAPI(step, selection)
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
        const res = await sudZbitAPI(step, selection)
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