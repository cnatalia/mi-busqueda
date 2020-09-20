import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { pipe, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { AutocompleteOptions, AutocompleteItem } from 'projects/lib-utilidades/src/public-api';

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
    private autocompleteService: AutocompletarService
  ) {

    this.form = new FormGroup({
      buscador: new FormControl('')
    });

    this.buscador.valueChanges.subscribe(val => {
      // tslint:disable-next-line:max-line-length
      this.autocompleteService.getTimesInEmployment(val).subscribe(valor => {
        this.prediccion = valor.suggested_queries;
      });
    });


    this.positionInCompanyOptions = new AutocompleteOptions({
      clearOnSelect: false,
      minCharacters: 3,
      control: this.buscador,
      maxResults: 4,
      placeholder: 'Buscar',
      mapFunction: positionInCompany => new AutocompleteItem({
        id: positionInCompany.id,
        value: positionInCompany.value,
        prettyPrint: `${positionInCompany.value}`,
      })

    });

  }

  ngOnInit(): void {

  }

  public buscarEsteValor(valor) {

    this.buscador.setValue(valor);
  }


  get buscador(): AbstractControl { return this.form.get('buscador'); }




}
