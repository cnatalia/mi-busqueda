import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

import { Observable, zip } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import { DetalleResponse } from '../../modelos/detalle-response';
import { DetalleProductoService } from '../../servicios/detalle-producto/detalle-producto.service';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.scss']
})
export class VistaDetalladaComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line:variable-name
  public _producto;
  public producto: DetalleResponse;
  public data = '';
  public detalle;
  public categoria;
  // tslint:disable-next-line:variable-name
  public _categoria;
  public formComprar: FormGroup;
  public isArray: boolean;

  constructor(
    private route: ActivatedRoute,
    private detalleProductoService: DetalleProductoService,
    private consultarDetalleService: DetalleProductoService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private metaTagService: Meta
  ) {

    this.formComprar = new FormGroup({
      item: new FormControl(''),
      cantidad: new FormControl(''),
      valor: new FormControl('')
    });

  }

  get valor(): AbstractControl { return this.formComprar.get('valor'); }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    zip(
      this.detalleProductoService.getDetalleProducto(id)
    ).pipe(
      tap(([detalle]) => {
        this._producto = detalle;

      }),
      switchMap(() => this.armarProducto())
    ).subscribe(
      info => {
        const key = this._producto.title.split(' ').join(',');

        this.metaTagService.updateTag({ name: 'keywords', content: `${key}` });
        this.metaTagService.updateTag({ name: 'description', content: `Encuentra los mejores ${this._producto.title.split(' ')}` });

      },
      err => error => { this.router.navigateByUrl('/error'); }
    );

  }


  public armarProducto(): Observable<any> {
    this.getRutaCategorias(this._producto.category_id).subscribe(val => this.categoria = this._categoria[0].name);
    const id = this.route.snapshot.paramMap.get('id');

    return this.detalleProductoService.getDescripcion(id).pipe(
      tap(
        response => {
          const array = Array(this._producto).map(value => ({
            author: {
              name: value.site_id,
              lastname: value.site_id
            },
            item: {
              id: value.id,
              title: value.title,
              price: {
                currency: value.price,
                amount: value.price,
                decimals: value.price
              },
              picture: value.pictures[0].url,
              condition: this.translateManual(value.condition),
              free_shipping: value.shipping.free_shipping,
              sold_quantity: value.sold_quantity,
              description: response.plain_text
            }
          }));


          this.producto = Object.assign({}, array[0]);
          this.valor.setValue(this._producto.price);
        })

    );

  }

  public getRutaCategorias(buscar): Observable<any> {
    return this.consultarDetalleService.getRutaCategorias(buscar).pipe(
      tap(response => {
        this._categoria = this.getCategorias(response);
        this.isArray = typeof (this._categoria) === 'object';
      })
    );
  }

  public getCategorias(buscar) {

    return buscar.filters[0].values[0].path_from_root ?
      Array(buscar.filters[0].values[0]).map(val => ({
        name: val.path_from_root.map(re => re.name)
      })) : buscar.filters[0].values[0].name;

  }

  public translateManual(valor) {

    return valor === 'new' ? 'Nuevo' : 'Usado';
  }
}
