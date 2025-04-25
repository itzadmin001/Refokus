import React, { useState } from 'react'
import img from '../assets/img.jpg';
import { useMotionValueEvent, useScroll } from 'framer-motion';

function Work() {
  const [images, Setimages] = useState([
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: true
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "49%",
      isActive: false
    }
  ])

  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change", (latest) => {
    const Showimages = (arr) => {

      Setimages(prev => (
        prev.map((item, index) => (
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        ))))
    }

    switch (Math.floor(latest * 100)) {
      case 0:
        Showimages([])
        break;
      case 3:
        Showimages([0])
        break;
      case 4:
        Showimages([0, 1])
        break;
      case 5:
        Showimages([0, 1, 2])
        break;
      case 6:
        Showimages([0, 1, 2, 3])
        break;
      case 8:
        Showimages([0, 1, 2, 3, 4])
        break;
      case 10:
        Showimages([0, 1, 2, 3, 4, 5])
        break;
      default:
        break;
    }
  })
  return (
    <div className='md:w-full mt-20'>
      <div className=' relative max-w-screen-xl mx-auto text-white text-center font-semibold tracking-tight select-none'>
        <h1 className='text-[34vw] leading-none'>work</h1>
        <p className=' text-zinc-500 mt-10 p-2'>Web Design, Webflow Development, Creative Development</p>
        <div className='absolute w-full h-full top-0 '>
          {
            images.map((elem, i) => {
              return (
                elem.isActive && (<img src={elem.url} alt="" className='absolute md:w-60 w-36 rounded-lg -translate-x-[50%] -translate-y-[50%]' style={{ top: elem.top, left: elem.left }} />)
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Work
