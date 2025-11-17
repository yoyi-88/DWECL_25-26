class inicioSesion {
    #usuariosContrasenas;

    constructor() {
        // Creación de array de objetos con los inicios de sesión disponibles
        this.#usuariosContrasenas = [
            {usuario:"yoyi", contrasena:"123456qQ"},
            {usuario:"yoyi2", contrasena:"123456wW"},
            {usuario:"yoyi3", contrasena:"123456eE"}
        ];
        this.fEvento();
        
    }


    valida = () => {
        var usuarioIntroducido = document.getElementById("usuario").value;
        var contrasenaIntroducida = document.getElementById("contrasena").value;

        // 3. Usar .find() para verificar la existencia del usuario
        const usuarioEncontrado = this.#usuariosContrasenas.find(usuario => {
            return usuario.usuario === usuarioIntroducido && usuario.contrasena === contrasenaIntroducida;
        });

        if (usuarioEncontrado) {
            alert("Sesión iniciada");
            return true;
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }

    formatoContrasena() {
        var contrasena = document.getElementById("contrasena");
        // Si el patrón falla establece un mensaje personalizado de validación
        if (contrasena.validity.patternMismatch) {
            contrasena.setCustomValidity("8 caracteres mínimo, al menos 1 mayúscula, 1 minúscula, y 1 número.");
        } else {
            contrasena.setCustomValidity("");
        }

        // Muestra el mensaje personalizado
        contrasena.reportValidity();
    }

    fEvento() { // Crea los controladores de eventos
        var contrasena = document.getElementById("contrasena");
        // Al salir del campo contraseña lanza la función
        contrasena.addEventListener("blur", this.formatoContrasena);

        // Al pulsar el botón ejecuta el método de validación
        var submit = document.getElementById("button");
        submit.addEventListener("click", this.valida);

    }



}

window.addEventListener("load", () => new inicioSesion());