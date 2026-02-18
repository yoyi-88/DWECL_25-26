import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const uri = "mongodb+srv://yoyi:yoyi@tarea2tema13.0spxmr3.mongodb.net/?appName=Tarea2Tema13";
const client = new MongoClient(uri);
let db;

async function conectarDB() {
    try {
        await client.connect();
        db = client.db("Tarea2Tema13");
        console.log("✅ Conectado a MongoDB Atlas");
    } catch (error) {
        console.error("❌ Error conectando a MongoDB:", error);
    }
}
conectarDB();

app.get('/api/usuarios', async (req, res) => {
    try {
        const usuarios = await db.collection("Usuarios").find().toArray();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const { nombre, apellido } = req.body;
        await db.collection("Usuarios").insertOne({ nombre, apellido });
        res.json({ success: true, message: "Usuario añadido" });
    } catch (error) {
        res.status(500).json({ error: "Error al insertar usuario" });
    }
});

app.listen(port, () => {
    console.log(`🚀 Servidor funcionando en http://localhost:${port}`);
});