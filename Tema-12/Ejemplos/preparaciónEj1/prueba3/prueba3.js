class Etiqueta {
    constructor(id) {
        $("body").append(`<p>Soy el párrafo número: ${id}</p>`);
    }
}
class Manejador {
    constructor() {
        this.contador = 0;
    }
    crearNuevo() {
        this.contador++;
        new Etiqueta(this.contador);
    }
    borrarUltimo() {
        $("p:last").remove();
        if (this.contador > 0) {
            this.contador--;
        }
    }
}
const maneja = new Manejador();
$("#insertarParrafo").on("click", function () {
    maneja.crearNuevo();
});
$("#borrarParrafo").on("click", function () {
    maneja.borrarUltimo();
});
export {};
//# sourceMappingURL=prueba3.js.map