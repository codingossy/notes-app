import React, {useState, useEffect} from 'react';
import NoteLists from './components/NoteLists'
import { nanoid } from 'nanoid'
import Search from './components/Search';


const App = () => {

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'this one na new note',
    date: '22/03/2022',
  },

 

  {
    id: nanoid(),
    text: 'Having Headache',
    date: '16/03/2022',
  },
])

//  search for text

const [searchText, setSearchText] = useState('');
   
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);

    // dependency array
	}, [notes]);


// to add new notes 

const addNote = (text) => {
  // console.log(text)

  const date = new Date()
  const newNote = {
    id:nanoid(),
    text: text, 
    date: date.toLocaleDateString()
  }

  const newNotes = [...notes, newNote]
  setNotes(newNotes)
}

// to delete notes

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !==id)

  setNotes(newNotes)
}

  return (

    <div className='max-w-[960px] mr-auto ml-auto pr-[15px] pl-[15px] min-h-[100vh]'>

      
      <Search handleSearchNote={setSearchText}/>

      
      <div className='flex justify-center items-center text-center'>
        <h1 className='font-bold text-gray-700 text-4xl uppercase'>
          private notes
        </h1>
      </div>
      
      <NoteLists 
      notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText)
      )}

      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
