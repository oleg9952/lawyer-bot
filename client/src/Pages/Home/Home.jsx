import React from 'react'
import style from './Home.module.scss'
import Header from './Header/Header'
import BotOne from './BotOne/BotOne'
import BotTwo from './BotTwo/BotTwo'

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.home__body}>
                <div className={style.home__section}>
                    <Header />
                </div>
                <div className={style.home__section}>
                    <BotOne />
                </div>
                <div className={style.home__section}>
                    <BotTwo />
                </div>
            </div>
        </div>
    )
}

export default Home
