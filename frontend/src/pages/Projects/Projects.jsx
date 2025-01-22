import React from "react";
import './Projects.css';
import '../Animation.css'

const Projects = () => {
    return(
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
    );
}

export default Projects;