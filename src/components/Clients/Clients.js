import React from 'react'
import './Clients.css'
import Articulate from '../images/h-s.png'
import Hyundai from '../images/h-1-s.png'
import IndianBank from '../images/h-2-s.png'
import BankofBaroda from '../images/h-3-s.png'
import DigitalReasoning from '../images/h-4-s.png'
import GemHospital from '../images/gem-s.png'
import TechAway from '../images/t-s.png'
import Subway from '../images/subway_woxroclientlogo-s.png'
import Smartpets from '../images/smartpets_woxroclientlogo-s.png'
import Argos from '../images/argos_woxroclientlogo-s.png'
import AllenSolly from '../images/allensolly_woxroclient-s.png'
import Lg from '../images/LG_woxroclientlogopng-s.png'
import EnsureAcademy from '../images/ensureacademy_woxroclientlogo-s.png'
import Jays from '../images/jdlabs_woxroclientlogo-s.png'
import BookmyShow from '../images/bookmyshow_woxroclientlogo-s.png'

const Clients = () => {
    const companies = [
        {logo:Articulate,
        link:"https://articulate.com/"},
        {logo:Hyundai,
        link:"https://www.hyundai.com/in/en"},
        {logo:IndianBank,
        link:"https://www.indianbank.net.in/jsp/startIBPreview.jsp"},
        {logo:BankofBaroda,
            link:"https://www.bankofbaroda.in/index.htm"},
        {logo:DigitalReasoning,
            link:"https://digitalreasoning.com"},
        {logo:GemHospital,
            link:"https://www.gemhospitals.com"},
        {logo:TechAway,
            link:"https://www.teachaway.com"},
        {logo:Subway,
            link:"https://www.subway.com/en-IN"},
        {logo:Smartpets,
            link:"https://www.smartpets.store"},
        {logo: Argos,
            link:"https://www.argos.co.uk"},
        {logo:AllenSolly,
            link:"https://www.allensolly.com/"
                 },
        {logo:Lg,
            link:"https://www.lg.com/in"},
        {logo:EnsureAcademy,
            link:"https://www.ensureacademy.com"},
        {logo:Jays,
            link:"http://www.jaysmedlabs.com"},
        {logo:BookmyShow,
            link:"https://in.bookmyshow.com"},
    ]
  return (
    <div className='clients-main-div'>
    <div className='clients-heading-div'><h5>OUR CLIENTS GLOBALLY</h5>
    <p className='clients-heading'>
        We are dependent on
                </p>
                <p className='clients-title'>
                    To achieve and maintain high standards we are committed to investing in the most talented IT support specialists in India, with the experience, creativity, and qualifications to exceed the highest expectations. We are known for our works and we hope you enjoy looking at some of our recent works.
                </p>
    </div>
    <div className='companies-div'>
        {companies.map(item =>{
            return(
                <a className='company-link' href = {item.link}>
                    <img className = "company-logo" src ={item.logo}/>
                </a>
            )
        })}


    </div>
    </div>
  )
}

export default Clients