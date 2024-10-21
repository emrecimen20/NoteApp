
import './App.css'
import Header from './components/Header/Header'
import NoteArea from './components/NoteArea/NoteArea'
import Search from './components/Search/Search'
import { useState } from 'react'
import ShowItem from './components/ShowItem/ShowItem'

function App() {
  const [myNotes, setMyNotes] = useState([]);
  const [filterText, setFilterText] = useState("");

  const filteredItems = filterText
    ? myNotes.filter(item =>
        item.toLowerCase().includes(filterText.toLowerCase())
      )
    : myNotes; 


  const searchText =(text)=>{
    setFilterText(text);
  }

  

  const saveNote =(note)=>{
   
    setMyNotes((prevTexts) => [...prevTexts, note]);
  }

  return (
    <div className='mainContainer'>
     <Header/>
     <Search  searchText={searchText}/>
     <NoteArea textSubmit={saveNote}/>
     <ShowItem myNotes={filteredItems} />
    </div>
    
  )
}

export default App
