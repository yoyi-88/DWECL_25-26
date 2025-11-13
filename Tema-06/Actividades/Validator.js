class BajaCoche {
    constructor() {
        this.fEvento();
    }

    validaMatricula() {
        var matricula = document.getElementById("matricula");
        if (matricula.validity.typeMismatch) {
            matricula.setCustomValidity("Formato matrícula erróneo");
        } else {
            matricula.setCustomValidity("");
        }
        matricula.reportValidity();

    }

    fEvento() {
        var matricula = document.getElementById("matricula");
        matricula.addEventListener("focus", this.validaMatricula.bind(this));

    }
}
window.addEventListener("load",()=>new BajaCoche());
