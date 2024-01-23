import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Layout2 = ({userData}) => {
   
    return (
        <>
            <Sidebar Outlet={Outlet} userData={userData}/>
        </>

    )
}

export default Layout2