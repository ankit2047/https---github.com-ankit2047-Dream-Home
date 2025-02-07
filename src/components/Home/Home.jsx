import React from 'react'
import backgroundImg from "../../assets/background Image.jpg"
import "./Home.css"
const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='first'>
        <h1>AnkitTech</h1>
        <p>+91 999 999 99</p>
      </div>
      <div className='second'>
        <div className="form-container">
          <div className="form-header">Request for Quotes</div>
          <form action="">
            <div className="data">
              <label>Your Name</label>
              <input type="text" placeholder='Enter Your Name' />
            </div>
            <div className="data">
              <label>Your Phone Number</label>
              <input type="text" placeholder='Enter Your Phone Number' />
            </div>
            <div className="data">
              <label>Your Email</label>
              <input type="text" placeholder='Enter Your Email' />
            </div>
            <div className="data">
              <label>Visit Schedule*</label>
              <select className="visitSchedule">
                <option value="TODAY">TODAY</option>
                <option value="TOMORROW">TOMORROW</option>
                <option value="NEXT WEEK">NEXT WEEK</option>
              </select>
            </div>
            <div className="data">
              <label>Your Message</label>
              <textarea type="text"></textarea>
            </div>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className='right'>
          <p>Welcome to Our Chronicle Realty</p>
          <h1>Find A Dream</h1>
           <h1>Home You'll Love</h1>
        </div>
      </div>
      <img className='background-img' src={backgroundImg} alt="" />
    </div>
  )
}

export default Home