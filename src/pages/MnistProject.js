import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import ImageSlider from '../components/ImageSlider';
import ImageMNIST from '../assets/images/ex_mnist.png'

const MnistProject = () => {
  const images = [ImageMNIST];

  return (
    <ProjectDetail
      title="MNIST - Reconnaissance de Chiffres"
      subtitle="Réseau de neurones pour la reconnaissance de chiffres manuscrits"
      image={ImageMNIST}
      description="Projet d'apprentissage automatique utilisant PyTorch pour reconnaître des chiffres (0-9) du dataset MNIST. Ce projet implémente un réseau de neurones entièrement connecté (Fully Connected Neural Network) capable de reconnaître des chiffres avec une précision de 97-98%. Le modèle est entraîné sur 60 000 images et testé sur 10 000 images du célèbre dataset MNIST."
      technologies={['Python', 'PyTorch', 'torchvision', 'CUDA']}
      features={[
        "Réseau de neurones avec 4 couches (784 → 256 → 128 → 64 → 10)",
        "Fonction d'activation ReLU pour les couches cachées",
        "Optimiseur Adam avec learning rate de 0.001",
        "Fonction de perte CrossEntropyLoss",
        "Support GPU avec CUDA pour accélération",
        "Normalisation des images (moyenne: 0.1307, écart-type: 0.3081)",
        "Batch size de 64 images",
        "Entraînement sur 10 epochs",
        "Scripts de visualisation des prédictions",
        "Précision de 97-98% sur le dataset de test",
        "Sauvegarde automatique du modèle entraîné",
        "Téléchargement automatique du dataset MNIST"
      ]}
      architecture={
        <div className="architecture-section">
          <h3>Architecture du Réseau</h3>
          <ul>
            <li><strong>Couche d'entrée :</strong> 784 neurones (28×28 pixels)</li>
            <li><strong>Couche cachée 1 :</strong> 256 neurones + ReLU</li>
            <li><strong>Couche cachée 2 :</strong> 128 neurones + ReLU</li>
            <li><strong>Couche cachée 3 :</strong> 64 neurones + ReLU</li>
            <li><strong>Couche de sortie :</strong> 10 neurones (chiffres 0-9)</li>
          </ul>
        </div>
      }
      installation={
        <div className="installation-section">
          <h3>Installation et Utilisation</h3>

          <h4>1. Créer un environnement virtuel Python</h4>
          <pre><code>python3 -m venv env</code></pre>

          <h4>2. Activer l'environnement</h4>
          <p><strong>Linux/Mac :</strong></p>
          <pre><code>source env/bin/activate</code></pre>
          <p><strong>Windows :</strong></p>
          <pre><code>env\Scripts\activate</code></pre>

          <h4>3. Installer les dépendances</h4>
          <pre><code>pip install -r requirements.txt</code></pre>

          <h4>Étape 1 : Entraîner le modèle</h4>
          <pre><code>python3 train_mnist.py</code></pre>
          <p>Le dataset MNIST sera automatiquement téléchargé lors du premier lancement. Ce script va :</p>
          <ul>
            <li>Télécharger le dataset MNIST (environ 50 Mo)</li>
            <li>Entraîner le modèle sur 10 epochs</li>
            <li>Sauvegarder le modèle dans mnist.pth</li>
            <li>Afficher l'erreur moyenne à chaque epoch</li>
          </ul>

          <h4>Étape 2 : Tester la précision</h4>
          <pre><code>python3 test_mnist.py</code></pre>
          <p>Résultat attendu : Environ 97-98% de précision.</p>

          <h4>Étape 3 : Visualiser les prédictions</h4>
          <pre><code>python3 visualize_mnist.py</code></pre>
          <p>Ce script affiche 5 images aléatoires avec la prédiction du modèle et la vraie réponse.</p>
        </div>
      }
      structure={
        <div className="structure-section">
          <h3>Structure du Projet</h3>
          <pre><code>{`MNIST/
│
├── mnist.py                # Modèle Mnist
├── train_mnist.py          # Script d'entraînement
├── test_mnist.py           # Script de test de précision
├── visualize_mnist.py      # Script de visualisation
├── requirements.txt        # Dépendances Python
├── mnist.pth               # Modèle entraîné (généré après train_mnist.py)
└── data/                   # Dataset MNIST (téléchargé automatiquement)`}</code></pre>
        </div>
      }
      challenges="Le défi principal était de concevoir une architecture de réseau de neurones efficace et équilibrée. Il fallait trouver le bon nombre de neurones par couche pour obtenir une bonne précision sans surapprentissage (overfitting). J'ai également dû optimiser les hyperparamètres (learning rate, batch size, nombre d'epochs) pour atteindre les meilleurs résultats. La gestion du GPU avec CUDA pour accélérer l'entraînement était également un aspect important du projet."
      notes={[
        "Le modèle utilise automatiquement le GPU si disponible (CUDA)",
        "Les images sont normalisées avec une moyenne de 0.1307 et un écart-type de 0.3081",
        "Le batch size est fixé à 64 images",
        "Durée d'entraînement : Quelques minutes sur CPU, beaucoup plus rapide sur GPU",
        "Prérequis : Python 3.8+ et optionnellement GPU NVIDIA avec CUDA"
      ]}
      github="https://github.com/ELREBEU/MNIST"
      customContent={
        <>
          {images.length > 0 && <ImageSlider images={images} />}
        </>
      }
    />
  );
};

export default MnistProject;
