import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Navigate } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    
    <Navbar/>


    <Outlet/>


    <Footer/>
    
    </>
   
  )
}
