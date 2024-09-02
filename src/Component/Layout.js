import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className='w-full'>
            <Navbar />
            <Outlet />

        </div>
    )
}

export default Layout