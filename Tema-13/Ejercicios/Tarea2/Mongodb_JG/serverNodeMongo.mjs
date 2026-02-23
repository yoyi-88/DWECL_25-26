import { MongoClient} from 'mongodb';
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://yoyi:yoyi@tarea2tema13.0spxmr3.mongodb.net/?appName=Tarea2Tema13";

// Create a new client and connect to MongoDB
export async function run(registro) {
  const client = new MongoClient(uri);
  try {
    const database = client.db('Tarea2Tema13');
    const datos = database.collection('Usuarios');
    // Inserta registro en BBDD
    if (registro.nombre !="") await datos.insertOne(registro);
    // Consulta todos los documentos
    const queryAll = datos.find();
    // Los retorna en forma de array de objetos.
    const allValues = await queryAll.toArray();
    return allValues;
    //-----------------------------------------------
  }catch (error){
    console.log (error.message)

  } finally {
    // Asegura que se cierra la conexión.
    await client.close();
  }
}
