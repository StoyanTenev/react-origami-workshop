const getNavigation = (user) => {

    const authUserLink = [
        {
            title: 'Publications',
            link: '/'
        },
        {
            title: 'Share thoughts',
            link: '/share'
        },
        {
            title: 'Profile',
            link: `/profile/${user && user.id}`
        }
    ]

    const guestUserLink = [
        {
            title: 'Publications',
            link: '/'
        },
        {
            title: 'Register',
            link: '/register'
        },
        {
            title: 'Login',
            link: '/login'
        },
    ]

    const loggedIn = user && user.loggedIn
    return loggedIn ? authUserLink : guestUserLink
}

export default getNavigation