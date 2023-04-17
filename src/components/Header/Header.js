import React, { useState } from 'react'
import './Header.css'
import woxroLogo from '../images/woxrologo.png'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import CloseIcon from '@mui/icons-material/Close';
import { grey, pink } from '@mui/material/colors'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <div className= "header-main-div">
        <div><img className='woxrologo' src = {woxroLogo}/> </div>
        <div className='navbar-btn-div'>
            <a className='navbar-icon-btn' onClick={() => setOpenNavbar(true) }><MenuIcon/></a>
            </div>
            <div className={openNavbar == true ? "navbar-items-active": "navbar-items"}>
                {/* <button className='item-link-btn' onClick={() => setOpenNavbar(false)}><CloseIcon sx={{ color: grey[500] }}/></button> */}
                <a className='item-link' onClick={() => setOpenNavbar(false)}><CloseIcon sx={{ color: grey[500] }}/></a>
                <a className='item-link' href = "/">Home</a>
                <a className='item-link' href = "https://woxro.com/aboutus">About Us</a>
                <a className='item-link' href = "https://woxro.com/service">Services</a>
                <a className='item-link' href = "https://woxro.com/./technology">Technology</a>
                <a className='item-link' href = "https://woxro.com/./careers">Careers</a>
                <a className='item-link' href = "https://woxro.com/./blog">Blog</a>
                <a className='item-link' href = "https://woxro.com/./ourworks">Our Works</a>
                <a className='item-link' href = "https://woxro.com/./contactus">Contact Us</a>
                
            </div>
        
        
        </div>
        
  )
}

export default Header