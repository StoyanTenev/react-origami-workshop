import React, { useContext } from 'react'
import UserContext from '../../Context'
import getNavigation from '../../utils/navigation'
import LinkComponet from '../link/Link'
import styles from './aside.module.css'


const Aside = () => {
    const context = useContext(UserContext)

    const links = getNavigation(context.user)

    return (
        <aside className={styles.aside} >
            {
                links.map(navElement => {
                    return (
                        <LinkComponet
                            key={navElement.title}
                            href={navElement.link}
                            title={navElement.title}
                            type='aside'
                        />
                    )
                })
            }
        </aside>
    )
}

export default Aside