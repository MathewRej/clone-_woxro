import React from 'react'
import './Woxro.css'
import { BsClockHistory } from 'react-icons/bs';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BsGlobe2 } from 'react-icons/bs';
import { RiSuitcaseLine } from 'react-icons/ri';
import { AiOutlineLock } from 'react-icons/ai';
import { BsCircle } from 'react-icons/bs';



const Woxro = () => {
    
    const details = [
        {title:"Quick response" ,
        content: "Exceptionally fast implementation, deployment, and maintenance enables truly agile developmen",
        icon: <BsClockHistory/>,
        iconColor: "#b39f85",
        width: "30px",
        index: "01" ,
        indexColor: "#eddcd1",
        color:"#faf6f3"},
        {title:"Requirement " ,
        title2:"Gathering",
        content: "We offer unlimited remote and onsite support with round-the-clock cover as standard and 24/7 options.",
        icon: <BsCircle/>,
        iconColor: "#bed0ff",
        width: "30px",
        index:"02" ,
        indexColor: "#b9cefd",
        color:"#edf2fe"},
        {title:"Experienced " ,
        title2:"Staffs",
        content: "We offer unlimited remote and onsite support with round-the-clock cover as standard and 24/7 options.",
        icon: <BsFillPeopleFill/>,
        iconColor: "#ffacc7",
        width: "30px",
        index: "03",
        indexColor:"#f7afc5",
        color:"#fee3ec"},
        {title:"Scaleable " ,
        title2:"Platform",
        content: "The Elastic infrastructure supporting thousands of concurrent users on an up-gradation basis.",
        icon:<BsGlobe2/>,
        iconColor: "#c3dcd8",
        width: "30px",
        index: "04",
        indexColor:"#c7dbd7",
        color:"#f0f5f4"},
        {title:"Legacy " ,
        title2:"Free",
        content: "Applications & Platforms that never become obsolete and grow capabilities over time.",
        icon: <RiSuitcaseLine/>,
        iconColor: "#ffafbb",
        width: "30px",
        index: "05",
        indexColor:"#f5b4bd",
        color:"#fff5f6"},
        {title:"100% " ,
        title2:"Satisfaction",
        content: "We believe we are nothing without delivery to our clients’ absolute satisfaction.",
        icon: <AiOutlineLock/>,
        iconColor: "#f8e2b9",
        width: "30px",
        index: "06",
        indexColor:"#f5e1be",
        color:"#fcf7ee"},
    ]
  return (
    <div className='woxro-main-div'>
        <div className='woxro-heading-div'><h5>WHY CHOOSE WOXRO</h5>
    <p className='woxro-heading'>
    How woxro claim to excel in the IT Sector?
                </p>
                <p className='woxro-title'>
                From the beginning, We have been setting up the team by individuals who have gone beyond the limits of personal goals and who have the passion to do things from the bottom of their heart.                </p>
    </div>
    <div className='woxro-content'>
        {details.map(item => {
            return(
                <div className='card-contents' style = {{backgroundColor: item.color}}>

                <div className='card-icon'>
                <p style={{color: item.indexColor}}>{item.index}</p>
                <span className='icons-' style={{color: item.iconColor, width: item.width}}>{item.icon}</span>
                </div>
                <div className='card-title'>
                <h3>{item.title}<br/>{item.title2}</h3>
                </div>
                <div className='title-details'>
                <p>{item.content}</p>
                </div>
            </div>
            )
        })}
       
    </div>
    </div>
  )
}

export default Woxro