import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import project5 from '../assets/images/project-5.jpg';
import vote1 from '../assets/images/VotifyImage1.png';
import vote2 from '../assets/images/VotifyImage2.png';

const VoteProject = () => {
  const projectImages = [project5, vote1, vote2];

  return (
    <ProjectDetail
      title="Application de vote électronique"
      subtitle="Système de vote sécurisé et chiffré — Architecture MVC Java"
      image={project5}
      images={projectImages}
      date="Octobre 2024 – Juin 2025"
      team="Équipe de 5"
      duration="9 mois"
      context="SAE — BUT Informatique 2ème année"
      status="done"
      description="Application de vote électronique complète permettant de gérer des élections de manière sécurisée et transparente. Le système intègre l'authentification des utilisateurs, la gestion des candidats, et le comptage automatique des votes en temps réel. Développé en Java avec une architecture MVC robuste, ce projet a été une opportunité de travailler en équipe de 5 sur un cycle long avec méthodologie Agile."
      technologies={['Java', 'JavaFX', 'MySQL', 'JDBC', 'MVC Pattern', 'SHA-256', 'AES', 'Kanban/Agile']}
      features={[
        "Authentification sécurisée avec cryptage des mots de passe (SHA-256)",
        "Chiffrement des bulletins de vote (AES)",
        "Interface utilisateur intuitive avec JavaFX",
        "Gestion des candidats et des électeurs",
        "Vote anonyme et sécurisé",
        "Comptage automatique en temps réel",
        "Génération de rapports et statistiques",
        "Base de données MySQL pour la persistance",
        "Protection contre les votes multiples",
        "Gestion des rôles (admin, lecteur)"
      ]}
      challenges="Le principal défi a été d'assurer la sécurité et l'anonymat des votes tout en maintenant l'intégrité du système. J'ai dû implémenter un système de cryptage robuste et concevoir une architecture qui empêche les fraudes tout en garantissant qu'un électeur ne peut voter qu'une seule fois. La coordination d'une équipe de 5 personnes sur 9 mois a aussi été un défi organisationnel majeur."
      softSkills={[
        "Travail en équipe (5 personnes)",
        "Méthodologie Agile / Kanban",
        "Gestion de projet long",
        "Architecture logicielle (MVC)",
        "Sécurité applicative",
        "Communication d'équipe"
      ]}
      takeaway="Ce projet m'a appris à travailler sur un cycle de développement long en équipe. La gestion du Kanban, les sprints hebdomadaires et la coordination de 5 développeurs m'ont donné une expérience concrète du travail collaboratif en entreprise."
    />
  );
};

export default VoteProject;
