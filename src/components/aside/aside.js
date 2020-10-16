import React, {Component} from 'react'
import UserContext from '../../Context'
import getNavigation from '../../utils/navigation'
import LinkComponet from '../link/Link'
import styles from './aside.module.css'



class Aside extends Component {
    static contextType = UserContext
    render() {
             const links = getNavigation(this.context.user)

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
}



export default Aside