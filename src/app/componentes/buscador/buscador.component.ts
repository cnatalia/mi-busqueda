import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { pipe, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { PrediccionResponse } from '../../modelos/prediccion-response';
import { AutocompletarService } from '../../servicios/autocompletar/autocompletar.service';
import { ConsultarProductosService } from '../../servicios/consultar-productos/consultar-productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  public form: FormGroup;
  public items;
  public categorias;
  public resultado;
  public mostar: boolean;
  public buscarParametro;
  public prediccion;
  public productosOptions;
  public mostrarPrediccion = true;
  public positionInCompanyOptions;

  constructor(
    private consultaService: ConsultarProductosService,
    private activatedRoute: ActivatedRoute,
    private autocompleteService: AutocompletarService,
    private route: Router
  ) {

    this.form = new FormGroup({
      buscador: new FormControl('')
    });

    this.buscador.valueChanges.subscribe(val => {
      // tslint:disable-next-line:max-line-length
      this.mostrarPrediccion = true;
      this.autocompleteService.getTimesInEmployment(val).subscribe(valor => {
        this.prediccion = valor.suggested_queries;
      });
    });
  }

  get buscador(): AbstractControl { return this.form.get('buscador'); }

  ngOnInit(): void {

  }

  public buscarEsteValor(valor) {

    this.buscador.setValue(valor);
    this.mostrarPrediccion = false;
    this.route.navigate(['/items'], { queryParams: { search: this.buscador.value } });
  }

  public buscar() {

    if (this.buscador.value) {
      this.route.navigate(['/items'], { queryParams: { search: this.buscador.value } });

    }
  }




}
