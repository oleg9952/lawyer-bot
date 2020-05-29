import { botActions } from '../actions'
const { getData, addData } = botActions

const initState = {
    data: ['hello', 'world']
}

export default (state = initState, action) => {
    switch (action.type) {
        case getData:
            console.log(state.data)
            return state
        case addData:
            state.data.push(action.payload)
            console.log(state.data)
            return state
        default:
            return state
    }
}