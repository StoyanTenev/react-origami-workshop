import React from 'react'
import Header from '../header/Header'
import Aside from '../aside/Aside'
import Footer from '../footer/Footer'

const PageLayout = (props) => {
    return (
        <div>
            <Header />
            <Aside />
            { props.children}
            <Footer />
        </div>
    )
}

export default PageLayout