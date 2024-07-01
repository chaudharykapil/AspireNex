import React from 'react'
import ExprerinceCard from './ExprerinceCard'

function VerticleLine() {
  return (
    <div className='-z-10 h-[88%] absolute left-1/2'>
      <div className='h-full w-px bg-slate-500'></div>
    </div>
  )
}
export default function ExprienceSection({id}) {
  return (
    <div className='h-full w-full mt-64' id={id}>
      <div className='font-oswald text-center text-5xl mb-5'>
          Experience
      </div>
      <div className='h-full flex flex-col-reverse items-center w-full'>
        <VerticleLine />
        <div className='flex flex-row justify-between w-full px-20'>
          <div className='h-80 flex-1'>
            <ExprerinceCard title="Freelancer" orgname="Self Employed" place="Work from Home" position="self" startdate="2021" enddate="2023"  />
          </div>
          <div className='h-80 flex justify-center items-center'>
            <span class="icon-[carbon--condition-point]"></span>
          </div>
          <div className='h-80 flex-1'>
          </div>
        </div>
        <div className='flex flex-row-reverse justify-between w-full px-20'>
          <div className='h-80 flex-1'>
            <ExprerinceCard  title="Wordpress Developer" orgname="Bachpan India" place="Work from Home" position="Intern" startdate="April 2024" enddate="Present"  />
          </div>
          <div className='h-80 flex justify-center items-center'>
            <span class="icon-[carbon--condition-point]"></span>
          </div>
          <div className='h-80 flex-1'>
            
          </div>
        </div>
      </div>
    </div>
  )
}
