import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAcesoriiComponent } from './detalle-acesorii.component';

describe('DetalleAcesoriiComponent', () => {
  let component: DetalleAcesoriiComponent;
  let fixture: ComponentFixture<DetalleAcesoriiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAcesoriiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAcesoriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
