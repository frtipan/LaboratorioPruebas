const express = require('express');
const app = express();

// Endpoint sencillo
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Levantar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});