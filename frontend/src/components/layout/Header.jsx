import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav>
        <NavLink to="/" exact activeClassName="active">About me</NavLink>
        <NavLink to="/Projects" activeClassName="active">Projects</NavLink>
        <NavLink to="/Resume" activeClassName="active">Resume</NavLink>
        <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
      </nav> 
         

    </header>
  );
};

export default Header;
