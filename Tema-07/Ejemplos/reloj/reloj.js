
function inicia() {
    var on = setInterval(reloj, 1000);
    return on;
}
function reloj() {
    var actual = new Date();
    var h = actual.getHours();
    var m = actual.getMinutes();
    var s = actual.getSeconds();
    m = necesita0(m);
    s = necesita0(s);
    document.getElementById("hora").innerHTML = 
h + ":" + m + ":" + s;
}
function necesita0(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}