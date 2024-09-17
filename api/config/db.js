import mysql from 'mysql2';
import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';
// Charger les variables d'environnement
dotenv.config();

// Connexion à MySQL
const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

mysqlConnection.connect(err => {
  if (err) {
    console.error('Erreur de connexion MySQL :', err.message);
  } else {
    console.log('Connecté à MySQL.');
  }
});

// Connexion à SQLite (rien ne change ici, SQLite reste local)
const sqliteConnection = new sqlite3.Database('./local_presence.db', (err) => {
  if (err) {
    console.error('Erreur de connexion SQLite :', err.message);
  } else {
    console.log('Connecté à SQLite.');
  }
});

export { mysqlConnection, sqliteConnection };