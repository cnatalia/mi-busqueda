/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';

import { LoaderService } from './loader.service';


@Injectable({
	providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

	constructor(private loaderService: LoaderService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if (req.url.split('/')[2] !== 'http2.mlstatic.com') {
			this.showLoader();
		}

		return next.handle(req).pipe(
			finalize(() => this.onEnd())

		);
	}

	private onEnd(): any {
		this.hideLoader();
	}

	private showLoader(): any {
		this.loaderService.show();
	}

	private hideLoader(): void {
		this.loaderService.hide();
	}

}
