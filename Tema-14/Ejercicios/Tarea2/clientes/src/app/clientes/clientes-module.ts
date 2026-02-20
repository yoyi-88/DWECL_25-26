import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes-service';
import { AltaClientes } from './alta-clientes/alta-clientes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AltaClientes
  ],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [
    ClientesService
  ],
  exports: [
    AltaClientes
  ]
})
export class ClientesModule { }
