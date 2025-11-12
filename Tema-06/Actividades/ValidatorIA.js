/**
         * Clase para gestionar la validación y eventos del formulario de baja.
         */
        class FormularioBaja {

            constructor(formId) {
                this.form = document.getElementById(formId);

                if (!this.form) {
                    console.error(`No se encontró el formulario con ID: ${formId}`);
                    return;
                }

                // 1. Almacenar referencias a elementos
                // AÑADIMOS 'apellidos' al array de campos a validar
                this.camposInput = [
                    'matricula',
                    'fechaMatriculacion',
                    'bastidor',
                    'nombre',
                    'apellidos', // <--- CAMBIO AQUÍ
                    'domicilio',
                    'dni',
                    'email',
                    'telefono'
                ].map(id => document.getElementById(id));

                this.dniInput = document.getElementById('dni');
                this.dniLabel = document.getElementById('labelDni');
                this.originalDniLabel = this.dniLabel.textContent;

                this.matriculaInput = document.getElementById('matricula');
                this.radiosBaja = this.form.querySelectorAll('input[name="tipo_baja"]');

                // 2. Inicializar los listeners
                this.initEventListeners();
            }

            /**
             * Asigna todos los event listeners requeridos.
             */
            initEventListeners() {
                // Req: Evento de foco en DNI
                this.dniInput.addEventListener('focus', () => this.handleDniFocus());

                // Req: Evento de pérdida de foco en DNI
                this.dniInput.addEventListener('blur', () => this.handleDniBlur());

                // Req: Personalizar mensaje de matrícula
                this.matriculaInput.addEventListener('invalid', (e) => this.setCustomMatriculaMessage(e));

                this.matriculaInput.addEventListener('input', (e) => {
                    e.target.setCustomValidity('');
                });

                // Req: Validación en tiempo real para bordes rojo/verde
                this.camposInput.forEach(input => {
                    input.addEventListener('input', (e) => this.validateInputVisual(e.target));
                });

                // Req: Validación para los radio buttons
                this.radiosBaja.forEach(radio => {
                    radio.addEventListener('change', () => this.validateRadios());
                });

                // Req: Manejo del envío
                this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            }

            handleDniFocus() {
                this.dniLabel.textContent = 'Editando DNI...';
            }

            handleDniBlur() {
                this.dniLabel.textContent = this.originalDniLabel;
            }

            /**
             * Actualiza las clases de Bootstrap (is-valid/is-invalid) para un input.
             */
            validateInputVisual(input) {
                if (input.checkValidity()) {
                    input.classList.add('is-valid');
                    input.classList.remove('is-invalid');
                } else {
                    input.classList.add('is-invalid');
                    input.classList.remove('is-valid');
                }
            }

            /**
             * Valida visualmente el grupo de radio buttons.
             */
            validateRadios() {
                const esValido = Array.from(this.radiosBaja).some(radio => radio.checked);

                this.radiosBaja.forEach(radio => {
                    if (esValido) {
                        radio.classList.add('is-valid');
                        radio.classList.remove('is-invalid');
                    } else {
                        radio.classList.add('is-invalid');
                        radio.classList.remove('is-valid');
                    }
                });
            }

            /**
             * Establece el mensaje de error personalizado para la matrícula.
             */
            setCustomMatriculaMessage(event) {
                const input = event.target;

                if (input.validity.patternMismatch) {
                    input.setCustomValidity('Formato de matrícula incorrecto. Ej: 1234ABC');
                }
                else if (input.validity.valueMissing) {
                    input.setCustomValidity('El campo de matrícula es obligatorio.');
                }
                else {
                    input.setCustomValidity('');
                }
            }

            /**
             * Maneja el envío del formulario.
             */
            handleSubmit(event) {
                // 1. Validamos todos los campos una última vez
                this.camposInput.forEach(input => this.validateInputVisual(input));
                this.validateRadios();

                // 2. checkValidity() revisa todas las reglas HTML5
                if (!this.form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.warn('Formulario inválido. Envío cancelado.');
                } else {
                    console.log('Formulario válido. Enviando...');
                }
            }
        }

        // ---- INICIALIZACIÓN ----
        document.addEventListener('DOMContentLoaded', () => {
            const miFormulario = new FormularioBaja('formBaja');
        });