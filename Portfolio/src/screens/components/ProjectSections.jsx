import React from 'react'
import ProjectCard from './ProjectCard'
import {projects} from "./utils/constants"

export default function ProjectSections({id}) {
  return (
    <div className='min-h-screen w-full flex flex-col gap-y-12' id={id}>
        <div className='self-center text-5xl font-oswald'>Projects</div>
        <div className='grid grid-cols-3 w-full gap-10'>
          {
            projects.map((p)=>{
              return <ProjectCard
              name={p.name}
              description={p.description}
              link={p.link}
              skills={p.skills}
              livelink={p.livelink}
              />
            })
          }
            
        </div>
    </div>
  )
}
