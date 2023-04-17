import React from 'react'
import './Servicelists.css'
import EcommerceLogo from '../images/ecommercedevelopment.png'

const Ecommerce = () => {
  return (
    <div className='ecommerce-main-div'>
            <a className='card' href="https://woxro.com/Web-Designing">
                <div className='card-content'>
                    <div>
                        <img className='webDesigningLogo' src={EcommerceLogo} />
                    </div>
                    <div>
                        <h4>Ecommerce Development</h4>
                    </div>
                    <div className='webdesigning-content'>
                        <p>
                        For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.
                        </p>

                    </div>
                </div>
            </a>
        </div>
    )
}

export default Ecommerce