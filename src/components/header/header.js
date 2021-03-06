import React, { useContext } from 'react'
import LinkComponet from '../link/Link'
import getNavigation from '../../utils/navigation'
import styles from './header.module.css'
import image from '../../images/white-origami-bird.png'
import UserContext from '../../Context'
import { Link } from 'react-router-dom'

const Header = () => {
    const context = useContext(UserContext)

    const links = getNavigation(context.user)

    return (
        <header className={styles.navigation} >
            <Link to='/'>
                <img className={styles.headerLogo} src={image} alt='logo' />
            </Link>
            {
                links.map(navElement => {
                    return (
                        <LinkComponet
                            key={navElement.title}
                            href={navElement.link}
                            title={navElement.title}
                            type='header'
                        />
                    )
                })
            }
        </header>
    )
}

export default Header