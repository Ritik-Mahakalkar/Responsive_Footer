import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  return (
    <div>
    <div className='home-main-container'>
      <div className="home-container">
        <h1>Welcome to Our Website</h1>
        <p>We are committed to delivering high-quality services and innovative solutions that enhance your experience. Our team is dedicated to ensuring customer satisfaction with creativity and excellence.</p>
        <button class="cta-button"><a href='#' className='about-link' >Learn More</a></button>
    </div>
   
      
    </div>
    
    </div>
  )
}

export default Home
