import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuntAutoComponent } from './anunt-auto.component';

describe('AnuntAutoComponent', () => {
  let component: AnuntAutoComponent;
  let fixture: ComponentFixture<AnuntAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuntAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuntAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
