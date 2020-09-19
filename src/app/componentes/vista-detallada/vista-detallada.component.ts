import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleProductoService } from '../../servicios/detalle-producto/detalle-producto.service';
import { DetalleResponse } from '../../modelos/detalle-response';
import { Observable, zip } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.scss']
})
export class VistaDetalladaComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line:variable-name
  public _producto;
  public producto;
  public data = '';
  public detalle;

  constructor(
    private route: ActivatedRoute,
    private detalleProductoService: DetalleProductoService,
    private cdr: ChangeDetectorRef
  ) { }

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
        console.log(this.producto);
        // this.producto = this.armarProducto();
        // this.data = info;
        // console.log(this.data);
        // console.log(this.producto);
      },
      err => console.error(err)
    );
    // this.getProduct();
  }


  public armarProducto(): Observable<any> {

    const id = this.route.snapshot.paramMap.get('id');

    return this.detalleProductoService.getDescripcion(id).pipe(
      tap(
        response => {
          this.producto = Array(this._producto).map(value => ({
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
              picture: value.thumbnail,
              condition: value.condition,
              free_shipping: value.shipping.free_shipping,
              sold_quantity: value.sold_quantity,
              description: response.plain_text
            }
          }));
        })
    );

  }
}
