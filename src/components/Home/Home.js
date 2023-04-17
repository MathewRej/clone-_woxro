import React from 'react'
import Company from '../Company/Company'
import Header from '../Header/Header'
import Hiring from '../Hiring/Hiring'
import Navbar from '../Navbar/Navbar'
import Services from '../Services/Services'
import './Home.css'
import Servicelists from '../Servicelists/Servicelists'
import Contact from '../Contact/Contact'
import RecentWorks from '../RecentWorks/RecentWorks'
import Clients from '../Clients/Clients'
import ClientSupport from '../ClientSupport/ClientSupport'
import Blogs from '../Blogs/Blogs'
import ClientStatistics from '../ClientStatistics/ClientStatistics'
import Woxro from '../Woxro/Woxro'
import Message from '../Message/Message'
import Footer from '../Footer/Footer'


const Home = () => {

  return (
    <div className='main-div'>
        <Hiring/>
        <Header/>
        <Navbar/>
        <Company/>
        <Services/>
        <Servicelists/>
        <Contact/>
        <RecentWorks/>
        <Clients/>
        <ClientSupport/>
        <Blogs/>
        <ClientStatistics/>
        <Woxro/>
        <Message/>
        <Footer/>
    </div>

  )
}

export default Home