// mod2.js

// Rellena el menú desplegable al inicio
export function mostrarNombres(text) {
    let nombres = document.getElementById('nombres');
    // Limpiamos el "Cargando..."
    nombres.innerHTML = '<option value="">Selecciona un nombre...</option>';

    // Recorremos la lista de nombres y creamos una opción por cada uno
    for (let i = 0; i != text.length; i++) {
        nombres.innerHTML += '<option value="' + text[i].id + '">' + text[i].nombre + '</option>';
    }
}


// Se activa cuando el usuario elige un nombre en el menú
export function cargarDetalle(id, urlServidor, conseguirDatos, mostrarPersona) {
    if (id == "") { // Si no hay nada seleccionado, volvemos al texto original
        document.getElementById("datos_contenedor").innerHTML = "La tabla se cargará aquí...";
        return;
    }
    // Creamos la URL con el ID seleccionado
    const url = `${urlServidor}?id=${id}`;
    conseguirDatos(url, mostrarPersona); // Pedimos los datos de esa persona
}

// Crea la tabla con la información de la persona seleccionada
export function mostrarPersona(text) {
    console.log(text.nombre);

    const contenedorPersona = document.getElementById('datos_contenedor');

    // Creamos el HTML de la tabla con los datos del objeto "text"
    let tabla = `
                <h3>Datos del  usuario</h3>
                <table>
                    <tr>
                        <th>ID</th>
                        <td>${text.id}</td>
                    </tr>

                    <tr>
                        <th>Nombre</th>
                        <td>${text.nombre}</td>
                    </tr>

                    <tr>
                        <th>Apellidos</th>
                        <td>${text.apellidos}</td>
                    </tr>

                    <tr>
                        <th>Ciudad</th>
                        <td>${text.ciudad}</td>
                    </tr>
                </table>
            `;

    contenedorPersona.innerHTML = tabla; // Inyectamos la tabla en el HTML

}