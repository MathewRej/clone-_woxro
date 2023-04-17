import React from 'react'
import './ClientStatistics.css'


const ClientStatistics = () => {
  return (
    <div className='clientstatistics-main-div'>
        <div class="maps-client-heading">
                <h1>Client<br/>Statistics</h1><br/>
            <div class="divider" ></div>
                <p>We meet clients wherever they are on their paths <br/>to change in every industry across the globe.</p>
            </div>
            <div className='projects-div'>
                <div className='web-projects-div'>
                    <span className='web-development-projects'>Web Development Projects</span>
                    <label className='projects-count'>324+</label>
                </div>
                <div className='development-team'>
                <span className='web-development-projects'>Development Team</span>
                    <label className='projects-count'>52+</label>
                </div>
            </div>
    </div>
  )
}

export default ClientStatistics