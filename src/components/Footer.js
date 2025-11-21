import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact</h3>
            <p>N'hésitez pas à me contacter, que ce soit pour le développement d'applications, de sites web ou pour des projets liés à la cybersécurité. Je suis toujours ouvert à de nouvelles opportunités !</p>
          </div>

          <div className="contact-links">
            <h3>Liens</h3>
            <a href="https://github.com/ELREBEU/" target="_blank" rel="noopener noreferrer">→ Github</a>
            <a href="https://www.linkedin.com/in/oussama-daoudi-1824852ab" target="_blank" rel="noopener noreferrer">→ Linkedin</a>
            <div className="thm-card">
              <iframe
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3092151"
                style={{border: 'none', width: '100%', height: '150px'}}
                title="TryHackMe Badge"
              ></iframe>
            </div>
          </div>

          <div className="contact-question" style={{width:'101%'}}>
            <h3>Vous avez une question ?</h3>
            <a href="tel:+33769077584" className="contact-item">
              📞 +33 7 69 07 75 84
            </a>
            <a href="mailto:oussama.daoudi@etu.umontpellier.fr" className="contact-item">
              ✉️ oussama.daoudi@etu.umontpellier.fr
            </a>
          </div>
        </div>
      </div>
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <p>&copy; 2025 Oussama Daoudi. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
