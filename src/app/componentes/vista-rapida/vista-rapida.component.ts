import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ConsultarProductosService } from '../../servicios/consultar-productos/consultar-productos.service';
import { DatosMemoriaService } from '../../servicios/datos-memoria/datos-memoria.service';

@Component({
  selector: 'app-vista-rapida',
  templateUrl: './vista-rapida.component.html',
  styleUrls: ['./vista-rapida.component.scss']
})
export class VistaRapidaComponent implements OnInit {

  @Input() imagen;
  @Input() precio;
  @Input() titulo;
  @Input() envioGratis;
  @Input() ciudad;
  @Input() id;

  public items;
  public categorias;
  public resultado;
  public mostar: boolean;
  public buscarParametro;
  public prediccion;
  public form: FormGroup;


  constructor(
    private consultaService: ConsultarProductosService,
    private activatedRoute: ActivatedRoute,
    private memoria: DatosMemoriaService
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.buscarParametro = params.search;
      if (this.buscarParametro) {
        this.traerProductos(this.buscarParametro).subscribe(val => { console.log(this.resultado); this.mostar = true; });
      }
    });

  }

  public traerProductos(buscar): Observable<any> {
    return this.consultaService.consultarProductos(buscar)
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
