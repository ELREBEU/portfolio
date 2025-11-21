import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import streamify from '../assets/images/streamify.png';

const StreamifyProject = () => {
    return (
        <ProjectDetail
            title="Application de Streaming"
            subtitle="Plateforme de streaming personnalisée développée en FastAPI et React Native"
            image={streamify}
            description="Streamify est une application de streaming vidéo que j'ai développée de A à Z avec un backend en FastAPI et un front en React Native. Elle permet de regarder des films, séries et épisodes téléchargés et compressés automatiquement sur le serveur. L'objectif du projet était d'apprendre à créer une plateforme multimédia performante tout en optimisant l'espace disque, la diffusion vidéo et la structure API."
            technologies={[
                'FastAPI',
                'Python',
                'FFmpeg',
                'SQL',
                'React Native',
                'Expo',
                'Axios',
                'OpenAPI 3',
                'AsyncIO'
            ]}
            features={[
                "Streaming vidéo dynamique (support Range 206)",
                "Téléchargement automatique d'épisodes et films",
                "Compression intelligente des vidéos via FFmpeg",
                "API REST documentée grâce à OpenAPI",
                "Gestion des séries, saisons et épisodes",
                "Lecture fluide sur mobile (iOS/Android)",
                "Système de fichiers sécurisé avec anti path-traversal",
                "Interface sombre / moderne côté mobile"
            ]}
            challenges="Le plus gros défi a été d'implémenter un vrai système de streaming compatible avec les players mobiles, notamment la gestion des requêtes Range (206), la sécurité des chemins d'accès, et l'optimisation des vidéos pour éviter de saturer le disque du serveur. J'ai également dû construire une API propre, stable et front-ready pour que l'application mobile puisse fonctionner parfaitement."
            github="https://github.com/ELREBEU/streamify"
        />
    );
};

export default StreamifyProject;
