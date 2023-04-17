import React from 'react'
import './Servicelists.css'
import webDesigningLogo from '../images/webdesigning.png'


const WebDesigning = () => {
  return (
    <div className='webdesigning-main-div'>
      <a className='card' href = "https://woxro.com/Web-Designing">
        <div className='card-content'>
          <div>
              <img className='webDesigningLogo' src={webDesigningLogo} />
            </div>
            <div>
                <h4>Web Designing</h4>
            </div>
            <div className='webdesigning-content'>
                <p>
                We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.
                </p>

            </div>
        </div>
      </a>
    </div>
  )
}

export default WebDesigning