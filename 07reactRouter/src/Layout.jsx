import React from 'react'
import Hdr from './components/Hdr/Hdr'

import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Hdr/>
    <Outlet/>
    <Footer/>



    </>
  )
}

export default Layout