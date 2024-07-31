import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion"
import First from "../assets/first"

function Products() {

    const products = [
        {
            name: "Arqitel",
            des: "lorem ipsum dolor sit amet, consectetur adip occum nost raute et justo e ea rebum ab illo sit amet et justo ea rebum ab illo sit amet et justo e e",
            live: true,
            case: false
        },
        {
            name: "Cula",
            des: "lorem ipsum dolor sit amet, consectetur adip occum nost raute et justo e ea rebum ab illo sit amet et justo ea rebum ab illo sit amet et justo e e",
            live: true,
            case: false
        },
        {
            name: "Layout land",
            des: "lorem ipsum dolor sit amet, consectetur adip occum nost raute et justo e ea rebum ab illo sit amet et justo ea rebum ab illo sit amet et justo e e",
            live: true,
            case: false

        },
        {
            name: "TTR",
            des: "lorem ipsum dolor sit amet, consectetur adip occum nost raute et justo e ea rebum ab illo sit amet et justo ea rebum ab illo sit amet et justo e e",
            live: true,
            case: true
        },
        {
            name: "Maniv",
            des: "lorem ipsum dolor sit amet, consectetur adip occum nost raute et justo e ea rebum ab illo sit amet et justo ea rebum ab illo sit amet et justo e e",
            live: true,
            case: false
        },
        {
            name: "Singularity",
            des: "lorem ipsum dolor sit amet, consectetur adip occum nost raute et justo e ea rebum ab illo sit amet et justo ea rebum ab illo sit amet et justo e e",
            live: true,
            case: true
        },
        {
            name: "Like Magic",
            des: "lorem ipsum dolor sit amet, consectetur adip occum nost raute et justo e ea rebum ab illo sit amet et justo ea rebum ab illo sit amet et justo e e",
            live: true,
            case: false
        }
    ]

const [pos , Setpos] = useState(0)
    const mover = (val) => {
        Setpos(val*19)
    }
    return (
        <div className='mt-10 relative '>
            {
                products.map((product, index) => {
                    return (<Product mover={mover} key={index} count={index} product={product} />)
                }

                )
            }
            <div className='absolute top-0 w-full h-full pointer-events-none '>
                <motion.div initial={{ y: pos , x: "-50%  "}} animate={{y: pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration : 0.5}} className='absolute w-[26rem] h-[19rem] left-[43%]  overflow-hidden'>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration : 0.5}} className=' w-full h-full bg-red-400'> 

                    </motion.div>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration : 0.5}} className=' w-full h-full bg-sky-300'> 
                        <video src={First}></video>
                    </motion.div>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration : 0.5}} className=' w-full h-full bg-green-300'> </motion.div>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration : 0.5}} className=' w-full h-full bg-slate-200'></motion.div>
                    <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1] , duration : 0.5}} className=' w-full h-full bg-blue-300'></motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products
