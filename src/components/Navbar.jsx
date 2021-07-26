import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar(props) {
  return (
      <nav className='navbar navbar-dark bg-primary navbar-expand-lg p-2'>
        <div className="container">
          <div className='navbar-brand'>
            Sereda App
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">Информация</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
