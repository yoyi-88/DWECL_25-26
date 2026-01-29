// Creamos interfaz para obligar a la clase GrupoBot a que contenga los métodos add() y rest()
interface MetodosBotones {
    add () : void;
    rest () : void;
}

class GrupoBot implements MetodosBotones {
    // Definimos el contador privado
    private contador : number = 0;

    add(): void {
        // Incrementamos el contador al llamar al método e instanciamos la clase Boton que crea el botón pasándole como 
        // parámetro el contador actualizado
        this.contador++;
        new Boton(this.contador);
    }

    rest(): void {
        // Si existen botones (el contador es mayor que 0), eliminamos el último botón y restamos 1 al contador
        if (this.contador > 0) {
            const contenedor = document.getElementById('grupoBotones');
            contenedor?.lastElementChild?.remove();
            this.contador--;
        }
    }
}

class Boton {
    // Dentro del constructor creamos el contador que recibirá el valor de la clase GrupoBot
    constructor(contador: number) {
        // Recogemos el div en el que se crearán los botones y creamos el botón atendiendo a su número
        let grupoBotones = document.getElementById('grupoBotones');
        let boton = document.createElement('button');
        boton.innerText =  contador.toString();

        // Añadimos un evento al botón para que muestre un alert al ser pulsado
        boton.addEventListener('click', () => {
            alert('Botón' + contador);
        });

        // Añadimos el botón al div
        grupoBotones?.appendChild(boton);
    }
}

// Instanciamos la clase GrupoBotones una única vez
const botones = new GrupoBot(); 

// Creamos los eventos que accionarán los métodos add() y rest() de la clase GrupoBot al pulsar los dos botones 
// definidos en el html
document.getElementById("botonAnadir")?.addEventListener('click', function(){
    botones.add();    
});
document.getElementById("botonBorrar")?.addEventListener('click', function(){
    botones.rest();    
});


