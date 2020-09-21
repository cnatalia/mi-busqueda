import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

import { LibUtilidadesModule } from 'lib-utilidades';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HomeComponent } from './componentes/home/home.component';
import { MigaDePanComponent } from './componentes/miga-de-pan/miga-de-pan.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { VistaDetalladaComponent } from './componentes/vista-detallada/vista-detallada.component';
import { VistaRapidaComponent } from './componentes/vista-rapida/vista-rapida.component';
import { PageErrorComponent } from './componentes/page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    VistaRapidaComponent,
    HomeComponent,
    VistaDetalladaComponent,
    ResultadosComponent,
    MigaDePanComponent,
    PageErrorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibUtilidadesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
