import { TestBed } from '@angular/core/testing';

import { LibUtilidadesService } from './lib-utilidades.service';

describe('LibUtilidadesService', () => {
  let service: LibUtilidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibUtilidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
