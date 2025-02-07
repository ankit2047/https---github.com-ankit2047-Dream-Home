import React from 'react'
import "./Feature.css"
import featuresData from '../../assets/featuresData'
const Feature = () => {
    return (
        <div className='featurecontainer'>
            <p className='para'>Featured Listing</p>
            <h1 className='heading'>Find Your Perfect Home</h1>
            <hr />
            <div className='fratureWrapper'>
                {featuresData.map((data, index) => (
                    <div key={index} className='feature-card'>
                        <p >{data.para}</p>
                        <h4>{data.heading1}</h4>
                        <img src={data.img} alt="" />
                        <h4>{data.heading2}</h4>
                        <p>{data.para1}</p>
                        <p>{data.para2}</p>
                        <button>Request for Quote</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feature