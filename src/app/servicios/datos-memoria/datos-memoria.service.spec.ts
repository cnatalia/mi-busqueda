import { TestBed } from '@angular/core/testing';

import { DatosMemoriaService } from './datos-memoria.service';

describe('DatosMemoriaService', () => {
  let service: DatosMemoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosMemoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
