import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { LoaderComponent } from './componentes/loader/loader.component';
import { MigaDePanComponent } from './componentes/miga-de-pan/miga-de-pan.component';
import { PageErrorComponent } from './componentes/page-error/page-error.component';
import { VistaDetalladaComponent } from './componentes/vista-detallada/vista-detallada.component';
import { VistaRapidaComponent } from './componentes/vista-rapida/vista-rapida.component';
import { LoaderInterceptorService } from './servicios/loader/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    VistaRapidaComponent,
    VistaDetalladaComponent,
    MigaDePanComponent,
    PageErrorComponent,
    LoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
