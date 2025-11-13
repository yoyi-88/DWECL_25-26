class BajaCoche {
    constructor() {
        this.fEvento();
    }

    validaMatricula() {
        var matricula = document.getElementById("matricula");
        // Comprobamos si el pattern coincide
        if (matricula.validity.patternMismatch) {
            matricula.setCustomValidity("Formato matrícula erróneo, deben ser 4 dígitos.");
        } else {
            matricula.setCustomValidity("");
        }
        matricula.reportValidity();

    }

    escribiendoDni() {
        var dniLabel = document.getElementById("dni-label");
        if (dniLabel) {
            dniLabel.textContent = "Escribiendo DNI:";
        }
    }

    reset() {
        var dniLabel = document.getElementById("dni-label");
        if (dniLabel) {
            dniLabel.textContent = "DNI:";
        }
    }



    fEvento() {
        // Evento matrícula
        var matricula = document.getElementById("matricula");
        matricula.addEventListener("blur", this.validaMatricula);

        // Eventos de DNI
        var dniInput = document.getElementById("dni");
        // Al hacer focus, llamamos a escribiendoDni()
        dniInput.addEventListener("focus", this.escribiendoDni);
        // Al perder el foco (blur), llamamos a reset()
        dniInput.addEventListener("blur", this.reset);



    }
}
window.addEventListener("load", () => new BajaCoche());
