import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import PageLayout from '../../components/pageLayout/PageLayout'
import UserContext from '../../Context'
import styles from './login.module.css'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const body = {
            "username": username,
            "password": password
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
            context.logIn({
                username: data.username,
                id: data._id,
                posts: data.posts
            })

            if (data.username && authToken) {
                history.push('/')
            }
        } catch (e) {
            console.log('ERROR', e);
        }


    }

    return (
        <PageLayout>
            <div className={styles.login} >
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles['form-control']}>
                        <Input
                            id='username'
                            type='email'
                            value={username}
                            label='Username:'
                            onChange={(event) => setUsername(event.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <Input
                            id='password'
                            type='password'
                            value={password}
                            label='Password:'
                            onChange={(event) => setPassword(event.target.value)}
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

export default Login