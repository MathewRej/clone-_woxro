import React from 'react'
import './Message.css'
import GlobeIcon from "../images/web-glob.png"


const   Message = () => {
  return (
    <div className='message-main-div'>
        <div><img className='globe-icon' src = {GlobeIcon}/></div>
        <div className='message-div'>
        <div className='information-div'>
            <h2>To make requests for further information, contact us via our social channels.</h2>
            <p>Our service is also available at UAE<br/>
We just need a couple of hours!<br/>
No more than 2 working days since receiving your request.</p>

        </div>
        <div className='send-message-div'>
        

            <div className='form-div'>
                <h2>Let's get connected!</h2>
                <p>It's our pleasure to have a chance to cooperate.</p>
                <div className='fields-div'>
                    <input type = "text" name = "name" placeholder='Name' className='name-field'/>
                    <input type = "email" name = "email" placeholder='Email' className='name-field'/>
                    <input type = "text" name = "phone" placeholder='Contact Number'className='name-field'/>
                </div>
                <div className='captcha-div'>
                        </div>
                <div className='send-message-btn'>
                    <button className='send-btn'> Send Message</button>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Message