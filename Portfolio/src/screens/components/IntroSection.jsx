import React from 'react'
import StarBG from './starBG'
import SocialMedia from './SocialMedia'

export default function IntroSection() {
  return (
    <div className='w-full h-screen font-oswald justify-center items-center flex flex-col'>
        <div className='flex flex-col max-w-[40rem] gap-y-10'>
            <div className='text-5xl' >Kapil Chaudhary,</div>
            <div className='text-xl font-light' >Hello! I specialize in creating robust web and mobile applications. Grounded in Object-Oriented Programming, I enjoy solving complex challenges with innovative solutions. Explore my portfolio to see how I bring creativity and technical expertise together to deliver real world projects.</div>
            <SocialMedia/>
       </div>
    </div>
  )
}
