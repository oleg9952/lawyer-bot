import React, { useState } from 'react'
import ReactPageScroller from 'react-page-scroller'
import style from './Home.module.scss'
import Components from './index'

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
                    {Components.map((Component, index) => (
                       <div className={style.home__section} key={index}>
                            <Component 
                                currentPage={currentPage}
                            />
                        </div> 
                    ))}
                </ReactPageScroller>
            </div>
        </div>
    )
}

export default Home
