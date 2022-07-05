import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ( {handleSearchNote} ) => {
  return (
    <div className='search flex items-center  p-1 mb-6 bg-gray-600 rounded-md mt-5 w-full justify-center text-white'>
       
        <input onChange={(event) =>
					handleSearchNote(event.target.value)
				}
          type="text" placeholder='enter to search' 
         className='border-none px-4 focus:outline-none w-full text-black rounded-md'
        />
         <MdSearch className='cursor-pointer' size={30}/>

    </div>
  )
}

export default Search