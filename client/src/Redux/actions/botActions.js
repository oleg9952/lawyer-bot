import { botActions } from './index'


export const addData = (data) => {
    return {
        type: botActions.addData,
        payload: data
    }
}