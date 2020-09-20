import React from 'react'
import Link from '../link/link'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href='#' title='Going to 1' type="footer" />
                <Link href='#' title='Going to 2' type="footer" />
                <Link href='#' title='Going to 3' type="footer" />
                <Link href='#' title='Going to 4' type="footer" />
                <Link href='#' title='Going to 5' type="footer" />
                <Link href='#' title='Going to 6' type="footer" />
                <Link href='#' title='Going to 7' type="footer" />
                <Link href='#' title='Going to 8' type="footer" />
            </ul>
        </footer>
    )
}

export default Footer