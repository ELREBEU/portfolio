import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import infraImage from '../assets/images/saeg3-1.png';
import infraImage2 from '../assets/images/saeg3-2.png';



const MultiServicesPlatformProject = () => {

    const projectImages = [infraImage, infraImage2];

    return (
        <ProjectDetail
            title="Plateforme Sécurisée Multi-Services"
            subtitle="Infrastructure automatisée avec authentification centralisée, CI/CD, SFTPGo et GitLab"
            image={infraImage}
            images={projectImages}
            description="
Projet d’infrastructure réseau et système réalisé dans un contexte d’études pour déployer
une plateforme multi-services sécurisée.
Cette infrastructure regroupe SFTPGo pour le stockage et le partage de fichiers,
un serveur GitLab auto-hébergé pour les dépôts et pipelines CI/CD, et bientôt
une stack Mailcow pour la gestion complète des emails.
L'ensemble est orchestré avec Docker et Traefik, tout en assurant une authentification
centralisée via LDAP et Keycloak avec SSO et 2FA, permettant aux utilisateurs d'accéder
à l’ensemble des services avec un seul compte."
            technologies={[
                'Docker',
                'Docker Swarm',
                'Traefik',
                'LDAP',
                'Keycloak',
                'SSO',
                '2FA',
                'SFTPGo',
                'GitLab Self-Hosted',
                'Mailcow (à venir)',
                'Shell scripting',
                'CI/CD Pipelines',
                'Sécurité Réseau'
            ]}
            features={[
                "Déploiement automatisé et reproductible via CI/CD",
                "Stockage et transfert de fichiers via SFTPGo (SFTP, WebDAV, API REST)",
                "Authentification centralisée via LDAP",
                "Keycloak pour le SSO, la fédération (Google, GitHub) et le 2FA",
                "Hébergement d’un serveur GitLab auto-géré (repos, runners, pipelines)",
                "Reverse proxy Traefik avec certificats SSL automatiques",
                "Réseaux isolés et micro-segmentation des services",
                "Haute disponibilité grâce à Docker Swarm",
                "Sauvegardes automatisées des données et de la configuration",
                "Intégration future d’une stack Mailcow (serveur mail complet)",
            ]}
            challenges="
Le principal défi a été d’intégrer plusieurs services indépendants comme SFTPGo, GitLab
et Keycloak sous une architecture unique, sécurisée et cohérente.
La configuration du SSO avec fédération d'identités et authentification multi-facteurs
a nécessité une gestion avancée des protocoles OAuth2/OpenID Connect.
J’ai également dû mettre en place une orchestration fiable avec Docker Swarm,
assurer la redondance des données et configurer Traefik pour fournir un accès web
sécurisé à chaque service.
La prochaine étape consistera à intégrer Mailcow, ce qui demandera un travail
supplémentaire de gestion DNS, sécurité SMTP/IMAP et haute disponibilité."
        />
    );
};

export default MultiServicesPlatformProject;
