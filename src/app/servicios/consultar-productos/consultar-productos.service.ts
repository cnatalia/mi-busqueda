import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ProductosResponse } from '../../modelos/consulta-productos-response';

@Injectable({
  providedIn: 'root'
})
export class ConsultarProductosService {


  constructor(private http: HttpClient) {
  }

  public consultarProductos(documentId): Observable<any> {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${documentId}`;

    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error.message);
  }



}



/* tslint:disable */
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { ADLHttpService } from '@avaldigitallabs/tripleplay-core';

// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { CookieService } from 'ngx-cookie-service';

// import { BankInfo } from '../../models/bank-info';
// import { CreditCardOfferResponse } from '../../models/credit-card-offer-response';
// import { DocumentRequest } from '../../models/document-request';
// import { environment } from '../../../../environments/environment';

// const bankPrefix = environment.bankPrefix;
// const gbApiGatewayEndpoint = environment.gbApiGatewayEndpoint;
// const authCookieName = environment.authCookieName;
// const transactionCookieName = environment.transactionCookieName;

// @Injectable({
// 	providedIn: 'root'
// })
// export class RecentOfferService extends ADLHttpService {
// 	private bankInfo;

// 	constructor(
// 		private http: HttpClient,
// 		private cookies: CookieService

// 	) {
// 		super();
// 		this.bankInfo = BankInfo.getBankInfo(bankPrefix);

// 	}


// 	public customerHasRecentOffer(request: DocumentRequest): Observable<CreditCardOfferResponse> {
// 		this.headers = new HttpHeaders({
// 			'x-adl-bank-id': this.bankInfo.longCode,
// 			'x-adl-channel': 'ADL',
// 			'x-adl-transaction-id': this.cookies.get(transactionCookieName),
// 			'Authorization': this.cookies.get(authCookieName)
// 		});
// 		return this.http.post<CreditCardOfferResponse>(`${gbApiGatewayEndpoint}/recent-offer-customer`, request, { headers: this.headers })
// 			.pipe(
// 				catchError(this.handleError)
// 			);
// 	}

// }
