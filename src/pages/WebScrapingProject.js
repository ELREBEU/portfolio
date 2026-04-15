import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import webScrapingImg1 from '../assets/images/webscrapping-1.png';
import webScrapingImg2 from '../assets/images/webscrapping-2.png';

const WebScrapingProject = () => {
    const imagesProject = [webScrapingImg1, webScrapingImg2];

    return (
        <ProjectDetail
            title="Web Scraping & Automatisation"
            subtitle="Automatisation avancée : création de comptes, scraping de prix — Python (Selenium/Playwright) & Java"
            image={webScrapingImg1}
            images={imagesProject}
            date="2024"
            team="Duo"
            context="Projet personnel"
            status="done"
            description={`Ce projet de Web Scraping a été développé en duo pour automatiser des tâches complexes sur le web. Le premier volet permettait de créer automatiquement des comptes Instagram en boucle en utilisant des adresses mail temporaires générées automatiquement, avec un scraper initialement en Selenium puis migré vers Playwright pour plus de fiabilité et de performance.

Le second volet, développé en Java, permettait de scraper automatiquement les prix des billets d'avion sur plusieurs sites pour trouver les offres les moins chères. Le programme comparait les prix en temps réel et identifiait les meilleures opportunités.

Ces projets m'ont permis de comprendre en profondeur les mécanismes du DOM, la gestion des navigateurs automatisés, les techniques d'anti-détection de bots et la migration entre frameworks d'automatisation.`}
            technologies={['Python', 'Java', 'Selenium', 'Playwright', 'WebDriver', 'Automatisation Web', 'DOM Parsing', 'Mails temporaires']}
            features={[
                "Création automatisée de comptes Instagram en boucle",
                "Génération automatique de mails temporaires pour l'inscription",
                "Migration Selenium → Playwright pour plus de performance",
                "Scraping automatique des prix de billets d'avion (Java)",
                "Comparaison de prix en temps réel sur plusieurs sites",
                "Mécanismes d'imitation du comportement humain (anti-détection)",
                "Exploration du DOM et récupération de données complexes",
                "Code structuré et réutilisable pour d'autres cas d'usage"
            ]}
            challenges="Le plus complexe a été de contourner les mécanismes de détection de bots (captchas, rate limiting, fingerprinting) tout en maintenant un taux de succès élevé. La migration de Selenium vers Playwright a été motivée par des problèmes de stabilité. En Java, la difficulté résidait dans l'analyse du DOM de sites dynamiques et la gestion des temps de chargement variables sur les comparateurs de vols."
            softSkills={[
                "Travail en duo",
                "Reverse engineering web",
                "Migration de framework",
                "Résolution de problèmes",
                "Automatisation avancée"
            ]}
            takeaway="Ce projet m'a appris à penser comme un automaticien du web : comprendre le DOM en profondeur, imiter le comportement humain, et gérer les cas d'erreur sur des sites qui changent constamment. La collaboration en duo a aussi été enrichissante pour partager les approches et débugger ensemble."
        />
    );
};

export default WebScrapingProject;
