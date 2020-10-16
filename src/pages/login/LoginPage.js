import React, { Component } from 'react'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import PageLayout from '../../components/pageLayout/PageLayout'
import UserContext from '../../Context'
import styles from './login.module.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    static contextType = UserContext;

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const body = {
            "username": this.state.username,
            "password": this.state.password
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }

        try {
            const response = await fetch('http://localhost:4000/api/user/login', requestOptions)
            const authToken = response.headers.get('Authorization')
            document.cookie = `x-auth-token=${authToken}`
            const data = await response.json()
            this.context.logIn({
                username: data.username,
                id: data._id,
                posts: data.posts
            })

            if (data.username && authToken) {
                this.props.history.push('/')
            }
        } catch (e) {
            console.log('ERROR', e);
        }


    }

    render() {

        const {
            username,
            password
        } = this.state

        return (
            <PageLayout>
                <div className={styles.login} >
                    <h1>Login Page</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles['form-control']}>
                            <Input
                                id='username'
                                type='email'
                                value={username}
                                label='Username:'
                                onChange={this.changeUsername}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles['form-control']}>
                            <Input
                                id='password'
                                type='password'
                                value={password}
                                label='Password:'
                                onChange={this.changePassword}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles['form-control']}>
                            <Button text='Login' type='submit' className={styles.button} />
                        </div>
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default Login