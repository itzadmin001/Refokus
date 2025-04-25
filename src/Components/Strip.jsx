import React from 'react'

function Strip({ val }) {
  return (
    <div className='rounded-md md:w-[16.66%] py-5 px-4 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-600 md:mt-20 mt-2 flex item-center justify-between'>
      <img src={val.url} alt="" />
      <span className='font-semibold text-white'>{val.number}</span>

    </div>
  )
}

export default Strip
