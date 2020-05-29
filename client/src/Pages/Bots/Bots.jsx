import React from 'react'
import style from './Bots.module.scss'

import DesktopNav from '../../Components/DesktopNav/DesktopNav'

const Bots = () => {
    return (
        <div className={style.bots}>
            {/* <DesktopNav /> */}
            <div className={style.bots__body}>
                <h1>Bots page</h1>
            </div>
        </div>
    )
}

export default Bots
