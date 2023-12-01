import React from 'react'
import '../Pages/Search.css'

const   SearchButton = ({onChange}) => {
  return (

    <div className="flex items-center justify-center ">
    <div className="flex   rounded">
    <input type="search" name="q" className="py-1 lg:py-2 text-xs lg:text-sm w-64 text-black border-2 border-gray-700 pl-5 rounded-3xl" placeholder="Search..." onChange={onChange}  autoComplete="off" />
    <span className="absolute inset-y-0 right-2 flex items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </span>
    </div>
</div>

  )
}

export default SearchButton