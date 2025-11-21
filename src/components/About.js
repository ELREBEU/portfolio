import React from 'react';
import moiImg from '../assets/images/moi.png';

const About = () => {
  return (
    <section id="about-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">About</h1>
          <h2>À propos de moi</h2>
        </div>
        <div className="about-container">
          <div className="about-image" style={{backgroundImage: `url(${moiImg})`}}></div>
          <div className="about-content">
            <p>"La sécurité parfaite n'existe pas, mais l'inattention est une faille qu'aucun pare-feu ne peut corriger."</p>
            <ul className="about-info">
              <li><span>Prénom et nom:</span> <span>Oussama Daoudi</span></li>
              <li><span>Date de naissance:</span> <span>29 Août 2005</span></li>
              <li><span>Ville:</span> <span>Montpellier 34000, France</span></li>
              <li><span>Email:</span> <span>oussama.daoudi@etu.umontpellier.fr</span></li>
              <li><span>Téléphone:</span> <span>+33 7 69 07 75 84</span></li>
            </ul>
            <a href="/CV-Oussama.pdf" download="CV.pdf" className="btn-primary">Télécharger mon CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
