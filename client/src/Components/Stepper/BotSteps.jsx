import React from 'react'
import {
    makeStyles,
    Stepper,
    Step,
    StepLabel,
    Box
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },  
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    }
}));

const BotSteps = ({ steps, activeStep }) => {
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
        </div>
    )
}

export default BotSteps