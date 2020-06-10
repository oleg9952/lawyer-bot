import { botOneActions } from '../actions'
const {
    handleNext,
    handleBack,
    handleReset
} = botOneActions

const initState = {
    // ----- STEPPER -----
    steps: [
        'Оберіть себе', 
        'Оберіть, будь ласка, ким ви є', 
        'Результат'
    ],
    activeStep: 0
}

export default (state = initState, action) => {
    switch (action.type) {
        // ----- STEPPER -----
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