import React from 'react';

const Resume = () => {
  return (
    <section id="resume-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">Parcours</h1>
          <h2>Parcours</h2>
          <p>Voici mon parcours jusqu'à présent, mais mon apprentissage est loin d'être terminé. J'ai pour ambition de continuer à enrichir mes compétences en obtenant de nouveaux diplômes et certifications !</p>
        </div>
        <div className="resume-grid">
          <div>
            <div className="resume-wrap">
              <span className="date">2023-2026</span>
              <h2>BUT Informatique de Montpellier-Sète</h2>
              <span className="position">IUT de Montpellier-Sète</span>
              <p>Actuellement, je poursuis un BUT Informatique à l'IUT de Montpellier-Sète afin de renforcer mes compétences en programmation et en cybersécurité. Cette formation me permet également d'acquérir une expérience pratique significative, un atout indispensable dans un domaine aussi dynamique et exigeant que l'informatique.</p>
            </div>
          </div>

          <div>
            <div className="resume-wrap">
              <span className="date">2023</span>
              <h2>Baccalauréat général Mention Très Bien</h2>
              <span className="position">Lycée Polyvalent Astier</span>
              <p>En 2023, j'ai obtenu mon baccalauréat avec mention Très Bien, après avoir suivi les spécialités Mathématiques, NSI (Numérique et Sciences Informatiques) et LLCE (Langues, Littératures et Cultures Étrangères - Anglais). Mes résultats incluent un remarquable 17 en Mathématiques et un 20 en NSI, reflétant ma passion et mes compétences dans ces domaines.</p>
            </div>
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <a href="/CV-Oussama.pdf" download="CV.pdf" className="btn-primary">Télécharger mon CV</a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
