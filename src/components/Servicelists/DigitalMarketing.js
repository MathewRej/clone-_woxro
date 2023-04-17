import React from 'react'
import './Servicelists.css'
import DigitalMarketingLogo from '../images/digitalmarketing.png'

const DigitalMarketing = () => {
  return (
    <div className='digitalmarketing-main-div'>
    <a className='card' href="https://woxro.com/Web-Designing">
        <div className='card-content'>
            <div>
                <img className='webDesigningLogo' src={DigitalMarketingLogo} />
            </div>
            <div>
                <h4>Digital Marketing</h4>
            </div>
            <div className='webdesigning-content'>
                <p>
                We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.
                </p>

            </div>
        </div>
    </a>
</div>
  )
}

export default DigitalMarketing