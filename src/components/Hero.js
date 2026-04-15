import React, { useState, useEffect } from 'react';

const ROLES = [
  'Cybersécurité & Pentest',
  'Infrastructure & DevSecOps',
  'Développement & Automatisation',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1));
      }, isDeleting ? 30 : 70);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home-section">
      <div className="hero-grid-bg"></div>
      <div className="hero-scanlines"></div>
      <div className="container">
        <div className="hero-content">
          <span className="subheading">
            <span className="terminal-prompt">oussama@portfolio:~$</span> whoami
          </span>
          <h1>
            <span className="hero-bracket">&lt;</span>
            <span className="glitch" data-text="Oussama">Oussama</span> <span className="glitch" data-text="Daoudi">Daoudi</span>
            <span className="hero-bracket"> /&gt;</span>
          </h1>
          <h2 className="typing-text">
            {text}<span className="cursor">_</span>
          </h2>
          <p className="hero-description">
            Passionné de cybersécurité et de pentest, je conçois des systèmes résilients
            et développe des outils offensifs dans un cadre éthique et éducatif.
          </p>
          <div className="hero-badges">
            <span className="hero-badge">🔐 Cybersécurité</span>
            <span className="hero-badge">🛠️ DevSecOps</span>
            <span className="hero-badge">💻 Développement</span>
            <span className="hero-badge">🌐 Infrastructure</span>
          </div>
          <div className="hero-cta">
            <a href="#projects-section" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects-section')?.scrollIntoView({ behavior: 'smooth' });
            }}>Voir mes projets</a>
            <a href="/CV-Oussama.pdf" download="CV.pdf" className="btn-secondary">Télécharger mon CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
