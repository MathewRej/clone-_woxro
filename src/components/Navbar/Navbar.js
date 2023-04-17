import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [navbar,setNavbar] = useState(false)
    const changeNavbar = () => {
        if(window.scrollY >= 80){
            setNavbar(true)

        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbar)
  
  return (
    <div className={navbar ? "navbar-main-div-active" : "navbar-main-div"}>
        <div><a href="https://woxro.com/">Home</a></div>
        <div><a href="https://woxro.com/./aboutus">About Us</a></div>
        <div><a href="https://woxro.com/./service">Services</a></div>
        <div><a href="https://woxro.com/./technology">Technology</a></div>
        <div><a href="https://woxro.com/./careers">careers</a></div>
       <div> <a href="https://woxro.com/./blog">Blogs</a></div>
        <div><a href="https://woxro.com/./ourworks">Our Works</a></div>
        <div><a href="https://woxro.com/./contactus">Contact Us</a></div>
    </div>
  )
}

export default Navbar