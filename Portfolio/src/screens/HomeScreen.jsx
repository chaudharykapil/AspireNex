import React, { useEffect, useState } from 'react'
import Header from './components/header'
import StarBG from './components/starBG'
import IntroSection from './components/IntroSection'
import SkillSection from './components/SkillSection'
import ProjectSections from './components/ProjectSections'
import MoonBg from './components/moonbg'
import ExprienceSection from './components/ExprienceSections'

export default function HomeScreen() {
  
  return (
    <div className='pb-10'>
        <MoonBg />
        <StarBG />
        <Header/>
        <IntroSection />
        <SkillSection id="skills" />
        <ProjectSections id="projects" />
        <ExprienceSection id="experince" />
    </div>
  )
}
