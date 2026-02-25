const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const uri = "mongodb+srv://yoyi:yoyi@tarea2tema13.0spxmr3.mongodb.net/?appName=Tarea2Tema13"; 
const client = new MongoClient(uri);

const dbName = 'Tarea2Tema13';
const collectionName = 'Usuarios';

// --- MEJORA: Conectar una sola vez al iniciar ---
async function connectDB() {
    try {
        await client.connect();
        console.log("Conectado con éxito a MongoDB Atlas");
    } catch (e) {
        console.error("Error al conectar a MongoDB:", e);
        process.exit(1); // Detener el servidor si no hay base de datos
    }
}
connectDB();

app.get('/api/usuarios', async (req, res) => {
    try {
        // Ya no usamos client.connect() aquí
        const db = client.db(dbName);
        const usuarios = await db.collection(collectionName).find({}).toArray();
        res.json(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios:", error); 
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const db = client.db(dbName);
        const nuevoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido
        };

        const resultado = await db.collection(collectionName).insertOne(nuevoUsuario);
        res.status(201).json({ mensaje: 'Usuario añadido', id: resultado.insertedId });
    } catch (error) {
        console.error("Error al insertar:", error);
        res.status(500).json({ error: 'Error al guardar el usuario' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});