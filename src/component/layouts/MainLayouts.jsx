import React from 'react'
import {Outlet} from 'react-router-dom'
 import Navbar from '../Navbar'

const MainLayouts = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default MainLayouts