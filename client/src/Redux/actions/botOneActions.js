import { botOneActions } from './index'

export const getSteps = () => {
    return {
        type: botOneActions.getSteps
    }
}

export const getStepContent = (stepIndex) => {
    return {
        type: botOneActions.getStepContent,
        payload: stepIndex
    }
}

export const handleNext = () => {
    return {
        type: botOneActions.handleNext
    }
}

export const handleBack = () => {
    return {
        type: botOneActions.handleBack
    }
}

export const handleReset = () => {
    return {
        type: botOneActions.handleReset
    }
}