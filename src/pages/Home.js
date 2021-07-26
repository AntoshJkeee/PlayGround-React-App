import React, {useState} from 'react';
import Form from "../components/Form";
import Notes from "../components/Notes";

function Home(props) {

  const [inputValue, setInputValue] = useState('')

  const [notes, setNotes] = useState([])

  // удаляем элемент из списка
  const deleteNotes = (id) => {
    const oldNotes = [...notes];
    let newNotes = []
    for(let [index, value] of oldNotes.entries()) {
      if(index !== id ) {
        newNotes = [...newNotes, value]
      }
    }
    setNotes(newNotes)
  }

  // добавляем новую заметку
  const addNewNote = () => {
    if (!inputValue) {
      return
    }
    let newNotes = [...notes];
    let noteItem = { title: inputValue }
    newNotes.unshift(noteItem);
    setNotes(newNotes);
    setInputValue('')
  }

  return (
    <div>
      <Form notes={notes} handlerAddNewNotes={addNewNote} handlerSetInputValue={(value) => setInputValue(value)} value={inputValue}/>
      <hr />
      <Notes notes={notes} handlerDeleteNotes={deleteNotes} />
    </div>
  );
}

export default Home;
