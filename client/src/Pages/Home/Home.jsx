import React, { useState, useEffect } from 'react'
import ReactPageScroller from 'react-page-scroller'
import style from './Home.module.scss'
import {
    Header,
    BotOne,
    BotTwo
} from './index'

const Home = () => {
    const [ currentPage, setCurrentPage ] = useState(0)
    const handleSectionSwitch = (page) => {
        if (page === currentPage) return
        setCurrentPage(page)
    }

    return (
        <div className={style.home}>
            <div className={style.home__body}>
                <ReactPageScroller
                    pageOnChange={handleSectionSwitch}
                    customPageNumber={currentPage}
                >
                    <div className={style.home__section}>
                        <Header 
                            currentPage={currentPage}
                        />
                    </div>
                    <div className={style.home__section}>
                        <BotOne 
                            currentPage={currentPage}
                        />
                    </div>
                    <div className={style.home__section}>
                        <BotTwo 
                            currentPage={currentPage}
                        />
                    </div>
                </ReactPageScroller>
            </div>
        </div>
    )
}

export default Home
