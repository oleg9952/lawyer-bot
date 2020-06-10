import { serv } from '../../config'
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

export const setSelection = (id) => {
    return {
        type: botOneActions.setSelection,
        payload: id
    }
}

export const getOptions = (step, selection) => async dispatch => {
    try {
        const req = await fetch(`${serv.DEV}/api/sudovyi-zbir`)
        const res = await req.json()
        console.log(res)
        // dispatch({
        //     type: botOneActions.getOptions,
        //     payload: res
        // })
    } catch (error) {
        dispatch({
            type: botOneActions.handleError,
            payload: `Error getting data: ${error}`
        })
    }
}