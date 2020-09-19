import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { pipe, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
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


  constructor(
    private consultaService: ConsultarProductosService
  ) {

    this.form = new FormGroup({
      buscador: new FormControl('')
    });

  }

  ngOnInit(): void {
  }

  get buscador(): AbstractControl { return this.form.get('buscador'); }

  public buscando() {

    this.traerProductos().subscribe(val => { console.log(this.resultado); this.mostar = true; });

  }

  public traerProductos(): Observable<any> {

    return this.consultaService.consultarProductos(this.buscador.value)
      .pipe(
        tap(response => {
          this.items = response.results.map((product, i) => ({
            id: product.id,
            title: product.title,
            price: {
              currency: product.installments.currency_id,
              amount: product.installments.rate
            },

            picture: product.thumbnail,
            conditions: product.condition,
            freeShipping: product.shipping.free_shipping

          }));
          this.categorias = Array(response.available_filters[0]).find(res => res.id === 'category') ?

            (Array(response.available_filters[0])
              .map(cat => {
                return cat.values.map(val => ({ name: val.name }));

              })) : 'No disponible';

          this.resultado = Array(response).map((product, i) => ({
            author: {
              name: product.site_id,
              lastame: product.site_id
            },
            categories: this.categorias,
            items: this.items
          }));
        })
      );
  }

}
