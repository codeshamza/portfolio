import React from 'react'
import "./heading.css"
const Heading = (props) => {
  return (
   <>
     <div className="heading_container">
            <h1>{props.text}</h1> <hr id='Heading-hr' />
          </div>
   </>
  )
}

export default Heading
