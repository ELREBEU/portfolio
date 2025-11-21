import React from 'react';

const Blog = () => {
  return (
    <section id="blog-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">Futur</h1>
          <h2>Mon futur</h2>
        </div>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <p>
            <strong>Pentester</strong>, c'est le métier que je souhaite exercer plus tard. Passionné depuis toujours par la cybersécurité, et plus particulièrement par le pentest, je considère pouvoir en faire ma profession comme un véritable rêve.
          </p>

          <p>
            Après mon <strong>BUT Informatique</strong>, je prévois de poursuivre mes études avec un <strong>Master en Cybersécurité</strong> afin d'approfondir mes connaissances et de me spécialiser davantage. Par ailleurs, je vise à obtenir plusieurs certifications reconnues dans le domaine, notamment l'<strong>OSCP (Offensive Security Certified Professional)</strong>, une référence mondiale en cybersécurité.
          </p>

          <p>
            Dès <strong>2025</strong>, je compte également me lancer dans le <strong>bug bounty</strong> sur des plateformes comme <strong>HackerOne</strong> et <strong>YesWeHack</strong>. Le bug bounty représente pour moi une opportunité unique de pratiquer ma passion en toute légalité, directement depuis chez moi.
          </p>

          <p>
            Côté professionnel, je serais particulièrement enthousiaste à l'idée d'intégrer des entreprises reconnues dans ce domaine, telles que <strong>Devensys</strong> à Montpellier ou <strong>Ziwit</strong>, toutes deux réputées pour leur expertise en cybersécurité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
