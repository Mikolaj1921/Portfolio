import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav>
        <a href="/">About me</a>
        <a href="/Projects">Projects</a>
        <a href="/Resume">Resume</a>
        <a href="/Contact">Contact</a>
      </nav> 
      
    </header>
  );
};

export default Header;
