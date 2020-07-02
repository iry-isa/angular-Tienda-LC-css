import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsaInteriorComponent } from './detalle-usa-interior.component';

describe('DetalleUsaInteriorComponent', () => {
  let component: DetalleUsaInteriorComponent;
  let fixture: ComponentFixture<DetalleUsaInteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleUsaInteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleUsaInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
