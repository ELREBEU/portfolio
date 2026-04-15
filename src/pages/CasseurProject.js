import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import crackImage from '../assets/images/casseur-1.png';
import crackImage2 from '../assets/images/casseur-2.png';

const CrackProject = () => {
    const projectsImages = [crackImage, crackImage2];

    return (
        <ProjectDetail
            title="Casseur de mot de passe"
            subtitle="Outil pédagogique pour comprendre le fonctionnement des hash et des attaques par dictionnaire"
            image={crackImage}
            images={projectsImages}
            date="Novembre 2024"
            team="Solo"
            duration="1 mois"
            context="Projet personnel — cybersécurité éducative"
            status="done"
            description="Crack est un projet développé en Python dans un but purement éducatif afin de mieux comprendre le fonctionnement des fonctions de hachage et des attaques basées sur des dictionnaires de mots de passe. L'objectif principal était de visualiser comment un système naïf de comparaison de hash peut être mis en défaut, et de sensibiliser à l'importance des bonnes pratiques (mots de passe robustes, salage, itérations). L'outil a servi de support d'apprentissage en cybersécurité et de base pour mes présentations de sensibilisation."
            technologies={['Python', 'Hashlib', 'CLI', 'Fichiers wordlists', 'Sécurité / Sensibilisation']}
            features={[
                "Identification du type de hash (MD5, SHA-1, SHA-256) à partir de caractéristiques",
                "Attaque par dictionnaire avec wordlists personnalisables",
                "Organisation modulaire du code (crack, identify, interface)",
                "Affichage des résultats lisible pour usage pédagogique",
                "Support pour différents algorithmes de hash",
                "Benchmarks de performance (14M tentatives en 15s)"
            ]}
            challenges="Le défi était de concevoir un outil qui illustre le principe des attaques sur les hash sans en faire un outil d'attaque réaliste, en restant dans un cadre de démonstration et de sensibilisation. J'ai structuré le code de façon modulaire et m'assurer que le projet puisse servir de support pédagogique pour expliquer pourquoi le salage, les itérations (bcrypt, PBKDF2) et des mots de passe forts sont indispensables."
            softSkills={[
                "Sensibilisation cybersécurité",
                "Vulgarisation technique",
                "Programmation modulaire",
                "Éthique et responsabilité"
            ]}
            takeaway="Ce projet m'a donné une compréhension concrète du fonctionnement des hash et de leurs vulnérabilités. Je l'ai ensuite réutilisé comme support lors d'exercices de sensibilisation à la sécurité des mots de passe."
            github="https://github.com/ELREBEU/crack"
        />
    );
};

export default CrackProject;
