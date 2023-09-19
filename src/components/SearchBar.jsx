import React from 'react'
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'

function SearchBar() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type="text" placeholder="Search..." className='text-xl font-light p-2 focus:outline-none capitalize placeholder:lowercase'/>
            <UilSearch size={30} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <UilMapMarker size={30} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name="imperial" className='text-xl text-white font-light'>F°</button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name="metric" className='text-xl text-white font-light'>C°</button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name="standard" className='text-xl text-white font-light'>K°</button>
            </div>
    </div>
  )
}

export default SearchBar