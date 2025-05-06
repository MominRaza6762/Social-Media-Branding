import React from 'react'
import "../Reviews/Reviews.css"
import review1 from "../../../assests/review1.webp"
import review2 from "../../../assests/review2.webp"
import review3 from "../../../assests/review3.webp"
import Button from '../../BrandingComponents/Button/Button'

const Reviews = () => {
  return (
    <div className='reviews'>
      <div className="reviewTop">
        <p>It was super important for me to build</p>
        <h2>the process that will inspire you <br /> to create your own Legend</h2>
      </div>
      <div className="reviewContainer">
        <div className="reviewContents">
        <img src={review1} alt="" />
        <p>We choose <strong style={{color:"#FAFAFA",backgroundColor:"#9E8261"}}> CORE EMOTIONS </strong> your product will be associated with</p>
        </div>
        <div className="reviewContents">
        <img src={review2} alt="" />
        <p>We clearly show what <strong style={{color:"#FAFAFA",backgroundColor:"#9E8261"}}>TRANSFORMATION </strong> your client will be going through</p>
        </div>
        <div className="reviewContents">
        <img src={review3} alt="" />
        <p>Core <strong style={{color:"#FAFAFA",backgroundColor:"#9E8261"}}> IMAGE, SOUND & ARCHETYPE </strong> that will explain your product without words</p>
        </div>
      </div>
      <Button title="Get a Free Consultation" />
    </div>
  )
}

export default Reviews
