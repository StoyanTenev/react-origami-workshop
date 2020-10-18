import React from 'react'

const UserContext = React.createContext({
    user: {
        loggedIn : false
    },
    logIn: () => { },
    logOut: () => { }
});

export default UserContext