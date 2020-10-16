import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import PublicationsPage from './pages/publications/PublicationsPage'
import RegisterPage from './pages/register/RegisterPage'
import SharePage from './pages/share/SharePage'
import Profile from './pages/profile/ProfilePage'
import UserContext from './Context'

class Navigation extends Component {

    static contextType = UserContext

    render() {
        return (
            <Switch>
                <Route path='/' exact component={PublicationsPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/login' component={LoginPage} />
                {this.context.loggedIn ? <Route path='/share' component={SharePage} /> : <Redirect to='/login' />}
                {this.context.loggedIn ? <Route path='/profile/:id' component={Profile} /> : <Redirect to='/login' />}
            </Switch>
        )
    }
}

export default Navigation