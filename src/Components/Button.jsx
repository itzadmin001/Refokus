import React from 'react'
import { PiArrowElbowDownRightLight } from "react-icons/pi";



function Button({title = " Get Started"}) {
  return (
    <div className='px-3 py-1 bg-white text-zinc-800 rounded-full flex justify-between items-center gap-4'>
      <h1>Get Started</h1>
      <span><PiArrowElbowDownRightLight /></span>
    </div>
  )
}

export default Button
