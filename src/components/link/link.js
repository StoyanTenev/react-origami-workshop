import React from 'react'
import styles from './link.module.css'

const Link = ({ title, href , type}) => {
    return (
        <li className={styles[`${type}-listItem`]}>
            <a href={href} className={styles[`${type}-listItem`]}>
                {title}
            </a>
        </li>
    )
}

export default Link