import React from 'react'
import { MdDelete } from 'react-icons/md'


const Note = ( {id, text, date, handleDeleteNote }) => {
  return (
    <div className=' bg-green-500 text-white rounded-md p-5 min-h-[200px] capitalize flex flex-col justify-between whitespace-pre-wrap'>

        <span>{text}</span>

        <div className='note-footer flex items-center justify-between'>
            <small>{date}</small>

            <MdDelete onClick={() => handleDeleteNote(id)} className='delete-icon cursor-pointer hover:text-red-600' size={30}/>
        </div>
    </div>
  )
}

export default Note