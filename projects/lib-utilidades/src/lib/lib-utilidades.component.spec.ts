import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUtilidadesComponent } from './lib-utilidades.component';

describe('LibUtilidadesComponent', () => {
  let component: LibUtilidadesComponent;
  let fixture: ComponentFixture<LibUtilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibUtilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibUtilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
