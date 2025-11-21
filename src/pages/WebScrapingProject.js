import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import webScrapingImg1 from '../assets/images/webscrapping-1.png';
import webScrapingImg2 from '../assets/images/webscrapping-2.png';

const WebScrapingProject = () => {
    const imagesProject = [webScrapingImg1, webScrapingImg2];

    return (
        <ProjectDetail
            title="Web Scraping"
            subtitle="Projet personnel d’automatisation et collecte de données en Python & Java"
            image={webScrapingImg1}
            images={imagesProject}
            description="
Ce projet de Web Scraping a été développé dans un cadre personnel afin d’apprendre à automatiser
des tâches sur le web et à extraire des données de manière contrôlée.
Il comprend deux versions : une première en **Python**, utilisant Selenium pour automatiser
des interactions complexes avec des sites web, et une seconde en **Java**, dédiée à l’exploration
automatisée de sites afin de rechercher et comparer des informations pertinentes (comme des prix de billets d’avion).
Le projet permet de comprendre les mécanismes du DOM, la gestion des navigateurs automatisés,
et les techniques utilisées pour éviter la détection des bots."
            technologies={[
                'Python',
                'Java',
                'Selenium',
                'Playwright',
                'WebDriver',
                'Automatisation Web',
                'DOM Parsing',
                'Data Processing'
            ]}
            features={[
                "Automatisation complète de parcours web (clics, formulaires, actions répétées)",
                "Web scraping basé sur Selenium pour interagir avec des sites dynamiques",
                "Version Python pour automatiser la création de comptes sur une plateforme cible",
                "Version Java pour collecter automatiquement les meilleurs prix de billets d’avion",
                "Mécanismes d’imitation du comportement humain pour éviter la détection",
                "Exploration du DOM et récupération de données complexes",
                "Code structuré pour être réutilisé et adapté à d'autres cas d’usage",
            ]}
            challenges="
Le plus complexe a été de manipuler Selenium et Playwright de manière fiable avec plusieurs navigateurs,
et d’automatiser des interactions sophistiquées tout en contournant les mécanismes simples
de détection des bots.
En Java, la difficulté principale résidait dans l'analyse du DOM et la collecte des informations
sur plusieurs sites tout en gérant les temps de chargement, les éléments dynamiques et les
aléas des pages web modernes.
Ce projet a été un excellent exercice pour renforcer mes compétences en scraping, automation
et compréhension des interactions web."
            github="https://github.com/ELREBEU"
        />
    );
};

export default WebScrapingProject;
