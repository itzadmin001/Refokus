import React from 'react'
import Strip from './Strip'

function Strips() {
    const data = [
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 2,
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 15,

        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: 52
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 2,
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 15,

        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: 52
        }
    ]
    return (
        <div className='md:flex block mt-20 items-center p-2'>
            {
                data.map((item, index) => {
                    return <Strip key={index} val={item} />
                })
            }
        </div>
    )
}

export default Strips
