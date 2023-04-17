import React from 'react'
import './RecentWorks.css'
import BoohooLogo from '../images/boohoo-s.png'
import AshteadLogo from '../images/ashteaderp-s.png'
import Dailytips from '../images/dailytips-s.png'

const RecentWorks = () => {
    return (
        <div className='recentworks-main-div'>
            <div className='recentworks-heading-div'><h5>our recent works</h5>
                <p className='recentworks-heading'>
                    Proud projects that make us stand out
                </p>
                <p className='recentworks-title'>
                    To achieve and maintain high standards we are committed to investing in the most talented IT support specialists in India, with the experience, creativity, and qualifications to exceed the highest expectations. We are known for our works and we hope you enjoy looking at some of our recent works.
                </p>
            </div>
            <div className='recentworks-lists'>
                <a className='boohoo' href="https://www.boohoo.com">
                        <img className='works-img' src={BoohooLogo} />
                    
                    <div className='boohoo-title'>
                        <b>Boohoo</b>
                        <p>E-commerce Website</p>
                    </div>

                </a>
                <a className='boohoo' href="https://www.ashtead.link">

                        <img className='works-img' src={AshteadLogo} />
                   
                    <div className='boohoo-title'>
                        <b>Ashtead</b>
                        <p>Web Application</p>
                    </div>

                </a>
                <a className='boohoo' href="https://www.dailytips.link">
                        <img className='works-img' src={Dailytips} />
                    <div className='boohoo-title'>
                        <b>Dailytips</b>
                        <p>Mobile Application</p>
                    </div>
                </a>
            </div>
            <div className='view-project-div'>
                <br/>
                <a className = "project-link" href="https://woxro.com/ourworks">
                    <button className='view-projects-btn'>View Projects</button>
                </a>
            </div>
        </div>
    )
}

export default RecentWorks