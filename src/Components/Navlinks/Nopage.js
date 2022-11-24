import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./NoPage.css"
import Footer from "../Footer/footer"
const Nopage = () => {
  return (
    <div>
    <Navbar/>
    <div className="nopage_main">
      <h1>Oops! 404 Page Not Found</h1>
      <p>Looks Like You Are Trying To Reach The Page That Doesn't Exist.</p>
    </div>
      <Footer/>
    </div>
  )
}

export default Nopage
