import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import PublicationsPage from './pages/publications/PublicationsPage'
import RegisterPage from './pages/register/RegisterPage'
import SharePage from './pages/share/SharePage'
import Profile from './pages/profile/ProfilePage'
import UserContext from './Context'

const Navigation = () => {
    const context = useContext(UserContext)

    return (
        <Switch>
            <Route path='/' exact component={PublicationsPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            {context.user.loggedIn ? <Route path='/share' component={SharePage} /> : <Redirect to='/login' />}
            {context.user.loggedIn ? <Route path='/profile/:id' component={Profile} /> : <Redirect to='/login' />}
        </Switch>
    )
}


export default Navigation