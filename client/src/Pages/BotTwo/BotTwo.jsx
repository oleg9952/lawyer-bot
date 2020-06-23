import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOptions } from '../../Redux/actions/botTwoActions'
import { Box } from '@material-ui/core'
import style from './BotTwo.module.scss'
import Options from '../../Components/Options/Options'
import Result from '../../Components/Result/Result'
import Spinner from '../../Components/Spinner/Spinner'
import BotSteps from '../../Components/Stepper/BotSteps'
import BotStepsControls from '../../Components/Stepper/BotStepsControls'

const BotTwo = () => {
    const dispatch = useDispatch()
    const { 
        currentOptions, 
        steps, 
        activeStep, 
        selection 
    } = useSelector(state => state.botTwoReducer)

    useEffect(() => {
        dispatch(getOptions(0, null))
    }, [dispatch])

    return (
        <div className={style.bottwo}>
            <div>
                <BotSteps 
                    steps={steps}
                    activeStep={activeStep}
                />
            </div>
            <div className={style.bottwo__content}>
                <Box
                    boxShadow={1}
                    className={style.bottwo__contentbox}
                >
                    {
                        currentOptions ?
                        currentOptions.final ? 
                        <Result currentOptions={currentOptions}/> : <Options currentOptions={currentOptions} />
                        : <Spinner />
                    }
                </Box>
            </div>
            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
             }}>
                <BotStepsControls 
                    activeStep={activeStep}
                    steps={steps}
                    currentOptions={currentOptions}
                    selection={selection}
                    bot={2}
                />
            </div>
        </div>
    )
}

export default BotTwo
