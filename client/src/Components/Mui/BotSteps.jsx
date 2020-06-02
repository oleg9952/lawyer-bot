import React from 'react'
import {
    makeStyles,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    Box
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import {
    handleNext,
    handleBack,
    handleReset
} from '../../Redux/actions/botOneActions'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    }
}));

const BotSteps = () => {
    // ----- Redux -----
    const dispatch = useDispatch()
    const { steps, activeStep } = useSelector(state => state.botOneReducer)
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box boxShadow={1}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Button onClick={() => dispatch(handleReset())}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={() => dispatch(handleBack())}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => dispatch(handleNext())}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BotSteps