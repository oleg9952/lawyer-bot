import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@material-ui/core'
import style from './BotOne.module.scss'
import BotSteps from './BotSteps'
import BotStepsControls from './BotStepsControls'
import Options from '../../Components/Options/Options'
import Result from '../../Components/Result/Result'

const BotOne = () => {
    const dispatch = useDispatch()
    const { currentOptions } = useSelector(state => state.botOneReducer)

    return (
        <div className={style.botone}>
            <div>
                <BotSteps />
            </div>
            <div className={style.botone__content}>
                <Box
                    boxShadow={1}
                    className={style.botone__contentbox}
                >
                    {
                        currentOptions ?
                        currentOptions.final ? <Result /> : <Options currentOptions={currentOptions} />
                        : ''
                    }
                </Box>
            </div>
            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
             }}>
                <BotStepsControls />
            </div>
        </div>
    )
}

export default BotOne
