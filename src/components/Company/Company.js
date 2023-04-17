import React from 'react'
import './Company.css'
import Banner from '../videos/banner.mp4'

const Company = () => {
  return (
    <div className='company-main-div'>
        <video className='banner-video' autoplay="true" muted="true">
  <source src={Banner} type="video/mp4"/>
  </video>
  <div class="overlay">
        <h1>Kerala's Leading Web<br/>Design Company</h1>
        <p>Global Web Designing Company That Provides Full-cycle Software Development Services, E-<br/>
        commerce & Mobile App Development Services.</p>
        
    </div>
    </div>
  )
}

export default Company