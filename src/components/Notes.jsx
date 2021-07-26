import React from 'react';

function Notes(props) {
  const {notes, handlerDeleteNotes} = props

  return (
    <div>
      <ul className="list-group">
        {notes.map((note, index) => (
          <li key={index} className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <button onClick={() => handlerDeleteNotes(index)} type="button" className="btn btn-outline-danger shadow-none non-focus">Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
