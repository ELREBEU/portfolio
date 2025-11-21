import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/images/project-1.jpeg';
import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.jpg';
import project6 from '../assets/images/project-6.png';
import streamImg from '../assets/images/streamify.png';
import mimirImg from '../assets/images/mimir.png';
import saeg3Img from '../assets/images/saeg3-1.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Application de vote électronique',
      tech: 'Java',
      image: project5,
      link: '/vote',
      type: 'IUT'

    },
      {
        title: 'Plateforme Sécurisée Multi-Services',
        tech: 'Docker',
        image: saeg3Img,
        link: '/saeg3',
        type: 'IUT'
      },
    {
      title: 'Keylogger',
      tech: 'Python',
      image: project1,
      link: '/keylogger',
      type: 'perso'
    },
      {
          title: 'Application de Streaming',
          tech: 'Python(FastAPI)/React Native',
          image: streamImg,
          link: '/streamify',
          type: 'perso'
      },
    {
      title: 'Web Scraping',
      tech: 'Python & Java',
      image: project6,
      link: '/webscrapping',
      type: 'perso'
    },
    {
      title: 'Casseur de mot de passe',
      tech: 'Python',
      image: project4,
      link: '/casseur',
      type: 'perso'
    },
      {
          title: 'Mimir',
          tech: 'Python',
          image: mimirImg,
          link: '/Mimir',
          type: 'perso'
      },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.type === filter);

  return (
    <section id="projects-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">Projets</h1>
          <h2>Mes Projets</h2>
          <p>Découvrez les projets que j'ai réalisés seul ou en groupe ! Cliquez dessus !</p>
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous les projets
          </button>
          <button
            className={`filter-btn ${filter === 'perso' ? 'active' : ''}`}
            onClick={() => setFilter('perso')}
          >
            Projets personnels
          </button>
          <button
            className={`filter-btn ${filter === 'IUT' ? 'active' : ''}`}
            onClick={() => setFilter('IUT')}
          >
            Projets IUT
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="project-item"
              style={{backgroundImage: `url(${project.image})`}}
            >
              <div className="project-overlay">
                <div className="project-text">
                  <h3>{project.title}</h3>
                  <span>{project.tech}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
