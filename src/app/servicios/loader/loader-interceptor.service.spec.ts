/* tslint:disable */
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { LoaderService } from './loader.service';


describe('LoaderInterceptorService', () => {
	let service: LoaderInterceptorService;
	let httpController: HttpTestingController;
	let httpClient: HttpClient;

	const loaderServiceSpy: LoaderService = jasmine.createSpyObj('LoaderService', ['show', 'hide']);

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				{ provide: LoaderService, useValue: loaderServiceSpy },
				{
					provide: HTTP_INTERCEPTORS,
					useClass: LoaderInterceptorService,
					multi: true
				}
			]
		});

		service = TestBed.get(LoaderInterceptorService);
		httpController = TestBed.get(HttpTestingController);
		httpClient = TestBed.get(HttpClient);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('#intercept', () => {
		const loaderShowSpy = loaderServiceSpy.show as jasmine.Spy;
		const loaderHideSpy = loaderServiceSpy.hide as jasmine.Spy;

		afterEach(() => {
			loaderShowSpy.calls.reset();
			loaderHideSpy.calls.reset();
		});

		it('should intercept every http call and show the loader when it\'s going and hide it when it\s done', () => {
			httpClient.get('/test').subscribe(() => { });

			expect(loaderShowSpy).toHaveBeenCalled();
			expect(loaderHideSpy).toHaveBeenCalledTimes(0);

			const mockRequest = httpController.expectOne('/test');

			mockRequest.flush('OK');

			expect(loaderHideSpy).toHaveBeenCalled();
		});
	});

});
