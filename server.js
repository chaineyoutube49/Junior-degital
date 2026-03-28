const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques depuis la racine (pas de dossier dist)
app.use(express.static(path.join(__dirname)));

// Toutes les routes redirigent vers index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
  // Vérifier les médias au démarrage
  const files = fs.readdirSync(__dirname);
  const mediaFiles = files.filter(file => 
    file.match(/\.(mp4|png|jpg|jpeg|gif|svg|webm|ogg|mp3|wav)$/)
  );
  console.log(`📂 Médias disponibles: ${mediaFiles.length} fichiers`);
  if (mediaFiles.length === 0) {
    console.log('❌ ERREUR: Aucun média trouvé dans le projet!');
  } else {
    console.log('✅ Médias prêts - SYSTEME SANS DOSSIER DIST');
  }
});
