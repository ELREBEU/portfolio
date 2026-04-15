import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import project1 from '../assets/images/project-1.jpeg';

const KeyloggerProject = () => {
  return (
    <ProjectDetail
      title="Keylogger multi-plateforme"
      subtitle="Outil de surveillance complet à des fins éducatives — Python puis réécriture en C"
      image={project1}
      date="Novembre 2024 – Novembre 2025"
      team="Solo"
      duration="Python : 5 mois · C : 1 mois"
      context="Projet personnel — cybersécurité éducative"
      status="done"
      description={`Keylogger développé en Python dans un contexte éducatif pour comprendre les mécanismes de surveillance et de sécurité informatique. Au-delà de la simple capture de frappes clavier, cet outil intègre la capture via webcam, le suivi des déplacements de la souris, les captures d'écran automatiques, et l'enregistrement complet du clavier. Le programme a été compilé pour les deux OS (Windows et Linux) afin de fonctionner en mode furtif sur chaque plateforme.

En novembre 2025, j'ai entrepris une réécriture complète en C sur un mois, utilisant X11 pour Linux et les bibliothèques graphiques natives Windows (WinAPI). Cette réécriture m'a permis de comprendre le fonctionnement bas niveau de l'interception d'événements système, la gestion de la mémoire et les différences fondamentales entre les architectures Windows et Linux.`}
      technologies={['Python', 'C', 'X11 (Linux)', 'WinAPI (Windows)', 'pynput', 'smtplib', 'Threading', 'OpenCV', 'PyInstaller']}
      features={[
        "Capture des frappes clavier en temps réel",
        "Capture via webcam (snapshots automatiques)",
        "Suivi des déplacements de la souris",
        "Captures d'écran automatiques périodiques",
        "Envoi automatique des logs par email (SMTP)",
        "Mode furtif — exécution masquée en arrière-plan",
        "Compilation cross-platform (Windows + Linux)",
        "Version C : interception bas niveau via X11 et WinAPI",
        "Chiffrement des données collectées avant transfert",
        "Auto-démarrage et dissimulation du processus"
      ]}
      challenges="Le défi principal de la version Python était de gérer correctement les événements clavier, webcam et souris simultanément au niveau système via le multithreading, tout en maintenant les performances et la furtivité. La réécriture en C a ajouté la complexité de travailler directement avec X11 sur Linux et les WinAPI sur Windows, sans les abstractions haut niveau de Python. J'ai dû comprendre en profondeur le fonctionnement des event loops système et gérer manuellement la mémoire."
      softSkills={[
        "Programmation système bas niveau",
        "Compréhension multi-OS",
        "Éthique en cybersécurité",
        "Autonomie complète",
        "Reverse engineering software"
      ]}
      takeaway="Ce projet m'a fait comprendre en profondeur comment fonctionnent les malwares au niveau système. La réécriture en C a été un exercice formateur pour maîtriser la programmation bas niveau et comprendre les différences architecturales entre Windows et Linux. C'est aussi un excellent support pour sensibiliser aux risques et aux méthodes de protection."
      github="https://github.com/ELREBEU/keylogger"
    />
  );
};

export default KeyloggerProject;
