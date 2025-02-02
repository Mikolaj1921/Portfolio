import React,{useEffect} from "react";
import { Helmet } from 'react-helmet-async';
import './Projects.css';
import '../Animation.css'

const Projects = () => {

        useEffect(() => {
            // Tablica ścieżek do obrazów
            const imagePaths = [
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

    return(
        <>
            <Helmet>
                <html lang="pl" />
                <title>Projekty - Portfolio Web Developera</title>
                <meta 
                    name="description" 
                    content="Przegląd moich projektów programistycznych. Sprawdź moje portfolio na GitHub, w tym projekty w React, Node.js i C#." 
                />
                <meta name="keywords" content="projects, resume, web developer, portfolio, React, Node.js, C#, front-end, back-end, JavaScript, HTML, CSS, PostgreSQL" />
                <meta property="og:title" content="Projekty - Portfolio Web Developera" />
                <meta property="og:description" content="Zapoznaj się z moimi projektami programistycznymi, w tym aplikacjami webowymi i desktopowymi." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://mikolajmelnyk.com.pl/Projects" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            
            <div className="projects-container">
                <h1 className="title_h1">Moje projekty</h1>
                <div className='line'></div>
                <h3>Wszystkie projekty można znaleźć na GitHub </h3>
                <div className="social-icon-git">
                    <ul>
                        <li>
                            <a href="https://github.com/Mikolaj1921" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='section-projects'>
                    <div className='pr1'>
                        <div className="column-pt1">
                            <div className="pt-img">
                                <div className="social-icon-git-pt-img">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/Mikolaj1921/SlodkaChwila" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="repo-heading">
                                    <p>GitHub Repository</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-text">
                            <div className="pr-name">Słodka Chwila</div>
                            <div className='-text'>
                                <p>Web Development, React, CSS, Node.js, Express.js, PostgreSQL</p>
                            </div>
                        </div>
                    </div>

                    <div className='pr2'>
                        <div className="column-pt2">
                            <div className="pt-img">
                                <div className="social-icon-git-pt-img">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/Mikolaj1921/ManagementConsulting" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="repo-heading">
                                    <p>GitHub Repository</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-text">
                        <div className="pr-name">Management Consulting</div>
                            <div className='-text'>
                                <p>Web Development, React, CSS, Node.js, Express.js, PostgreSQL</p>
                            </div>
                        </div>
                    </div>

                    <div className='pr3'>
                        <div className="column-pt3">
                            <div className="pt-img">
                                <div className="social-icon-git-pt-img">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/Mikolaj1921/DentalClinic" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="repo-heading">
                                    <p>GitHub Repository</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-text">
                        <div className="pr-name">Dental Clinic</div>
                            <div className='-text'>
                                <p>C#, .NET, SQL Server, WinForm Application</p>
                            </div>
                        </div>
                    </div>

                    <div className='pr4'>
                        <div className="column-pt4">
                            <div className="pt-img">
                                <div className="social-icon-git-pt-img">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/Mikolaj1921/Portfolio" target="_blank" rel="noopener noreferrer">
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="repo-heading">
                                    <p>GitHub Repository</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-text">
                        <div className="pr-name">Portfolio</div>
                            <p className='-text'>
                            Web Development, React, CSS, Node.js, Express.js, PostgreSQL
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Projects;