import React from 'react';

function About(props) {
  return (
    <div>
      {/*<h1>About page</h1>*/}
      <div className="jumbotron p-4 bg-light">
        <div className="container">
          <h1 className="display-4">React приложение</h1>
          <p className="lead">Основной идеей для приложения являлось написать TodoList, тыкая React, и в конце отложить в сторону. Однако сейчас я понимаю, что его можно развивать и развить. Сделать удобный ламповый сервис для заметочек, регистрацию, кабинет с настройками, видеть актуальную погоду, контролировать расходы и так далее. </p>
          <hr/>
          <p className="lead">Полазий по приложению, может чего найдешь :)</p>
        </div>
      </div>
    </div>
  );
}

export default  About;
