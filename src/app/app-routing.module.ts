import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { PageErrorComponent } from './componentes/page-error/page-error.component';
import { VistaDetalladaComponent } from './componentes/vista-detallada/vista-detallada.component';
import { VistaRapidaComponent } from './componentes/vista-rapida/vista-rapida.component';


const routes: Routes = [{
  path: '',
  component: BuscadorComponent
},
{
  path: 'items/:id',
  component: VistaDetalladaComponent
},
{
  path: 'items',
  component: VistaRapidaComponent
},
{
  path: 'error',
  component: PageErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
