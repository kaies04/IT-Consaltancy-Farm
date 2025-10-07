import React from 'react'
import Header from '../Admin/components/Header'
import Footer from '../Admin/components/Footer'
export default function Adminlayout({children}) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}
