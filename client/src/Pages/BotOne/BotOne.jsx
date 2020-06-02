import React from 'react'
import { Box } from '@material-ui/core'
import style from './BotOne.module.scss'
import BotSteps from './BotSteps'
import BotStepsControls from './BotStepsControls'

const BotOne = () => {
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
