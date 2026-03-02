import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  enviarMensaje() {
    // Aquí se enviaría el mensaje al servidor
    alert('¡Mensaje enviado correctamente! (Simulación)');
  }
}
