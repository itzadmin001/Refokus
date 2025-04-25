import React from 'react'

function Footer() {
    const FooterMenu = [
        {
            name: "Privacy Policy"
        },
        {
            name: "Cookie Policy"
        },
        {
            name: "Impressum"
        },
        {
            name: "Terms"
        },
        {
            name: "Webflow Agency"
        }
    ]
    return (
        <div className=' w-full py-5 '>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4'>
                <ul className='md:flex flex-col gap-5  text-zinc-500'>
                    {
                        FooterMenu.map((menu, index) => {
                            return (
                                <li>{menu.name}</li>
                            )
                        })

                    }
                </ul>

                <button className='py-1 px-5 rounded-md bg-blue-400 text-white'>Enterprise partner</button>
            </div>

        </div>
    )
}

export default Footer
