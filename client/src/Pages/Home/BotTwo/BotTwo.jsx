import React, { useState, useEffect } from 'react'
import style from './BotTwo.module.scss'
import { BotContent } from '../index'

const content = {
    title: 'Бот 2',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit laborum natus mollitia quasi at eveniet tenetur, libero aspernatur maiores eius vero inventore cupiditate, impedit rerum quos asperiores adipisci magni aliquid? Tempora similique, blanditiis illo consectetur assumenda ea nulla soluta suscipit porro repellat, repudiandae inventore, culpa quibusdam? Sint blanditiis modi quos.',
    btnText: 'Перейти',
    img1: '/assets/home/bottwo/img1.jpg',
    img2: '/assets/home/bottwo/img2.jpg',
    bot: 2
}

const BotTwo = ({ currentPage }) => {
    const [ active, setActive ] = useState(false)
    const [ visited, setVisited ] = useState(false)

    useEffect(() => {
        if (currentPage === 2) {
            setActive(true)
            setVisited(true)
        } else {
            setActive(false)
        }
    }, [currentPage])

    return (
        <div className={`
            ${style.bottwo}
            ${active ? style.active : ''}
        `}>
            <div className={style.bottwo__bg}></div>
            <BotContent 
                {...content}
                order={1}
                visited={visited}
            />
        </div>
    )
}

export default BotTwo
