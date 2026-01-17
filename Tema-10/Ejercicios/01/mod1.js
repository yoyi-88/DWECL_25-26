// mod1.js
// conecta al servidor para pedir información
export async function conseguirDatos(url, func) {

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(datos => {
    //         func(datos);
    //     })
    //     .catch(error => console.error("Error:", error));

    try {
        let response = await fetch(url);
        let object = await response.json();
        func(object);
    } catch (e) {
        alert('error: ' + e);

    }


}