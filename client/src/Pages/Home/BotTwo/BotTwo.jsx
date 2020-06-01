import React, { useState, useEffect } from 'react'
import style from './BotTwo.module.scss'

const BotTwo = ({ currentPage }) => {
    const [ active, setActive ] = useState(false)

    useEffect(() => {
        if (currentPage === 2) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [currentPage])

    return (
        <div className={`
            ${style.bottwo}
            ${active ? style.active : ''}
        `}>
            <h1>Bot Two</h1>
        </div>
    )
}

export default BotTwo
