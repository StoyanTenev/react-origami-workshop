import React from 'react'
import Link from '../link/link'
import styles from './aside.module.css'

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <ul>
                <Link href='#' title='Going to 1' type="aside" />
                <Link href='#' title='Going to 2' type="aside" />
                <Link href='#' title='Going to 3' type="aside" />
                <Link href='#' title='Going to 4' type="aside" />
                <Link href='#' title='Going to 5' type="aside" />
                <Link href='#' title='Going to 6' type="aside" />
                <Link href='#' title='Going to 7' type="aside" />
                <Link href='#' title='Going to 8' type="aside" />
            </ul>
        </aside>
    )
}




export default Aside