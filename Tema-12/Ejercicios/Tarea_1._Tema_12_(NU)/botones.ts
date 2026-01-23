interface MetodosBotones {
    add () : void;
    rest () : void;
}

class GrupoBot implements MetodosBotones {
    contador : number = 0;
    constructor(contador: number){
        this.contador = contador;
        console.log(this.contador);
    }

    add(): void {
        let contador = this.contador;

        let grupoBotones = $("#grupoBotones");
        var boton= $("<button></button>").text(this.contador);

        $(boton).on('click', function() {
            alert('Botón' + contador);
        });
        grupoBotones.append(boton);
    }

    rest(): void {
        

    }
}

class Boton {
    constructor(nombre: Text, descripcion: Text) {

    }
}



$("#botonAnadir").on('click', function(){
        let contador =+ 0;
        let nuevoBoton = new GrupoBot(contador);
        nuevoBoton.add();
        contador += 1;
});


