import React, {useEffect} from 'react';
import './About.css';
import '../Animation.css'
import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';



const About = () => {

    useEffect(() => {
        // Tablica ścieżek do obrazów
        const imagePaths = [
          require('../../assets/images/www.webp'),
          require('../../assets/images/react.webp'),
          require('../../assets/images/node.webp'),
          require('../../assets/images/database.webp'),
          require('../../assets/images/project1.webp'),
          require('../../assets/images/project1_blur.webp'),
          require('../../assets/images/project2.webp'),
          require('../../assets/images/project2_blur.webp'),
          require('../../assets/images/project3.webp'),
          require('../../assets/images/project3_blur.webp'),
          require('../../assets/images/project4.webp'),
          require('../../assets/images/project4_blur.webp')
        ];
    
        // Preładowanie obrazów w pętli
        imagePaths.forEach((path) => {
          const preloadImage = new Image();
          preloadImage.src = path;
        });
    }, []);

    const nr_tel = '+48888508630';
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
    <>
        <Helmet>
            <html lang="pl" />
            <title>O mnie - Portfolio Web Developera</title>
            <meta
            name="description"
            content="Poznaj mnie bliżej jako web developera. Specjalizuję się w React.js, Node.js..."
            />
            <meta name="keywords" content="about me, resume, web developer, portfolio, React, Node.js, C#, front-end, back-end, JavaScript, HTML, CSS, PostgreSQL" />
            <meta property="og:title" content="O mnie - Portfolio Frontend Developera" />
            <meta property="og:description" content="Buduję responsywne aplikacje w React.js i Node.js. Poznaj moje umiejętności i zainteresowania." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://mikolajmelnyk.com.pl/" />
            <meta name="robots" content="index, follow" />

            {/* Dane strukturalne */}
            <script type="application/ld+json">
            {`
                {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Mikołaj Melnyk",
                "jobTitle": "Web Developer",
                "url": "http://mikolajmelnyk.com.pl/",
                "sameAs": [
                    "https://www.linkedin.com/in/miko%C5%82aj-melnyk-634213335/",
                    "https://github.com/Mikolaj1921"
                ],
                "skills": [
                    "React.js",
                    "Node.js",
                    "PostgreSQL",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Git",
                    "GitHub"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+48 888 508 630",
                    "contactType": "Customer Service",
                    "areaServed": "PL",
                    "availableLanguage": "Polish"
                },
                "projects": [
                    {
                    "@type": "CreativeWork",
                    "name": "Słodka Chwila",
                    "url": "https://github.com/Mikolaj1921/SlodkaChwila",
                    "description": "Web Development, React, CSS, Node.js, Express.js, PostgreSQL"
                    },
                    {
                    "@type": "CreativeWork",
                    "name": "Management Consulting",
                    "url": "https://github.com/Mikolaj1921/ManagementConsulting",
                    "description": "Web Development, React, CSS, Node.js, Express.js, PostgreSQL"
                    },
                    {
                    "@type": "CreativeWork",
                    "name": "Dental Clinic",
                    "url": "https://github.com/Mikolaj1921/DentalClinic",
                    "description": "C#, .NET, SQL Server, WinForm Application"
                    },
                    {
                    "@type": "CreativeWork",
                    "name": "Portfolio",
                    "url": "https://github.com/Mikolaj1921/Portfolio",
                    "description": "Web Development, React, CSS, Node.js, Express.js, PostgreSQL"
                    }
                ]

                }
            `}
            </script>
        </Helmet>
    
        <div className="about-container">
            
            <h1 className='title_h1'>O mnie</h1>
            <div className='line'></div>
            
            <div className='about-me-text-opis'>
                    <div className='about-me-text'>
                        <p>Cześć! <span>Jestem Mikołaj</span></p>
                    </div>
                    <p>Jako student i programista stron internetowych, specjalizuję się w budowaniu aplikacji i stron internetowych.</p>
                    <p>Obecnie na trzecim roku studiów informatycznych pogłębiam swoją wiedzę w zakresie programowania i nowych technologii. Korzystam z technologii takich jak React, Tailwind CSS, Node.js, Express.js w mojej pracy. Skupiam się na tworzeniu responsywnych interfejsów i wydajnej obsłudze aplikacji internetowych.</p>
                    <p>Pasjonuję się rozwijaniem swoich umiejętności w zakresie programowania i stale doskonalę swoje umiejętności tworzenia nowoczesnych, dynamicznych rozwiązań.</p>
            </div>
            

            <h2 className='sub_title_h1'>Czym się zajmuję?</h2>
            <div className='section-what-im-doing'>
                <div className='p1'>
                    <div className="column-photo1">

                    </div>
                    <div className="column-text">
                        <h3>Web Development</h3>
                        <div className='doing-text'>
                            <p>Tworzenie nowoczesnych, responsywnych i wydajnych aplikacji, stron
                            internetowych.</p>
                        </div>
                    </div>
                </div>

                <div className='p2'>
                    <div className="column-photo2">

                    </div>
                    <div className="column-text">
                        <h3>React.js</h3>
                        <div className='doing-text'>
                            <p>Budowaniu aplikacji z React, komponenty, hooks, zarządzanie stanem, routing.</p>
                        </div>
                    </div>
                </div>

                <div className='p3'>
                    <div className="column-photo3">

                    </div>
                    <div className="column-text">
                        <h3>Node.js</h3>
                        <div className='doing-text'>
                            <p>Praca z backendem, budowanie serwerów, REST API oraz integracja z bazami danych.</p>
                        </div>
                    </div>
                </div>

                <div className='p4'>
                    <div className="column-photo4">

                    </div>
                    <div className="column-text">
                        <h3>Databases</h3>
                        <div className='doing-text'>
                            <p>Zarządzanie bazami danych: PostgreSQL, SQLite, Microsoft SQL Server.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="section-hobby">
                <h2 className='hobby'>Zainteresowania</h2>
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
                <h2 className='sub_title_h1_up'>Umiejętności zawodowe</h2>
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
                <h2 className='sub_title_h1'>Dlaczego wybrałem programowanie?</h2>
                <div className='line'></div>
                <div className='story-text'>

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

                </div>
            </div>


            <div className='Contact'>
                <div className='contact-text'>
                    <p>Masz pytania lub potrzebujesz wsparcia przy projekcie? Skontaktuj się ze mną, 
                    aby omówić szczegóły i razem stworzyć coś wyjątkowego.</p>
                </div>
                
                <Link to="/Contact" className="buttoninfo">
                    <h2 className='contact-click'>Kliknij tutaj, aby się skontaktować</h2>
                </Link>

                
            </div>
            
            <div className='container-information-about'>

                <div className='info-about'>
                    <div className="column-pht1">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer"></a>             
                    </div>
                    <div className="column-txt">
                        <h3 className='title'>Email:</h3>
                        <p className='text'> mikolajmelnyk16@gmail.com </p>
                    </div>
                </div>

                <div className='info-about'>
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

                <div className='info-about'>
                    <div className="column-pht3">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="https://maps.app.goo.gl/w2bqvvJfdKjTWNGJ8" target="_blank" rel="noopener noreferrer"></a> 
                    </div>
                    <div className="column-txt">
                        <h3 className='title'>Lokalizacja:</h3>
                        <p className='text'>Rzeszów, Polska</p>
                    </div>
                </div> 

                <div className='info-about'>
                    <div className="column-pht4">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="https://w.prz.edu.pl/" target="_blank" rel="noopener noreferrer"></a>             
                    </div>
                    <div className="column-txt">
                        <h3 className='title'>Uczelnia:</h3>
                        <p className='text'>Politechnika Rzeszowska Im. Ignacego Łukasiewicza.</p> 
                    </div>
                </div> 
            </div>
        
        </div>

    </>
  );
};

export default About;
