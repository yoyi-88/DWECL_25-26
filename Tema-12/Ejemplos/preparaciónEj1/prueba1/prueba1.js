class Calculadora {
    constructor() {
        this.resultado = 0;
    }
    sumar(n) {
        this.resultado += n;
        console.log("El total actual es: " + this.resultado);
    }
}
const sumaCalculadora = new Calculadora();
$("#botonSumar").on("click", function () {
    sumaCalculadora.sumar(1);
});
export {};
//# sourceMappingURL=prueba1.js.map