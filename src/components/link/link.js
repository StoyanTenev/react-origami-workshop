import React from 'react'
import { Link } from 'react-router-dom'
import styles from './link.module.css'

const LinkComponet = ({ title, href , type}) => {
    return (
        <li className={styles[`${type}-listItem`]}>
            <Link to={href} className={styles[`${type}-listItem`]}>
                {title}
            </Link>
        </li>
    )
}

export default LinkComponet