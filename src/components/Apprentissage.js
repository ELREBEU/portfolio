import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Apprentissage = () => {
    const navigate = useNavigate();
    const [activeCompetence, setActiveCompetence] = useState(0);

    const competences = [
        {
            id: 1,
            title: "Administrer des systèmes informatiques communicants complexes",
            niveau: "Niveau 2",
            reference: "Déployer et sécuriser une architecture réseau, configurer un poste de travail, automatiser des tâches d'administration, assurer la sécurité des services.",
            items: [
                {
                    code: "AC21.01",
                    label: "Déployer des services dans une architecture réseau",
                    trace: "Stage au CHU de Montpellier",
                    points: [
                        "Installation d'un environnement de développement WAMP sur serveur Linux : configuration d'Apache, MySQL, PHP, configuration SSL pour l'accès sécurisé.",
                        "Mise en place d'un routage entre deux interfaces réseau : l'une connectée à l'intranet du CHU, l'autre à un réseau dédié aux postes de travail. ➔ Preuve de compréhension du L2/L3 et des tables de routage sous iproute2.",
                        "Validation : accès simultané à l'application médicale depuis le LAN interne et à l'outil de test depuis un réseau isolé, avec pare-feu iptables finement configuré pour autoriser uniquement les ports nécessaires."
                    ]
                },
                {
                    code: "AC21.02",
                    label: "Sécuriser les applications et les services",
                    trace: "Projet : Keylogger multi-plateforme",
                    points: [
                        "Réalisation d'un keylogger capable de détecter l'OS (Windows/Linux) et de s'installer en service masqué : à l'aide de scripts d'installation automatisés (systemd service sous Linux, tâche planifiée sous Windows).",
                        "Implémentation d'un chiffrement des données collectées (AES) avant transfert via SMTP : utilisation de la bibliothèque cryptography en Python.",
                        "Integration d'un auto-démarrage au login administrateur, dissimulation du processus sous un nom inoffensif.",
                        "Validation : le service ne laisse pas de traces visibles dans la liste standard des processus, et les données recueillies sont chiffrées sur le disque avant envoi."
                    ]
                },
                {
                    code: "AC21.03",
                    label: "Automatiser des tâches d'administration",
                    trace: "Développement d'un scanner de ports et simulateur d'attaque DOS (en C)",
                    points: [
                        "Écriture d'un script shell (bash) intégrant le scanner : exécution automatisée sur un réseau de test, génération de rapports au format CSV.",
                        "Création d'un démon Linux capable de lancer périodiquement ce scanner, d'archiver les résultats et d'alerter par e-mail en cas de ports ouverts inattendus.",
                        "Validation : démon tournant en tâche de fond (systemd), alertant automatiquement si un service non autorisé apparaît, et réinitialisant les règles iptables au besoin."
                    ]
                },
                {
                    code: "AC21.04",
                    label: "Étudier les vecteurs d'attaque et les vulnérabilités",
                    trace: "Projet personnel : Casseur de mots de passe",
                    points: [
                        "Analyse des algorithmes MD5, bcrypt : évaluation comparative du temps de cassage sur GPU virtuel (simulateur) et CPU.",
                        "Compréhension des rôles des « salt » et « pepper » dans le stockage sécurisé, expérimentation pour mesurer la résistance des hachages à force brute.",
                        "Validation : série de benchmarks montrant qu'un même fichier wordlist génère 14 M de tentatives en 15 s, démontrant l'importance de rounds élevés sur bcrypt."
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Gérer des données de l'information",
            niveau: "Niveau 2",
            reference: "Concevoir et exploiter une base de données relationnelle, sécuriser et optimiser l'accès aux données, assurer la traçabilité et la confidentialité.",
            items: [
                {
                    code: "AC22.01",
                    label: "Concevoir une base de données relationnelle",
                    trace: "Site e-commerce (SAE en BUT 2)",
                    points: [
                        "Modélisation complète du MCD sous MySQL Workbench : entités « Utilisateur », « Produit », « Commande », « Panier », « Paiement » reliées par des associations cardinalisées.",
                        "Création de triggers pour gérer la réduction de stock à chaque commande, historique des commandes, et mise à jour des statuts (« en attente », « expédiée », « livrée »).",
                        "Procédures stockées pour calculer le panier total, appliquer des promotions, et générer automatiquement un invoice PDF via PHP.",
                        "Validation : tests unitaires sous PHPMyAdmin et vérification que chaque trigger s'exécute correctement lorsque l'on insère une nouvelle commande ou que l'on met à jour l'état."
                    ]
                },
                {
                    code: "AC22.02",
                    label: "Sécuriser l'accès aux données (injections, rôles, chiffrement)",
                    trace: "Application de vote électronique (SAE BUT 2)",
                    points: [
                        "Mise en place de requêtes préparées (PreparedStatements) en Java pour éviter les injections SQL.",
                        "Chiffrement des bulletins de vote à l'aide d'AES avant insertion en base : chaque bulletin stocké est chiffré sous une clé générée dynamiquement, seule la clé privée est conservée sur un serveur dédié.",
                        "Gestion des rôles SQL : compte « admin » pour l'ouverture/fermeture du vote, compte « lecteur » avec droits SELECT uniquement.",
                        "Validation : audit manuel des logs de base, tentative d'injection SQL bloquée systématiquement, vérification que sans la clé AES les données sont illisibles."
                    ]
                },
                {
                    code: "AC22.03",
                    label: "Optimiser les performances d'une base de données",
                    trace: "Stage d'exploitation de base de données (CHU)",
                    points: [
                        "Analyse de requêtes lentes via EXPLAIN et création d'index sur colonnes fréquemment filtrées (ex. : date_analyse, num_patient).",
                        "Partitionnement de tables volumineuses (> 10 millions de lignes) sur la date d'échantillonnage, afin d'accélérer l'historique des requêtes.",
                        "Écriture de vues matérialisées (via tables temporaires) pour rapatrier les données utiles aux biologistes : temps de réponse de 20 s à < 1 s.",
                        "Validation : tests avant/après partitionnement, statistiques d'utilisation mesurées dans INFORMATION_SCHEMA."
                    ]
                },
                {
                    code: "AC22.04",
                    label: "Assurer la traçabilité et la confidentialité des données",
                    trace: "Application de vote électronique & Site e-commerce",
                    points: [
                        "Mise en place d'un journal d'audit (table logs) : enregistrement de chaque action (INSERT, UPDATE, DELETE) avec horodatage, utilisateur, IP d'origine.",
                        "Chiffrement AES des champs sensibles : mots de passe (bcrypt), numéros de carte bancaire (AES), bulletins de vote (AES).",
                        "Politique de rôles pour l'accès aux logs : seuls les administrateurs peuvent lire les logs, les développeurs n'ont que le droit d'insertion.",
                        "Validation : contrôle régulier des logs conférences internes, test de déchiffrement uniquement autorisé via outil en console sécurisé."
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Conduire un projet",
            niveau: "Niveau 2",
            reference: "Formaliser les besoins, planifier selon un cadre Agile/classique, organiser le suivi, communiquer avec les parties prenantes.",
            items: [
                {
                    code: "AC23.01",
                    label: "Identifier les besoins du client et de l'utilisateur",
                    trace: "Formulaire d'impression d'étiquettes au CHU",
                    points: [
                        "Ateliers de recueil de besoins avec biologistes et techniciens : interviews semi-structurées pour lister les champs obligatoires (échantillon, test, date, opérateur).",
                        "Rédaction d'un cahier des charges détaillant l'interface graphique (simple, avec sélection déroulante) réduit au minimum le risque d'erreur de saisie.",
                        "Prototypage rapide en PHP/HTML : présentation à l'utilisateur final, recueil de feedbacks, itérations pour optimiser la lisibilité et l'ergonomie.",
                        "Validation : tests utilisateurs documentés, plus de 90 % de satisfaction sur l'efficacité et la rapidité lors des premières utilisations réelles en labo."
                    ]
                },
                {
                    code: "AC23.02",
                    label: "Définir et mettre en œuvre une démarche de suivi de projet",
                    trace: "Application de vote électronique (VueJS + Spring)",
                    points: [
                        "Mise en place d'un tableau Kanban sous GitLab : colonnes « À faire », « En cours », « À valider », « Terminé ». Chaque tâche (User Story) décrit une fonctionnalité (authentification, chiffrement, interface).",
                        "Sprint planning hebdomadaire, définition d'Objectifs Clés (OKR) : par exemple, « Implémenter le protocole RSA pour le chiffrement des clés », « Livrer l'interface de vote pour test bêta ».",
                        "Revue de sprint avec démonstration à l'équipe pédagogique et aux utilisateurs test : bilan des fonctionnalités, ajustement des user stories.",
                        "Validation : respect du planning sur 4 sprints, release candidate déployée dès Semaine 8, avec retours positifs sur la conformité fonctionnelle et la stabilité."
                    ]
                },
                {
                    code: "AC23.03",
                    label: "Identifier les critères de faisabilité d'un projet informatique",
                    trace: "Mini-projet ESP32 (C/Arduino)",
                    points: [
                        "Étude de faisabilité technique : évaluation des contraintes matérielles (RAM limitée à 520 ko, espace Flash de 4 Mo) et choix du module ESP32 Low-Power.",
                        "Analyse de l'environnement réseau : protocole Wi-Fi utilisé pour un mini-serveur HTTP local, estimation du débit suffisant pour l'affichage d'une page captive.",
                        "Planification en autonomie : diagramme de Gantt simplifié avec jalons « Conception des schémas pin », « Développement du serveur », « Tests sur prototype ».",
                        "Validation : démonstration sur maquette physique, portail captif fonctionnel couvrant un rayon de 10 m, temps de connexion < 2 s, preuve de faisabilité dans un délai de 3 semaines."
                    ]
                },
                {
                    code: "AC23.04",
                    label: "Formaliser les processus présents dans une organisation",
                    trace: "Application de vote électronique & Site e-commerce",
                    points: [
                        "Cartographie des flux métier pour l'e-commerce : du « parcours d'achat » (sélection, ajout au panier, validation) jusqu'à la « facturation » (paiement, génération PDF, mise à jour BDD).",
                        "Diagramme BPMN pour le vote électronique : phases « Authentification voter », « Chiffrement bulletin », « Envoi au serveur de vote », « Dépouillement ».",
                        "Documentation détaillée (README, wiki GitLab) pour chaque micro-processus : acteurs, entrées/sorties, contraintes réglementaires (RGPD).",
                        "Validation : présentation des processus à l'équipe pédagogique, vérification de l'exhaustivité et conformité réglementaire (RGPD, CNIL) par le responsable tuteur stage."
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
                    <p>Semestre 4 - Parcours DACS (BUT Informatique)</p>
                </div>

                {/* Introduction Card */}
                <div className="apprentissage-intro">
                    <div className="intro-card">
                        <h3>Identification des apprentissages critiques</h3>
                        <p>
                            Dans le cadre du <strong>BUT Informatique</strong>, parcours DACS, j'ai ciblé trois compétences
                            dont le niveau 2 est l'aboutissement :
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
                                <li>Les <em>apprentissages critiques</em> (éléments essentiels de niveau 2 dans le référentiel officiel)</li>
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
                            Ces trois compétences, atteintes au niveau 2, sont soutenues par des traces d'activités variées
                            (stages, projets personnels, SAE), permettant de justifier chaque élément essentiel du référentiel.
                            Elles témoignent de ma progression au semestre 4 du BUT Informatique, parcours DACS,
                            en combinant <strong>technicité</strong>, <strong>rigueur</strong> et <strong>travail collaboratif</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apprentissage;
