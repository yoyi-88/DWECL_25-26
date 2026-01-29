class Etiqueta {
    constructor(id: number) {
        $("body").append(`<p>Soy el párrafo número: ${id}</p>`);
    }
}

class Manejador {
    private contador: number = 0;

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

$("#insertarParrafo").on("click", function() {
    maneja.crearNuevo();
});
$("#borrarParrafo").on("click", function() {
    maneja.borrarUltimo();
});
    



