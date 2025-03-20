import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Blog from './pages/Blog/Blog.jsx';

const Routing = () => {
  return (
    <Routes>
      {/* Strona główna */}
      <Route path="/" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
  );
};

export default Routing;
