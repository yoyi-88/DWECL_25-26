import http from 'http';
import {datos} from './datos.js'

const server = new http;
server.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(datos));
}).listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});