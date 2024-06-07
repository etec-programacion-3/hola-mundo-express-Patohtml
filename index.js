import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre
  res.send(`Hola ${nombre}`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});