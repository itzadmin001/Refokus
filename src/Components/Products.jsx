import React, { useEffect, useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion"
import FirstVideo from "../assets/first.webm"
import Second from "../assets/third.webm"
import third from "../assets/fourth.mp4"
import Fourth from "../assets/eight.webm"
import fivth from "../assets/fiveth.webm"
import sixth from "../assets/seventh.webm"
import seven from "../assets/nineth.webm"

function Products() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    const [pos, Setpos] = useState(0)
    const mover = (val) => {
        if (screenWidth < 768) {

            Setpos(val * 13)
        } else {
            Setpos(val * 19)
        }
    }
    return (
        <div className='mt-10 relative'>
            {
                products.map((product, index) => {
                    return (<Product mover={mover} key={index} count={index} product={product} />)
                }

                )
            }
            <div className='absolute top-0 w-full h-full pointer-events-none '>
                <motion.div initial={{ y: pos, x: "-50%" }} animate={{ y: pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className='rounded-2xl absolute md:w-[26rem] w-[14rem] md:h-[12rem] h-[12rem] md:left-[43%] left-[50%] overflow-hidden'>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className='w-full h-full '>
                        <video autoPlay muted={true} loop={true} src={FirstVideo}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className=' w-full h-full'>
                        <video autoPlay muted={true} loop={true} src={Second}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className=' w-full h-full '>
                        <video autoPlay muted={true} loop={true} src={third}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className=' w-full h-full '>
                        <video autoPlay muted={true} loop={true} src={Fourth}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className=' w-full h-full '>
                        <video autoPlay muted={true} loop={true} src={fivth}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className=' w-full h-full '>
                        <video autoPlay muted={true} loop={true} src={seven}></video>
                    </motion.div>
                    <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }} className=' w-full h-full '>
                        <video autoPlay muted={true} loop={true} src={sixth}></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products
