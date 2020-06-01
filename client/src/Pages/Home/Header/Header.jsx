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
            <div className={style.header__body}>
                <h1 className={style.header__title}>
                    Назва сайту
                </h1>
                <p className={style.header__subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora hic vitae error maxime? Quod nobis ipsa error voluptates magni laboriosam culpa eum excepturi, officiis harum obcaecati veritatis quos delectus.</p>
            </div>
        </div>
    )
}

export default Header