import React from 'react'
import Navbar from './navbar'
import {Outlet} from 'react-router-dom'
import Footer from './footer.jsx'
const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />            
        </div>
    )
}

export default Layout