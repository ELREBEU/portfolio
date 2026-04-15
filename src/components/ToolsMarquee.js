import React from 'react';

const ToolsMarquee = () => {
  const tools = [
    'Nmap', 'Nessus', 'Hashcat', 'John the Ripper', 'Metasploit',
    'BurpSuite', 'Wireshark', 'SQLMap', 'Nikto', 'OpenVAS',
    'Hydra', 'Medusa', 'Gobuster', 'Feroxbuster', 'Ffuf',
    'WPScan', 'Sliver C2',
  ];

  // Duplicate for seamless loop
  const allTools = [...tools, ...tools];

  return (
    <section id="tools-section">
      <div className="tools-marquee-wrapper">
        <div className="tools-label">
          <span className="tools-label-icon">🛡️</span>
          <span>Outils Pentest</span>
        </div>
        <div className="tools-marquee-track">
          <div className="tools-marquee-content">
            {allTools.map((tool, index) => (
              <span key={index} className="tools-marquee-item">
                {tool}
                <span className="tools-separator">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
