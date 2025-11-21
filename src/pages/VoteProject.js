import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import project5 from '../assets/images/project-5.jpg';
import vote1 from '../assets/images/VotifyImage1.png';
import vote2 from '../assets/images/VotifyImage2.png';

const VoteProject = () => {
  // Vous pouvez ajouter plusieurs images pour le slider
  const projectImages = [project5, vote1, vote2];

  return (
    <ProjectDetail
      title="Application de vote électronique"
      subtitle="Système de vote sécurisé développé en Java"
      image={project5}
      images={projectImages}  // Utilisez 'images' pour le slider
      description="Application de vote électronique complète permettant de gérer des élections de manière sécurisée et transparente. Le système intègre l'authentification des utilisateurs, la gestion des candidats, et le comptage automatique des votes en temps réel. Développé en Java avec une architecture MVC robuste."
      technologies={['Java', 'JavaFX', 'MySQL', 'JDBC', 'MVC Pattern', 'SHA-256']}
      features={[
        "Authentification sécurisée avec cryptage des mots de passe",
        "Interface utilisateur intuitive avec JavaFX",
        "Gestion des candidats et des électeurs",
        "Vote anonyme et sécurisé",
        "Comptage automatique en temps réel",
        "Génération de rapports et statistiques",
        "Base de données MySQL pour la persistance",
        "Protection contre les votes multiples"
      ]}
      challenges="Le principal défi a été d'assurer la sécurité et l'anonymat des votes tout en maintenant l'intégrité du système. J'ai dû implémenter un système de cryptage robuste et concevoir une architecture qui empêche les fraudes tout en garantissant qu'un électeur ne peut voter qu'une seule fois."
    />
  );
};

export default VoteProject;
