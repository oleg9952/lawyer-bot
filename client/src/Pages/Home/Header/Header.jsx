import React, { useState, useEffect } from 'react'
import style from './Header.module.scss'

const Header = ({ currentPage }) => {
    const [ active, setActive ] = useState(false)

    useEffect(() => {
        if (currentPage === 0) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [currentPage])

    return (
        <div className={`
            ${style.header}
            ${active ? style.active : ''}
        `}>
            <h1>Header</h1>
        </div>
    )
}

export default Header