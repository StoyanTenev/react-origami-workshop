import React, { useState, useEffect } from 'react'
import UserContext from './Context'

const Authenticate = (props) => {
    const [user, setUser] = useState({ loggedIn: false })

    const logIn = (user) => {
        setUser({
            ...user,
            loggedIn: true,
        })
    }

    const logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        setUser({
            loggedIn: false
        })
    }

    useEffect(() => {
        const cookie = document.cookie.match('(^|;) ?x-auth-token=([^;]*)(;|$)') || '';
        const token = cookie[2]
        if (token) {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                }
            }

            fetch('http://localhost:4000/api/user/verify-user', requestOptions)
                .then(promise => promise.json())
                .then(response => {
                    logIn({
                        username: response.username,
                        id: response._id,
                        posts: response.posts
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }, [])


    return (
        <UserContext.Provider value={{
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default Authenticate