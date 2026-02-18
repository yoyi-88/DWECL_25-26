const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de middlewares
app.use(express.json()); // Para poder parsear el body de las peticiones POST
app.use(express.static(path.join(__dirname, 'public'))); // Sirve los archivos de la carpeta public

// URI de conexión de MongoDB Atlas (¡Reemplázala por la tuya!)
const uri = "mongodb+srv://yoyi:yoyi@tarea2tema13.0spxmr3.mongodb.net/?appName=Tarea2Tema13"; 
const client = new MongoClient(uri);

// Variables basadas en tu captura de pantalla
const dbName = 'Tarea2Tema13';
const collectionName = 'Usuarios';

// ENDPOINT GET: Leer todos los documentos (registros)
app.get('/api/usuarios', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const usuarios = await db.collection(collectionName).find({}).toArray();
        res.json(usuarios);
    } catch (error) {
        // Esto imprimirá el error real en tu terminal de Node.js
        console.error("Error DETALLADO de MongoDB:", error); 
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// ENDPOINT POST: Escribir un nuevo documento
app.post('/api/usuarios', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        
        // Recogemos los datos que nos envía el frontend
        const nuevoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido
        };

        const resultado = await db.collection(collectionName).insertOne(nuevoUsuario);
        res.status(201).json({ mensaje: 'Usuario añadido', id: resultado.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el usuario' });
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});