import React, { Component } from 'react'
import PageLayout from '../../components/pageLayout/PageLayout'
import UserContext from '../../Context'
import styles from './profile.module.css'
import profileImg from '../../images/profile.png'
import Origam from '../../components/origam/Origam'

class Profile extends Component {

    static contextType = UserContext

    logOut = () => {
        this.context.logOut()
        this.props.history.push('/')
    }

    render() {

        return (
            <PageLayout>
                <div className={styles.container}>
                    <img className={styles.profileImg} src={profileImg} alt='Profile pic' />
                    <p>User: {this.context.user.username}</p>
                    <p>Posts: {this.context.user.posts.length}</p>
                    <button onClick={this.logOut}>Logout</button>
                    {
                        this.context.user.posts.map(post => {
                            return (
                                <Origam
                                    key={post._id}
                                    author={{
                                        username: this.context.user.username
                                    }}
                                    description={post.description} />
                            )
                        })
                    }
                </div>
            </PageLayout>
        )
    }

}

export default Profile