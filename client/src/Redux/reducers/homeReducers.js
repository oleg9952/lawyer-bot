import { homeActions } from '../actions'
const {
    toggleOneActive,
    setOneVisited,
    toggleTwoActive,
    setTwoVisited
} = homeActions

const initState = {
    // ----- SECTION ONE -----
    oneActive: false,
    oneVisited: false,
    // ----- SECTION TWO -----
    twoActive: false,
    twoVisited: false
}

export default (state = initState, action) => {
    switch (action.type) {
        // ----- SECTION ONE -----
        case toggleOneActive:
            return {
                ...state,
                oneActive: action.payload
            }
        case setOneVisited:
            return {
                ...state,
                oneVisited: true
            }
        // ----- SECTION TWO -----
        case toggleTwoActive:
            return {
                ...state,
                twoActive: action.payload
            }
        case setTwoVisited:
            return {
                ...state,
                twoVisited: true
            }
        default:
            return state
    }
}