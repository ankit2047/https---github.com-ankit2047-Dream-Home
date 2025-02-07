import React from 'react'
import "./AboutUs.css"
import officeImg from "../../assets/aboutUs.jpg"

const AboutUs = () => {
  return (
    <div className='about-container'>
        <div className='about-left'>
            <h5>Who We Are</h5>
            <h1>About Us</h1>
            <p>The missing of DSR GROUP is that all the poor person should have their own home. The mission of our company is to be enable all tenants to become landlord and we already provided approximately 1000 family their own home in noida and grater noida and we want with big scope and raising a big empire of Grater Noida.
            <br/>
            <br/>
            The missing of DSR GROUP is that all the poor person should have their own home. The mission of our company is to be enable all tenants to become landlord and we already provided approximately 1000 family their own home in noida and grater noida and we want with big scope and raising a big empire of Grater Noida.
            </p>
            <button className='btn'>Know More</button>
        </div>
        <div className='about-right'>
            <img src={officeImg} alt="" />
        </div>
    </div>
  )
}

export default AboutUs