import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesitaInsecteComponent } from './detallesita-insecte.component';

describe('DetallesitaInsecteComponent', () => {
  let component: DetallesitaInsecteComponent;
  let fixture: ComponentFixture<DetallesitaInsecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesitaInsecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesitaInsecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
