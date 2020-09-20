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
import { DetalleProductoService } from '../../servicios/detalle-producto/detalle-producto.service';

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
  public isArray: boolean;

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
        this.traerProductos(this.buscarParametro).subscribe(val => { this.mostar = true; });
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
              currency: product.currency_id,
              amount: product.price
            },

            picture: product.thumbnail,
            conditions: product.condition,
            freeShipping: product.shipping.free_shipping,
            city: product.seller_address.state.name

          }));

          this.categorias = Array(response).find(val => val.filters[0]) ? this.getCategorias(response) : ' ';



          const arr = Array(response).map((product, i) => ({
            author: {
              name: product.site_id,
              lastname: product.site_id
            },
            // tslint:disable-next-line:max-line-length
            categories: this.categorias[0].name ? (this.categorias[0].name.length !== 1 ? this.categorias[i].name : this.categorias) : this.categorias,
            items: this.items
          }));


          // console.log(this.categorias[0].name.length);
          this.resultado = Object.assign({}, arr[0]);
          this.resultado.items = arr[0].items.slice(0, 4);
          this.isArray = typeof (this.resultado.categories) === 'object';
        })
      );
  }


  public getCategorias(buscar) {

    return buscar.filters[0].values[0].path_from_root ?
      Array(buscar.filters[0].values[0]).map(val => ({
        name: val.path_from_root.map(re => re.name)
      })) : buscar.filters[0].values[0].name;

  }


}
