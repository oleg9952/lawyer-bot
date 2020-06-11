import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTwoActive, setTwoVisited } from '../../../Redux/actions/homaActions'
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
    const dispatch = useDispatch()
    const { twoActive, twoVisited } = useSelector(state => state.homeReducer)

    useEffect(() => {
        if (currentPage === 2) {
            dispatch(toggleTwoActive(true))
            dispatch(setTwoVisited())
        } else {
            dispatch(toggleTwoActive(false))
        }
    }, [currentPage])

    return (
        <div className={`
            ${style.bottwo}
            ${twoActive ? style.active : ''}
        `}>
            <div className={style.bottwo__bg}></div>
            <BotContent 
                {...content}
                order={1}
                visited={twoVisited}
            />
        </div>
    )
}

export default BotTwo
