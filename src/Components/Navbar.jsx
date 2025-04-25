import React from 'react'
import Button from './Button'

function Navbar() {

    const Menu = [
        {
            name: 'Home',
            path: "/",

        },
        {
            name: 'Work',
            path: "/work",

        },
        {
            name: 'About',
            path: "/about",
        },
        {
            name: 'News',
            path: "/news",
        },
        {
            name: 'Careers',
            path: "/careers",
        }
    ]
    return (
        <div className='max-w-screen-xl mx-auto p-5 text-white flex items-center justify-between'>
            <div className='flex gap-20'>
                <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <ul className='md:flex hidden gap-12'>
                    {Menu.map((menu, index) => (
                        <li key={index}>
                            <a href={menu.path} className='flex items-center justify-center gap-1' onClick={(e) => console.log(index)}>
                                {
                                    index === 1 && (<span className='inline-block w-1 h-1 rounded-full bg-[#00FF19]' style={{ boxShadow: "0 0 0.25em #00FF19" }}></span>)
                                }
                                {menu.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <Button />
        </div>
    )
}

export default Navbar
