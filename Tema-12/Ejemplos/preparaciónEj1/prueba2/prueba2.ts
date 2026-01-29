class Molde {
    constructor() {
        console.log("Nuevo objeto creado");
    }
}

class Fabrica {
    producir() {
        new Molde();
    }
}

const fabricar = new Fabrica();

$("#botonProducir").on("click", function() {
    fabricar.producir();
});