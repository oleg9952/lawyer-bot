import React, { useState, useEffect } from 'react'
import style from './BotOne.module.scss'

const BotOne = ({ currentPage }) => {
    const [ active, setActive ] = useState(false)

    useEffect(() => {
        if (currentPage === 1) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [currentPage])

    return (
        <div className={`
            ${style.botone}
            ${active ? style.active : ''}
        `}>
            <h1>Bot One</h1>
        </div>
    )
}

export default BotOne
