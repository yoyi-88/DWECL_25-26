import { Component } from '@angular/core';
import { ClientesService } from './../clientes-service';
import { Cliente, Grupo } from './../cliente.model';

@Component({
  selector: 'app-alta-clientes',
  standalone: false,
  templateUrl: './alta-clientes.html',
  styleUrl: './alta-clientes.css',
})
export class AltaClientes {
  cliente: Cliente;
  grupos: Grupo[];
  constructor(private clientesService: ClientesService) {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();


  }
  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }
  ngOnInit():void {
  }
}

