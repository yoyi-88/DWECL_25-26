import { Component } from '@angular/core';
import { ClientesService } from '../clientes-service';
import { Cliente, Grupo } from '../cliente.model';

@Component({
  selector: 'app-listado-clientes',
  standalone: false,
  templateUrl: './listado-clientes.html',
  styleUrl: './listado-clientes.css',
})
export class ListadoClientes {
  clientes: Cliente[];
  constructor(private clientesService: ClientesService) {
    this.clientes = this.clientesService.getClientes();
  }
}
