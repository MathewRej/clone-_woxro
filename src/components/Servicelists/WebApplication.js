import React from 'react'
import './Servicelists.css'
import WebApplicationLogo from '../images/webapplication.png'

const WebApplication = () => {
    return (
        <div className='webapplication-main-div'>
            <a className='card' href="https://woxro.com/Web-Designing">
                <div className='card-content'>
                    <div>
                        <img className='webDesigningLogo' src={WebApplicationLogo} />
                    </div>
                    <div>
                        <h4>Web Application</h4>
                    </div>
                    <div className='webdesigning-content'>
                        <p>
                            We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.
                        </p>

                    </div>
                </div>
            </a>
        </div>
    )
}

export default WebApplication