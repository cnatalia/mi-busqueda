import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PrediccionResponse } from '../../modelos/prediccion-response';

@Injectable({
  providedIn: 'root'
})
export class AutocompletarService {

  private result;

  constructor(private http: HttpClient) { }

  getTimesInEmployment(valor): Observable<any> {
    return this.getCatalog<any>(`https://http2.mlstatic.com/resources/sites/MCO/autosuggest?showFilters=true&limit=6&api_version=2&q=${valor}`);
  }

  private getCatalog<T>(filePath: string): Observable<T> {
    return this.fetchCatalog<T>(filePath)
      .pipe(tap(catalog => this.result = catalog));
  }

  private fetchCatalog<T>(filePath: string): Observable<T> {
    return this.http.get<T>(filePath);
  }

}

