import React from 'react';
import './Aside.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Aside = () => {
  return (
    <aside className="Aside">
      <div className='avatar'></div>

      <h1 className='name-surname'>Mikołaj Melnyk</h1>
      <h2 className='status'>Web Developer</h2>
      <div className='line-'></div>

      <div className='container-information'>

        <div className='info'>
          <div class="column-pht1">
            
          </div>
          <div class="column-txt">
            <h3 className='title'>Email:</h3>
            <p className='text'> mikolajmelnyk16@gmail.com </p>
          </div>
        </div>

        <div className='info'>
          <div class="column-pht2">
            
          </div>
          <div class="column-txt">
            <h3 className='title'>Telefon:</h3>
            <p className='text'>+48 888 508 630</p>
          </div>
        </div>

        <div className='info'>
          <div class="column-pht3">
            
          </div>
          <div class="column-txt">
            <h3 className='title'>Lokalizacja:</h3>
            <p className='text'>Rzeszów, Polska</p>
          </div>
        </div> 


        <div className='info'>
          <div class="column-pht4">
            
          </div>
          <div class="column-txt">
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
