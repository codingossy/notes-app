import React from 'react'
import AddNote from './AddNote'
import Note from './Note'



const NoteLists = ( { notes, handleAddNote, handleDeleteNote } ) => {
  return (
    <div className='notes-list grid gap-4 grid-cols-1 md:grid-cols-3 mt-10'>

        {notes.map((note) => 
        
        <Note id={note.id}
         text={note.text} 
         date={note.date}
         handleDeleteNote={handleDeleteNote}
         /> )}
        
        <AddNote handleAddNote={handleAddNote}/>

    </div>
  )
}

export default NoteLists