import React from 'react'

export default function Header() {
  return (
    <div className='w-full h-16 sticky top-0 left-0  flex flex-row items-center px-5 shadow-md shadow-slate-500 bg-slate-900 z-10 text-white '>
		<div className='flex-1 flex flex-row gap-x-5 items-center '>
			<span><img src="\src\assets\images\logoImage.png" className='h-9' alt="" /></span>
			<span><img src="\src\assets\images\logoTitle.png" className='h-9' alt="" /></span>
		</div>
		<div className='flex-1 flex flex-row justify-evenly'>
			<div>
				<span>Home</span>
			</div>
			<div>
				<span>Questions</span>
			</div>
			<div>
				<span>Blogs</span>
			</div>
			<div>
				<span>Setting</span>
			</div>
		</div>
    </div>
  )
}
