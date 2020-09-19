import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LibUtilidadesModule } from 'lib-utilidades';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VistaRapidaComponent } from './componentes/vista-rapida/vista-rapida.component';
import { HomeComponent } from './componentes/home/home.component';
import { VistaDetalladaComponent } from './componentes/vista-detallada/vista-detallada.component';



@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    VistaRapidaComponent,
    HomeComponent,
    VistaDetalladaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibUtilidadesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
