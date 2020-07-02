import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsiExteriorComponent } from './usi-exterior.component';

describe('UsiExteriorComponent', () => {
  let component: UsiExteriorComponent;
  let fixture: ComponentFixture<UsiExteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsiExteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsiExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
