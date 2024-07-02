import React from 'react'

export default function NewQueryCard() {
  return (
    <div className='flex flex-col items-center py-4 gap-y-5 w-full shadow-md border px-10'>
        <span className='text-lg font-Fira font-semibold'>Stuck ? Ask for Help</span>
        <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 font-Fira">
                Your Ask
            </label>
            <div className="mt-2">
                <input
                id="name"
                name="name"
                type="text"
                required
                
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 font-Fira">
                Description
            </label>
            <div className="mt-2">
                <textarea
                id="description"
                name="description"
                type="text"
                rows={10}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
        <div className='w-full'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 font-Fira">
                Add an Image (optional)
            </label>
            <div className="mt-2">
                <input
                id="description"
                name="description"
                type='file'
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
        <div className='w-full'>
            <button
            type='button'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Post
            </button>
        </div>
    </div>
  )
}
