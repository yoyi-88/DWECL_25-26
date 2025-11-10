function valida() {
    var inp = document.getElementById("inp");
    var mensa = document.getElementById("mensa");
    if (!inp.checkValidity()) {
        mensa.innerHTML = "Dato inválido";
    }
    else {
        mensa.innerHTML = "";
    }
}
var formu = document.getElementById("bot");
formu.addEventListener('click', valida);  //Añade control evento 'clic'  