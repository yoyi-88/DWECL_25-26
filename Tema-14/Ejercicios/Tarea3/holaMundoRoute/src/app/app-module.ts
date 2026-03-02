import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './menu/menu';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Home } from './home/home';
import { Productos } from './productos/productos';
import { Contacto } from './contacto/contacto';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { ChildA } from './child-a/child-a';
import { ChildB } from './child-b/child-b';

@NgModule({
  declarations: [
    App,
    Menu,
    Home,
    Productos,
    Contacto,
    Pagenotfound,
    ChildA,
    ChildB
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
