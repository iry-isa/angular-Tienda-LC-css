import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGeamPVCComponent } from './detalle-geam-pvc.component';

describe('DetalleGeamPVCComponent', () => {
  let component: DetalleGeamPVCComponent;
  let fixture: ComponentFixture<DetalleGeamPVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGeamPVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGeamPVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
