import React, { Component } from 'react'
import UserContext from './Context'

class Authenticate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        this.setState({
            loggedIn: false,
            user: null
        })
    }

    async componentDidMount() {
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

            try {
                const response = await fetch('http://localhost:4000/api/user/verify-user', requestOptions)
                const user = await response.json()
                this.logIn(user)
            } catch (e) {
                console.log(e)
            }
        }
    }

    render() {
        const {
            loggedIn,
            user
        } = this.state

        return (
            <UserContext.Provider value={{
                loggedIn,
                user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default Authenticate