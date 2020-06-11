import { homeActions } from './index'

export const toggleOneActive = (value) => {
    return {
        type: homeActions.toggleOneActive,
        payload: value
    }
}

export const setOneVisited = () => {
    return {
        type: homeActions.setOneVisited
    }
}

export const toggleTwoActive = (value) => {
    return {
        type: homeActions.toggleTwoActive,
        payload: value
    }
}

export const setTwoVisited = () => {
    return {
        type: homeActions.setTwoVisited
    }
}