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
    activeStep: 0,
    currentOptions: {
        final: false,
        step: 1,
        options: [
            {
                "id": 1,
                "type": "Я громадянин України",
                "step": 1
            },
            {
                "id": 2,
                "type": "Я іноземець",
                "step": 1
            },
            {
                "id": 3,
                "type": "Особа без громадянства",
                "step": 1
            },
            {
                "id": 4,
                "type": "Представник підприємства, установи, організації",
                "step": 1
            },
            {
                "id": 5,
                "type": "Представник юридичної особи",
                "step": 1
            },
            {
                "id": 6,
                "type": "Представник іноземної юридичної особи",
                "step": 1
            },
            {
                "id": 7,
                "type": "Я фізична особа-підприємець",
                "step": 1
            }
        ]
    }
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