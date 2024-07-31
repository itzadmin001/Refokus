import React from 'react'
import Button from './Button'

function Product({ product , mover , count}) {
    return (
        <div className='w-full text-white py-20 h-[19rem] '>
            <div onMouseEnter={() => {mover(count)}} className='max-w-screen-xl mx-auto flex item-center justify-between'>
                

                <h1 className='text-5xl capitalize font-medium mt-5'>{product.name}</h1>
                <div className='w-1/3'>
                    <p className='mt-10'>{product.des}</p>
                   <div className='flex items-center gap-10 mt-10'>
                   {
                       product.live && <Button title='Live'/>
                    }
                    {
                        product.case && <Button title='Case Study'/>
                    }
                   </div>
                </div>
            </div>
        </div>

    )
}

export default Product
