import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadorComponent } from './componentes/buscador/buscador.component';
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
