import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <>
        <Header />
        <div className='mt-[80px] md:mt-[141px]'></div>
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout