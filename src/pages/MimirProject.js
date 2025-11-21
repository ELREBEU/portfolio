import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import MimirImage from '../assets/images/mimir.png';
const MimirProject = () => {
    return (
        <ProjectDetail
            title="Mimir"
            subtitle="Outil automatisé de reconnaissance offensive en Python"
            image={MimirImage}
            description="
Mimir est un outil d’automatisation pour la reconnaissance offensive, conçu pour les pentesters et étudiants en cybersécurité. Il combine plusieurs scanners comme Nmap, Nikto et Feroxbuster dans une interface Python unifiée, permettant d’effectuer rapidement des scans réseaux et web structurés, reproductibles et centralisés.
L’objectif est de faciliter les phases de découverte de services, de vulnérabilités et de répertoires web, tout en générant des rapports organisés pour chaque cible."
            technologies={[
                'Python',
                'python-nmap',
                'Nikto',
                'Feroxbuster',
                'OSINT',
                'OOP (Programmation Orientée Objet)',
                'Linux CLI'
            ]}
            features={[
                "Scans Nmap automatisés (syn, full TCP, scans agressifs)",
                "Détection des services, bannières et OS",
                "Scan de vulnérabilités web avec Nikto",
                "Bruteforce de répertoires/fichiers via Feroxbuster",
                "Organisation automatique des rapports par outil et timestamp",
                "Architecture modulaire orientée objet",
                "Possibilité d’ajouter facilement de nouveaux outils",
                "Gestion centralisée des sorties pour exploitation rapide"
            ]}
            challenges="
Le plus grand défi a été de synchroniser plusieurs outils externes
(Nmap, Nikto, Feroxbuster) au sein d’un workflow Python cohérent.
J’ai également dû gérer la génération automatique de rapports structurés
en fonction de la cible et du timestamp, et m'assurer de la robustesse
du code face aux erreurs système et aux variations de sortie des outils
de scan.
Enfin, il était important de respecter les bonnes pratiques éthiques et
légales liées à l'utilisation d'outils de reconnaissance offensive."
            github="https://github.com/ELREBEU/Mimir"
        />
    );
};

export default MimirProject;
