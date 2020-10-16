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
            link: `/profile/${user && user._id}`
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

    return user ? authUserLink : guestUserLink
}

export default getNavigation