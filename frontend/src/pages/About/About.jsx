import React from 'react';
import './About.css';
import {Link } from 'react-router-dom';


const About = () => {


  // Lista umiejętności i ikon
  const skills = [
    { icon: 'devicon-react-original colored', name: 'React.js' },
    { icon: 'devicon-nodejs-plain colored', name: 'Node.js' },
    { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
    { icon: 'devicon-tailwindcss-plain colored', name: 'Tailwind CSS' },
    { icon: 'devicon-html5-plain colored', name: 'HTML5' },
    { icon: 'devicon-css3-plain colored', name: 'CSS3' },
    { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
    { icon: 'devicon-git-plain colored', name: 'Git' },
    { icon: 'devicon-github-original colored', name: 'GitHub' },

    ];



  return (
    <div className="about-container">
        <h1>O mnie</h1>
        <div className='line'></div>
        <p className='about-me-text'>
            <p>Jestem studentem i programistą stron internetowych specjalizującym się w budowaniu
            aplikacji i stron internetowych.</p>
            <p>Obecnie jestem na trzecim roku
            studiuję informatykę, gdzie pogłębiam swoją wiedzę
            programowania i nowych technologii. Korzystam z technologii takich jak React, Tailwind CSS, Node.js, Express.js w mojej pracy.
            Skupiam się na tworzeniu responsywne interfejsy i wydajna obsługa aplikacji internetowych.</p>
            <p>Pasjonuję się rozwijaniem swoich umiejętności w zakresie programowania i
            stale doskonalę swoje umiejętności tworzenia nowoczesnych, dynamicznych rozwiązań.</p>
        </p>
        <h1>Czym się zajmuję?</h1>
        <div className='section-what-im-doing'>

            <div className='p1'>
                <div class="column-photo1">

                </div>
                <div class="column-text">
                    <h2>Web Development</h2>
                    <p className='doing-text'>
                        Tworzenie nowoczesnych, responsywnych i wydajnych aplikacji, stron
                        internetowych.
                    </p>
                </div>
            </div>

            <div className='p2'>
                <div class="column-photo2">

                </div>
                <div class="column-text">
                    <h2>React.js</h2>
                    <p className='doing-text'>
                        Budowaniu aplikacji z React, komponenty, hooks, zarządzanie stanem, routing.
                    </p>
                </div>
            </div>

            <div className='p3'>
                <div class="column-photo3">

                </div>
                <div class="column-text">
                    <h2>Node.js</h2>
                    <p className='doing-text'>
                        Praca z backendem, budowanie serwerów, REST API oraz integracja z bazami danych.
                    </p>
                </div>
            </div>

            <div className='p4'>
                <div class="column-photo4">

                </div>
                <div class="column-text">
                    <h2>Databases</h2>
                    <p className='doing-text'>
                        Zarządzanie bazami danych: PostgreSQL, SQLite, Microsoft SQL Server.
                    </p>
                </div>
            </div>
        </div>

        <div className='section-hobby'>
            <h1 className='hobby'>Zainteresowania</h1>
            <div className='line'></div>
            <p>Moje zainteresowania skupiają się głównie na ciągłym doskonaleniu umiejętności w branży IT. Dążę do rozwijania swojej wiedzy i kompetencji,
                aby tworzyć coraz lepsze i bardziej zaawansowane projekty. Szczególnie interesuję się nowoczesnymi technologiami i ich praktycznym zastosowaniem w programowaniu.</p>
                <p>Oprócz pracy w IT pasjonuję się również fotografią, edycją zdjęć w Photoshopie oraz nagrywaniem i montażem wideo. Te zajęcia pozwalają mi
                połączyć technologię z kreatywnością i rozwijać umiejętności wizualne.</p>
                <p>Sztuczna inteligencja (AI) to kolejny obszar, który mnie fascynuje. Interesuję się jej rozwojem i możliwościami, jakie daje w codziennym życiu.
                Zastosowanie AI w różnych dziedzinach, zarówno w pracy, jak i poza nią, to temat, który śledzę z dużym zaangażowaniem.</p>
                <p>Łączenie moich pasji z rozwojem zawodowym daje mi ogromną satysfakcję i motywację do ciągłego uczenia się i doskonalenia swoich umiejętności.</p>
        </div>

        <div className="Skills">
            <h1>Umiejętności zawodowe</h1>
            <div className="skills-carousel">
                <div className="skills-track">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                    <i className={skill.icon}></i>
                    <p>{skill.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>

        <div className='Why-it'>
            <h1>Dlaczego wybrałem programowanie?</h1>
            <div className='line'></div>
            <p className='story-text'>

                <p>Od dłuższego czasu interesowałem się technologią i tym, jak można tworzyć coś od podstaw.
                Programowanie pozwala mi realizować pomysły i rozwiązywać rzeczywiste problemy, co sprawia mi ogromną satysfakcję.</p>

                <p>To, co mnie w programowaniu najbardziej fascynuje, to możliwość tworzenia różnych aplikacji,
                które mogą pomóc w codziennym życiu – zarówno moim, jak i innych ludzi. Każdy projekt, który tworzę, daje mi poczucie,
                że naprawdę mogę coś zmienić i ułatwić życie innym.</p>

                <p>Programowanie to także ciągłe wyzwania i nauka nowych rzeczy. Technologie rozwijają się bardzo szybko,
                a ja uwielbiam poznawać nowe narzędzia i techniki. Dzięki temu nieustannie rozwijam swoje umiejętności i staram się być coraz lepszy w tym, co robię.</p>

                <p>To pasja, która sprawia, że czuję się zmotywowany do pracy i codziennego rozwoju.
                Programowanie daje mi radość i poczucie spełnienia, choć nie zawsze jest łatwo.
                Czasami napotykam trudności, błędy i problemy, które wydają się nie do rozwiązania, ale każda pokonana przeszkoda sprawia,
                że czuję się coraz bardziej pewny swoich umiejętności. Wiem, że mimo trudności to droga, którą chcę podążać przez długie lata.</p>

            </p>
        </div>


        <div className='Contact'>
            <p className='contact-text'>
                Masz pytania lub potrzebujesz wsparcia przy projekcie? Skontaktuj się ze mną, 
                aby omówić szczegóły i razem stworzyć coś wyjątkowego.
            </p>
            
            <Link to="/Contact" className="buttoninfo">
                <h2 className='contact-click'>Kliknij tutaj, aby się skontaktować</h2>
            </Link>
        </div>

    </div>
  );
};

export default About;
