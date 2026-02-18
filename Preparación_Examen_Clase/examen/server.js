import http from 'http';
import {productos} from './datos.js'

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify(productos));
});

server.listen(3000);
console.log('Servidor funcionando en el puerto 3000');