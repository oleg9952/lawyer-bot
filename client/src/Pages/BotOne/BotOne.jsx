import React from 'react'
import style from './BotOne.module.scss'
import { BotSteps } from '../../Components/Mui'

const BotOne = () => {
    return (
        <div className={style.botone}>
            <div className={style.botone__body}>
                <BotSteps />
            </div>
        </div>
    )
}

export default BotOne
