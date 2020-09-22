import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ProductosResponse } from '../../modelos/consulta-productos-response';


@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService {

  constructor(private http: HttpClient) {
  }

  public getDetalleProducto(producto): Observable<any> {
    const url = `https://api.mercadolibre.com/items/${producto}`;

    return this.http.get<any>(url)
      .pipe(
        tap(val => console.log(val)),
        catchError(this.handleError)
      );
  }


  public getDescripcion(producto): Observable<any> {
    const url = `https://api.mercadolibre.com/items/${producto}/description`;

    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getRutaCategorias(producto): Observable<any> {
    const url = `https://api.mercadolibre.com/sites/MLA/search?category=${producto}`;

    return this.http.get<any>(url)
      .pipe(

        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }

}
