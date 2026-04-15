import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: 'Langages & Développement',
      icon: '💻',
      iconBg: 'rgba(6, 182, 212, 0.15)',
      levels: [
        {
          label: 'Maîtrisé',
          labelClass: 'expert',
          tagClass: '',
          skills: [
            { name: 'Python', context: 'Keylogger, Mimir, Web Scraping, Streamify, MNIST' },
            { name: 'FastAPI', context: 'Backend Streamify' },
            { name: 'Java', context: 'App de vote, Scraping billets d\'avion' },
            { name: 'SQL', context: 'MySQL, PostgreSQL, MariaDB, CassandraDB, MongoDB - tous projets BDD' },
            { name: 'Bash / Shell', context: 'Scripts IaC, automatisation serveurs' },

          ]
        },
        {
          label: 'Avancé',
          labelClass: 'advanced',
          tagClass: 'violet',
          skills: [
            { name: 'JavaScript', context: 'Portfolio React, scripts web' },
            { name: 'C', context: 'Keylogger C (X11/WinAPI), scanner de ports' },
            { name: 'PHP', context: 'Projets IUT, stage CHU Montpellier' },
            { name: 'HTML / CSS', context: 'Portfolio, projets web IUT' },

          ]
        },
        {
          label: 'En apprentissage',
          labelClass: 'learning',
          tagClass: 'pink',
          skills: [
            { name: 'React / React Native', context: 'Portfolio, Streamify mobile' },
            { name: 'PyTorch', context: 'Projet MNIST - Deep Learning' },
          ]
        }
      ]
    },
    {
      title: 'Cybersécurité & Pentest',
      icon: '🔐',
      iconBg: 'rgba(139, 92, 246, 0.15)',
      levels: [
        {
          label: 'Maîtrisé',
          labelClass: 'expert',
          tagClass: '',
          skills: [
            { name: 'Pentest d\'infrastructure', context: 'SAE - Red Team sur infras concurrentes' },
            { name: 'Nmap / Nessus / Nikto / Feroxbuster', context: 'Mimir - scanner automatisé' },
            { name: 'Analyse de risques (EBIOS RM)', context: 'SAE - méthodologie complète' },
            { name: 'Hashcat / Cracking', context: 'Casseur de MDP, sensibilisation PME' },
          ]
        },
        {
          label: 'Avancé',
          labelClass: 'advanced',
          tagClass: 'violet',
          skills: [
            { name: 'Hardening & remédiation', context: 'SAE - évasion Docker, LDAP' },
            { name: 'Keylogging multi-OS', context: 'Python + réécriture C (X11/WinAPI)' },
          ]
        },
        {
          label: 'En apprentissage',
          labelClass: 'learning',
          tagClass: 'pink',
          skills: [
            { name: 'TryHackMe / HackTheBox', context: 'Entraînement continu' },
            { name: 'Bug Bounty', context: 'HackerOne, YesWeHack - objectif 2026' },
          ]
        }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      icon: '🛠️',
      iconBg: 'rgba(245, 158, 11, 0.15)',
      levels: [
        {
          label: 'Maîtrisé',
          labelClass: 'expert',
          tagClass: '',
          skills: [
            { name: 'Docker / Docker Compose', context: 'Tous projets infra, Streamify' },
            { name: 'Traefik (reverse proxy)', context: 'SAE - Dynamic Discovery' },
            { name: 'Keycloak (SSO / OIDC)', context: 'SAE - auth centralisée' },
          ]
        },
        {
          label: 'Avancé',
          labelClass: 'advanced',
          tagClass: 'violet',
          skills: [
            { name: 'Terraform / Ansible', context: 'SAE - Infrastructure as Code' },
            { name: 'CI/CD (GitLab)', context: 'SAE - pipelines automatisés' },
            { name: 'Cloudflare (tunnels, R2)', context: 'SAE - protection & stockage' },
          ]
        },
        {
          label: 'En apprentissage',
          labelClass: 'learning',
          tagClass: 'pink',
          skills: [
            { name: 'Docker Swarm / K3s', context: 'SAE - cluster HA multi-nœuds' },
            { name: 'Ceph / GlusterFS', context: 'SAE - stockage distribué' },
            { name: 'Patroni', context: 'SAE - BDD répliquée' },
          ]
        }
      ]
    },
    {
      title: 'Réseau & Système',
      icon: '🌐',
      iconBg: 'rgba(236, 72, 153, 0.15)',
      levels: [
        {
          label: 'Maîtrisé',
          labelClass: 'expert',
          tagClass: '',
          skills: [
            { name: 'Linux (Debian, Kali, Parrot, Ubuntu)', context: 'Administration quotidienne' },
            { name: 'Réseaux TCP/IP, DNS, DHCP', context: 'IUT + SAE' },
            { name: 'Micro-segmentation réseau', context: 'SAE - isolation conteneurs' },

          ]
        },
        {
          label: 'Avancé',
          labelClass: 'advanced',
          tagClass: 'violet',
          skills: [
            { name: 'VRRP / Keepalived', context: 'SAE - IP virtuelle flottante' },
            { name: 'iptables / pare-feu', context: 'Stage CHU, SAE' },
            { name: 'Split DNS / CGNAT', context: 'SAE - réseau hybride' },
            { name: 'LDAP', context: 'SAE - annuaire centralisé' },
          ]
        },
        {
          label: 'Intermédiaire',
          labelClass: 'intermediate',
          tagClass: 'amber',
          skills: [
            { name: 'Windows Server', context: 'Cours IUT, labs pratiques' },
          ]
        }
      ]
    }
  ];

  return (
    <section id="skills-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="big">Compétences</h1>
          <h2>Mes Compétences</h2>
          <p>Classées par niveau de maîtrise et contextualisées avec mes projets réels.</p>
        </div>
        <p className="skills-intro">
          Les langages de programmation sont essentiels, même en cybersécurité. Les connaître et les maîtriser
          permet de mieux comprendre comment contourner ou protéger les systèmes. Au-delà de la cybersécurité,
          je reste très attiré par le développement et j'apprécie particulièrement coder mes propres outils.
        </p>
        <div className="skills-categories">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon" style={{ background: cat.iconBg }}>
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
              </div>
              {cat.levels.map((level, lvlIdx) => (
                <div key={lvlIdx} className="skill-level-group">
                  <span className={`skill-level-label ${level.labelClass}`}>{level.label}</span>
                  <div className="skill-tags">
                    {level.skills.map((skill, skIdx) => (
                      <div key={skIdx} className={`skill-tag ${level.tagClass}`} title={skill.context}>
                        {skill.name}
                        <span className="skill-context">{skill.context}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
