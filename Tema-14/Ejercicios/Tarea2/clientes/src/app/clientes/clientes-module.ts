import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes-service';
import { AltaClientes } from './alta-clientes/alta-clientes';
import { FormsModule } from '@angular/forms';
import { ListadoClientes } from './listado-clientes/listado-clientes';



@NgModule({
  declarations: [
    AltaClientes,
    ListadoClientes
  ],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [
    ClientesService
  ],
  exports: [
    AltaClientes,
    ListadoClientes
  ]
})
export class ClientesModule { }
