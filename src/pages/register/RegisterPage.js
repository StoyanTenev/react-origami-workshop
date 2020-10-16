import React, { Component } from 'react'
import styles from './register.module.css'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import PageLayout from '../../components/pageLayout/PageLayout'
import UserContext from '../../Context'


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            rePassword: ''
        }
    }

    static contextType = UserContext;

    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }


    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    changeRePassword = (event) => {
        this.setState({
            rePassword: event.target.value
        })
    }

    handleSubmmit = async (event) => {
        event.preventDefault()

        const body = {
            "username": this.state.email,
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
            const response = await fetch('http://localhost:4000/api/user/register', requestOptions)
            const authToken = response.headers.get('Authorization')
            document.cookie = `x-auth-token=${authToken}`
            const data = await response.json()
            this.context.logIn({
                username: data.username,
                id: data._id
            })

            if (data.username && authToken) {
                this.props.history.push('/')
            }
        } catch (e) {
            console.log('ERROR: ', e);
        }

    }



    render() {
        const {
            email,
            password,
            rePassword
        } = this.state

        return (
            <PageLayout>
                <div className={styles.register} >
                    <h1>Register Page</h1>
                    <form onSubmit={this.handleSubmmit}>
                        <div className={styles['form-control']}>
                            <Input
                                id='email'
                                type='email'
                                value={email}
                                label='Email'
                                onChange={this.changeEmail}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles['form-control']}>
                            <Input
                                id='password'
                                type='password'
                                value={password}
                                label='Password'
                                onChange={this.changePassword}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles['form-control']}>
                            <Input
                                id='rePassword'
                                type='password'
                                value={rePassword}
                                label='Re-Password'
                                onChange={this.changeRePassword}
                                className={styles.input}
                            />
                        </div>
                        <div className={styles['form-control']}>
                            <Button text='Register' type='submit' className={styles.button} />
                        </div>
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default Register
