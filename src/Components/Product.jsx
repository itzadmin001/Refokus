import React from 'react'
import Button from './Button'

function Product({ product, mover, count }) {
    return (
        <div className='w-full text-white md:py-20 p-5 md:h-[19rem]'>
            <div onMouseEnter={() => { mover(count) }} className='max-w-screen-xl mx-auto flex item-center justify-between'>
                <h1 className='md:text-5xl text-3xl capitalize font-medium mt-5'>{product.name}</h1>
                <div className='md:w-1/3 w-1/2'>
                    <p className='md:mt-10 text-sm'>{product.des}</p>
                    <div className='flex items-center md:gap-10 gap-2 md:mt-10 mt-5'>
                        {
                            product.live && <Button title='Live' />
                        }
                        {
                            product.case && <Button title='Case Study' />
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product
