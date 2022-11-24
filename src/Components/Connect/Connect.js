import React from 'react'
import { Link } from 'react-router-dom'
import "./Connect.css"

const Connect = (props) => {
  return (
    <section className="h_contact">
    <h1>{props.text}</h1>
  <Link to="/contact"> <button>Connect</button> </Link>
 </section>
  )
}

export default Connect
