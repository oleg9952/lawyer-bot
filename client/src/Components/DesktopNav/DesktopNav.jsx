import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './DesktopNav.module.scss'

import routes from '../../Routes'

const DesktopNav = () => {
    const [ nav, setNav ] = useState(false)
    const { pathname } = useLocation()

    const handlePage = (path) => {
        if (path === '/bots') {
            setNav(false)
        } else {
            setNav(true)
        }
    }

    useEffect(() => {
        if (pathname === '/bots') {
            setNav(false)
        } else {
            setNav(true)
        }
    }, [])

    return (
        <div 
            className={`
                ${style.desktopnav}
                ${nav ? style.active : ''}
            `}
        >
            <div className={style.desktopnav__body}>
                {routes.map(({ path, name }) => (
                    <Link
                        key={path}
                        to={path}
                        onClick={handlePage.bind(this, path)}
                    >
                        { name }
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DesktopNav
