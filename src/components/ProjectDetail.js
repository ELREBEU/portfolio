import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';

const ProjectDetail = ({
  title,
  subtitle,
  image,
  images,
  description,
  technologies,
  features,
  challenges,
  github,
  demo
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.querySelector('#projects-section');
      if (projectsSection) {
        const offsetTop = projectsSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="project-detail-page">
      <button className="back-button" onClick={handleBackClick}>
        ← Retour aux projets
      </button>

      <div className="project-detail-container">
        <div className="project-detail-header">
          <h1>{title}</h1>
          <p className="project-subtitle">{subtitle}</p>
        </div>

        <div className="project-detail-image">
          {images && images.length > 0 ? (
            <ImageSlider images={images} />
          ) : (
            <img src={image} alt={title} />
          )}
        </div>

        <div className="project-detail-content">
          <section className="detail-section">
            <h2>Description</h2>
            <p>{description}</p>
          </section>

          <section className="detail-section">
            <h2>Technologies utilisées</h2>
            <div className="technologies-list">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </section>

          {features && features.length > 0 && (
            <section className="detail-section">
              <h2>Fonctionnalités principales</h2>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {challenges && (
            <section className="detail-section">
              <h2>Défis rencontrés</h2>
              <p>{challenges}</p>
            </section>
          )}

          <section className="detail-section project-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                <i className="fab fa-github"></i> Voir sur GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link-btn demo">
                <i className="fas fa-external-link-alt"></i> Démo en ligne
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
