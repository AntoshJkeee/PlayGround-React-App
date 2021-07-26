import React from 'react';

function Form(props) {

  const { handlerAddNewNotes, handlerSetInputValue, value} = props

  const pushOnEnter = (e) => {
    if(e.code === 'Enter') {
      handlerAddNewNotes()
    }
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={value} className="form-control shadow-none" placeholder="Введите заметку" aria-label="Recipient's username" aria-describedby="basic-addon2"
        onInput={(event) => handlerSetInputValue(event.target.value)}
        onKeyPress={pushOnEnter}
      />
      <div className="input-group-append">
        <button onClick={handlerAddNewNotes} className="btn btn-outline-success shadow-none bd-none" type="button">Добавить</button>
      </div>
    </div>
  );
}

export default Form;

