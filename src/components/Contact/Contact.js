import React from 'react'
import './Contact.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillChatFill} from 'react-icons/bs'


const Contact = () => {
    return (
        <div className='contact-main-div'>
            <div className='contact-heading'>
                <h3>We offer all kinds of IT services that <br />ensure your success</h3>
            </div>
            <div className='contact-btn-div'>
                <a href = " https://woxro.com/contactus"><button className='contact-btn'><span className='phone-icon'><BsFillTelephoneFill/></span>Contact Us</button></a>
                <a href="https://www.tidio.com/talk/awy0oqhfhhgorwbfeet8ywkbg4off9sl"><button className='contact-btn'><span className='phone-icon'><BsFillChatFill/></span>Let's Talk</button></a>
               
            </div>
        </div>
    )
}

export default Contact