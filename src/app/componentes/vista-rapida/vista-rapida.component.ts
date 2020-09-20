import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProductosResponse } from '../../modelos/consulta-productos-response';
import { DetalleResponse } from '../../modelos/detalle-response';
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
  public resultado: ProductosResponse;
  public mostar: boolean;
  public buscarParametro;
  public prediccion;
  public form: FormGroup;


  constructor(
    private consultaService: ConsultarProductosService,
    private activatedRoute: ActivatedRoute,
    private memoria: DatosMemoriaService,
    private metaTagService: Meta
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.buscarParametro = params.search;
      this.metaTagService.updateTag({ name: 'keywords', content: `buscar, ${this.buscarParametro}, ${this.buscarParametro} rojo` });
      this.metaTagService.updateTag({ name: 'description', content: `Encuentra los mejores ${this.buscarParametro}` });


      if (this.buscarParametro) {
        this.traerProductos(this.buscarParametro).subscribe(val => { console.log(this.resultado); this.mostar = true; });
      }
    });
  }

  public traerProductos(buscar): Observable<any> {
    return this.consultaService.consultarProductos(buscar)
      .pipe(
        tap(response => {
          console.log(response);
          this.items = response.results.map((product, i) => ({
            id: product.id,
            title: product.title,
            price: {
              currency: product.installments.currency_id,
              amount: product.installments.rate
            },

            picture: product.thumbnail,
            conditions: product.condition,
            freeShipping: product.shipping.free_shipping,
            city: product.seller_address.state.name

          }));
          this.categorias = Array(response.available_filters[0]).find(res => res.id === 'category') ?

            (Array(response.available_filters[0])
              .map(cat => {
                return cat.values.map(val => ({ name: val.name }));

              })) : 'No disponible';


          const arr = Array(response).map((product, i) => ({
            author: {
              name: product.site_id,
              lastname: product.site_id
            },
            categories: this.categorias,
            items: this.items
          }));
          this.resultado = Object.assign({}, arr[0]);
          // this.resultado = Object.assign({}, array[0]);

        })
      );
  }

}
