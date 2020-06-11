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
    const { 
        activeStep, 
        steps,
        currentOptions,
        selection
    } = useSelector(state => state.botOneReducer)

    const classes = useStyles()

    const goNext = () => {
        switch (currentOptions.step) {
            case 0:
                dispatch(handleNext(1, selection))
                break
            case 1:
                dispatch(handleNext(2, selection))
                break
            case 2:
                if (currentOptions.final) {
                    dispatch(handleNext(3, selection))
                }
                break
            default:
                break
        }
    }

    const goBack = () => {
        switch (currentOptions.step) {
            case 0:
                break
            case 1:
                dispatch(handleBack(0, selection))
                break
            case 2:
                dispatch(handleBack(1, selection))
                break
            default:
                break
        }
    }

    useEffect(() => {
        return () => {
            dispatch(handleReset(null, null, true))
        }
    }, [dispatch])

    return (
        <div className={classes.root}>
            {activeStep === steps.length ? (
                <div>
                    <Button 
                        onClick={() => dispatch(handleReset(0, null))}
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
                            onClick={goBack}
                            className={`
                                ${classes.backButton}
                                ${classes.btn}
                            `}
                            variant="contained"
                        >
                            Назад
                        </Button>
                        {
                            activeStep === steps.length - 1 ? (
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={goNext}
                                    className={classes.btn}
                                >Готово</Button>
                            ) : (
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={goNext}
                                    className={classes.btn}
                                    disabled={!selection}
                                >Далі</Button>
                            )
                        }
                        {/* <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={goNext}
                            className={classes.btn}
                            // disabled={!selection}
                        >
                            {activeStep === steps.length - 1 ? 'Готово' : 'Далі'}
                        </Button> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default BotStepsControls
