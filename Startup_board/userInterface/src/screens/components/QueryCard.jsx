import React from 'react'
import HRLine from './HRLine'

function ActionBar({}) {
    return (
        <div className='w-full h-10 flex flex-row gap-x-5 text-3xl font-Fira items-center '>
            <span className='text-base' >100+</span>
            <span className="icon-[pepicons-pencil--handshake] hover:text-blue-500"></span>
            <span className="icon-[pepicons-pencil--handshake-off] hover:text-red-500"></span>
        </div>
    )
}


export default function QueryCard({}) {
  return (
    <div className='w-full flex flex-col font-Fira border-2 shadow-md p-5'>
        <div className='text-gray-500 flex flex-row gap-x-3 items-center'>
            <span className='text-sm'>user100</span>
            <span className='text-xs'>Jun 1, 2023 - 23:14</span>
        </div>
        <span className='text-2xl font-bold '>What backend are you supposed to use with React?</span>
        <span className='text-slate-500'>
            So, I just finished learning a bit of web development. I took a course focused on React using things such as react router and firebase. However, I also took another web development course where I learned PostgreSQL, Express, and EJS.
        </span>
        
        <div className='w-full'>
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" loading='lazy'  alt="" className='w-full h-64 object-none' />
        </div>
        <HRLine />
        <ActionBar />
    </div>
  )
}
