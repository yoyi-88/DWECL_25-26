const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware para entender JSON y servir la carpeta 'public' estáticamente
app.use(express.json());
app.use(express.static('public'));

// --------------------------------------------------
// CONFIGURACIÓN DE MONGODB
// --------------------------------------------------
// Reemplaza esto con tu cadena de conexión de MongoDB Atlas
const uri = "mongodb+srv://yoyi:yoyi@tarea2tema13.0spxmr3.mongodb.net/?appName=Tarea2Tema13";
const client = new MongoClient(uri);
let db;

async function conectarDB() {
    try {
        await client.connect();
        db = client.db("Tarea2Tema13"); // Pon aquí el nombre que quieras para tu BBDD
        console.log("✅ Conectado a MongoDB Atlas");
    } catch (error) {
        console.error("❌ Error conectando a MongoDB:", error);
    }
}
conectarDB();

// --------------------------------------------------
// RUTAS DE LA API (Las que llamaremos por AJAX)
// --------------------------------------------------

// 1. Petición GET: Leer/Listar los documentos
app.get('/api/usuarios', async (req, res) => {
    // Busca todos los registros en la colección 'Usuarios'
    const usuarios = await db.collection("Usuarios").find().toArray();
    res.json(usuarios);
});

// 2. Petición POST: Guardar un nuevo documento
app.post('/api/usuarios', async (req, res) => {
    const { nombre, apellido } = req.body;
    
    // Inserta el nuevo registro en la colección 'Usuarios'
    await db.collection("Usuarios").insertOne({ nombre, apellido });
    
    // Respondemos con éxito
    res.json({ success: true, message: "Usuario añadido" });
});

// Arrancar el servidor
app.listen(port, () => {
    console.log(`🚀 Servidor funcionando en http://localhost:${port}`);
});