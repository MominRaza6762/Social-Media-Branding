import React from 'react'
import "../OurDevelopment/OurDevelopment.css"
import cake from "../../../assests/cake.webp"
import Button from '../../BrandingComponents/Button/Button'
const OurDevelopment = () => {
  return (
    <div className='ourDevelopment'>
      <div className="ourDevelopmentLeft">
        <img src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="ourDevelopmentRight">
        <h2>What will be exactly developed:</h2>
        <ul>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Defining the nature of your product</p>
                </div>
            </li>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Creation of the fundamentum of your product</p>
                </div>
            </li>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Name, Motto and Slogan</p>
                </div>
            </li>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Packages, Types and Pricing Policy, Visual Identity</p>
                </div>
            </li>
            <li>
                <div style={{display:"flex",alignItems:'center',margin:"30px 0"}}>
                    <img src={cake} alt="" style={{padding:"0 10px",borderRadius:"50%"}}/>
                    <p>Product Sound</p>
                </div>
            </li>
            <Button title="Get a Free Consultation" />
        </ul>
      </div>
    </div>
  )
}

export default OurDevelopment
