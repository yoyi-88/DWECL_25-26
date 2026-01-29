class GrupoBot {
    constructor() {
        // Definimos el contador privado
        this.contador = 0;
    }
    add() {
        // Incrementamos el contador al llamar al método e instanciamos la clase Boton que crea el botón pasándole como 
        // parámetro el contador actualizado
        this.contador++;
        new Boton(this.contador);
    }
    rest() {
        // Si existen botones (el contador es mayor que 0), eliminamos el último botón y restamos 1 al contador
        if (this.contador > 0) {
            $("#grupoBotones button:last").remove();
            this.contador--;
        }
    }
}
class Boton {
    // Dentro del constructor creamos el contador que recibirá el valor de la clase GrupoBot
    constructor(contador) {
        // Recogemos el div en el que se crearán los botones y creamos el botón atendiendo a su número
        let grupoBotones = $("#grupoBotones");
        var boton = $("<button></button>").text(contador);
        // Añadimos un evento al botón para que muestre un alert al ser pulsado
        boton.on('click', () => {
            alert('Botón' + contador);
        });
        // Añadimos el botón al div
        grupoBotones.append(boton);
    }
}
// Instanciamos la clase GrupoBotones una única vez
const botones = new GrupoBot();
// Creamos los eventos que accionarán los métodos add() y rest() de la clase GrupoBot al pulsar los dos botones 
// definidos en el html
$("#botonAnadir").on('click', function () {
    botones.add();
});
$("#botonBorrar").on('click', function () {
    botones.rest();
});
export {};
//# sourceMappingURL=botones.js.map