import { TestBed } from '@angular/core/testing';

import { ConsultarProductosService } from './consultar-productos.service';

describe('ConsultarProductosService', () => {
  let service: ConsultarProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
