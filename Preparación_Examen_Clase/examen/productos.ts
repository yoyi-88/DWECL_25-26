interface InterfaceProducto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

class Peticion {
    constructor() {
        this.ejecutarPeticion();
    }

    async ejecutarPeticion() {
        // try {
        //     let conexion = await fetch('http://localhost:3000');

        //     let datos = await conexion.json();

        //     let contenedor = document.getElementById('contenedorProductos');

        //     for (let producto of datos) {
        //         let nuevoProducto = new Producto(producto.id, producto.nombre, producto.precio, producto.stock);
        //         contenedor?.appendChild(nuevoProducto.render());
        //     }

        // } catch (e) {
        //     console.log('Error: ', e);
        // }

        $.ajax({
            url: 'http://localhost:3000', // URL de la API
            method: 'GET',                                       // Método HTTP (GET, POST, PUT, DELETE)
            dataType: 'json',                                    // Tipo de dato que esperamos de vuelta
        })
            .done((data: InterfaceProducto[]) => {
                // Se ejecuta si la petición es exitosa
                let contenedor = document.getElementById('contenedorProductos');

                for (let producto of data) {
                    let nuevoProducto = new Producto(producto.id, producto.nombre, producto.precio, producto.stock);
                    contenedor?.appendChild(nuevoProducto.render());
                }
            });
    }
}

class Producto implements InterfaceProducto {
    constructor(public id: number, public nombre: string, public precio: number, public stock: number) {

    }

    render() {
        let producto = document.createElement('p');
        producto.innerHTML = `Id: ${this.id}, Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`;


        return producto;
    }

}

let boton = document.getElementById('boton');
boton?.addEventListener('click', () => {
    new Peticion;
});