import React from 'react'
import './Blogs.css'
import CommmunicationLogo from '../images/communication.png'
import WebLogo from '../images/marketing.png'
import SoftwareQualityLogo from '../images/importance-of-software-quality-in-business.png'
import JacobImg from '../images/885714.png'
import TeenaImg from '../images/ankithamenon.jpeg'
import AparnaImg from '../images/148092218po.jpeg'

const Blogs = () => {
    const data = [
        {
            logo: CommmunicationLogo,
            image: JacobImg,
            date: "Sep 12 2022",
            name: "Jacob Roy",
            link:"https://woxro.com/blog/communication-tips-for-startups",
            title: "The Complete Guide on Communication Tips for Startups",
            content: "Effective Communication tips for startups The art of communication is the language of Leadership - James Humes Communication involves expression, and every act is an expression of oneself.Whether it's personal or professional, good communication skills can go a long way in establishing trust and integrity."
        },
        {
            logo: WebLogo,
            image: TeenaImg,
            date: "Aug 12 2022",
            name: "Teena Merlin",
            link:"https://woxro.com/blog/web3-marketing-strategy",
            title: "Web 3.0 Marketing Strategy | Digital Marketing Tips",
            content: "The only Web 3.0 marketing Strategy you need Ever had an incident where you consider buying something and suddenly all your social media is packed with ads for the product you wanted to buy? You might get creeped out and assume that these sites are snooping or eavesdropping but in reality, that's how much the present technology has evolved."
        },
        {
            logo: SoftwareQualityLogo,
            image: AparnaImg,
            date: "Jul 20 2022",
            name: "Aparna M",
            link:"https://woxro.com/blog/importance-of-software-quality",
            title: "The Complete Guide on Communication Tips for StartupsTop #4 Importance of software quality (July 2022)",
            content: "The quality of your software matters in the growth of your brand. Know more about the&nbsp;importance of software quality assurance in business. Table of Contents Importance of Software Quality in Business Defining Software Quality What are software quality standards? Importance of software quality software quality assurance in system development."
        }
    ]
    return (
        <div className='blogs-main-div'>
            <div className='blogs-heading'>
                <h5>READ OUR BLOGS</h5>
                <p>
                    Latest news are on top all times
                </p>
            </div>
            <div className='blogs-details'>
                {data.map(item => {
                    return (
                        <div className='blogs-content'>
                            <a className='communication-link' href= {item.link}>
                                <div className='commmunication-div'>
                                    <img src={item.logo} />
                                </div>
                                <div class="blogs-content-author">
                                    <img src={item.image} />
                                    <div class="blog-author-cont">
                                        <span className='author-name'>{item.name}</span>
                                        <span className='author-date'>{item.date}</span>
                                    </div>
                                </div>
                                <div className='author-title'>
                                        <b>{item.title}</b>
                                    </div>
                                    <div className='author-content'>
                                        <p>{item.content}</p>
                                    </div>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className='blog-btn-div'>
                <a href= "https://woxro.com/./blog">
                    Read more blogs
                </a>
            </div>
        </div>

    )
}

export default Blogs