import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    // Si on n'est pas sur la page d'accueil, naviguer d'abord vers l'accueil
    if (location.pathname !== '/') {
      navigate('/');
      // Attendre que la page se charge puis scroller vers la section
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // On est déjà sur la page d'accueil, juste scroller
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a className="navbar-brand" href="/" onClick={(e) => handleLinkClick(e, '#home-section')}>OUSSAMA</a>
        <ul>
          <li><a href="#home-section" onClick={(e) => handleLinkClick(e, '#home-section')}>Accueil</a></li>
          <li><a href="#about-section" onClick={(e) => handleLinkClick(e, '#about-section')}>À propos</a></li>
          <li><a href="#resume-section" onClick={(e) => handleLinkClick(e, '#resume-section')}>Parcours</a></li>
          <li><a href="#skills-section" onClick={(e) => handleLinkClick(e, '#skills-section')}>Compétences</a></li>
          <li><a href="#projects-section" onClick={(e) => handleLinkClick(e, '#projects-section')}>Projets</a></li>
          <li><a href="#blog-section" onClick={(e) => handleLinkClick(e, '#blog-section')}>Futur</a></li>
          <li><a href="#contact-section" onClick={(e) => handleLinkClick(e, '#contact-section')}>Intérêts</a></li>
          <li><a href="/apprentissage">Apprentissage</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
