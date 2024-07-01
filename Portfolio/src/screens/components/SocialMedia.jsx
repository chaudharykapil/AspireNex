import React from 'react'
import { links } from './utils/constants'

export default function SocialMedia() {
  return (
    <div className='flex flex-wrap flex-row gap-x-3'>
        <a href={links.github} target='_blank'><span className="icon-[mdi--github]"></span></a>
        <a href={links.linkedin} target='_blank'><span className="icon-[mdi--linkedin]"></span></a>
        <a href={links.hackerrank} target='_blank'><span className="icon-[cib--hackerrank]"></span></a>
        <a href={links.leetcode} target='_blank'><span className="icon-[simple-icons--leetcode]"></span></a>
        <a href={links.gmail} target='_blank'><span className="icon-[mdi--gmail]"></span></a>
    </div>
  )
}
