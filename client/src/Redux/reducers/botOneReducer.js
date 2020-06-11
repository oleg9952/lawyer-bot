import { botOneActions } from '../actions'
const {
    handleNext,
    handleBack,
    handleReset,
    setSelection,
    getOptions,
    handleError
} = botOneActions

const initState = {
    // ----- STEPPER -----
    steps: [
        'Оберіть себе', 
        'Оберіть, будь ласка, ким ви є', 
        'Результат'
    ],
    activeStep: 0,
    currentOptions: null,
    selection: null
}

export default (state = initState, action) => {
    switch (action.type) {
        // ----- STEPPER -----
        case handleNext:
            return {
                ...state,
                activeStep: state.activeStep + 1,
                selection: null
            }
        case handleBack:
            return {
                ...state,
                activeStep: state.activeStep - 1,
                selection: null
            }
        case handleReset:
            return {
                ...state,
                activeStep: state.activeStep = 0,
                selection: null
            }
        // ----- API -----
        case setSelection:
            return {
                ...state,
                selection: action.payload
            }
        case getOptions:
            return {
                ...state,
                currentOptions: action.payload,
                activeStep: action.payload.final ? 3 : state.activeStep
            }
        // ----- ERROR -----
        case handleError: 
            console.error(action.payload)
            return state
        default:
            return state
    }
}