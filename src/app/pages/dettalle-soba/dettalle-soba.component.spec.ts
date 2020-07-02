import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettalleSobaComponent } from './dettalle-soba.component';

describe('DettalleSobaComponent', () => {
  let component: DettalleSobaComponent;
  let fixture: ComponentFixture<DettalleSobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettalleSobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettalleSobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
