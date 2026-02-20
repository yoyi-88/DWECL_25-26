// Nos sirve como molde para que TypeScript nos avise si nos falta algún dato.
interface Art {
    id: number;
    cod: string;
    color: string;
    piel: string;
}

// Contiene toda la lógica de nuestra aplicación.
class Articulos {
    boton: string;
    constructor(boton: string) {
        console.log('inicio');
        this.boton = boton;
        let eventBoton = document.getElementById(boton);
        // Asigna el evento al botón
        eventBoton?.addEventListener('click', async (event) => {
            event.preventDefault(); // Evita que el formulario recargue la pagina

            await this.pushArticulo(); // Guarda nuevo artículo 
            this.getArticulos(); // Refresca la tabla

        });
        // Llamamos al método para que se cargue nada mas empezar
        this.getArticulos();
    }
    // Envía los datos de los inputs al servidor
    private async pushArticulo() {
        let cod = document.getElementById('cod') as HTMLInputElement;
        let color = document.getElementById('color') as HTMLInputElement;
        let piel = document.getElementById('piel') as HTMLInputElement;
        // Construye la URL con los valores del formulario
        let url = `http://localhost:3000/pushArticulos?cod=${cod.value}&color=${color.value}&piel=${piel.value}`;

        await fetch(url); // Ejecuta la petición

    }

    // Obtiene la lista del servidor y la pinta en el HTML
    private async getArticulos() {
        console.log('Entra en get');
        let url = 'http://localhost:3000/getArticulos';
        let cuerpoTabla = document.getElementById('carteras');
        
        fetch(url)
            .then(conexion => conexion.json()) // Pasa la respuesta a json
            // Definimos la interfaz para obligar a recibir los datos especificos
            .then((datos: Art[]) => {
                // Limpiamos la tabla
                if (cuerpoTabla) cuerpoTabla.innerHTML = "";
                // Crea e inserta una fila por cada artículo recibido
                for (let articulo of datos) {
                    let tr = document.createElement('tr');
                    tr.innerHTML = `
                <td>${articulo.id}</td>
                <td>${articulo.cod}</td>
                <td>${articulo.color}</td>
                <td>${articulo.piel}</td>
            `;
                    cuerpoTabla?.appendChild(tr);
                }
            })
            .catch(e => {
                console.log('Error', e);
            });
    }
}
// Arranca la aplicación asociando la clase al botón 'bot'
let test =  new Articulos('bot');
