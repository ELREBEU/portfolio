import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Apprentissage = () => {
    const navigate = useNavigate();
    const [activeCompetence, setActiveCompetence] = useState(0);

    const competences = [
        {
            id: 1,
            title: "Faire évoluer et maintenir un système informatique communicant",
            niveau: "Niveau 3",
            reference: "Automatiser le déploiement, configurer des services avancés, appliquer une politique de sécurité et maintenir l'infrastructure réseau.",
            items: [
                {
                    code: "AC33.01",
                    label: "Créer des processus de traitement automatisé",
                    trace: "Stage chez Diag2Tec (DevSecOps)",
                    points: [
                        "Refonte complète du pipeline CI/CD avec GitHub Actions pour l'automatisation des tests et de l'intégration.",
                        "Automatisation du déploiement sur GitHub Container Registry (GHCR) et optimisation des builds via le cache Docker.",
                        "Validation : Réduction significative du temps de build et de déploiement, assurant une livraison continue fiable."
                    ]
                },
                {
                    code: "AC33.02",
                    label: "Configurer un serveur et des services réseaux de manière avancée",
                    trace: "Projet : Infrastructure Cloud Privé souveraine",
                    points: [
                        "Orchestration d'un écosystème collaboratif complet sous Docker (GitLab CI/CD, Stalwart/SOGo, SFTPGo).",
                        "Mise en place d'un reverse proxy Traefik v3 avec gestion automatisée des certificats HTTPS/TLS 1.3.",
                        "Centralisation de l'identité (IAM) via Keycloak et OpenLDAP avec authentification SSO OIDC et MFA.",
                        "Validation : Infrastructure hautement disponible, sécurisée et centralisée pour les utilisateurs."
                    ]
                },
                {
                    code: "AC33.03",
                    label: "Appliquer une politique de sécurité au niveau de l'infrastructure",
                    trace: "Stage chez Diag2Tec (AppSec & Audit) & Infrastructure Cloud",
                    points: [
                        "Sécurisation d'une application web : restriction d'uploads, flux de création de compte sécurisé, mots de passe temporaires et A2F.",
                        "Mise en place d'une approche Zero Trust via Cloudflare Tunnel pour masquer l'infrastructure publique.",
                        "Réalisation d'un audit de sécurité sur une infrastructure tierce pour l'identification et la remédiation de CVE.",
                        "Validation : Infrastructure résiliente face aux attaques courantes et conformité renforcée."
                    ]
                },
                {
                    code: "AC33.04",
                    label: "Déployer et maintenir un réseau d'organisation en fonction de ses besoins",
                    trace: "Infrastructure Cloud Privé & Stage Diag2Tec",
                    points: [
                        "Déploiement d'une infrastructure distribuée sur VPS et NAS pour répondre aux besoins de stockage et de calcul.",
                        "Mise en place de réseaux Docker isolés pour séparer les services critiques (base de données, front-end, authentification).",
                        "Validation : Connectivité fluide et sécurisée entre les différents services, avec une segmentation réseau respectant les bonnes pratiques."
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Adapter des applications sur un ensemble de supports",
            niveau: "Niveau 3",
            reference: "Choisir des architectures adaptées, faire évoluer des applications existantes et intégrer des solutions en production.",
            items: [
                {
                    code: "AC31.01",
                    label: "Choisir et implémenter les architectures adaptées",
                    trace: "Application de vote électronique",
                    points: [
                        "Conception d'une architecture Fullstack avec Vue.js en front-end et Spring Boot en back-end.",
                        "Intégration d'un système de chiffrement asymétrique (ElGamal) pour garantir la confidentialité des votes.",
                        "Mise en place de communications en temps réel sécurisées via des WebSockets TLS.",
                        "Validation : Architecture robuste, évolutive et capable de garantir l'intégrité et le secret des suffrages."
                    ]
                },
                {
                    code: "AC31.02",
                    label: "Faire évoluer une application existante",
                    trace: "Stage à l'Unité de Thérapie Cellulaire (CHU Montpellier)",
                    points: [
                        "Remise en service et optimisation d'un applicatif métier existant développé en PHP et JavaScript.",
                        "Amélioration des performances pour l'exploitation d'une base de données SQL complexe et volumineuse.",
                        "Adaptation de l'interface pour correspondre aux nouveaux besoins des biologistes et techniciens.",
                        "Validation : Gain de temps significatif pour les utilisateurs lors des requêtes et amélioration de l'ergonomie."
                    ]
                },
                {
                    code: "AC31.03",
                    label: "Intégrer des solutions dans un environnement de production",
                    trace: "Stage chez Diag2Tec",
                    points: [
                        "Déploiement de l'application web sécurisée et de l'infrastructure distribuée en environnement de production.",
                        "Optimisation continue d'une interface Vue.js et de pipelines R/Bash pour les besoins métiers.",
                        "Mise en production d'un workflow CI/CD permettant des mises à jour fluides sans interruption de service.",
                        "Validation : Stabilité des services en production et satisfaction des utilisateurs finaux."
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Manager une équipe informatique",
            niveau: "Niveau 3",
            reference: "Organiser une veille technologique, identifier les enjeux de l'innovation, guider le changement et accompagner le management.",
            items: [
                {
                    code: "AC36.01",
                    label: "Organiser et partager une veille technologique et informationnelle",
                    trace: "Alternance Cybersécurité & Projets Personnels",
                    points: [
                        "Veille continue sur les nouvelles vulnérabilités (CVE), les outils de pentesting (Nmap, Nessus, Hashcat) et les pratiques DevSecOps.",
                        "Partage régulier des bonnes pratiques de sécurité avec l'équipe de développement lors du stage chez Diag2Tec.",
                        "Validation : Anticipation des failles de sécurité et sensibilisation des collaborateurs aux risques numériques."
                    ]
                },
                {
                    code: "AC36.02",
                    label: "Identifier les enjeux de l'économie de l'innovation numérique",
                    trace: "Infrastructure Cloud Privé souveraine",
                    points: [
                        "Choix stratégique de solutions open-source et souveraines pour l'infrastructure (Docker, Keycloak, Traefik).",
                        "Évaluation de l'impact économique (réduction des coûts de licence) et des enjeux de souveraineté des données.",
                        "Validation : Déploiement d'une solution à la fois économique, performante et respectueuse du RGPD."
                    ]
                },
                {
                    code: "AC36.03",
                    label: "Guider la conduite du changement informatique au sein d'une organisation",
                    trace: "Stage CHU Montpellier",
                    points: [
                        "Accompagnement des professionnels de santé (biologistes) dans la prise en main de l'applicatif métier optimisé.",
                        "Rédaction de documentations claires et recueil de feedbacks pour ajuster l'outil aux processus métiers réels.",
                        "Validation : Adoption réussie de l'outil par les équipes, avec une réduction des erreurs de saisie."
                    ]
                },
                {
                    code: "AC36.04",
                    label: "Accompagner le management de projet informatique",
                    trace: "Projet de vote électronique & Infrastructure Cloud",
                    points: [
                        "Coordination du travail en équipe de 3 à 5 personnes : planification des sprints, répartition des tâches selon les compétences.",
                        "Utilisation d'outils collaboratifs (GitLab CI/CD, Kanban) pour le suivi de l'avancement et la gestion des versions.",
                        "Validation : Respect des jalons de livraison et succès des soutenances de projet devant l'équipe pédagogique."
                    ]
                }
            ]
        }
    ];

    return (
        <div className="project-detail-page apprentissage-page">
            <button className="back-button" onClick={() => navigate('/')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Retour
            </button>

            <div className="container">
                {/* Header Section */}
                <div className="heading-section apprentissage-header">
                    <h1 className="big">Apprentissage</h1>
                    <h2>Portfolio de Compétences</h2>
                    <p>Semestre 6 - Parcours DACS (BUT Informatique)</p>
                </div>

                {/* Introduction Card */}
                <div className="apprentissage-intro">
                    <div className="intro-card">
                        <h3>Identification des apprentissages critiques</h3>
                        <p>
                            Dans le cadre du <strong>BUT Informatique</strong>, parcours DACS, j'ai ciblé trois compétences
                            dont le niveau 3 est l'aboutissement :
                        </p>
                        <div className="competences-summary">
                            {competences.map((comp, index) => (
                                <div
                                    key={comp.id}
                                    className={`competence-pill ${activeCompetence === index ? 'active' : ''}`}
                                    onClick={() => setActiveCompetence(index)}
                                >
                                    <span className="pill-number">{comp.id}</span>
                                    <span className="pill-text">{comp.title}</span>
                                </div>
                            ))}
                        </div>
                        <div className="intro-details">
                            <p>Pour chacune, j'ai référencé :</p>
                            <ul>
                                <li>Les <em>apprentissages critiques</em> (éléments essentiels de niveau 3 dans le référentiel officiel)</li>
                                <li>Les <em>composantes essentielles</em> associées</li>
                                <li>Les <em>traces d'activités</em> attestant de leur maîtrise, avec argumentation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Competences Navigation */}
                <div className="competences-tabs">
                    {competences.map((comp, index) => (
                        <button
                            key={comp.id}
                            className={`competence-tab ${activeCompetence === index ? 'active' : ''}`}
                            onClick={() => setActiveCompetence(index)}
                        >
                            <span className="tab-number">{comp.id}</span>
                            <span className="tab-title">{comp.title.split(' ').slice(0, 3).join(' ')}...</span>
                        </button>
                    ))}
                </div>

                {/* Active Competence Detail */}
                <div className="competence-detail">
                    <div className="competence-header">
                        <div className="competence-badge">{competences[activeCompetence].niveau}</div>
                        <h2>{competences[activeCompetence].title}</h2>
                        <p className="competence-reference">
                            <strong>Référentiel :</strong> {competences[activeCompetence].reference}
                        </p>
                    </div>

                    <div className="ac-grid">
                        {competences[activeCompetence].items.map((item, idx) => (
                            <div key={idx} className="ac-card">
                                <div className="ac-header">
                                    <span className="ac-code">{item.code}</span>
                                    <h4>{item.label}</h4>
                                </div>
                                <div className="ac-trace">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10 9 9 9 8 9"/>
                                    </svg>
                                    <span>Trace : {item.trace}</span>
                                </div>
                                <ul className="ac-points">
                                    {item.points.map((point, pIdx) => (
                                        <li key={pIdx}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conclusion */}
                <div className="apprentissage-conclusion">
                    <div className="conclusion-card">
                        <h3>Conclusion</h3>
                        <p>
                            Ces trois compétences, atteintes au niveau 3, sont soutenues par des traces d'activités variées
                            (stages, projets personnels, SAE), permettant de justifier chaque élément essentiel du référentiel.
                            Elles témoignent de ma progression au semestre 6 du BUT Informatique, parcours DACS,
                            en combinant <strong>technicité</strong>, <strong>rigueur</strong> et <strong>travail collaboratif</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apprentissage;
