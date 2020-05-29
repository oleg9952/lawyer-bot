import React from 'react'
import style from './Home.module.scss'

import DesktopNav from '../../Components/DesktopNav/DesktopNav'

const Home = () => {
    return (
        <div className={style.home}>
            {/* <DesktopNav /> */}
            <div className={style.home__body}>
                <h1>Home page</h1>
            </div>
        </div>
    )
}

export default Home
