import React from 'react'
import './Servicelists.css'
import GraphicsDesigningLogo from '../images/graphic.png'

const GraphicsDesigning = () => {
  return (
    <div className='graphics-main-div'>
      <a className='card' href = "https://woxro.com/Web-Designing">
        <div className='card-content'>
          <div>
              <img className='webDesigningLogo' src={GraphicsDesigningLogo} />
            </div>
            <div>
                <h4>Graphic Designing</h4>
            </div>
            <div className='webdesigning-content'>
                <p>
                We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth.
                </p>

            </div>
        </div>
      </a>
    </div>
  )
}

export default GraphicsDesigning