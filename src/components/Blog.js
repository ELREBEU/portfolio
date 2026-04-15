import React from 'react';

const Blog = () => {
  return (
    <section id="blog-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">Futur</h1>
          <h2>Mon Futur</h2>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p>
            Mon objectif est de devenir un expert en <strong>infrastructure et sécurité informatique</strong>. Que ce soit en tant qu'<strong>Administrateur Systèmes et Réseaux</strong>, <strong>DevSecOps</strong> ou <strong>Consultant en Cybersécurité</strong>, je souhaite mettre mes compétences au service de la protection des données et de la résilience des systèmes.
          </p>

          <p>
            Plutôt que de simplement tester des failles, je veux concevoir des environnements robustes dès leur création. Après mon <strong>BUT Informatique</strong>, je compte poursuivre en <strong>Master spécialisé en Cybersécurité</strong> pour maîtriser aussi bien la défense (Blue Team) que les méthodologies d'audit. Je vise également des certifications stratégiques comme la <strong>CompTIA Security+</strong> ou l'<strong>OSCP</strong> pour valider mon expertise technique.
          </p>

          <p>
            Parallèlement à mon activité professionnelle, je continuerai de pratiquer le <strong>bug bounty</strong> sur des plateformes comme <strong>YesWeHack</strong> ou <strong>HackerOne</strong>. Cela me permet de garder un pied dans l'offensif, de rester à l'affût des nouvelles vulnérabilités et d'affiner mon esprit d'analyse de manière concrète et légale.
          </p>

          <p>
            Mon ambition est d'apporter cette vision globale de la sécurité à des acteurs majeurs de l'écosystème numérique, notamment des entreprises spécialisées comme <strong>Devensys</strong> ou <strong>Ziwit</strong>, où l'expertise technique et la polyvalence sont au cœur des enjeux.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;