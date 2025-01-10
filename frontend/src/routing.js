import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './pages/About/About';  
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';

const Routing = () => {
  return (
    <Routes>
      {/* Strona główna */}
      <Route path="/" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Resume" element={<Resume/>} />

    </Routes>
  );
};

export default Routing;
