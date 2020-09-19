import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { VistaDetalladaComponent } from './componentes/vista-detallada/vista-detallada.component';


const routes: Routes = [{
  path: '',
  component: BuscadorComponent
},
{
  path: 'items/:id',
  component: VistaDetalladaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
