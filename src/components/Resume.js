import React from 'react';

const Resume = () => {
  return (
    <section id="resume-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">Parcours</h1>
          <h2>Mon Parcours</h2>
          <p>Formation et expériences professionnelles en cybersécurité et ingénierie logicielle.</p>
        </div>
        <div className="resume-grid">
          {/* Colonne GAUCHE : Études */}
          <div>
            <div className="resume-wrap">
              <span className="date">2023 - 2026</span>
              <h2>BUT Informatique - Parcours DACS</h2>
              <span className="position">IUT de Montpellier-Sète</span>
              <p>
                Spécialisation <strong>Déploiement d'Applications Communicantes et Sécurisées</strong>.
                Expertise en administration systèmes, réseaux et méthodologies de sécurisation.
              </p>
              <ul className="resume-details">
                <li>Sécurité : Pentest, Hardening, Analyse de risques</li>
                <li>Infrastructure : Docker, Kubernetes, CI/CD</li>
                <li>Réseaux : Administration Linux, Protocoles, Firewalls</li>
              </ul>
            </div>

            <div className="resume-wrap">
              <span className="date">2023</span>
              <h2>Baccalauréat Général - Mention Très Bien</h2>
              <span className="position">Lycée Polyvalent Astier</span>
              <p>Spécialités <strong>NSI (20/20)</strong>, Mathématiques (17/20) et LLCE Anglais.</p>
            </div>
          </div>

          {/* Colonne DROITE : Expériences (Stages) */}
          <div>
            <div className="resume-wrap">
              <span className="date">Avril 2026 - Août 2026</span>
              <h2>Développeur Fullstack & Bio-informatique</h2>
              <span className="position">Diag2Tec (Stage 3ème année)</span>
              <p>
                Développement et sécurisation d'une interface d'analyse ADN/ARN traitant des données de santé sensibles.
              </p>
              <ul className="resume-details">
                <li><strong>Cyber :</strong> Architecture RBAC pour la protection des données sensibles.</li>
                <li><strong>Stack :</strong> Vue.js, Cassandra, MariaDB.</li>
                <li><strong>Automatisation :</strong> Pipelines R/Bash et rédaction d'une publication scientifique.</li>
              </ul>
            </div>

            <div className="resume-wrap">
              <span className="date">Février 2025 - Avril 2025</span>
              <h2>Développeur Web & Data</h2>
              <span className="position">CHU de Montpellier - UTC (Stage 2ème année)</span>
              <p>
                Remise en service et optimisation d'un applicatif métier pour l'exploitation de données critiques.
              </p>
              <ul className="resume-details">
                <li><strong>Stack :</strong> PHP, JavaScript, SQL.</li>
                <li><strong>Data :</strong> Optimisation de requêtes sur une base de données SQL complexe.</li>
                <li><strong>Maintenance :</strong> Audit et correction du code pour assurer la continuité de service.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;