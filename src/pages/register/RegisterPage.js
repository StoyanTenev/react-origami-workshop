import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './register.module.css'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import PageLayout from '../../components/pageLayout/PageLayout'
import UserContext from '../../Context'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmmit = async (event) => {
        event.preventDefault()

        const body = {
            "username": email,
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
            const response = await fetch('http://localhost:4000/api/user/register', requestOptions)
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
            console.log('ERROR: ', e);
        }

    }


    return (
        <PageLayout>
            <div className={styles.register} >
                <h1>Register Page</h1>
                <form onSubmit={handleSubmmit}>
                    <div className={styles['form-control']}>
                        <Input
                            id='email'
                            type='email'
                            value={email}
                            label='Email'
                            onChange={(event) => setEmail(event.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <Input
                            id='password'
                            type='password'
                            value={password}
                            label='Password'
                            onChange={(event) => setPassword(event.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <Input
                            id='rePassword'
                            type='password'
                            value={rePassword}
                            label='Re-Password'
                            onChange={(event) => setRePassword(event.target.value)}
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

export default Register
