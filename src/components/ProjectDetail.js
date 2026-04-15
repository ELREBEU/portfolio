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
  demo,
  date,
  team,
  status,
  context,
  duration,
  softSkills,
  takeaway,
  architecture,
  installation,
  structure,
  notes,
  customContent
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.querySelector('#projects-section');
      if (projectsSection) {
        const offsetTop = projectsSection.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 100);
  };

  const getStatusInfo = (s) => {
    switch(s) {
      case 'ongoing': return { text: '⚡ En cours', cls: 'status-ongoing' };
      case 'paused': return { text: '⏸️ Mis en pause', cls: 'status-paused' };
      default: return { text: '✅ Terminé', cls: 'status-done' };
    }
  };

  const statusInfo = status ? getStatusInfo(status) : null;

  return (
    <div className="project-detail-page">
      <button className="back-button" onClick={handleBackClick}>
        ← Retour aux projets
      </button>

      <div className="project-detail-container">
        <div className="project-detail-header">
          <h1>{title}</h1>
          <p className="project-subtitle">{subtitle}</p>

          {(date || team || statusInfo) && (
            <div className="project-detail-meta">
              {date && <span className="project-detail-meta-tag" style={{color: 'var(--accent-cyan)', borderColor: 'rgba(6,182,212,0.3)', background: 'rgba(6,182,212,0.1)'}}>📅 {date}</span>}
              {team && <span className="project-detail-meta-tag" style={{color: 'var(--accent-violet)', borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.1)'}}>👥 {team}</span>}
              {duration && <span className="project-detail-meta-tag" style={{color: 'var(--accent-amber)', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.1)'}}>⏱️ {duration}</span>}
              {context && <span className="project-detail-meta-tag" style={{color: 'var(--accent-pink)', borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.1)'}}>🎓 {context}</span>}
              {statusInfo && <span className="project-detail-meta-tag" style={{color: statusInfo.cls === 'status-ongoing' ? 'var(--accent-amber)' : statusInfo.cls === 'status-paused' ? 'var(--text-muted)' : '#34d399', borderColor: statusInfo.cls === 'status-ongoing' ? 'rgba(245,158,11,0.3)' : statusInfo.cls === 'status-paused' ? 'rgba(106,106,128,0.3)' : 'rgba(52,211,153,0.3)', background: statusInfo.cls === 'status-ongoing' ? 'rgba(245,158,11,0.1)' : statusInfo.cls === 'status-paused' ? 'rgba(106,106,128,0.1)' : 'rgba(52,211,153,0.1)'}}>{statusInfo.text}</span>}
            </div>
          )}
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

          {architecture && (
            <section className="detail-section">
              {architecture}
            </section>
          )}

          {installation && (
            <section className="detail-section">
              {installation}
            </section>
          )}

          {structure && (
            <section className="detail-section">
              {structure}
            </section>
          )}

          {challenges && (
            <section className="detail-section">
              <h2>Défis rencontrés</h2>
              <p>{challenges}</p>
            </section>
          )}

          {softSkills && softSkills.length > 0 && (
            <section className="detail-section">
              <h2>Compétences développées</h2>
              <div className="soft-skills-list">
                {softSkills.map((skill, index) => (
                  <span key={index} className="soft-skill-badge">{skill}</span>
                ))}
              </div>
            </section>
          )}

          {takeaway && (
            <section className="detail-section">
              <h2>Ce que j'en retiens</h2>
              <div className="takeaway-box">
                <p>{takeaway}</p>
              </div>
            </section>
          )}

          {notes && notes.length > 0 && (
            <section className="detail-section">
              <h2>Notes</h2>
              <ul className="features-list">
                {notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          {customContent && (
            <section className="detail-section">
              {customContent}
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
