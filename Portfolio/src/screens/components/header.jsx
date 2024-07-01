import React from 'react'

export default function Header() {
  return (
    <div className='w-100 h-auto shadow-sm flex items-center bg-black text-center sticky top-0 z-10 shadow-gray-700 text-3xl font-oswald py-2'>
       <div className='flex-[1]'>&lt;namespace/&gt;</div>
       <div className='flex justify-evenly items-center flex-[2] text-xl'>
            <a href="#skills"><div className='flex justify-center hover:cursor-crosshair'>
                <span className="icon-[icon-park-outline--connect] mr-3"></span>
                <span className=''>Skills</span>
            </div></a>
            <a href="#projects"><div className='flex justify-center hover:cursor-crosshair'>
                <span className="icon-[mynaui--box] mr-3"></span>
                <span className=''>Projects</span>
            </div></a>
            <a href="#experince"><div className='flex justify-center hover:cursor-crosshair'>
                <span className="icon-[icon-park-outline--level] mr-3"></span>
                <span className=''>Experience</span>
            </div></a>
            <a href="./src/assets/KapilChaudharyResume-webDev.pdf" download><div className='flex justify-center hover:cursor-crosshair'>
                <span className="icon-[mdi--resume] mr-3"></span>
                <span className=''>Resume</span>
            </div></a>
            
       </div>
       
    </div>
  )
}
