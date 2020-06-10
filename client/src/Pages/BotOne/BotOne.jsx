import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOptions } from '../../Redux/actions/botOneActions'
import { Box } from '@material-ui/core'
import style from './BotOne.module.scss'
import BotSteps from './BotSteps'
import BotStepsControls from './BotStepsControls'
import Options from '../../Components/Options/Options'
import Result from '../../Components/Result/Result'
import Spinner from '../../Components/Spinner/Spinner'

const BotOne = () => {
    const dispatch = useDispatch()
    const { currentOptions } = useSelector(state => state.botOneReducer)

    useEffect(() => {
        dispatch(getOptions(0, null))
    }, [])

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
                        : <Spinner />
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
