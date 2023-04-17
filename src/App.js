  import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import OurWorks from './components/OurWorks/OurWorks'
  
  const App = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/ourworks' element = {<OurWorks/>}/>
        <Route path='/ourworks/:workName' element ={<OurWorks/>}/>

      </Routes>
      </BrowserRouter>
    )
  }
  
  export default App