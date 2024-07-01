import React from 'react'

function Chip({title,icon}) {
    return (
        <div className='flex-wrap border justify-evenly rounded-3xl w-32 border-opacity-50 py-1 hover:bg-gray-900 border-black  flex flex-row'>
            {icon}
            <span className='text-sm font-light font-oswald '>{title}</span>
        </div>
    )
}

function Seprator(){
    return(
        <div className='w-full h-[1px] bg-gray-700 '></div>
    )
}
export default function ExprerinceCard({orgname,place,position,startdate,enddate,title}) {
  return (
    <div className='flex flex-col experincecard h-full w-full p-5 gap-y-3'>
        <div className='text-4xl font-semibold font-oswald px-2'>{title}</div>
        <Seprator/>
        <div className='flex gap-x-3 text-sm my-5'>
            <Chip title={orgname} icon= {<span class="icon-[gg--organisation]"></span>}/>
            <Chip title={place} icon= {<span class="icon-[mdi--location]"></span>}/>
            <Chip title={position} icon= {<span class="icon-[material-symbols--work]"></span>}/>
        </div>
        <div className='flex gap-x-3 font-oswald font-light text-lg px-2'>
            <span>{startdate}</span>
            <span> - </span>
            <span>{enddate}</span>
        </div>
    </div>
  )
}
