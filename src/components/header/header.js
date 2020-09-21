import React from 'react'
import Link from '../link/link'
import styles from './header.module.css'
import image from '../../images/white-origami-bird.png'

const Header = () => {
    return (
        <header className={styles.navigation}>
            <ul>
                <img className={styles.headerLogo} src={image} alt='logo' />
                <Link href='#' title='Going to 1' type="header" />
                <Link href='#' title='Going to 2' type="header" />
                <Link href='#' title='Going to 3' type="header" />
                <Link href='#' title='Going to 4' type="header" />
                <Link href='#' title='Going to 5' type="header" />
                <Link href='#' title='Going to 6' type="header" />
                <Link href='#' title='Going to 7' type="header" />
                <Link href='#' title='Going to 8' type="header" />
                <Link href='#' title='Going to 9' type="header" />
                <Link href='#' title='Going to 10' type="header" />
                <Link href='#' title='Going to 11' type="header" />
            </ul>
        </header>
    )
}

export default Header