import React from 'react'
import style from './Result.module.scss'

const Result = ({ currentOptions }) => {
    return (
        <div className={style.result}>
            <h2>{ currentOptions.message }</h2>
        </div>
    )
}

export default Result
