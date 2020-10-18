import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PageLayout from '../../components/pageLayout/PageLayout'
import UserContext from '../../Context'
import styles from './profile.module.css'
import profileImg from '../../images/profile.png'
import Origam from '../../components/origam/Origam'

const Profile = () => {
    const context = useContext(UserContext)
    const history = useHistory()

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <img className={styles.profileImg} src={profileImg} alt='Profile pic' />
                <p>User: {context.user.username}</p>
                <p>Posts: {context.user.posts.length}</p>
                <button onClick={logOut}>Logout</button>
                {
                    context.user.posts.map(post => {
                        return (
                            <Origam
                                key={post._id}
                                author={{
                                    username: context.user.username
                                }}
                                description={post.description} />
                        )
                    })
                }
            </div>
        </PageLayout>
    )
}

export default Profile