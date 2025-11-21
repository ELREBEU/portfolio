import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Java', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3', percentage: 70 },
    { name: 'C', percentage: 65 },
    { name: 'SQL', percentage: 85 },
    { name: 'PHP', percentage: 75 },
    { name: 'JavaScript', percentage: 80 }
  ];

  return (
    <section id="skills-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">Compétences</h1>
          <h2>Mes Compétences</h2>
          <p>Les langages de programmation sont essentiels, même en cybersécurité. Les connaître et les maîtriser permet de mieux comprendre comment contourner ou protéger les systèmes, sites et applications. Au-delà de la cybersécurité, je reste très attiré par le développement et j'apprécie particulièrement coder mes propres outils.</p>
        </div>
        <div className="skills-grid">
          <div>
            {skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="progress-wrap">
                <h3><span>{skill.name}</span> <span>{skill.percentage}%</span></h3>
                <div className="progress">
                  <div className="progress-bar" style={{width: `${skill.percentage}%`}}></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {skills.slice(4).map((skill, index) => (
              <div key={index} className="progress-wrap">
                <h3><span>{skill.name}</span> <span>{skill.percentage}%</span></h3>
                <div className="progress">
                  <div className="progress-bar" style={{width: `${skill.percentage}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
