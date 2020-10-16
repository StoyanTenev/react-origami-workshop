import React, { Component } from 'react'
import getNavigation from '../../utils/navigation'
import LinkComponet from '../link/Link'
import styles from './footer.module.css'
import image from '../../images/blue-origami-bird-flipped.png'
import UserContext from '../../Context'
import { Link } from 'react-router-dom'

class Footer extends Component {
    static contextType = UserContext
    render() {

        const links = getNavigation(this.context.user)

        return (
            <footer className={styles.footer} >
                {
                    links.map(navElement => {
                        return (
                            <LinkComponet
                                key={navElement.title}
                                href={navElement.link}
                                title={navElement.title}
                                type='footer'
                            />
                        )
                    })
                }
                <Link to='/'>
                    <img className={styles.footerLogo} src={image} alt='logo' />
                </Link>
            </footer>
        )
    }
}

export default Footer
