import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '../App.css';
import "../assets/lib/animate/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

import "../assets/importfle.css";
 function Weblayout({children}) {
  return (
   <>
     <Header/>
     {children}
     <Footer/>

    </>
  )
}
export default Weblayout;