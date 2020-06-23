import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOneActive, setOneVisited } from '../../../Redux/actions/homaActions'
import style from './BotOne.module.scss'
import { BotContent } from '../index'

const content = {
    title: 'Бот Васько',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit laborum natus mollitia quasi at eveniet tenetur, libero aspernatur maiores eius vero inventore cupiditate, impedit rerum quos asperiores adipisci magni aliquid? Tempora similique, blanditiis illo consectetur assumenda ea nulla soluta suscipit porro repellat, repudiandae inventore, culpa quibusdam? Sint blanditiis modi quos.',
    btnText: 'Перейти',
    img1: '/assets/home/botone/img1.jpg',
    img2: '/assets/home/botone/img2.jpg',
    bot: 1
}

const BotOne = ({ currentPage }) => {
    const dispatch = useDispatch()
    const { oneActive, oneVisited } = useSelector(state => state.homeReducer)

    useEffect(() => {
        if (currentPage === 1) {
            dispatch(toggleOneActive(true))
            dispatch(setOneVisited())
            return
        }
        dispatch(toggleOneActive(false))
    }, [currentPage, dispatch])

    return (
        <div className={`
            ${style.botone}
            ${oneActive ? style.active : ''}
        `}>
            <div className={style.botone__bg}></div>
            <BotContent 
                {...content} 
                order={0} 
                visited={oneVisited} 
            />
        </div>
    )
}

export default BotOne
