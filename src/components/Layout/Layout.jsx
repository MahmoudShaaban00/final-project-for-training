import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({cart }) {
  return (
    <>
    <Navbar cart={cart} />
        <Outlet></Outlet>
        <Footer/>
    </>
  )
}
