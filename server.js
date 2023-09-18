const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const puerto = 8000;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const respuesta = JSON.stringify({
    nombre: 'Eva Reyes',
    mensaje: 'Hola desde mi servidor Node.js',
  });
  res.end(respuesta);
});

servidor.listen(puerto, host, () => {
  console.log(
    chalk.green(`Servidor en funcionamiento en http://${host}:${puerto}`)
  );
});
