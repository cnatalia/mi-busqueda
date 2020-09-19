import { NgModule } from '@angular/core';

import { LibUtilidadesComponent } from './lib-utilidades.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';



@NgModule({
  declarations: [LibUtilidadesComponent,  AutoCompleteComponent],
  imports: [
  ],
  exports: [LibUtilidadesComponent, AutoCompleteComponent]
})
export class LibUtilidadesModule { }
