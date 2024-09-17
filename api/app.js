import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// Charger les variables d'environnement
dotenv.config();

import { mysqlConnection, sqliteConnection } from './config/db.js';
// import entrepriseRoutes from './routes/entreprises.js';
// import utilisateurRoutes from './routes/utilisateurs.js';
// import presenceRoutes from './routes/presences.js';

// Initialiser l'application Express
const app = express();

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Connexion à MySQL et SQLite au démarrage de l'API
const DbConnections = () => {
  // Connexion MySQL
  mysqlConnection.query('SELECT 1', (err) => {
    if (err) {
      console.error('Erreur de connexion à MySQL :', err.message);
    } else {
      console.log('Connecté à MySQL.');
    }
  });

  // Connexion SQLite
  sqliteConnection.get('SELECT 1', (err) => {
    if (err) {
      console.error('Erreur de connexion à SQLite :', err.message);
    } else {
      console.log('Connecté à SQLite.');
    }
  });
};

// Définir les routes de l'API
// app.use('/api/entreprises', entrepriseRoutes);
// app.use('/api/utilisateurs', utilisateurRoutes);
// app.use('/api/presences', presenceRoutes);

// Démarrer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  
  // Connexions aux bases de données
//   DbConnections();  // Appel de la fonction pour tester les connexions
});
