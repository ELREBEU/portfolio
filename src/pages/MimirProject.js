import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import MimirImage from '../assets/images/mimir.png';

const MimirProject = () => {
    return (
        <ProjectDetail
            title="Mimir — Scanner offensif"
            subtitle="Outil automatisé de reconnaissance offensive en Python — coordination d'outils de pentest"
            image={MimirImage}
            date="Juillet 2025"
            team="Solo"
            context="Projet personnel — cybersécurité"
            status="paused"
            description={`Mimir est un outil d'automatisation pour la reconnaissance offensive, conçu pour les pentesters et étudiants en cybersécurité. Il combine plusieurs scanners comme Nmap, Nikto et Feroxbuster dans une interface Python unifiée, permettant d'effectuer rapidement des scans réseaux et web structurés, reproductibles et centralisés.

Le projet a été mis en pause, mais il m'a permis d'apprendre énormément sur la coordination d'outils de pentest, l'organisation de workflows de reconnaissance et la structuration de rapports automatisés.`}
            technologies={['Python', 'python-nmap', 'Nikto', 'Feroxbuster', 'OSINT', 'OOP', 'Linux CLI']}
            features={[
                "Scans Nmap automatisés (syn, full TCP, scans agressifs)",
                "Détection des services, bannières et OS",
                "Scan de vulnérabilités web avec Nikto",
                "Bruteforce de répertoires/fichiers via Feroxbuster",
                "Organisation automatique des rapports par outil et timestamp",
                "Architecture modulaire orientée objet",
                "Possibilité d'ajouter facilement de nouveaux outils",
                "Gestion centralisée des sorties pour exploitation rapide"
            ]}
            challenges="Le plus grand défi a été de synchroniser plusieurs outils externes (Nmap, Nikto, Feroxbuster) au sein d'un workflow Python cohérent. J'ai également dû gérer la génération automatique de rapports structurés en fonction de la cible et du timestamp, et m'assurer de la robustesse du code face aux erreurs système et aux variations de sortie des outils."
            softSkills={[
                "Coordination d'outils externes",
                "Architecture modulaire",
                "Automatisation de workflows",
                "Éthique offensive",
                "Autonomie complète"
            ]}
            takeaway="Même inachevé, ce projet m'a appris à coordonner des outils de pentest dans un pipeline automatisé et à structurer du code en modules réutilisables. Il m'a aussi sensibilisé à l'importance de l'organisation des résultats lors d'un audit de sécurité."
            github="https://github.com/ELREBEU/Mimir"
        />
    );
};

export default MimirProject;
