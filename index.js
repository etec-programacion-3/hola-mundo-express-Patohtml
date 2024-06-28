/**
 * Importa el módulo Express.
 * @typedef {import('express')} Express
 */

import express from 'express';

const app = express();

/**
 * Maneja la ruta raíz "/" y devuelve un mensaje de saludo.
 * @function
 * @name rootHandler
 * @param {import('express').Request} req - Objeto de solicitud de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
const rootHandler = (req, res) => {
  res.send('Hello World!');
};

app.get('/', rootHandler);

/**
 * Maneja la ruta "/saludo/:nombre" y devuelve un saludo personalizado.
 * @function
 * @name greetingHandler
 * @param {import('express').Request} req - Objeto de solicitud de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
const greetingHandler = (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
};

app.get('/saludo/:nombre', greetingHandler);

/**
 * Inicia el servidor Express en el puerto 3000.
 */
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
