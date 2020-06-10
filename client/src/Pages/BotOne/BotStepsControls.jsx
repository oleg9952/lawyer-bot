import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, makeStyles } from '@material-ui/core'
import {
    handleNext,
    handleBack,
    handleReset
} from '../../Redux/actions/botOneActions'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '190px',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    btn: {
        margin: '0 10px'
    }
}));

const BotStepsControls = () => {
    const dispatch = useDispatch()
    const { activeStep, steps } = useSelector(state => state.botOneReducer)

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {activeStep === steps.length ? (
                <div>
                    <Button 
                        onClick={() => dispatch(handleReset())}
                        variant="contained"
                    >Очистити</Button>
                </div>
            ) : (
                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                        <Button
                            disabled={activeStep === 0}
                            onClick={() => dispatch(handleBack())}
                            className={`
                                ${classes.backButton}
                                ${classes.btn}
                            `}
                            variant="contained"
                        >
                            Назад
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => dispatch(handleNext())}
                            className={classes.btn}
                        >
                            {activeStep === steps.length - 1 ? 'Готово' : 'Далі'}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BotStepsControls
