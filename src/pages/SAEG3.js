import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import infraImage from '../assets/images/saeg3-1.png';
import infraImage2 from '../assets/images/saeg3-2.png';

const MultiServicesPlatformProject = () => {
    const projectImages = [infraImage, infraImage2];

    return (
        <ProjectDetail
            title="Cloud Privé Souverain & Résilient"
            subtitle="Conception d'un ENT complet, auto-hébergé, hautement disponible et sécurisé 'By Design' — Projet 'Antenne Relais'"
            image={infraImage}
            images={projectImages}
            date="Septembre 2025 – Mars 2026"
            team="Équipe de 3"
            duration="7 mois"
            context="SAE G3 — BUT Informatique 3ème année, parcours DACS, IUT Montpellier-Sète"
            status="done"
            description={`Projet de fin d'études (SAE G3) réalisé en équipe de 3. Partis d'un cahier des charges basique (déployer un annuaire LDAP et un serveur FTP), nous avons fait le choix ambitieux de concevoir un Environnement Numérique de Travail (ENT) complet, auto-hébergé, hautement disponible et sécurisé "By Design".

L'intégralité de l'infrastructure a été industrialisée avec une approche "Everything as Code" pour bannir les installations manuelles. Le provisioning et la configuration reposent sur Terraform et Ansible, l'orchestration sur un cluster Haute Disponibilité multi-nœuds (Docker Swarm / K3s), et le routage sur Traefik avec Dynamic Discovery "Zero-Touch".

Pour garantir l'accessibilité tout en contournant les contraintes réseau de l'université (CGNAT), nous avons mis en place une architecture réseau hybride innovante : accès externe via des tunnels Cloudflare actifs/actifs masquant l'IP publique avec protection anti-DDoS, et accès local en Split DNS court-circuitant le tunnel couplé à une IP Virtuelle flottante (VRRP/Keepalived) pour garantir la continuité en cas de panne.

La sécurité a été éprouvée par des audits offensifs réels (pentests d'infrastructures concurrentes) et encadrée par la méthode d'analyse de risques EBIOS RM. L'authentification est centralisée via Keycloak (SSO OpenID Connect) avec provisioning "Just-in-Time", les conteneurs sont isolés par micro-segmentation topologique, et les failles identifiées en Red Team (évasion Docker via GitLab Runner, Bind Anonyme LDAP) ont été remédiées par durcissement strict.

Pour la résilience, nous avons intégré un PCA basé sur un cluster à 3 nœuds (algorithme Raft/Quorum), un stockage réseau distribué (Ceph/GlusterFS), des bases répliquées (Patroni), et un PRA avec sauvegardes incrémentales chiffrées AES-256 (Restic) externalisées sur Cloudflare R2, permettant une reconstruction automatisée avec RTO garanti.`}
            technologies={[
                'Docker', 'Docker Swarm', 'K3s', 'Terraform', 'Ansible',
                'Traefik', 'Keycloak (SSO/OIDC)', 'LDAP',
                'Cloudflare Tunnels', 'Cloudflare R2',
                'VRRP/Keepalived', 'Split DNS',
                'Ceph/GlusterFS', 'Patroni',
                'Restic (AES-256)', 'EBIOS RM',
                'GitLab CI/CD', 'SFTPGo',
                'Shell scripting', 'Sécurité Réseau'
            ]}
            features={[
                "Infrastructure as Code complète — déploiement 100% automatisé (Terraform + Ansible)",
                "Cluster Haute Disponibilité multi-nœuds (Docker Swarm / K3s) avec théorie du Quorum (Raft)",
                "Routage Zero-Touch via Traefik (Dynamic Discovery sur socket Docker)",
                "Réseau hybride : tunnels Cloudflare actifs/actifs + Split DNS + IP virtuelle flottante",
                "SSO centralisé Keycloak (OpenID Connect) avec provisioning Just-in-Time",
                "Micro-segmentation topologique des conteneurs (Backend, Frontend, Observabilité)",
                "Red Teaming : pentests réels sur infrastructures concurrentes + remédiation",
                "Analyse de risques EBIOS RM complète",
                "Stockage distribué (Ceph/GlusterFS) et base de données répliquée (Patroni)",
                "PRA : sauvegardes incrémentales chiffrées AES-256 (Restic) vers Cloudflare R2",
                "SFTPGo pour le stockage et partage de fichiers (SFTP, WebDAV, API REST)",
                "GitLab auto-hébergé avec runners et pipelines CI/CD"
            ]}
            challenges={`Le principal défi a été d'intégrer de multiples services indépendants (SFTPGo, GitLab, Keycloak, LDAP) sous une architecture unique, sécurisée et cohérente. La configuration du SSO avec fédération d'identités et authentification multi-facteurs a nécessité une gestion avancée des protocoles OAuth2/OpenID Connect. La mise en place du réseau hybride contournant le CGNAT universitaire tout en garantissant les performances locales a été un challenge technique majeur. Enfin, la conception du PCA/PRA avec consensus distribué (Raft) et sauvegardes chiffrées externalisées a demandé une compréhension approfondie des systèmes distribués.`}
            softSkills={[
                "Architecture système",
                "Travail en équipe (3 personnes)",
                "Arbitrages architecturaux",
                "Analyse de risques (EBIOS RM)",
                "Red Teaming éthique",
                "Documentation technique",
                "Gestion de projet complexe",
                "Ratio Bénéfice/Risque"
            ]}
            takeaway="Ce projet a marqué ma transition d'une posture de technicien système à celle d'Architecte DevSecOps, capable d'évaluer le ratio Bénéfice/Risque, d'assumer des arbitrages architecturaux complexes et de concevoir des systèmes résilients. J'ai appris à penser en termes de continuité d'activité, de surface d'attaque et de résilience face aux pannes."
        />
    );
};

export default MultiServicesPlatformProject;
