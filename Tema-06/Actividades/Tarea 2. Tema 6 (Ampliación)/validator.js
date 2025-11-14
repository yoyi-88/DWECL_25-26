class inicioSesion {
    #usuariosContrasenas;

    constructor() {
        this.fEvento();
        
    }

    anadirUsuarios() {
        this.#usuariosContrasenas = [
            {usuario:"yoyi", contrasena:"123456qQ"},
            {usuario:"yoyi2", contrasena:"123456wW"},
            {usuario:"yoyi3", contrasena:"123456eE"}
        ];
        console.log(this.#usuariosContrasenas);
    }

    valida() {
        var usuarioIntroducido = document.getElementById("usuario");
        var contrasenaIntroducida = document.getElementById("contrasena");

        this.#usuariosContrasenas.forEach(usuario => {
            if (usuario.usuario == usuarioIntroducido && usuario.contrasena == contrasenaIntroducida) {
                return alert("Sesión iniciada");
            }
            
        });
        return alert("Usuario o contraseña icorrectos");
    }

    formatoContrasena() {
        var contrasena = document.getElementById("contrasena");
        if (contrasena.validity.patternMismatch) {
            contrasena.setCustomValidity("8 caracteres mínimo, al menos 1 mayúscula, 1 minúscula, y 1 número.");
        } else {
            contrasena.setCustomValidity("");
        }
        contrasena.reportValidity();
    }

    fEvento() {
        var contrasena = document.getElementById("contrasena");
        contrasena.addEventListener("blur", this.formatoContrasena);

        var submit = document.getElementById("button");
        submit.addEventListener("onclick", this.valida);

    }



}

window.addEventListener("load", () => new inicioSesion());