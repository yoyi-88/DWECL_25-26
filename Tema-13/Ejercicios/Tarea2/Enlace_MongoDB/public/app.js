document.addEventListener('DOMContentLoaded', () => {
    const btnAñadir = document.getElementById('btnAñadir');
    const inputNombre = document.getElementById('nombre');
    const inputApellido = document.getElementById('apellido');
    const listaUsuarios = document.getElementById('listaUsuarios');

    // 1. Función para obtener (GET) y listar los usuarios
    const cargarUsuarios = async () => {
        try {
            const respuesta = await fetch('/api/usuarios');

            if (!respuesta.ok) {
                throw new Error('El servidor falló al devolver los datos');
            }

            const usuarios = await respuesta.json();

            // Limpiamos la lista actual
            listaUsuarios.innerHTML = '';

            // Añadimos cada usuario a la lista en el HTML
            usuarios.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.nombre} ${user.apellido}`;
                listaUsuarios.appendChild(li);
            });
        } catch (error) {
            console.error('Error al cargar usuarios:', error);
        }
    };

    // 2. Función para añadir (POST) un nuevo usuario
    btnAñadir.addEventListener('click', async () => {
        const nombre = inputNombre.value.trim();
        const apellido = inputApellido.value.trim();

        if (nombre === '' || apellido === '') {
            alert('Por favor, rellena nombre y apellido.');
            return;
        }

        try {
            // Petición AJAX POST
            await fetch('/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre: nombre, apellido: apellido })
            });

            // Limpiamos los inputs
            inputNombre.value = '';
            inputApellido.value = '';

            // Volvemos a listar todos los usuarios incluyendo el nuevo
            cargarUsuarios();

        } catch (error) {
            console.error('Error al guardar el usuario:', error);
        }
    });

    // 3. Al abrir la página, cargar los usuarios por primera vez
    cargarUsuarios();
});