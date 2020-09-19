import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRapidaComponent } from './vista-rapida.component';

describe('VistaRapidaComponent', () => {
  let component: VistaRapidaComponent;
  let fixture: ComponentFixture<VistaRapidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaRapidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
