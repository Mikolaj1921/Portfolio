import React from 'react';
import './Aside.css';

const Aside = () => {
  return (
    <aside className="aside">
      <h2>Nawigacja</h2>
      <ul>
        <li><a href="/">About me</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Resume">Resume</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </aside>
  );
};

export default Aside;
