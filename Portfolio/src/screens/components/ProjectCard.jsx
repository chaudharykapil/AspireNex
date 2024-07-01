import React from 'react'

function Seprator(){
    return(
        <div className='w-full h-[1px] bg-gray-700 '></div>
    )
}

export default function ProjectCard({name,description, skills,link,livelink}) {
  return (
    <div className='flex flex-col mx-auto glassomormph-card w-[22rem] h-[22rem] px-2 py-2 font-oswald gap-y-2'>
        <div className=' text-3xl'>
            {name}
        </div>
        <Seprator/>
        <div className='text-base font-extralight flex-1 gap-y-5 leading-7'>
            {description}
        </div>
        <div className='grid grid-cols-7 text-2xl gap-x-3'>
            {skills?skills.map(s=>s):null}
        </div>
        <Seprator/>
        <div>
            <a href={link}><span className="icon-[mdi--github] text-xl"></span></a>
            {livelink?<a href={livelink}><span className="icon-[material-symbols--link] text-xl"></span></a>:null}
        </div>
    </div>
  )
}
