class GrupoBot {
    constructor(contador) {
        this.contador = 0;
        this.contador = contador;
        console.log(this.contador);
    }
    add() {
        let contador = this.contador;
        let grupoBotones = $("#grupoBotones");
        var boton = $("<button></button>").text(this.contador);
        $(boton).on('click', function () {
            alert('Botón' + contador);
        });
        grupoBotones.append(boton);
    }
    rest() {
    }
}
class Boton {
    constructor(nombre, descripcion) {
    }
}
$("#botonAnadir").on('click', function () {
    let contador = +0;
    let nuevoBoton = new GrupoBot(contador);
    nuevoBoton.add();
    contador += 1;
});
export {};
//# sourceMappingURL=botones.js.map