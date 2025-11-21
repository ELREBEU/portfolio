import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import project1 from '../assets/images/project-1.jpeg';

const KeyloggerProject = () => {
  return (
    <ProjectDetail
      title="Keylogger"
      subtitle="Outil de surveillance des frappes clavier à des fins éducatives"
      image={project1}
      description="Keylogger développé en Python dans un contexte éducatif pour comprendre les mécanismes de surveillance et de sécurité informatique. Cet outil capture les frappes clavier, les enregistre dans un fichier log, et peut envoyer les données par email. Projet réalisé dans le cadre d'études en cybersécurité pour sensibiliser aux risques et aux méthodes de protection."
      technologies={['Python', 'pynput', 'smtplib', 'Threading', 'Logging']}
      features={[
        "Capture des frappes clavier en temps réel",
        "Enregistrement dans des fichiers log horodatés",
        "Envoi automatique des logs par email",
        "Mode furtif (exécution en arrière-plan)",
        "Détection des touches spéciales (Ctrl, Alt, etc.)",
        "Gestion multithread pour la performance",
        "Configuration personnalisable",
        "Chiffrement optionnel des logs"
      ]}
      challenges="Le défi principal était de gérer correctement les événements clavier au niveau système tout en maintenant les performances. J'ai également dû implémenter une gestion robuste des erreurs pour éviter que le programme ne plante et comprendre les implications éthiques et légales de ce type d'outil."
      github="https://github.com/ELREBEU/keylogger"
    />
  );
};

export default KeyloggerProject;
