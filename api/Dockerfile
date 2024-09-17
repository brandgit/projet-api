# Utiliser Node.js 20 avec Debian Bullseye
FROM node:18-bullseye

# Installer les outils nécessaires pour compiler sqlite3 et utiliser git sparse-checkout
RUN apt-get update && apt-get install -y git python3 make g++ sqlite3 python3-pip && \
    pip3 install --upgrade pip && \
    pip3 install setuptools

# Créer un répertoire de travail
WORKDIR /usr/src/app

# Configurer git sparse-checkout pour cloner uniquement le dossier 'api'
RUN git init && \
    git remote add origin https://github.com/brandgit/projet-api.git && \
    git config core.sparseCheckout true && \
    echo "api/" >> .git/info/sparse-checkout && \
    git pull origin main

# Déplacer dans le répertoire 'api' qui a été cloné
WORKDIR /usr/src/app

# Supprimer tout cache résiduel et node_modules local
RUN rm -rf node_modules package-lock.json

# Installer les dépendances en forçant la compilation de sqlite3
RUN npm install --build-from-source sqlite3

# Exposer le port sur lequel l'API va tourner
EXPOSE 5000

# Démarrer l'application
CMD ["npm", "start"]
