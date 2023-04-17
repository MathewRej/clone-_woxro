import React from 'react'
import './Servicelists.css'
import MobileAppLogo from '../images/mobileappdevelopment.png'

const MobileApp = () => {
  return (
    <div className='mobileapp-main-div'>
      <a className='card' href = "https://woxro.com/Web-Designing">
        <div className='card-content'>
          <div>
              <img className='webDesigningLogo' src={MobileAppLogo} />
            </div>
            <div>
                <h4>Mobile App Development
                </h4>
            </div>
            <div className='webdesigning-content'>
                <p>
                We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.
                 </p>

            </div>
        </div>
      </a>
    </div>  
  )
}

export default MobileApp