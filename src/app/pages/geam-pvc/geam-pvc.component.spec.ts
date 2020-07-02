import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeamPVCComponent } from './geam-pvc.component';

describe('GeamPVCComponent', () => {
  let component: GeamPVCComponent;
  let fixture: ComponentFixture<GeamPVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeamPVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeamPVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
