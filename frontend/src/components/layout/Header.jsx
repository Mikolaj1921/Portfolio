import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Header.css';
import './Aside.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sideMenuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    if (!isMenuOpen) {
      setIsMenuOpen(true); // Otwiera menu
    }
  }, [isMenuOpen]);

  // Obsługa kliknięcia poza menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target) &&
        !event.target.closest('.menu-icon')
      ) {
        // Inicjowanie procesu zamykania z animacją
        setIsClosing(true);
        setTimeout(() => {
          setIsMenuOpen(false); // Po zakończeniu animacji ustawiamy menu jako zamknięte
          setIsClosing(false);
        }, 200); // Dopasuj czas do długości animacji
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Obsługa zmiany rozmiaru ekranu
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Zamknięcie menu przy zmianie rozmiaru ekranu
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="Header">
      <h1>Portfolio</h1>

      {isMobile ? (
        <>
          <div className="menu-icon" onClick={toggleMenu}>
            <FaBars size={30} color="white" /> {/* Ikona hamburgera */}
          </div>
          
            <nav ref={sideMenuRef} className={`side-menu ${isMenuOpen ? 'open' : ''} ${isClosing ? 'close' : ''}`}>
              <div className='avatar'></div>
              <h1 className='name-surname'>Mikołaj Melnyk</h1>
              <h2 className='status'>Web Developer</h2>
              <div className='line-'></div>

              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>About me</NavLink>
              <NavLink to="/Projects" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>Projects</NavLink>
              <NavLink to="/Resume" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>Resume</NavLink>
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>Contact</NavLink>

              <div className='line-'></div>
              <div className="social-icons-p">
                <ul>
                  <li><a href="https://www.instagram.com/melnikmikolai/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/miko%C5%82aj-melnyk-634213335/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="https://discord.com/users/mykolaymelnyk/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-discord"></i></a></li>
                </ul>
              </div>
            </nav>
          

        </>
      ) : (
        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>About me</NavLink>
          <NavLink to="/Projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/Resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
          <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;