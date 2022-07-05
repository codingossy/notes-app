import React, {useState} from 'react'

const AddNote = ( {handleAddNote }) => {

    const [noteText, setNoteText] = useState('')

    // character limit 
    const charLimit =200

    const handleChange = (event) => {
    //   to make sure users dont exceed 200 text limit
            if(charLimit - event.target.value.length >=0 ) {
                    // activite it 

                    setNoteText(event.target.value);
            }

       
    }

    const handleSaveClick = () => {

          // to make sure users cant add empty boxes or spaces

        if(noteText.trim().length > 0) {
            // update it here
        handleAddNote(noteText)
     
        // to clear field after added text
        setNoteText('')


        }

    }

  return (
    <div className='bg-pink-500 h-full text-white rounded-md px-5 '>

        <textarea className='resize-none mt-5 w-full rounded-md border-none bg-inherit focus:outline-none' cols="10" rows="8" placeholder='type new note here' 

        onChange={handleChange} 
        value={noteText}
        
        ></textarea>

        <div className="mb-4 flex items-center justify-between">
            <small>{charLimit - noteText.length} Remaining</small>


            <button 
                onClick={handleSaveClick}
            className='bg-green-500 border-none rounded-md px-4 py-2 text-white hover:bg-red-500 cursor-pointer'>save</button>
        </div>
    </div>
  )
}

export default AddNote
