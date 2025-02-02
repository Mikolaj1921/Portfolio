import React from 'react';
import './Aside.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Aside = () => {
  
  const nr_tel = '+48888508630';

  return (
    <aside className="Aside">
      <div className='avatar'></div>

      <h1 className='name-surname'>Mikołaj Melnyk</h1>
      <h2 className='status'>Web Developer</h2>
      <div className='line-'></div>

      <div className='container-information'>

        <div className='info'>
          <div className="column-pht1">
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer"></a>             
          </div>
          <div className="column-txt">
            <h3 className='title'>Email:</h3>
            <p className='text'> mikolajmelnyk16@gmail.com </p>
          </div>
        </div>

        <div className='info'>
          <div className="column-pht2">
            <CopyToClipboard text={nr_tel}>
              <div className="clickable-area"></div>
            </CopyToClipboard>
          </div>
          <div className="column-txt">
            <h3 className='title'>Telefon:</h3>
            <p className='text'>+48 888 508 630</p>
          </div>
        </div>

        <div className='info'>
          <div className="column-pht3">
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="https://maps.app.goo.gl/w2bqvvJfdKjTWNGJ8" target="_blank" rel="noopener noreferrer"></a> 
          </div>
          <div className="column-txt">
            <h3 className='title'>Lokalizacja:</h3>
            <p className='text'>Rzeszów, Polska</p>
          </div>
        </div> 

        
        <div className='info'>
          <div className="column-pht4">
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="https://w.prz.edu.pl/" target="_blank" rel="noopener noreferrer"></a>             
          </div>
          <div className="column-txt">
            <h3 className='title'>Uczelnia:</h3>
            <p className='text'>Politechnika Rzeszowska Im. Ignacego Łukasiewicza.</p> 
          </div>
        </div> 

        <div className="social-icon">
          <ul>
            <li>
              <a href="https://www.instagram.com/melnikmikolai/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/miko%C5%82aj-melnyk-634213335/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://discord.com/users/mykolaymelnyk/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-discord"></i>
              </a>
            </li>
          </ul>
        </div>  
      </div>
    </aside>
  );
};

export default Aside;
