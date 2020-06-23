import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, makeStyles } from '@material-ui/core'
import spravy from '../../Redux/actions/botOneActions'
import {
    handleNext,
    handleBack,
    handleReset
} from '../../Redux/actions/botTwoActions'

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

const BotStepsControls = ({
    activeStep,
    steps,
    currentOptions,
    selection,
    bot
}) => {
    const dispatch = useDispatch()

    const classes = useStyles()

    const goNext = () => {
        if (bot === 1) {
            switch (currentOptions.step) {
                case 0:
                    dispatch(spravy.next(1, selection, 1))
                    break
                case 1:
                    dispatch(spravy.next(2, selection, 2))
                    break
                case 2:
                    dispatch(spravy.next(2, selection, 3))
                    break
                default:
                    break
            }
        } else {
            console.log('bot two')
        }
    }

    const goBack = () => {
        if (bot === 1) {
            switch (currentOptions.step) {
                case 0:
                    break
                case 1:
                    dispatch(spravy.back(0, selection))
                    break
                case 2:
                    dispatch(spravy.back(1, selection))
                    break
                default:
                    break
            }
        } else {

        }
    }

    const handleReset = () => {
        if (bot === 1) {
            dispatch(spravy.reset(0, null))
        } else {

        }
    }

    useEffect(() => {
        return () => {
            if (bot === 1) {
                dispatch(spravy.reset(0, null))
            } else {
    
            }
        }
    }, [dispatch])

    return (
        <div className={classes.root}>
            {activeStep === steps.length ? (
                <div>
                    <Button 
                        onClick={handleReset}
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
