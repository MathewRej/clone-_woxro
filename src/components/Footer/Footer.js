import React from 'react'
import './Footer.css'
import ClutchLogo from '../images/clutch.svg'
import { BsTwitter } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
import { AiOutlineBehance } from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai'



const Footer = () => {
  return (
    <div className='footer-main-div'>
        <div className='footer-div'>
        <div className='explore-div'>
            <b>Explore</b>
            <div className='explore-items'>
                <a >Our Company</a>
                <a >Founder's Letter</a>
                <a >Accessibility</a>
                <a >Client Portal</a>
                <a >Woxine e-magazine</a>
                <a >Get a quote</a>
                <a>Woxhost</a>
            </div>
        </div>
        <div className='explore-div'>
            <b>Quick links</b>
            <div className='explore-items'>
                <a >Home</a>
                <a >About Us</a>
                <a >Services</a>
                <a >Technology</a>
                <a >Careers</a>
                <a >Our Works</a>
                <a>Contact Us</a>
            </div>
        </div>
        <div className='explore-div'>
            <b>Services</b>
            <div className='explore-items'>
                <a >Web Designing</a>
                <a >Web Application</a>
                <a >Mobile Applications</a>
                <a >Ecommerce Development</a>
                <a >Digital Marketing</a>
                <a >AI & ML Development</a>
                <a>Hosting</a>
            </div>
        </div>
        <div className='explore-div'>
            <b>Support</b>
            <div className='explore-items'>
                <a >Covid-19 Response</a>
                <a >Refund Policy</a>
                <a >Privacy Policy</a>
                <a >Terms of Service</a>
                <a >Payment Gateway</a>
                <a>FAQ</a>
                <a >Knowledge Base</a>
            </div>
        </div>
        
        </div>
        <div className='footer-line'></div>
        <div className='contact-info-div'>
            <div className='address-div'>
                <b>Office Address</b>
                <p>Leshore Business Park</p>
                <p>Thrissur 680004</p>
                <p>Kerala, India</p>
            </div>
        
            <div className='address-div'>
                <b>Let's Talk</b>
                <p>Office : +91 487 2080 212</p>
                <p>THR : +91 7994 468821</p>
                <p>Sales : +91 8606 588821</p>
                <p>UAE : +971 5825 04982</p>
            </div>
            <div className='social-media'>
            <b>Get connected with us</b>
                <div className='social-media-links'>
                <a className='linkedinlogo' href = "https://www.linkedin.com/company/woxrotechnologysolutions"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a className='facebooklogo' href='https://www.facebook.com/woxro'><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a className='twitterlogo' href='https://twitter.com/Woxroglobal'><BsTwitter/></a>
                <a className='dribblelogo' href='https://dribbble.com/woxro'><FiDribbble/></a>
                <a className='behancelogo' href='https://www.behance.net/woxro'><AiOutlineBehance/></a>
                </div>
            
            <div className='review-div'>
                <div> <p>REVIEWED ON</p>
              <a href='https://clutch.co/profile/woxro?utm_source=widget&amp;utm_medium=2&amp;utm_campaign=widget&amp;utm_content=logo'><img src = {ClutchLogo}/></a></div>
            <div className='star-review-div'>
            <a className='star-review' href='https://clutch.co/profile/woxro?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=stars#reviews'>
                    <span className='star-icon'><AiFillStar/></span>
                    <span className='star-icon'><AiFillStar/></span>
                    <span className='star-icon'><AiFillStar/></span>
                    <span className='star-icon'><AiFillStar/></span>
                    <span className='star-icon'><AiFillStar/></span>
                    </a>
                    <a className='star-review' href='https://clutch.co/profile/woxro?utm_source=widget&amp;utm_medium=2&amp;utm_campaign=widget&amp;utm_content=num_reviews#reviews'>
                        <p>2 REVIEWS</p>
                    </a>
            </div>
              
            
            </div>
            </div>
            </div>
            <div className='copyright-div'>
                <p>© 2016-2022 Woxro Technology Solutions Pvt. Ltd. All Rights Reserved</p>
               
            </div>
            
            
    </div>
  )
}

export default Footer