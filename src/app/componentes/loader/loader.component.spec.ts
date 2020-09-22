/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderService } from '../../servicios/loader/loader.service';

import { LoaderComponent } from './loader.component';


describe('LoaderComponent', () => {
	let component: LoaderComponent;
	let fixture: ComponentFixture<LoaderComponent>;
	let loaderService: LoaderService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				LoaderComponent
			],
			providers: [
				LoaderService
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoaderComponent);
		component = fixture.componentInstance;
		loaderService = TestBed.get(LoaderService);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show the loader when there is at least one show loader state on the stack', () => {
		expect(component.show).toBe(false);

		loaderService.show();

		expect(component.show).toBe(true);
	});

	it('should hide the laoder when there are no more show loader states on the stack', () => {
		loaderService.show();
		loaderService.show();

		expect(component.show).toBe(true);

		loaderService.hide();
		expect(component.show).toBe(true);

		loaderService.hide();
		expect(component.show).toBe(false);
	});

});
