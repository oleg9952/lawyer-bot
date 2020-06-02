import { botOneActions } from '../actions'
const { 
    getSteps,
    getStepContent,
    handleNext,
    handleBack,
    handleReset
} = botOneActions

const initState = {
    // ----- STEPPER -----
    steps: [
        'Select master blaster campaign settings', 
        'Create an ad group', 
        'Create an ad'
    ],
    activeStep: 0
}

export default (state = initState, action) => {
    switch (action.type) {
        // ----- STEPPER -----
        case getSteps:
            return state.steps
        case getStepContent:
            return state
        case handleNext:
            return {
                ...state,
                activeStep: state.activeStep + 1
            }
        case handleBack:
            return {
                ...state,
                activeStep: state.activeStep - 1
            }
        case handleReset:
            return {
                ...state,
                activeStep: state.activeStep = 0
            }
        // ----- OTHER LOGIC -----
        default:
            return state
    }
}