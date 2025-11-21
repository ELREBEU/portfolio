import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import crackImage from '../assets/images/casseur-1.png';
import crackImage2 from '../assets/images/casseur-2.png';

const CrackProject = () => {
    const projectsImages = [crackImage, crackImage2];

    return (
        <ProjectDetail
            title="Crack"
            subtitle="Outil pédagogique pour comprendre le fonctionnement des hash et des attaques par dictionnaire"
            image={crackImage}
            images={projectsImages}
            description="
Crack est un projet développé en Python dans un but purement éducatif afin de mieux comprendre
le fonctionnement des fonctions de hachage et des attaques basées sur des dictionnaires de mots de passe.
L’objectif principal était de visualiser comment un système naïf de comparaison de hash peut être mis en défaut,
et de sensibiliser à l’importance des bonnes pratiques (mots de passe robustes, salage, itérations, etc.).
L’outil a surtout servi de support d’apprentissage en cybersécurité, plutôt que d’outil opérationnel."
            technologies={[
                'Python',
                'Hashlib',
                'Interfaces en ligne de commande',
                'Fichiers de dictionnaire',
                'Sécurité / Sensibilisation'
            ]}
            features={[
                "Identification du type de hash (ex: MD5, SHA-1, SHA-256) à partir de caractéristiques simples",
                "Interface qui permet de lancer des tests de correspondance entre hash et dictionnaire de mots",
                "Organisation du code en modules (crack, identify, interface, etc.) pour bien séparer les responsabilités",
                "Affichage des résultats de manière lisible pour un usage pédagogique",
                "Structure pensée pour expérimenter différents algorithmes de hash et scénarios d’attaque contrôlés",
                "Support pour différents formats de fichiers de mots (wordlists) utilisés dans un contexte d’apprentissage"
            ]}
            challenges="
Le principal défi de ce projet était de concevoir un outil qui illustre le principe des attaques sur les hash
sans pour autant en faire un outil d’attaque réaliste, en restant dans un cadre de démonstration et de sensibilisation.
J’ai dû structurer le code de façon claire (modules pour l’identification du hash, l’interface, la logique de test, etc.)
et m’assurer que le projet puisse servir de support pédagogique pour expliquer pourquoi des techniques comme le salage,
les itérations (PBKDF2, bcrypt, etc.) et des mots de passe forts sont indispensables."
            github="https://github.com/ELREBEU/crack"
        />
    );
};

export default CrackProject;
