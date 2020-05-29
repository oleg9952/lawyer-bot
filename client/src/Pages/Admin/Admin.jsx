import React from 'react'
import style from './Admin.module.scss'

import DesktopNav from '../../Components/DesktopNav/DesktopNav'

const Admin = () => {
    return (
        <div className={style.admin}>
            {/* <DesktopNav /> */}
            <div className={style.admin__body}>
                <h1>Admin page</h1>
            </div>
        </div>
    )
}

export default Admin
