import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/images/project-1.jpeg';
import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.jpg';
import project6 from '../assets/images/project-6.png';
import streamImg from '../assets/images/streamify.png';
import mimirImg from '../assets/images/mimir.png';
import saeg3Img from '../assets/images/saeg3-1.png';
import mnistImg from '../assets/images/mnist.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Plateforme Sécurisée Multi-Services',
      tech: 'Docker · Terraform · Keycloak',
      image: saeg3Img,
      link: '/saeg3',
      type: 'IUT',
      date: 'Sep 2025 - Mar 2026',
      team: 'Équipe de 3',
      status: 'done',
    },
    {
      title: 'Application de vote électronique',
      tech: 'Java · Spring Boot · Vue.js',
      image: project5,
      link: '/vote',
      type: 'IUT',
      date: 'Oct 2024 - Juin 2025',
      team: 'Équipe de 5',
      status: 'done',
    },
    {
      title: 'Streamify',
      tech: 'FastAPI · React · Docker',
      image: streamImg,
      link: '/streamify',
      type: 'perso',
      date: 'Depuis Oct 2025',
      team: 'Solo',
      status: 'ongoing',
    },
    {
      title: 'Keylogger multi-plateforme',
      tech: 'Python · C (X11/WinAPI)',
      image: project1,
      link: '/keylogger',
      type: 'perso',
      date: 'Nov 2024 - Nov 2025',
      team: 'Solo',
      status: 'done',
    },
    {
      title: 'Mimir - Scanner offensif',
      tech: 'Python · Nmap · Nikto · WPScan · Feroxbuster',
      image: mimirImg,
      link: '/Mimir',
      type: 'perso',
      date: 'Juil 2025',
      team: 'Solo',
      status: 'paused',
    },
    {
      title: 'MNIST - Deep Learning',
      tech: 'Python · PyTorch · CUDA',
      image: mnistImg,
      link: '/mnist',
      type: 'perso',
      date: 'Déc 2025',
      team: 'Solo',
      status: 'done',
    },
    {
      title: 'Casseur de mot de passe',
      tech: 'Python · Hashlib',
      image: project4,
      link: '/casseur',
      type: 'perso',
      date: 'Nov 2024',
      team: 'Solo',
      status: 'done',
    },
    {
      title: 'Web Scraping & Automatisation',
      tech: 'Python · Java · Playwright · Selenium',
      image: project6,
      link: '/webscrapping',
      type: 'perso',
      date: '2024',
      team: 'Duo',
      status: 'done',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.type === filter);

  const getStatusLabel = (status) => {
    switch (status) {
      case 'ongoing': return { text: '⚡ En cours', cls: 'status-ongoing' };
      case 'paused': return { text: '⏸️ Mis en pause', cls: 'status-paused' };
      default: return { text: '✅ Terminé', cls: 'status-done' };
    }
  };

  return (
    <section id="projects-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">Projets</h1>
          <h2>Mes Projets</h2>
          <p>Réalisations personnelles et académiques — cliquez pour en savoir plus.</p>
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous
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
            Projets académiques
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const statusInfo = getStatusLabel(project.status);
            return (
              <Link
                key={index}
                to={project.link}
                className="project-item"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay">
                  <div className="project-text">
                    <h3>{project.title}</h3>
                    <span>{project.tech}</span>
                    <div className="project-meta">
                      <span className="project-meta-tag date">{project.date}</span>
                      <span className="project-meta-tag team">{project.team}</span>
                      <span className={`project-meta-tag ${statusInfo.cls}`}>{statusInfo.text}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
