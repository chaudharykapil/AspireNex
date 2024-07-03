import React from 'react'
import Header from './components/Header'

export default function CreateBlog() {
  return (
    <div className='h-full w-full flex flex-col gap-y-10 '>
        <Header />
        <div className='px-10 space-y-5'>
            <div className='w-full h-14 '>
                <input 
                    className='w-full h-full border-b-2 border-b-gray-200 border-gray-200 text-4xl  p-2 rounded-md'
                    placeholder='Add the title of the blog'
                />
            </div>
            <div className='w-full h-14 '>
                <input 
                    className='w-full h-full border-b-2 border-b-gray-200 border-gray-200 text-2xl  p-2 rounded-md'
                    placeholder='Add the sub title of the blog'
                />
            </div>
            <div>
                <textarea name="" className='w-full placeholder:text-xl placeholder:text-gray-300 overflow-scroll' placeholder='Add your conent here. HTML like formatting tags are allowed like <b> <i> <u> <ul> <ol> <li>' rows="18"></textarea>
            </div>
            <div>
                <button
                className=' rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Post
                </button>
            </div>
        </div>
    </div>
  )
}
