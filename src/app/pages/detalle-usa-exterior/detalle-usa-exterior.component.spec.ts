import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsaExteriorComponent } from './detalle-usa-exterior.component';

describe('DetalleUsaExteriorComponent', () => {
  let component: DetalleUsaExteriorComponent;
  let fixture: ComponentFixture<DetalleUsaExteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleUsaExteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleUsaExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
