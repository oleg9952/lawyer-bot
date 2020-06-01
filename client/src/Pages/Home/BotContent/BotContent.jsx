import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Button } from '@material-ui/core'
import routes from '../../../Routes'
import style from './BotContent.module.scss'

const useStyles = makeStyles(() => ({
    btn: {
        width: '200px',
        fontFamily: 'Vollkorn, serif'
    }
}))

const BotContent = ({
    title,
    text,
    btnText,
    img1,
    img2,
    order,
    visited,
    bot
}) => {
    const classes = useStyles()

    return (
        <div className={`
            ${style.botcontent}
            ${visited ? style.active : ''}
        `}>
            <div className={style.botcontent__column}
                style={{ order: order ? '2' : '1' }}
            >
                <h2
                    className={`
                        ${visited ? `
                            animate__animated
                            animate__fadeInUp
                        ` : ''}
                    `}
                >{ title }</h2>
                <p
                    className={`
                        ${visited ? `
                            animate__animated
                            animate__fadeInUp
                            animate__delay-1s
                        ` : ''}
                    `}
                >{ text }</p>
                <Link to={routes[bot].path}>
                    <Button
                        className={`
                            ${classes.btn}
                            ${visited ? `
                                animate__animated
                                animate__fadeInUp
                                animate__delay-2s
                            ` : ''}
                        `}
                        style={{ display: visited ? 'block' : 'none' }}
                        variant="contained"
                        color="secondary"
                        size="large"
                    >
                        { btnText }
                    </Button>
                </Link>
            </div>
            <div className={`
                ${style.botcontent__column}
                ${order ? style.left : ''}
            `}
                style={{ order: order ? '1' : '2' }}
            >
                <div className={style.botcontent__imgs}>
                    <div 
                        className={`
                            ${style.botcontent__img}
                            ${visited ? `
                                animate__animated 
                                animate__fadeInUp
                            ` : ''}
                        `}
                        style={{
                            backgroundImage: `url(${img1})`
                        }}
                    ></div>
                    <div 
                        className={`
                            ${style.botcontent__img}
                            ${visited ? `
                                    animate__animated 
                                    animate__fadeInUp
                                    animate__delay-1s
                                ` : ''}
                            `}
                            style={{
                                backgroundImage: `url(${img2})`
                            }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default BotContent
