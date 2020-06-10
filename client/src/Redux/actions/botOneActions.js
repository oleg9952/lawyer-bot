import { botOneActions } from './index'

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