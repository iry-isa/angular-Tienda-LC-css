import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettalleUsaPVCComponent } from './dettalle-usa-pvc.component';

describe('DettalleUsaPVCComponent', () => {
  let component: DettalleUsaPVCComponent;
  let fixture: ComponentFixture<DettalleUsaPVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettalleUsaPVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettalleUsaPVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
