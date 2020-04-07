const express = require("express");
const app = express();

const usuarios = [
  {nombre: 'José', posicion: 'programador'},
  {nombre: 'Carmen', posicion: 'coordinadora'},
  {nombre: 'Juan', posicion: 'analista'},
  {nombre: 'Marta', posicion: 'externa'}
];

app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicacion de usuarios');
});

app.get('/usuarios', (req, res, next) => {
  res.send(usuarios);
});

app.get('/usuarios/:id', (req, res, next) => {
  const id = req.params.id - 1;
  console.log('Buscando usuario:', id);
  if (usuarios[id] == null) {
    res.send('Usuario no existe');
  } else {
    res.send(usuarios[id]);
  }
});

const server = app.listen(8080, function() {
  console.log('Servidor iniciado...');
});
