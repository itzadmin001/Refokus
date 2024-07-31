import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Strips from './Components/Strips'
import Products from './Components/Products'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-[#000000] text-["Satoshi_Variable"]'>
      <Navbar />
      <Work/>
      <Strips/>
      <Products/>
      <Cards/>
      <Footer/> 

    </div>
  )
}

export default App
