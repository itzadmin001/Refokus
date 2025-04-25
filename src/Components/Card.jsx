import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
function Card({ width, start, para, hover = "false" }) {

  return (
    <motion.div whileHover={{ background: hover === "true" && "#7443ff", padding: "25px" }} className={`${width} bg-zinc-800 p-5 rounded-xl  duration-300 text-white md:min-h-96 min-h-60 flex flex-col  justify-between`}>
      <div className='w-full'>
        <div className='w-full flex  justify-between items-center'>
          <h3>one Heading</h3>
          <MdArrowRightAlt />
        </div>
        <h1 className='md:text-3xl  text-2xl font-medium mt-5 '>Whatever heading</h1>

      </div>
      <div className='down w-full'>
        {
          start && (
            <>
              <h1 className=' md:text-6xl text-5xl font-bold tracking-tight leading-none '>Start a Project</h1>
              <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'> Contact Us</button>
            </>
          )
        }
        {para && (
          <>
            <p className='text-sm text-zinc-500  font-medium '>Lorem ipsum dolor sit amet consectetur.</p>
          </>
        )

        }
      </div>
    </motion.div>
  )
}

export default Card
