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
          <div className="about-image" style={{ backgroundImage: `url(${moiImg})` }}></div>
          <div className="about-content">
            <p className="about-intro">
              Étudiant en 3ème année de <strong>BUT Informatique</strong> à l'IUT Montpellier-Sète,
              parcours <strong>DACS</strong> (Déploiement d'Applications Communicantes et Sécurisées),
              je suis passionné par la <strong>cybersécurité offensive</strong> et le <strong>DevSecOps</strong>.
              Mon objectif : devenir <strong>pentester</strong> professionnel et contribuer à sécuriser
              les systèmes d'information.
            </p>
            <p className="about-intro">
              Au-delà de la cybersécurité, je suis un développeur polyvalent qui aime créer ses propres
              outils. Je concilie ma passion pour l'informatique avec le <strong>sport</strong> (basket, musculation),
              les <strong>jeux vidéo narratifs</strong> (Red Dead Redemption, God of War),
              et une fascination pour la <strong>mythologie</strong> et l'<strong>astrophysique</strong>.
            </p>
            <p className="about-quote">
              "La sécurité parfaite n'existe pas, mais l'inattention est une faille qu'aucun pare-feu ne peut corriger."
            </p>
            <ul className="about-info">
              <li><span>Prénom et nom :</span> <span>Oussama Daoudi</span></li>
              <li><span>Formation :</span> <span>BUT Informatique - DACS</span></li>
              <li><span>Ville :</span> <span>Montpellier 34000, France</span></li>
              <li><span>Email :</span> <span>oussama.daoudi@etu.umontpellier.fr</span></li>
            </ul>
            <a href="/CV-Oussama.pdf" download="CV.pdf" className="btn-primary">Télécharger mon CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
