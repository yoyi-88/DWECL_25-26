class Calculadora {
    private resultado: number = 0;

    sumar(n: number) {
        this.resultado += n;
        console.log("El total actual es: " + this.resultado);
    }
}

const sumaCalculadora = new Calculadora();

$("#botonSumar").on("click", function() {
    sumaCalculadora.sumar(1);
})