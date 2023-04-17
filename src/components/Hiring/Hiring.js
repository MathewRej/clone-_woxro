import React from 'react'
import './Hiring.css'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'


const Hiring = () => {
    return (
        <div className='hiring-div'>
            
            <div className='hiring-hiring'><a className='hiring-link' href='https://woxro.com/careers'>
                <b>Now Hiring  :</b>Looking for a job in Full Stack Development?</a>
            </div>
            <div className='phone-location-div'>
                <div className='hiring-phone'>
                    <span className='phone-icons'><BsFillTelephoneFill/></span>
                    <a className='phone-link' href="tel:487 2080 212">+91 487 2080 212</a>
                </div>
                <div className='hiring-location'>
                    <span className='location-icon'><HiLocationMarker/></span>
                    <div className='location-div'> Leshore Business Park, Thrissur</div>

                </div>
            </div>
        </div>
    )
}

export default Hiring